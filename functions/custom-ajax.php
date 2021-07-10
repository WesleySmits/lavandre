<?php

function ajax_auth_init() {
    add_action('wp_ajax_no_priv_ajaxemailcheck', 'ajax_emailCheck');
    add_action('wp_ajax_nopriv_ajaxemailcheck', 'ajax_emailCheck');

    add_action( 'wp_ajax_no_priv_ajaxlogin', 'ajax_login' );
    add_action( 'wp_ajax_nopriv_ajaxlogin', 'ajax_login' );

    add_action( 'wp_ajax_no_priv_ajaxregister', 'ajax_register' );
    add_action( 'wp_ajax_nopriv_ajaxregister', 'ajax_register' );
}

// Execute the action only if the user isn't logged in
add_action('init', 'ajax_auth_init');

add_action( 'wp_ajax_ajaxaddtocart', 'ajax_addtocart' );
add_action( 'wp_ajax_nopriv_ajaxaddtocart', 'ajax_addtocart' );

add_action( 'wp_ajax_update_cart', 'update_cart' );
add_action( 'wp_ajax_nopriv_update_cart', 'update_cart' );

add_action( 'wp_ajax_delete_cart_item', 'delete_cart_item' );
add_action( 'wp_ajax_nopriv_delete_cart_item', 'delete_cart_item' );

add_action( 'wp_ajax_update_cart_item', 'update_cart_item' );
add_action( 'wp_ajax_nopriv_update_cart_item', 'update_cart_item' );

add_action( 'wp_ajax_coupon_code_add', 'coupon_code_add' );
add_action( 'wp_ajax_nopriv_coupon_code_add', 'coupon_code_add' );

add_action( 'wp_ajax_coupon_code_remove', 'coupon_code_remove' );
add_action( 'wp_ajax_nopriv_coupon_code_remove', 'coupon_code_remove' );

add_action('wp_ajax_mailchimpsubscribe', 'ajax_MailchimpSubscribe');
add_action('wp_ajax_nopriv_mailchimpsubscribe', 'ajax_MailchimpSubscribe');

add_action( 'wp_ajax_no_priv_ajaxforgotpassword', 'ajax_forgotPassword' );
add_action( 'wp_ajax_nopriv_ajaxforgotpassword', 'ajax_forgotPassword' );

function coupon_code_remove() {
    global $woocommerce;
    $coupon_code = $_POST['code'];
    $applied_coupons = $woocommerce->cart->applied_coupons;

    if (!in_array($coupon_code, $applied_coupons, true)) {
        wp_send_json_error(__('Coupon code is niet toegepast in de winkelmand.'));
    }

    $success = $woocommerce->cart->remove_coupon($coupon_code);
    wc_clear_notices();

    if (!$success) {
        wp_send_json_error(__('Coupon code kon niet worden verwijderd.'));
    }

    $woocommerce->cart->calculate_totals();

    wp_send_json_success(getUpdatedCart());
    wp_die();
}

