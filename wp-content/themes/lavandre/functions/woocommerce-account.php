<?php
add_filter ( 'woocommerce_account_menu_items', 'remove_my_account_links' );
add_filter ( 'woocommerce_account_menu_items', 'rename_my_account_links' );
function remove_my_account_links( $menu_links ){
    unset( $menu_links['vat-number'] );
	return $menu_links;
}

function rename_my_account_links($menu_links) {
    $menu_links['edit-account'] = __('Mijn gegevens', 'woocommerce');
    $menu_links['orders'] = __('Mijn aankopen', 'woocommerce');
    $menu_links['edit-address'] = __('Mijn adressen', 'woocommerce');

    return $menu_links;
}

// function add_account_settings_endpoint() {
//     add_rewrite_endpoint( 'settings', EP_ROOT | EP_PAGES );
// }
// add_action( 'init', 'add_account_settings_endpoint' );


// function account_settings_query_vars( $vars ) {
//     $vars[] = 'settings';
//     return $vars;
// }
// add_filter( 'query_vars', 'account_settings_query_vars', 0 );

// function add_settings_link_my_account( $items ) {
//     $items['settings'] = __('Settings', 'woocommerce');
//     return $items;
// }
// add_filter( 'woocommerce_account_menu_items', 'add_settings_link_my_account' );

// function account_settings_content() {
//     echo '<h1>' . __('Newsletter', 'woocommerce') . '</h1>';

//     echo '<form data-ww-component="mailchimp-subscribe">';

//     echo '<div class="form-row woocommerce-form-row">';
//         echo '<input id="mailchimp-newsletter-subscribe" type="checkbox" name="mailchimp-newsletter-subscribe" class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox">';
//         echo '<label for="mailchimp-newsletter-subscribe">Toggle me</label>';
//     echo '</div>';


//     echo '</form>';

// }
// add_action( 'woocommerce_account_settings_endpoint', 'account_settings_content' );

add_filter('woocommerce_save_account_details_required_fields', 'wc_save_account_details_required_fields' );
function wc_save_account_details_required_fields( $required_fields ){
    unset( $required_fields['account_display_name'] );
    return $required_fields;
}

add_action( 'personal_options_update', 'my_account_saving_extra_fields' ); // edit own account admin
add_action( 'edit_user_profile_update', 'my_account_saving_extra_fields' ); // edit other account admin
add_action( 'woocommerce_save_account_details', 'my_account_saving_extra_fields' ); // edit WC account
function my_account_saving_extra_fields( $user_id ) {
    $billing_phone = $_POST['billing_phone'];
    $billing_company = $_POST['billing_company'];
    $billing_company_type = $_POST['billing_company_type'];

    if(!empty($billing_phone)) {
        update_user_meta( $user_id, 'billing_phone', sanitize_text_field( $billing_phone ) );
    }

    if(!empty($billing_company)) {
        update_user_meta( $user_id, 'billing_company', sanitize_text_field( $billing_company ) );
    }

    if(!empty($billing_company_type)) {
        update_user_meta( $user_id, 'billing_company_type', sanitize_text_field( $billing_company_type ) );
    }

    wp_safe_redirect( wc_get_page_permalink( 'cart' ) );
}


add_filter( 'woocommerce_my_account_my_address_formatted_address', function( $args, $customer_id, $name ){
    // the phone is saved as billing_phone and shipping_phone
    $args['phone'] = get_user_meta( $customer_id, $name . '_phone', true );
    return $args;
}, 100, 3 );

// modify the address formats
add_filter( 'woocommerce_localisation_address_formats', function( $formats ) {
    $preferredFormat = '
        {name}
        {company}
        {address_1}
        {postcode} {city} {country}
        {vat_id}
        {phone}
    ';

    $formats['NL'] = $preferredFormat;
    $formats['BE'] = $preferredFormat;
    $formats['DE'] = $preferredFormat;
    $formats['FR'] = $preferredFormat;

    return $formats;
}, 100, 1);

// add the replacement value
add_filter( 'woocommerce_formatted_address_replacements', function( $replacements, $args ){
    // we want to replace {phone} in the format with the data we populated
    $replacements['{phone}'] = $args['phone'];
    return $replacements;
}, 10, 2 );



add_filter( 'woocommerce_billing_fields' , 'custom_override_billing_fields', 100, 1 );
function custom_override_billing_fields( $fields ) {
    $firstName = __( 'First name', 'hello-elementor-child' );
    $lastName = __( 'Last name', 'hello-elementor-child' );
    $companyName = __( 'Company name', 'hello-elementor-child' );
    $streetName = __( 'Street name', 'hello-elementor-child' );
    $houseNumber = __( 'House number', 'hello-elementor-child' );
    $houseNumberAddition = __( 'Addition', 'hello-elementor-child' );
    $postalCode = __( 'Postal code', 'hello-elementor-child' );
    $city = __( 'City', 'hello-elementor-child' );
    $country = __( 'Country', 'hello-elementor-child' );
    $phoneNumber = __( 'Phone number', 'hello-elementor-child' );
    $emailAddress = __( 'E-mail address', 'hello-elementor-child' );
    $vatNumber = __( 'VAT number', 'hello-elementor-child' );

    $fields['billing_street_name']['placeholder'] = $streetName;
    $fields['billing_street_name']['label'] = $streetName;

    $fields['billing_house_number']['placeholder'] = $houseNumber;
    $fields['billing_house_number']['label'] = $houseNumber;

    $fields['billing_house_number_suffix']['placeholder'] = $houseNumberAddition;
    $fields['billing_house_number_suffix']['label'] = $houseNumberAddition;

    $fields['billing_postcode']['placeholder'] = $postalCode;
    $fields['billing_postcode']['label'] = $postalCode;

    $fields['billing_city']['placeholder'] = $city;
    $fields['billing_city']['label'] = $city;

    $fields['billing_country']['placeholder'] = $country;
    $fields['billing_country']['label'] = $country;

    return $fields;
}
