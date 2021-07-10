<?php

    /**
     * Create woocommerce product field to store the brand name
     */
    function create_custom_brand_field() {
        $args = array(
            'id' => 'brand_field',
            'label' => __( 'Brand', 'wegwerphanddoeken.nl' ),
            'class' => 'brand-field',
            'desc_tip' => true,
            'description' => __( 'Product brand', 'wegwerphanddoeken.nl' ),
        );
        woocommerce_wp_text_input( $args );
    }
    add_action( 'woocommerce_product_options_general_product_data', 'create_custom_brand_field' );

    /**
     * Add plus button after product quantity field
     */
    function ts_quantity_plus_sign() {
        echo '<button type="button" class="plus-amount" >+</button>';
    }
    add_action( 'woocommerce_after_add_to_cart_quantity', 'ts_quantity_plus_sign' );

    /**
     * Add minus button before product quantity field
     */
    function ts_quantity_minus_sign() {
        echo '<button type="button" class="minus-amount" >-</button>';
    }
    add_action( 'woocommerce_before_add_to_cart_quantity', 'ts_quantity_minus_sign' );

    /**
     * Switch off 'Ship to different address' by default.
     */
    add_filter( 'woocommerce_ship_to_different_address_checked', '__return_false' );

    /**
     * Hide other shipping options when the requirements for 'Free shipping' have been met
     */
    function hide_shipping_when_free_is_available( $rates ) {
        $free = array();

        foreach ( $rates as $rate_id => $rate ) {
            if ( 'free_shipping' === $rate->method_id || 'free_shipping2' === $rate->method_id ) {
                $free[ $rate_id ] = $rate;
                break;
            }
        }
        return ! empty( $free ) ? $free : $rates;
    }
    add_filter( 'woocommerce_package_rates', 'hide_shipping_when_free_is_available', 100 );

    /**
     * Make company field optional
     */
    add_filter( 'woocommerce_billing_fields', 'disable_require_wc_company_field');
    function disable_require_wc_company_field( $fields ) {
        $fields['billing_company']['required'] = false;
        return $fields;
    }

    /**
     * Change price formatting to From: ...
     */
    function variable_price_format($price, $product)
    {
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

    add_filter('woocommerce_variable_sale_price_html', 'variable_price_format', 10, 2);
    add_filter('woocommerce_variable_price_html', 'variable_price_format', 10, 2);


    /**
     * Redirect to login/register pre-checkout.
     *
     * Redirect guest users to login/register before completing a order.
     */
    function ace_redirect_pre_checkout() {
        if ( ! function_exists( 'wc' ) ) return;
        if (isset($_GET['createAccount'])) return;

        $redirect_page_id = 5710;
        if ( ! is_user_logged_in() && is_checkout() && is_page(17) === true ) {
            wp_safe_redirect( get_permalink( $redirect_page_id ) );
            die;
        } elseif ( is_user_logged_in() && is_page( $redirect_page_id ) ) {
            wp_safe_redirect( get_permalink( wc_get_page_id( 'checkout' ) ) );
            die;
        }
    }
    add_action( 'template_redirect', 'ace_redirect_pre_checkout' );/**
 * Remove Select2 for WooCommerce
 */
function wc_disable_select2() {
    if ( class_exists('woocommerce') ) {
        wp_dequeue_style('select2');
        wp_deregister_style('select2');

        // WooCommerce 3.2.1.x and below
        wp_dequeue_script('select2');
        wp_deregister_script('select2');

        // WooCommerce 3.2.1+
        wp_dequeue_script('selectWoo');
        wp_deregister_script('selectWoo');
    }
}
add_action('wp_enqueue_scripts', 'wc_disable_select2', 100);

/*** checkout ****/
remove_action( 'woocommerce_checkout_order_review', 'woocommerce_checkout_payment', 20 );
add_action( 'woocommerce_checkout_order_payment_methods', 'woocommerce_checkout_payment', 20 );

/**
 * Add placeholders to form fields in checkout & Align address fields
 */
function override_billing_checkout_fields( $fields ) {
    $firstName = __( 'First name', 'hello-elementor-child' );
    $lastName = __( 'Last name', 'hello-elementor-child' );
    $companyName = __( 'Company name', 'hello-elementor-child' );
    $streetName = __( 'Street name', 'hello-elementor-child' );
    $houseNumber = __( 'House number', 'hello-elementor-child' );
    $houseNumberAddition = __( 'Addition', 'hello-elementor-child' );
    $postalCode = __( 'Postal code', 'hello-elementor-child' );
    $city = __( 'Place', 'hello-elementor-child' );
    $country = __( 'Country', 'hello-elementor-child' );
    $phoneNumber = __( 'Phone number', 'hello-elementor-child' );
    $emailAddress = __( 'E-mail address', 'hello-elementor-child' );
    $vatNumber = __( 'VAT nummer', 'hello-elementor-child' );

    // Placeholders
    $fields['billing']['billing_first_name']['placeholder'] = $firstName;
    $fields['shipping']['shipping_first_name']['placeholder'] = $firstName;
    $fields['billing']['billing_first_name']['label'] = $firstName;
    $fields['shipping']['shipping_first_name']['label'] = $firstName;

    $fields['billing']['billing_last_name']['placeholder'] = $lastName;
    $fields['shipping']['shipping_last_name']['placeholder'] = $lastName;
    $fields['billing']['billing_last_name']['label'] = $lastName;
    $fields['shipping']['shipping_last_name']['label'] = $lastName;

    $fields['billing']['billing_company']['placeholder'] = $companyName;
    $fields['shipping']['shipping_company']['placeholder'] = $companyName;
    $fields['billing']['billing_company']['label'] = $companyName;
    $fields['shipping']['shipping_company']['label'] = $companyName;

    $fields['billing']['billing_street_name']['placeholder'] = $streetName;
    $fields['shipping']['shipping_street_name']['placeholder'] = $streetName;
    $fields['billing']['billing_street_name']['label'] = $streetName;
    $fields['shipping']['shipping_street_name']['label'] = $streetName;

    $fields['billing']['billing_house_number']['placeholder'] = $houseNumber;
    $fields['shipping']['shipping_house_number']['placeholder'] = $houseNumber;
    $fields['billing']['billing_house_number']['label'] = $houseNumber;
    $fields['shipping']['shipping_house_number']['label'] = $houseNumber;

    $fields['billing']['billing_house_number_suffix']['placeholder'] = $houseNumberAddition;
    $fields['shipping']['shipping_house_number_suffix']['placeholder'] = $houseNumberAddition;
    $fields['billing']['billing_house_number_suffix']['label'] = $houseNumberAddition;
    $fields['shipping']['shipping_house_number_suffix']['label'] = $houseNumberAddition;

    $fields['billing']['billing_postcode']['placeholder'] = $postalCode;
    $fields['shipping']['shipping_postcode']['placeholder'] = $postalCode;
    $fields['billing']['billing_postcode']['label'] = $postalCode;
    $fields['shipping']['shipping_postcode']['label'] = $postalCode;

    $fields['billing']['billing_city']['placeholder'] = $city;
    $fields['shipping']['shipping_city']['placeholder'] = $city;
    $fields['billing']['billing_city']['label'] = $city;
    $fields['shipping']['shipping_city']['label'] = $city;

    $fields['billing']['billing_country']['placeholder'] = $country;
    $fields['shipping']['shipping_country']['placeholder'] = $country;
    $fields['billing']['billing_country']['label'] = $country;
    $fields['shipping']['shipping_country']['label'] = $country;

    $fields['billing']['billing_phone']['placeholder'] = $phoneNumber;
    $fields['shipping']['shipping_phone']['placeholder'] = $phoneNumber;
    $fields['billing']['billing_phone']['label'] = $phoneNumber;
    $fields['shipping']['shipping_phone']['label'] = $phoneNumber;

    $fields['billing']['billing_email']['placeholder'] = $emailAddress;
    $fields['shipping']['shipping_email']['placeholder'] = $emailAddress;
    $fields['billing']['billing_email']['label'] = $emailAddress;
    $fields['shipping']['shipping_email']['label'] = $emailAddress;

    $fields['billing']['billing_vat_number']['placeholder'] = $vatNumber;
    $fields['shipping']['shipping_vat_number']['placeholder'] = $vatNumber;
    $fields['billing']['billing_vat_number']['label'] = $vatNumber;
    $fields['shipping']['shipping_vat_number']['label'] = $vatNumber;

    // Ordering


    // Alignment
    $fields['billing']['billing_street_name']['class'] = ['form-row-wide'];
    $fields['shipping']['shipping_street_name']['class'] = ['form-row-wide'];
    $fields['billing']['billing_house_number']['class'] = ['form-row-first'];
    $fields['shipping']['shipping_house_number']['class'] = ['form-row-first'];
    $fields['billing']['billing_house_number_suffix']['class'] = ['form-row-last'];
    $fields['shipping']['shipping_house_number_suffix']['class'] = ['form-row-last'];

    $fields['order']['order_comments']['placeholder'] = '';

    // Remove
    unset($fields['billing']['billing_phone']);
    unset($fields['shipping']['shipping_phone']);

    return $fields;
}
add_filter( 'woocommerce_checkout_fields' , 'override_billing_checkout_fields', 20, 1 );

add_filter( 'woocommerce_form_field', 'checkout_fields_in_label_error', 10, 4 );
function checkout_fields_in_label_error( $field, $key, $args, $value ) {
    if (strpos( $field, '</label>' ) !== false && $args['required']) {
        $error = '<span class="error" style="display:none">';
        $error .= sprintf( __( '%s is a required field.', 'woocommerce' ), $args['label'] );
        $error .= '</span>';
        $field = substr_replace( $field, $error, strpos( $field, '</label>' ) + 8, 0);
    }
   return $field;
}


///////////////////////////////
// 1. ADD FIELDS

add_action( 'woocommerce_register_form_start', 'bbloomer_add_name_woo_account_registration' );

function bbloomer_add_name_woo_account_registration() {
    ?>

    <div class="flex customer-register__name-fields">
        <p class="form-row form-row-first customer-register__name-field">
            <input type="text" class="input-text" name="billing_first_name" id="reg_billing_first_name" value="<?php if ( ! empty( $_POST['billing_first_name'] ) ) esc_attr_e( $_POST['billing_first_name'] ); ?>" placeholder="<?php _e( 'First name', 'woocommerce' ); ?>" required />
            <label for="reg_billing_first_name"><?php _e( 'First name', 'woocommerce' ); ?> <span class="required">*</span></label>
        </p>

        <p class="form-row form-row-last customer-register__name-field">
            <input type="text" class="input-text" name="billing_last_name" id="reg_billing_last_name" value="<?php if ( ! empty( $_POST['billing_last_name'] ) ) esc_attr_e( $_POST['billing_last_name'] ); ?>" placeholder="<?php _e( 'Last name', 'woocommerce' ); ?>" required />
            <label for="reg_billing_last_name"><?php _e( 'Last name', 'woocommerce' ); ?> <span class="required">*</span></label>
        </p>
    </div>

    <div class="clear"></div>

    <?php
}

///////////////////////////////
// 2. VALIDATE FIELDS

add_filter( 'woocommerce_registration_errors', 'bbloomer_validate_name_fields', 10, 3 );

function bbloomer_validate_name_fields( $errors, $username, $email ) {
    if ( isset( $_POST['billing_first_name'] ) && empty( $_POST['billing_first_name'] ) ) {
        $errors->add( 'billing_first_name_error', __( '<strong>Error</strong>: First name is required!', 'woocommerce' ) );
    }
    if ( isset( $_POST['billing_last_name'] ) && empty( $_POST['billing_last_name'] ) ) {
        $errors->add( 'billing_last_name_error', __( '<strong>Error</strong>: Last name is required!.', 'woocommerce' ) );
    }
    return $errors;
}

///////////////////////////////
// 3. SAVE FIELDS

add_action( 'woocommerce_created_customer', 'bbloomer_save_name_fields' );

function bbloomer_save_name_fields( $customer_id ) {
    if ( isset( $_POST['billing_first_name'] ) ) {
        update_user_meta( $customer_id, 'billing_first_name', sanitize_text_field( $_POST['billing_first_name'] ) );
        update_user_meta( $customer_id, 'first_name', sanitize_text_field($_POST['billing_first_name']) );
    }
    if ( isset( $_POST['billing_last_name'] ) ) {
        update_user_meta( $customer_id, 'billing_last_name', sanitize_text_field( $_POST['billing_last_name'] ) );
        update_user_meta( $customer_id, 'last_name', sanitize_text_field($_POST['billing_last_name']) );
    }

}


add_filter( 'woocommerce_sale_flash', 'bbloomer_rename_sale_badge', 9999 );
function bbloomer_rename_sale_badge() {
   return '<span class="badge onsale perc">15%</span>';
}


add_filter( 'woocommerce_my_account_my_orders_query', 'custom_my_account_orders', 10, 1 );
function custom_my_account_orders( $args ) {
    // Set the post per page
    $args['limit'] = 25;

    return $args;
}

add_filter( 'woocommerce_registration_error_email_exists', function( $html ) {
    $redirect_page_id = 5710;
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

    $order = new WC_Order($this_get_id);

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

function custom_get_order_notes( $order_id ) {
    remove_filter( 'comments_clauses', array( 'WC_Comments', 'exclude_order_comments' ) );
    $comments = get_comments( array(
        'post_id' => $order_id,
        'orderby' => 'comment_ID',
        'order'   => 'DESC',
        'approve' => 'approve',
        'type'    => 'order_note',
    ) );
    $notes = wp_list_pluck( $comments, 'comment_content' );
    add_filter( 'comments_clauses', array( 'WC_Comments', 'exclude_order_comments' ) );
    return $notes;
}

function findTrackAndTraceCode($notes) {
    foreach ($notes as $note) {
        if (!strpos($note, 'PostNL')) {
            continue;
        }

        $code = explode(': ', $note);
        $trackingCode = explode(', ', $code[1]);

        return $trackingCode[0];
    }
}