function coupon_code_add() {
    $coupon_code = $_POST['code'];
    if (!isset($coupon_code) || $coupon_code === '') {
        wp_send_json_error(sprintf(
            __('Voer alstublieft een coupon code in.', 'woocommerce'),
            esc_html( $coupon_code )
        ), $coupon);
    }

    global $woocommerce;
    $coupon = new \WC_Coupon( $coupon_code );
    $applied_coupons = $woocommerce->cart->applied_coupons;

    if ( $coupon->get_code() !== $coupon_code ) {
        wp_send_json_error(sprintf(
            __( 'Helaas, deze code is niet geldig.', 'woocommerce' ),
            esc_html( $coupon_code )
        ), $coupon);
    }

    if (in_array($coupon_code, $applied_coupons, true)) {
        wp_send_json_error(sprintf(
            __( 'Coupon code "%s" is al toegepast.', 'woocommerce' ),
            esc_html( $coupon_code )
        ), $coupon);
    }

    if (!$coupon->is_valid() ) {
        wp_send_json_error(sprintf(
            __( 'Helaas, deze code is niet geldig.', 'woocommerce' ),
            esc_html( $coupon_code )
        ), $coupon);
    }

    foreach ($applied_coupons as $ac) {
        $applied_coupon = new \WC_Coupon( $ac );
        if ($applied_coupon->get_individual_use()) {
            wp_send_json_error(sprintf(
                __( 'Coupon code "%s" is al toegepast en kan niet samen worden gebruikt met andere coupon codes.', 'woocommerce' ),
                $ac
            ));
        }
    }

    if ($coupon->get_individual_use() && count($applied_coupons) > 0) {
        wp_send_json_error('Deze coupon code kan niet in combinatie met andere coupons worden gebruikt.');
    }

    $success = $woocommerce->cart->add_discount( $coupon_code );
    wc_clear_notices();

    if (!$success) {
        wp_send_json_error(array('De code ' . $coupon_code . ' is niet gelid'));
    }

    wp_send_json_success(getUpdatedCart());
    wp_die();
}

function update_cart() {
    $shortcode = $_POST['shortcode'];
    $updated_content = getUpdatedCart($shortcode);
    wp_send_json_success($updated_content);
}

function getUpdatedCart($shortcode = '[ww_custom_cart]'): array {
    global $woocommerce;
    return [
        "content" => do_shortcode( $shortcode ),
        'total-cart-quantity' => $woocommerce->cart->cart_contents_count
    ];
}

function delete_cart_item() {
    $product_id = $_POST['product_id'];
    $shortcode = $_POST['shortcode'];

    if (!$product_id) {
        wp_send_json_error( array('No product ID found') );
    }

    foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
        if ( $cart_item['product_id'] == $product_id ) {
            WC()->cart->remove_cart_item( $cart_item_key );
            break;
        }
    }

    wp_send_json_success(getUpdatedCart($shortcode));

    wp_die();
}

function update_cart_item() {
    global $woocommerce;
    $product_id = $_POST['product_id'];
    $quantity = (int)$_POST['quantity'];

    if (!$product_id || !$quantity) {
        wp_send_json_error( array('No product ID or quantity found') );
    }

    foreach ( $woocommerce->cart->get_cart() as $cart_item_key => $cart_item ) {
        if ( $cart_item['product_id'] == $product_id ) {

            $max_stock = wc_get_product($product_id)->get_stock_quantity();
            if ($quantity > $max_stock) {
                $quantity = $max_stock;
            }

            $woocommerce->cart->remove_cart_item( $cart_item_key );
            $woocommerce->cart->add_to_cart( $product_id, $quantity );

            $woocommerce->cart->calculate_totals();
        }
    }

    wp_send_json_success(array_merge(getUpdatedCart(), Array('quantity' => $quantity)));

    wp_die();
}


function ajax_MailchimpSubscribe() {
    $email = $_POST['email'];
    $mailchimp = new \MailchimpMarketing\ApiClient();
    $apiKey = '8ae12503b5f6c8e3d9c5fc2f8a7bbd9a-us17';
    $server = 'us17';
    $list_id = "c06124c73b";

    $mailchimp->setConfig([
        'apiKey' => $apiKey,
        'server' => $server
    ]);
    $subscriber_hash = md5(strtolower($email));
    $exists = false;
    $response = '';

    $subscribed = mc_checklist($email, false, $apiKey, $list_id, $server);

    if ($subscribed != '404') {
        wp_send_json_error( ['U bent al ingeschreven.'] );
    }

    try {
        $response = $mailchimp->lists->setListMember($list_id, $subscriber_hash, [
            "email_address" => $email,
            "status" => "subscribed",
            "status_if_new" => "subscribed"
        ]);
    } catch (MailchimpMarketing\ApiException $e) {
        wp_send_json_error( [__('U bent al ingeschreven.')] );
        echo $e->getMessage();
    }

    wp_send_json_success([__('U bent aangemeld.')]);
    wp_die();
}



