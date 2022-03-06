<?php

    /**
     * 5. Redirect to pre-checkout login page -> Separate Plugin
     * 12. Remove shipping option label from checkout -> Separate plugin
     * 13. Send mandrill mail on order status change
     */

    /*** checkout ****/
    remove_action( 'woocommerce_checkout_order_review', 'woocommerce_checkout_payment', 20 );
    add_action( 'woocommerce_checkout_order_payment_methods', 'woocommerce_checkout_payment', 20 );

    add_filter( 'woocommerce_registration_error_email_exists', function( $html ) {
        $redirect_page_id = 317;
        $url = get_permalink( $redirect_page_id );
        $html = str_replace( '<a href="#" class="showlogin">Log in.</a>', '<a href="'.$url.'"><strong>Log in</strong></a>', $html );

        return $html;
    } );

    function action_woocommerce_order_status_changed( $this_get_id, $this_status_transition_from, $this_status_transition_to, $instance ) {
        $template_name = '';
        if ($this_status_transition_to !== 'processing' && $this_status_transition_to !== 'completed') {
            return;
        }

        $template_name = 'order-' . $this_status_transition_to;

        $order = wc_get_order($this_get_id);

        $username = $order->get_billing_email();
        $name = $order->get_formatted_billing_full_name();

        $deliveryDate = get_delivery_date_text('nl_NL');
        $deliveryOption = 'PostNL bezorging';
        $address = $order->get_formatted_shipping_address();

        $notes = custom_get_order_notes($this_get_id);
        $postnl_base = 'https://jouw.postnl.nl/track-and-trace/';
        $locale = strtoupper($order->data['shipping']['country']);

        if ($locale === 'be') {
            $postnl_base = 'https://jouw.postnl.be/track-and-trace/';
        }

        $trackingCode = findTrackAndTraceCode($notes);
        $postalCode = str_replace(' ', '', strtoupper($order->data['shipping']['postcode']));

        $tracking_link = '';

        if ($trackingCode) {
            $tracking_link = $postnl_base . $trackingCode . '-' . $locale . '-' . $postalCode;
        }

        $products = [];
        foreach ($order->get_items() as $item) {
            $product = $item->get_product();
            $products[] = [
                'PRODUCTIMAGE' => str_replace('.local', '.nl', wp_get_attachment_url($product->get_image_id())),
                'PRODUCTLINK' => $product->get_permalink(),
                'PRODUCTTITLE' => $item->get_name(),
                'PRODUCTPRICE' => '€'. wc_format_decimal($item->get_total(), 2),
                'PRODUCTCOLOR' => $product->get_attribute('kleur'),
                'PRODUCTAMOUNT' => $item->get_quantity(),
            ];
        }

        $merge_vars = array(
            array(
                'name' => 'FNAME',
                'content' => $order->get_billing_first_name()
            ),
            array(
                'name' => 'LNAME',
                'content' => $order->get_billing_last_name()
            ),
            array(
                'name' => 'ORDERNUMBER',
                'content' => $this_get_id
            ),
            array(
                'name' => 'SHIPPINGCOSTS',
                'content' => $order->get_shipping_to_display()
            ),
            array(
                'name' => 'TOTALPRICE',
                'content' => '€'. wc_format_decimal($order->get_total(), 2)
            ),
            array(
                'name' => 'PAYMENTMETHOD',
                'content' => $order->get_payment_method_title()
            ),
            array(
                'name' => 'DELIVERYDATE',
                'content' => $deliveryDate
            ),
            array(
                'name' => 'DELIVERYOPTION',
                'content' => $deliveryOption
            ),
            array(
                'name' => 'ADDRESS',
                'content' => $address
            ),
            array(
                'name' => 'TRACKINGLINK',
                'content' => $tracking_link
            ),
            array(
                'name' => 'PRODUCTS',
                'content' => $products
            )
        );

        sendMandrillMail($template_name, $username, $name, $merge_vars, 'handlebars');
    };

    // add the action
    add_action( 'woocommerce_order_status_changed', 'action_woocommerce_order_status_changed', 10, 4 );

    add_filter( 'woocommerce_cart_shipping_method_full_label', 'bbloomer_remove_shipping_label', 9999, 2 );
    function bbloomer_remove_shipping_label( $label, $method ) {
        $new_label = preg_replace( '/^.+:/', '', $label );
        return $new_label;
    }

    add_filter( 'woocommerce_product_single_add_to_cart_text', 'custom_add_to_cart_text' );
    function custom_add_to_cart_text() {
        return __('Add to Bag', 'lavandre');
    }

    if ( ! function_exists( 'attribute_slug_to_title' ) ) {
        function attribute_slug_to_title( $attribute ,$slug ) {
            global $woocommerce;
            if ( taxonomy_exists( esc_attr( str_replace( 'attribute_', '', $attribute ) ) ) ) {
                $term = get_term_by( 'slug', $slug, esc_attr( str_replace( 'attribute_', '', $attribute ) ) );
                if ( ! is_wp_error( $term ) && $term->name )
                    $value = $term->name;
            } else {
                $value = apply_filters( 'woocommerce_variation_option_name', $value );
            }
            return $value;
        }
    }

    add_filter( 'woocommerce_order_button_text', 'custom_order_button_text' );
    function custom_order_button_text( $button_text ) {
        return __('Pay now', 'lavandre');
    }

    add_filter( 'wcsatt_modify_variation_data_price_html', function() { return false; } );

    function getSubscriptionIntervalPeriod($data): string
    {
        $period = $data['subscription_scheme']['period'];
        $interval = $data['subscription_scheme']['interval'];

        return getPeriodTitle($period, $interval);
    }

    function getPeriodTitle($period, $interval): string
    {
        if ($interval > 1) {
            if ($period === 'month') {
                return 'months';
            }

            if ($period === 'week') {
                return 'weeks';
            }

            if ($period === 'day') {
                return 'days';
            }

            if ($period === 'year') {
                return 'years';
            }
        }

        return $period;
    }

    // Prevent price suffix for subscription products
    add_filter( 'wcsatt_price_html_suffix', 'apfs_remove_suffix', 10, 3 );
    function apfs_remove_suffix( $suffix, $product, $args ) {
        return '';
    }

    // Prevent coupons on subscription products
    add_filter( 'woocommerce_coupon_is_valid_for_product', 'apfs_disable_for_products_on_subscription', 10, 4 );
    function apfs_disable_for_products_on_subscription( $is_valid,  $product,  $instance,  $values ) {
        if ( ! empty( $values[ 'wcsatt_data'][ 'active_subscription_scheme' ] ) ) {
            $is_valid = false;
        }
        return $is_valid;
    }

    add_filter('woocommerce_subscription_status_active_to_pending-cancel', 'redirect_on_cancel_subscription', 10, 1);
    function redirect_on_cancel_subscription()
    {
        wp_redirect('/my-account/subscriptions/');
        exit;
    }
