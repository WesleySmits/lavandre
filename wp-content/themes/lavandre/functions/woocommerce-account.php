<?php

use Lavandre\Loyalty\LavandreLoyalty;
use Lavandre\Account\LavandreAccountPages;

add_action( 'init', 'account_setup', 0 );
function account_setup(): void
{
    $accountHandler = LavandreAccountPages::getInstance();
    add_filter ( 'woocommerce_account_menu_items', [$accountHandler, 'removeLinks'] );
    add_filter ( 'woocommerce_account_menu_items', [$accountHandler, 'renameLinks'] );
    add_filter ( 'woocommerce_account_menu_items', [$accountHandler, 'addLinks'] );
    add_filter ( 'woocommerce_account_menu_items', [$accountHandler, 'reorderLinks'] );
    add_filter( 'woocommerce_get_query_vars', [$accountHandler, 'createRewardsEndpoint'] );
    add_action ( 'woocommerce_account_rewards_endpoint', [$accountHandler, 'setupRewardsPage']);
}

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
        {address_1} {address_2}
        {postcode} {city}
        {country}
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
    $replacements['{phone}'] = (array_key_exists('phone', $args)) ? $args['phone'] : '';
    $replacements['{country}'] = (array_key_exists('country', $args)) ? $args['country'] : '';
    return $replacements;
}, 10, 2 );



add_filter( 'woocommerce_billing_fields' , 'custom_override_billing_fields', 100, 1 );
function custom_override_billing_fields( $fields ) {
    $postalCode = __( 'Postal code', 'lavandre' );
    $city = __( 'City', 'lavandre' );
    $companyName = __( 'Company', 'lavandre' );
    $country = __( 'Country', 'lavandre' );
    $emailAddress = __( 'Email', 'lavandre' );
    $phoneNumber = __( 'Phone', 'lavandre' );

    $companyClass = (is_checkout()) ? 'form-row-first' : 'form-row-wide';

    $fields['billing_postcode']['placeholder'] = $postalCode;
    $fields['billing_postcode']['label'] = $postalCode;

    $fields['billing_city']['placeholder'] = $city;
    $fields['billing_city']['label'] = $city;

    $fields['billing_country']['placeholder'] = $country;
    $fields['billing_country']['label'] = $country;

    $fields['billing_email']['placeholder'] = $emailAddress;
    $fields['billing_email']['label'] = $emailAddress;

    $fields['billing_phone']['placeholder'] = $phoneNumber;
    $fields['billing_phone']['label'] = $phoneNumber;

    $fields['billing_email'] = update_address_field_label($fields['billing_email'], $emailAddress, 3, ['form-row-wide']);
    $fields['billing_phone'] = update_address_field_label($fields['billing_phone'], $phoneNumber, 4, ['form-row-wide']);
    $fields['billing_company'] = update_address_field_label($fields['billing_company'], $companyName, 5, [$companyClass]);
    $fields['billing_postcode'] = update_address_field_label($fields['billing_postcode'], $postalCode, 11, ['form-row-first']);
    $fields['billing_city'] = update_address_field_label($fields['billing_city'], $city, 11, ['form-row-last']);
    $fields['billing_country'] = update_address_field_label($fields['billing_country'], $country, 11, ['form-row-wide']);

    return $fields;
}

add_filter( 'woocommerce_shipping_fields' , 'custom_override_shipping_fields', 100, 1 );
function custom_override_shipping_fields( $fields ) {
    $companyName = __( 'Company', 'lavandre' );

    $companyClass = (is_checkout()) ? 'form-row-first' : 'form-row-wide';
    $fields['shipping_company'] = update_address_field_label($fields['shipping_company'], $companyName, 5, [$companyClass]);

    return $fields;
}

add_filter( 'woocommerce_my_account_my_orders_query', 'custom_my_account_orders', 10, 1 );
function custom_my_account_orders( $args ) {
    // Set the post per page
    $args['limit'] = 25;

    return $args;
}