function ajax_emailCheck() {
    global $current_user;
    if (is_user_logged_in()) {
        wp_send_json_error( array(__('Already logged in')) );
    }

    global $wpdb;
	$email = $_POST['email'];

    if (empty($email)) {
        wp_send_json_error(__('Email is empty'));
    }

    if (is_email($email)) {
        if (email_exists($email)) {
            wp_send_json_error(__('Er bestaat al een account met dit e-mailadres. U kunt door middel van het inlogformulier inloggen om verder te gaan.', 'woocommerce'));
        }
    } else {
        wp_send_json_error(__('Invalid email address'));
    }

    wp_send_json_success();

    echo 'Yaay';
    wp_die();
}

function ajax_login() {
    $info = array();
    $info['user_login'] = $_POST['username'];
    $info['user_password'] = $_POST['password'];
    $info['remember'] = true;

    $user_signon = wp_signon( $info, false );
    if ( !is_wp_error($user_signon) ){
        wp_set_current_user($user_signon->ID);
        wp_set_auth_cookie($user_signon->ID);
        wp_send_json_success();
    } else {
        wp_send_json_error(array(), 401);
    }

    wp_die();
}

function ajax_register() {
    $user_data = array(
        'user_login' => $_POST['email'],
        'user_email' => $_POST['email'],
        'user_pass' => $_POST['password'],
        'user_nicename' => $_POST['first_name'],
        'display_name' => $_POST['first_name'],
        'first_name' => $_POST['first_name'],
        'last_name' => $_POST['last_name'],
        'role' => 'customer'
    );

    $user_id = wp_insert_user($user_data);

    if (!is_wp_error($user_id)) {

        $info = array();
        $info['user_login'] = $_POST['username'];
        $info['user_password'] = $_POST['password'];
        $info['remember'] = true;

        $user_login = array(
            'user_login' => $user_data['user_login'],
            'user_password' => $user_data['user_pass'],
            'remember' => true
        );

        $user_signon = wp_signon( $user_login, false );

        $name = $_POST['first_name'] . ' ' . $_POST['last_name'];
        $merge_vars = array(
            array(
                'name' => 'FNAME',
                'content' => $_POST['first_name']
            ),
            array(
                'name' => 'LNAME',
                'content' => $_POST['last_name']
            ),
            array(
                'name' => 'EMAIL',
                'content' => $_POST['email']
            )
        );

        sendMandrillMail('new-account', $_POST['email'], $name, $merge_vars);
        wp_send_json_success(array($user_login));
    } else {
        if (isset($user_id->errors['empty_user_login'])) {
            wp_send_json_error(array('User Name and Email are mandatory'), 401);
        } elseif (isset($user_id->errors['existing_user_login'])) {
            wp_send_json_error(array('User name already exixts.'), 500);
        } else {
            wp_send_json_error(array(__('Error Occured please fill in the sign up form carefully.')), 500);
        }
    }
    wp_send_json_error(array('Technical issue', 500));
    wp_die();
}

