<?php

    /**
     * Create woocommerce product field to store dynamic pricing information
     */
    function create_custom_dynamic_pricing_field() {
        $args = array(
            'id' => 'dynamic_pricing_field',
            'label' => __( 'Dynamic pricing', 'wegwerphanddoeken.nl' ),
            'class' => 'custom-dynamic-pricing-field',
            'desc_tip' => true,
            'description' => __( 'Dynamic pricing information.', 'wegwerphanddoeken.nl' ),
        );
        woocommerce_wp_text_input( $args );
    }
    add_action( 'woocommerce_product_options_general_product_data', 'create_custom_dynamic_pricing_field' );

    /**
     * Create dynamic text regarding ordering several products to get a staffle discount
     */
    function get_dynamic_pricing($postID) {
        $post = get_post($postID);
        $product = wc_get_product( $postID );

        if (!$post || !$product) {
            return;
        }

        $variables = [
            'currentPrice' => '€ ' . $product->get_price(),
            'staffles' => []
        ];

        $pricing_rule_sets = get_option('_a_category_pricing_rules', array());
        $found = false;
        if(count($pricing_rule_sets)){
            global $woocommerce_pricing;
            foreach ($pricing_rule_sets as $pricing_rule_set) {
                   $collector = isset($pricing_rule_set['collector']) ? $pricing_rule_set['collector'] : array();

                   if($collector){
                       if($collector['type'] == 'cat_product'){
                           $in = false;
                           foreach($collector['args']['cats'] as $cat){
                               if(has_term($cat, 'product_cat', $post->ID)) $in = true;
                           }
                           if(!$in) continue;
                       }
                   }

                   $pricing_rule_sets = array(array('rules' => $pricing_rule_set['rules']));
                   $found = true;
                   break;
            }
        }
        if(!$found){
            $pricing_rule_sets = NULL;
        }

        $product_pricing_rule_sets = get_post_meta($post->ID, '_pricing_rules', true);

        if($product_pricing_rule_sets){
            $pricing_rule_sets = $product_pricing_rule_sets;
        }

        if(count($pricing_rule_sets)){
            $pricing = '';

            foreach($pricing_rule_sets as $ruleset){
                $rules = $ruleset['rules'];

                foreach($rules as $rule){
                    $ruleAmount = (float)str_replace(',', '.', $rule['amount']);

                    $pricing .= '<p>';
                        $pricing .= esc_html__( 'Vanaf', 'custom' ) . ' ' . $rule['from'] . ' ' . esc_html__( 'pakken', 'custom' );
                        $pricing .= ' &euro;'. number_format($ruleAmount, 2) . ' ' . esc_html__( 'per pak', 'custom' ) . '</td>';
                    $pricing .= '</p>';

                    $discount = $product->get_price() - $ruleAmount;
                    $staffle = [
                        'minimumAmount' => $rule['from'],
                        'price' => '€ ' .$ruleAmount,
                        'discount' => '€ ' . $discount,
                        'totalDiscount' => '€ ' . $rule['from'] * $discount
                    ];


                    // var_dump((float)$product->get_price());
                    // var_dump((float)$ruleAmount);
                    // var_dump((float)$product->get_price() - (float)$ruleAmount);
                    // var_dump($staffle);

                    // die();

                    array_push ( $variables['staffles'], $staffle );
                }
            }

            if($pricing){
                $output = "<div class='dynamic-pricing'>$pricing</div>";

                $text = '
                <p>
                    Als grootverbruiker ontvangt u korting op onze producten. Hoe groter de hoeveelheid die u van dit product besteld, hoe goedkoper ieder pak wordt.
                </p>
                ';

                if (count($variables['staffles'])) {
                    $text .= '<p>';

                    foreach($variables['staffles'] as $staffle) {
                        $packPrice = $variables['currentPrice'] - $staffle['discount'];
                        $text .= sprintf('
                            Bij aankoop van minimaal %s pakken van dit product betaalt u %s per pak.
                        ', $staffle['minimumAmount'], $staffle['price']);
                    }
                    $text .= '</p>';

                    $text .= '<p>';

                    $i = 0;
                    $length = count($variables['staffles']);

                    foreach($variables['staffles'] as $staffle) {
                        $packPrice = $variables['currentPrice'] - $staffle['discount'];
                        if ($i === 0) {
                            $text .= sprintf('
                                Bijvoorbeeld: Op een bestelling van %s pakken bespaart u %s
                            ', $staffle['minimumAmount'], $staffle['totalDiscount']);
                        } else {
                            $text .= sprintf('
                             en op een bestelling van %s pakken bespaart u %s', $staffle['minimumAmount'], $staffle['totalDiscount']);
                        }

                        if ($i === $length - 1) {
                            $text .= '.';
                        }
                        $i++;
                    }
                    $text .= '</p>';
                }

                update_post_meta($postID, 'dynamic_pricing_field', $text);
            }
        }

        return '';
    }
    add_action( 'save_post', 'get_dynamic_pricing' );
