<?php

    /**
     * 5. Redirect to pre-checkout login page -> Separate Plugin
     * 12. Remove shipping option label from checkout -> Separate plugin
     * 13. Send mandrill mail on order status change
     */

use Lavandre\Mandrill\Mandrill;

    /*** checkout ****/
    remove_action( 'woocommerce_checkout_order_review', 'woocommerce_checkout_payment', 20 );
    add_action( 'woocommerce_checkout_order_payment_methods', 'woocommerce_checkout_payment', 20 );

    add_filter( 'woocommerce_registration_error_email_exists', function( $html ) {
        $redirect_page_id = 317;
        $url = get_permalink( $redirect_page_id );
        $html = str_replace( '<a href="#" class="showlogin">Log in.</a>', '<a href="'.$url.'"><strong>Log in</strong></a>', $html );

        return $html;
    } );

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