function ajax_forgotPassword() {
    global $current_user;
    if (is_user_logged_in()) {
        wp_send_json_error( array(__('Already logged in')) );
    }

    global $wpdb;
	$username = $_POST['user_login'];

    if (empty($username)) {
        wp_send_json_error( array(__('Username is empty')) );
    }

    if (is_email($username)) {
        if (!email_exists($username)) {
            wp_send_json_error( array('No user with that e-mail address') );
        }

        $get_by = 'email';
    }
    else if (validate_username($username)) {
        if (!username_exists($username)) {
            wp_send_json_error( array('No user with that username') );
        }

        $get_by = 'login';
    } else {
        wp_send_json_error( array('Invalid credentials') );
    }

    $user = get_user_by('email', $username);
    $key = get_password_reset_key( $user );
    $resetPasswordUrl = esc_url_raw(wp_lostpassword_url() . '?key=' . $key . '&id=' . $user->id);

    $merge_vars = array(
        array(
            'name' => 'FNAME',
            'content' => $user->first_name
        ),
        array(
            'name' => 'LNAME',
            'content' => $user->last_name
        ),
        array(
            'name' => 'RESETLINK',
            'content' => $resetPasswordUrl
        )
    );

    $name = ($user->first_name) ? $user->first_name . ' ' . $user->last_name : 'Recipient 1';

    sendMandrillMail('password-forget', $username, $name, $merge_vars);

    wp_send_json_success($result);
    wp_die();
}

    function ajax_addtocart() {
        $returnValue = array(
            'success' => false,
            'message' => ""
        );

	if( empty( $_POST['product_id'] ) ) {
		$returnValue['message'] = "no product id provided";
	} elseif (empty( $_POST['quantity'] )) {
		$returnValue['message'] = "no quantity provided";
    } else {
        $product_id = $_POST['product_id'];
        $quantity = $_POST['quantity'];
        $cart = WC()->cart;

        $returnValue['success'] = ($cart->add_to_cart( $product_id, $quantity )) ? true : false;

        if( !$returnValue['success'] ) {
            $returnValue['message'] = "product could not be added to cart";
        } else {
            $returnValue['message'] = "product added to cart";
            $returnValue['cartAmount'] = $cart->get_cart_contents_count();
        }
    }

    if ($returnValue['success']) {
        wp_send_json_success($returnValue);
    } else {
        wp_send_json_error($returnValue);
    }

	wp_die();
}

function checkIfUserExists() {
    global $current_user;
    if (is_user_logged_in()) {
        wp_send_json_error( array('Already logged in') );
    }

    check_ajax_referer( 'ajax-forgot-nonce', 'security' );

    global $wpdb;
	$username = $_POST['user_login'];

    if (empty($username)) {
        wp_send_json_error( array('Username is empty') );
    }

    if (is_email($username)) {
        if (!email_exists($username)) {
            wp_send_json_error( array('No user with that e-mail address') );
        }

        $get_by = 'email';
    }
    else if (validate_username($username)) {
        if (!username_exists($useranme)) {
            wp_send_json_error( array('No user with that username') );
        }

        $get_by = 'login';
    } else {
        wp_send_json_error( array('Invalid credentials') );
    }
}

function mc_checklist($email, $debug, $apikey, $listid, $server) {
    $userid = md5($email);
    $auth = base64_encode( 'user:'. $apikey );
    $data = array(
        'apikey'        => $apikey,
        'email_address' => $email
        );
    $json_data = json_encode($data);
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://'.$server.'.api.mailchimp.com/3.0/lists/'.$listid.'/members/' . $userid);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json',
        'Authorization: Basic '. $auth));
    curl_setopt($ch, CURLOPT_USERAGENT, 'PHP-MCAPI/2.0');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
    $result = curl_exec($ch);
    if ($debug) {
        var_dump($result);
    }
    $json = json_decode($result);
    return $json->{'status'};
}

function sendMandrillMail($template_name, $email, $name, $merge_vars, $language = 'mailchimp') {
    $mandrill = new Mandrill("-sZvRMD3FMTpOKt9NCibNg");
    $info = $mandrill->templates->info($template_name);
    $template_content = [];

    $message = array(
        'subject' => $info['subject'],
        'from_email' => $info['from_email'],
        'from_name' => $info['from_name'],
        'html' => $info['publish_code'],
        'to' => array(array('email' => $email, 'name' => $name)),
        'merge_language' => $language,
        'global_merge_vars' => $merge_vars
    );

    $result = $mandrill->messages->sendTemplate($template_name, $template_content, $message);
}
