<?php

    /**
     * Create woocommerce product field to store the brand name
     */
    // function create_custom_brand_field() {
    //     $args = array(
    //         'id' => 'brand_field',
    //         'label' => __( 'Brand', 'lavandre' ),
    //         'class' => 'brand-field',
    //         'desc_tip' => true,
    //         'description' => __( 'Product brand', 'lavandre' ),
    //     );
    //     woocommerce_wp_text_input( $args );
    // }
    // add_action( 'woocommerce_product_options_general_product_data', 'create_custom_brand_field' );

    /**
     * Add plus button after product quantity field
     */
    function quantity_plus_sign() {
        echo '<button type="button" class="plus-amount" >+</button>';
    }
    add_action( 'woocommerce_after_add_to_cart_quantity', 'quantity_plus_sign' );

    /**
     * Add minus button before product quantity field
     */
    function quantity_minus_sign() {
        echo '<button type="button" class="minus-amount" >-</button>';
    }
    add_action( 'woocommerce_before_add_to_cart_quantity', 'quantity_minus_sign' );

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

    /**
     * Redirect to login/register pre-checkout.
     *
     * Redirect guest users to login/register before completing an order.
     */
    function ace_redirect_pre_checkout() {
        if ( ! function_exists( 'wc' ) ) return;
        if (isset($_GET['createAccount'])) return;

        $redirect_page_id = 317;
        if ( ! is_user_logged_in() && is_checkout() && is_page(16) === true ) {
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
    $firstName = __( 'First name', 'lavandre' );
    $lastName = __( 'Last name', 'lavandre' );
    $companyName = __( 'Company name', 'lavandre' );
    $streetName = __( 'Street name', 'lavandre' );
    $houseNumber = __( 'House number', 'lavandre' );
    $houseNumberAddition = __( 'Addition', 'lavandre' );
    $postalCode = __( 'Postal code', 'lavandre' );
    $city = __( 'Place', 'lavandre' );
    $country = __( 'Country', 'lavandre' );
    $phoneNumber = __( 'Phone number', 'lavandre' );
    $emailAddress = __( 'E-mail address', 'lavandre' );
    $vatNumber = __( 'VAT nummer', 'lavandre' );

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

/**
 * Outputs a checkout/address form field.
 *
 * @param string $key Key.
 * @param mixed  $args Arguments.
 * @param string $value (default: null).
 * @return string
 */
function woocommerce_form_field( $key, $args, $value = null ) {
	$defaults = array(
		'type'              => 'text',
		'label'             => '',
		'description'       => '',
		'placeholder'       => '',
		'maxlength'         => false,
		'required'          => false,
		'autocomplete'      => false,
		'id'                => $key,
		'class'             => array(),
		'label_class'       => array(),
		'input_class'       => array(),
		'return'            => false,
		'options'           => array(),
		'custom_attributes' => array(),
		'validate'          => array(),
		'default'           => '',
		'autofocus'         => '',
		'priority'          => '',
	);

	$args = wp_parse_args( $args, $defaults );
	$args = apply_filters( 'woocommerce_form_field_args', $args, $key, $value );

	if ( $args['required'] ) {
		$args['class'][] = 'validate-required';
		$required        = '&nbsp;<abbr class="required" title="' . esc_attr__( 'required', 'woocommerce' ) . '">*</abbr>';
	} else {
		$required = '&nbsp;<span class="optional">(' . esc_html__( 'optional', 'woocommerce' ) . ')</span>';
	}

	if ( is_string( $args['label_class'] ) ) {
		$args['label_class'] = array( $args['label_class'] );
	}

	if ( is_null( $value ) ) {
		$value = $args['default'];
	}

	// Custom attribute handling.
	$custom_attributes         = array();
	$args['custom_attributes'] = array_filter( (array) $args['custom_attributes'], 'strlen' );

	if ( $args['maxlength'] ) {
		$args['custom_attributes']['maxlength'] = absint( $args['maxlength'] );
	}

	if ( ! empty( $args['autocomplete'] ) ) {
		$args['custom_attributes']['autocomplete'] = $args['autocomplete'];
	}

	if ( true === $args['autofocus'] ) {
		$args['custom_attributes']['autofocus'] = 'autofocus';
	}

	if ( $args['description'] ) {
		$args['custom_attributes']['aria-describedby'] = $args['id'] . '-description';
	}

	if ( ! empty( $args['custom_attributes'] ) && is_array( $args['custom_attributes'] ) ) {
		foreach ( $args['custom_attributes'] as $attribute => $attribute_value ) {
			$custom_attributes[] = esc_attr( $attribute ) . '="' . esc_attr( $attribute_value ) . '"';
		}
	}

	if ( ! empty( $args['validate'] ) ) {
		foreach ( $args['validate'] as $validate ) {
			$args['class'][] = 'validate-' . $validate;
		}
	}

	$field           = '';
	$label_id        = $args['id'];
	$sort            = $args['priority'] ? $args['priority'] : '';
	$field_container = '<p class="form-row %1$s" id="%2$s" data-priority="' . esc_attr( $sort ) . '">%3$s</p>';

	switch ( $args['type'] ) {
		case 'country':
			$countries = 'shipping_country' === $key ? WC()->countries->get_shipping_countries() : WC()->countries->get_allowed_countries();

			if ( 1 === count( $countries ) ) {

				$field .= '<strong>' . current( array_values( $countries ) ) . '</strong>';

				$field .= '<input type="hidden" name="' . esc_attr( $key ) . '" id="' . esc_attr( $args['id'] ) . '" value="' . current( array_keys( $countries ) ) . '" ' . implode( ' ', $custom_attributes ) . ' class="country_to_state" readonly="readonly" />';

			} else {

				$field = '<select name="' . esc_attr( $key ) . '" id="' . esc_attr( $args['id'] ) . '" class="country_to_state country_select ' . esc_attr( implode( ' ', $args['input_class'] ) ) . '" ' . implode( ' ', $custom_attributes ) . '><option value="default">' . esc_html__( 'Select a country / region&hellip;', 'woocommerce' ) . '</option>';

				foreach ( $countries as $ckey => $cvalue ) {
					$field .= '<option value="' . esc_attr( $ckey ) . '" ' . selected( $value, $ckey, false ) . '>' . esc_html( $cvalue ) . '</option>';
				}

				$field .= '</select>';

				$field .= '<noscript><button type="submit" name="woocommerce_checkout_update_totals" value="' . esc_attr__( 'Update country / region', 'woocommerce' ) . '">' . esc_html__( 'Update country / region', 'woocommerce' ) . '</button></noscript>';

			}

			break;
		case 'state':
			/* Get country this state field is representing */
			$for_country = isset( $args['country'] ) ? $args['country'] : WC()->checkout->get_value( 'billing_state' === $key ? 'billing_country' : 'shipping_country' );
			$states      = WC()->countries->get_states( $for_country );

			if ( is_array( $states ) && empty( $states ) ) {

				$field_container = '<p class="form-row %1$s" id="%2$s" style="display: none">%3$s</p>';

				$field .= '<input type="hidden" class="hidden" name="' . esc_attr( $key ) . '" id="' . esc_attr( $args['id'] ) . '" value="" ' . implode( ' ', $custom_attributes ) . ' placeholder="' . esc_attr( $args['placeholder'] ) . '" readonly="readonly" data-input-classes="' . esc_attr( implode( ' ', $args['input_class'] ) ) . '"/>';

			} elseif ( ! is_null( $for_country ) && is_array( $states ) ) {

				$field .= '<select name="' . esc_attr( $key ) . '" id="' . esc_attr( $args['id'] ) . '" class="state_select ' . esc_attr( implode( ' ', $args['input_class'] ) ) . '" ' . implode( ' ', $custom_attributes ) . ' data-placeholder="' . esc_attr( $args['placeholder'] ? $args['placeholder'] : esc_html__( 'Select an option&hellip;', 'woocommerce' ) ) . '"  data-input-classes="' . esc_attr( implode( ' ', $args['input_class'] ) ) . '">
					<option value="">' . esc_html__( 'Select an option&hellip;', 'woocommerce' ) . '</option>';

				foreach ( $states as $ckey => $cvalue ) {
					$field .= '<option value="' . esc_attr( $ckey ) . '" ' . selected( $value, $ckey, false ) . '>' . esc_html( $cvalue ) . '</option>';
				}

				$field .= '</select>';

			} else {

				$field .= '<input type="text" class="input-text ' . esc_attr( implode( ' ', $args['input_class'] ) ) . '" value="' . esc_attr( $value ) . '"  placeholder="' . esc_attr( $args['placeholder'] ) . '" name="' . esc_attr( $key ) . '" id="' . esc_attr( $args['id'] ) . '" ' . implode( ' ', $custom_attributes ) . ' data-input-classes="' . esc_attr( implode( ' ', $args['input_class'] ) ) . '"/>';

			}

			break;
		case 'textarea':
			$field .= '<textarea name="' . esc_attr( $key ) . '" class="input-text ' . esc_attr( implode( ' ', $args['input_class'] ) ) . '" id="' . esc_attr( $args['id'] ) . '" placeholder="' . esc_attr( $args['placeholder'] ) . '" ' . ( empty( $args['custom_attributes']['rows'] ) ? ' rows="2"' : '' ) . ( empty( $args['custom_attributes']['cols'] ) ? ' cols="5"' : '' ) . implode( ' ', $custom_attributes ) . '>' . esc_textarea( $value ) . '</textarea>';

			break;
		case 'checkbox':
			$field = '<label class="checkbox ' . implode( ' ', $args['label_class'] ) . '" ' . implode( ' ', $custom_attributes ) . '>
					<input type="' . esc_attr( $args['type'] ) . '" class="input-checkbox ' . esc_attr( implode( ' ', $args['input_class'] ) ) . '" name="' . esc_attr( $key ) . '" id="' . esc_attr( $args['id'] ) . '" value="1" ' . checked( $value, 1, false ) . ' /> ' . $args['label'] . $required . '</label>';

			break;
		case 'text':
		case 'password':
		case 'datetime':
		case 'datetime-local':
		case 'date':
		case 'month':
		case 'time':
		case 'week':
		case 'number':
		case 'email':
		case 'url':
		case 'tel':
			$field .= '<input type="' . esc_attr( $args['type'] ) . '" class="input-text ' . esc_attr( implode( ' ', $args['input_class'] ) ) . '" name="' . esc_attr( $key ) . '" id="' . esc_attr( $args['id'] ) . '" placeholder="' . esc_attr( $args['placeholder'] ) . '"  value="' . esc_attr( $value ) . '" ' . implode( ' ', $custom_attributes ) . ' />';

			break;
		case 'hidden':
			$field .= '<input type="' . esc_attr( $args['type'] ) . '" class="input-hidden ' . esc_attr( implode( ' ', $args['input_class'] ) ) . '" name="' . esc_attr( $key ) . '" id="' . esc_attr( $args['id'] ) . '" value="' . esc_attr( $value ) . '" ' . implode( ' ', $custom_attributes ) . ' />';

			break;
		case 'select':
			$field   = '';
			$options = '';

			if ( ! empty( $args['options'] ) ) {
				foreach ( $args['options'] as $option_key => $option_text ) {
					if ( '' === $option_key ) {
						// If we have a blank option, select2 needs a placeholder.
						if ( empty( $args['placeholder'] ) ) {
							$args['placeholder'] = $option_text ? $option_text : __( 'Choose an option', 'woocommerce' );
						}
						$custom_attributes[] = 'data-allow_clear="true"';
					}
					$options .= '<option value="' . esc_attr( $option_key ) . '" ' . selected( $value, $option_key, false ) . '>' . esc_html( $option_text ) . '</option>';
				}

				$field .= '<select name="' . esc_attr( $key ) . '" id="' . esc_attr( $args['id'] ) . '" class="select ' . esc_attr( implode( ' ', $args['input_class'] ) ) . '" ' . implode( ' ', $custom_attributes ) . ' data-placeholder="' . esc_attr( $args['placeholder'] ) . '">
						' . $options . '
					</select>';
			}

			break;
		case 'radio':
			$label_id .= '_' . current( array_keys( $args['options'] ) );

			if ( ! empty( $args['options'] ) ) {
				foreach ( $args['options'] as $option_key => $option_text ) {
					$field .= '<input type="radio" class="input-radio ' . esc_attr( implode( ' ', $args['input_class'] ) ) . '" value="' . esc_attr( $option_key ) . '" name="' . esc_attr( $key ) . '" ' . implode( ' ', $custom_attributes ) . ' id="' . esc_attr( $args['id'] ) . '_' . esc_attr( $option_key ) . '"' . checked( $value, $option_key, false ) . ' />';
					$field .= '<label for="' . esc_attr( $args['id'] ) . '_' . esc_attr( $option_key ) . '" class="radio ' . implode( ' ', $args['label_class'] ) . '">' . esc_html( $option_text ) . '</label>';
				}
			}

			break;
	}

	if ( ! empty( $field ) ) {
		$field_html = '';

		$field_html .= $field;

		if ( $args['label'] && 'checkbox' !== $args['type'] ) {
			$field_html .= '<label for="' . esc_attr( $label_id ) . '" class="' . esc_attr( implode( ' ', $args['label_class'] ) ) . '">' . $args['label'] . $required . '</label>';
		}

		if ( $args['description'] ) {
			$field_html .= '<span class="description" id="' . esc_attr( $args['id'] ) . '-description" aria-hidden="true">' . wp_kses_post( $args['description'] ) . '</span>';
		}

		$container_class = esc_attr( implode( ' ', $args['class'] ) );
		$container_id    = esc_attr( $args['id'] ) . '_field';
		$field           = sprintf( $field_container, $container_class, $container_id, $field_html );
	}

	/**
	 * Filter by type.
	 */
	$field = apply_filters( 'woocommerce_form_field_' . $args['type'], $field, $key, $args, $value );

	/**
	 * General filter on form fields.
	 *
	 * @since 3.4.0
	 */
	$field = apply_filters( 'woocommerce_form_field', $field, $key, $args, $value );

	if ( $args['return'] ) {
		return $field;
	} else {
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		echo $field;
	}
}

add_action( 'after_setup_theme', 'remove_woo_three_support', 11 );
function remove_woo_three_support() {
  remove_theme_support( 'wc-product-gallery-zoom' );
  remove_theme_support( 'wc-product-gallery-slider' );
  remove_theme_support( 'wc-product-gallery-lightbox' );
}

/**
 * Change several of the breadcrumb defaults
 */
add_filter( 'woocommerce_breadcrumb_defaults', 'jk_woocommerce_breadcrumbs' );
function jk_woocommerce_breadcrumbs() {
    return array(
        'delimiter'   => '&nbsp;&#47;&nbsp;',
        'wrap_before' => '<nav class="woocommerce-breadcrumb ww-container" itemprop="breadcrumb">',
        'wrap_after'  => '</nav>',
        'before'      => '',
        'after'       => '',
        'home'        => _x( 'Home', 'breadcrumb', 'woocommerce' ),
    );
}

