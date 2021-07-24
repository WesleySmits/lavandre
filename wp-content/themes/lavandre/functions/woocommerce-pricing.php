<?php
    /**
     * Change price formatting to From: ...
     */
    function variable_sale_price_format($price, $product) {
        $prefix = sprintf('%s: ', __('Vanaf', 'iconic'));
        $min_price_regular = $product->get_variation_regular_price('min', true);
        $min_price_sale    = $product->get_variation_sale_price('min', true);
        $max_price = $product->get_variation_price('max', true);
        $min_price = $product->get_variation_price('min', true);

        $price = ($min_price_sale == $min_price_regular) ?
            wc_price($min_price_regular) :
            '<del>' . wc_price($min_price_regular) . '</del>' . '<ins>' . wc_price($min_price_sale) . '</ins>';

        return ($min_price == $max_price) ?
            $price :
            sprintf('%s%s', $prefix, $price);
    }

    add_filter('woocommerce_variable_sale_price_html', 'variable_sale_price_format', 10, 2);

    function variable_price_format($price, $product) {
        $min_price_regular = $product->get_variation_regular_price('min', true);
        $min_price_sale    = $product->get_variation_sale_price('min', true);

        $price = ($min_price_sale == $min_price_regular) ?
            wc_price($min_price_regular) :
            '<del>' . wc_price($min_price_regular) . '</del>' . '<ins>' . wc_price($min_price_sale) . '</ins>';

        return $price;

    }
    add_filter('woocommerce_variable_price_html', 'variable_price_format', 10, 2);

    add_filter( 'formatted_woocommerce_price', 'span_custom_prc', 10, 5 );
    function span_custom_prc( $number_format, $price, $decimals, $decimal_separator, $thousand_separator){
        return '<span data-product-price>'.$number_format.'</span>';
    }

    add_filter( 'woocommerce_sale_flash', 'bbloomer_rename_sale_badge', 9999 );
    function bbloomer_rename_sale_badge() {
        return '<span class="badge onsale perc">15%</span>';
    }
