<?php

use Lavandre\Loyalty\LavandreLoyalty;
use Lavandre\Mailchimp\Mailchimp;
use Lavandre\Mandrill\Mandrill;
use Lavandre\Mailchimp\MailchimpSubscriptionStatus;
use Lavandre\User\UserHelper;

function ajax_auth_init() {
    add_action('wp_ajax_nopriv_ajaxemailcheck', 'ajax_emailCheck');
    add_action( 'wp_ajax_nopriv_ajaxlogin', 'ajax_login' );
    add_action( 'wp_ajax_nopriv_ajaxregister', 'ajax_register' );
    add_action( 'wp_ajax_nopriv_ajaxforgotpassword', 'ajax_forgotPassword' );
    add_action( 'wp_ajax_nopriv_ajaxaddtocart', 'ajax_addtocart' );
    add_action( 'wp_ajax_nopriv_update_cart', 'update_cart' );
    add_action( 'wp_ajax_nopriv_delete_cart_item', 'delete_cart_item' );
    add_action( 'wp_ajax_nopriv_update_cart_item', 'update_cart_item' );
    add_action( 'wp_ajax_nopriv_coupon_code_add', 'coupon_code_add' );
    add_action( 'wp_ajax_nopriv_coupon_code_remove', 'coupon_code_remove' );
    add_action('wp_ajax_nopriv_mailchimpsubscribe', 'ajax_MailchimpSubscribe');
    add_action( 'wp_ajax_nopriv_ajaxgetvariantprice', 'ajax_getVariantPrice' );
    add_action( 'wp_ajax_nopriv_ajaxreferafriendemail', 'ajax_referafriendemail' );
    add_action( 'wp_ajax_nopriv_ajaxproductbackinstockemail', 'ajax_productbackinstockemail' );
}

// Execute the action only if the user isn't logged in
add_action('init', 'ajax_auth_init');

add_action( 'wp_ajax_ajaxaddtocart', 'ajax_addtocart' );
add_action( 'wp_ajax_update_cart', 'update_cart' );
add_action( 'wp_ajax_delete_cart_item', 'delete_cart_item' );
add_action( 'wp_ajax_update_cart_item', 'update_cart_item' );
add_action( 'wp_ajax_coupon_code_add', 'coupon_code_add' );
add_action( 'wp_ajax_coupon_code_remove', 'coupon_code_remove' );
add_action( 'wp_ajax_mailchimpsubscribe', 'ajax_MailchimpSubscribe' );
add_action( 'wp_ajax_ajaxgetvariantprice', 'ajax_getVariantPrice' );
add_action( 'wp_ajax_ajaxaddloyaltypoints', 'ajax_addLoyaltyPoints' );
add_action( 'wp_ajax_ajaxdateofbirth', 'ajax_dateOfBirth' );
add_action( 'wp_ajax_ajaxredeemcoupon', 'ajax_redeemCoupon' );
add_action( 'wp_ajax_ajaxreferafriendemail', 'ajax_referafriendemail' );
add_action( 'wp_ajax_ajaxproductbackinstockemail', 'ajax_productbackinstockemail' );

function ajax_productbackinstockemail(): void
{
    $email = $_POST['email'];
    $size = $_POST['size'];
    $amount = $_POST['amount'];

    if (empty($email)) {
        wp_send_json_error( array(
            'message' => 'Incorrect data submitted',
        ) );
    }

    $userHelper = UserHelper::getInstance();
    $user = $userHelper->getUserByEmail($email);

    $firstName = $userHelper->getFirstName($user);
    $companyName = $userHelper->getCompanyName($user);
    $data = [
        "email_address" => $email,
        "status" => "subscribed",
        "status_if_new" => "subscribed",
        "tags" => [
            "product-back-in-stock",
            "product-back-in-stock-size-" . $size . "-" . $amount
        ]
    ];

    $mailchimp = Mailchimp::getInstance();
    $list_id = $_ENV['MAILCHIMP_LIST_ID_BACK_IN_STOCK'];

    $status = $mailchimp->subscribeUser($email, $list_id, $firstName, $companyName, [], $data);

    switch ($status) {
        case MailchimpSubscriptionStatus::ALREADY_SUBSCRIBED:
            wp_send_json_error( [__('You are already subscribed.')] );
            break;
        case MailchimpSubscriptionStatus::ERROR:
            wp_send_json_error( [__('Something went wrong.')] );
            break;
        default:
            wp_send_json_success();
            break;
    }

    wp_die();
}

function ajax_referafriendemail(): void
{
    $email = $_POST['email'];

    if (empty($email)) {
        wp_send_json_error( array(
            'message' => 'Incorrect data submitted',
        ) );
    }

    $user = wp_get_current_user();
    $userId = $user->ID;
    $LavandreLoyalty = LavandreLoyalty::getInstance();

    if ($userId === 0) {
        $user = get_user_by('email', 'ws@intermation.nl');
    }

    $setSponsor = $LavandreLoyalty->setSponsorRelationShip($user, $email);

    if ($setSponsor !== true) {
        $message = $setSponsor->get_error_message();

        wp_send_json_error( array(
            $message,
        ) );
    }
    wp_send_json_success([
        'message' => 'Email sent successfully',
        $setSponsor
    ]);

    wp_die();
}

function ajax_redeemCoupon() {
    $user = wp_get_current_user();
    $userId = $user->ID;

    if ($userId === 0) {
        return;
    }

    $pool_id = 'default';
    $email = $user->user_email;

    $couponId = $_POST['id'];

    if (!$couponId) {
        wp_send_json_error( array(
            'message' => 'Incorrect data submitted',
            'id' => $couponId
        ) );
    }

    $LavandreLoyalty = LavandreLoyalty::getInstance();
    $couponToRedeem = $LavandreLoyalty->unlockables->find($couponId);

    if (!$couponToRedeem) {
        wp_send_json_error( array(
            'message' => 'Can\'t find coupon',
            'id' => $couponId
        ) );
    }

    $cost = $couponToRedeem->cost;
    $points = '-' . $cost;
    $reward = $couponToRedeem->createReward($user);
    $userPoints = $LavandreLoyalty->getUserPoints($userId);

    if ($userPoints < $cost) {
        wp_send_json_error( array(
            'message' => 'Not enough points',
            'userPoints' => $userPoints,
            'cost' => $cost
        ) );
    }

    $updatePoints = $LavandreLoyalty->addPoints($email, $pool_id, $points);

    wp_send_json_success([
        $updatePoints,
        $reward
    ]);

    wp_die();
}

function ajax_dateOfBirth() {
    $user = wp_get_current_user();
    $userId = $user->ID;

    if ($userId === 0) {
        return;
    }

    $dateOfBirth = $_POST['date'];

    if (!$dateOfBirth) {
        wp_send_json_error( array(
            'message' => 'Incorrect data submitted',
            'dateOfBirth' => $dateOfBirth
        ) );
    }

    update_user_meta($userId, 'billing_birth_date', $dateOfBirth);

    $points = 15;
    $pool_id = 'default';
    $email = $user->user_email;

    $LavandreLoyalty = LavandreLoyalty::getInstance();
    $updatePoints = $LavandreLoyalty->addPoints($email, $pool_id, $points);

    wp_send_json_success([
        $dateOfBirth,
        get_user_meta($userId, 'billing_birth_date', false ),
        $updatePoints
    ]);

    wp_die();
}

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
            __('Please fill in a discount code.', 'lavandre'),
            esc_html( $coupon_code )
        ));
    }

    global $woocommerce;
    $coupon = new \WC_Coupon( $coupon_code );
    $applied_coupons = $woocommerce->cart->applied_coupons;

    if ( $coupon->get_code() !== $coupon_code ) {
        wp_send_json_error(sprintf(
            __( 'Fill in a valid coupon code', 'lavandre' ),
            esc_html( $coupon_code )
        ), $coupon);
    }

    if (in_array($coupon_code, $applied_coupons, true)) {
        wp_send_json_error(sprintf(
            __( 'Discount code "%s" has already been added.', 'lavandre' ),
            esc_html( $coupon_code )
        ), $coupon);
    }

    if (!$coupon->is_valid() ) {
        wp_send_json_error(sprintf(
            __( 'Fill in a valid coupon code', 'lavandre' ),
            esc_html( $coupon_code )
        ), $coupon);
    }

    foreach ($applied_coupons as $ac) {
        $applied_coupon = new \WC_Coupon( $ac );
        if ($applied_coupon->get_individual_use()) {
            wp_send_json_error(sprintf(
                __( 'Discount code "%s" has been added already and can\'t be used in combination with other codes.', 'woocommerce' ),
                $ac
            ));
        }
    }

    if ($coupon->get_individual_use() && count($applied_coupons) > 0) {
        wp_send_json_error('This discount code can not be used in combination with other codes.');
    }

    $success = $woocommerce->cart->add_discount( $coupon_code );
    wc_clear_notices();

    if (!$success) {
        wp_send_json_error(array('The code ' . $coupon_code . ' is not valid.'));
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
    $variation_id = $_POST['variation_id'] ? $_POST['variation_id'] : 0;
    $shortcode = $_POST['shortcode'];

    if (!$product_id) {
        wp_send_json_error( array('No product ID found'), 400 );
    }

    foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
        if (
            ($variation_id === 0 && $cart_item['product_id'] == $product_id)
            || (
                $cart_item['product_id'] == $product_id
                && $cart_item['variation_id'] == $variation_id
            )
        ) {
            WC()->cart->remove_cart_item( $cart_item_key );
            wp_send_json_success(getUpdatedCart($shortcode));
            break;
        }
    }

    wp_send_json_error( array('No product found'), 404 );

    wp_die();
}

function update_cart_item() {
    global $woocommerce;
    $product_id = $_POST['product_id'];
    $variation_id = $_POST['variation_id'];
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
            $woocommerce->cart->add_to_cart( $product_id, $quantity, $variation_id );

            $woocommerce->cart->calculate_totals();
        }
    }

    wp_send_json_success(array_merge(getUpdatedCart(), Array('quantity' => $quantity)));

    wp_die();
}

function ajax_MailchimpSubscribe() {
    $userHelper = UserHelper::getInstance();
    $email = $_POST['email'];

    $user = $userHelper->getUserByEmail($email);

    $firstName = $_POST['firstName'] ?? $userHelper->getFirstName($user);
    $companyName = $_POST['companyName'] ?? $userHelper->getCompanyName($user);

    $mailchimp = Mailchimp::getInstance();
    $list_id = $_ENV['MAILCHIMP_LIST_ID'];

    $status = $mailchimp->subscribeUser($email, $list_id, $firstName, $companyName);

    switch ($status) {
        case MailchimpSubscriptionStatus::ALREADY_SUBSCRIBED:
            wp_send_json_error( [__('You are already subscribed.')] );
            break;
        case MailchimpSubscriptionStatus::ERROR:
            wp_send_json_error( [__('Something went wrong.')] );
            break;
        default:
            wp_send_json_success([__('Welcome to the Lavandré family. We\'ll be in touch soon.')]);
            break;
    }

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
            wp_send_json_error(__('This email address is already associated with an account. If this account is yours, you can reset your password', 'lavandre'));
        }
    } else {
        wp_send_json_error(__('Invalid email address'));
    }

    wp_send_json_success();

    echo 'Yaay';
    wp_die();
}

function ajax_getVariantPrice() {
    $returnValue = array(
        'success' => false,
        'message' => "",
        'regularPrice' => 0,
        'salePrice' => 0
    );

    $product_id = $_POST['product_id'];
    $variation_id = $_POST['variation_id'] ?? 0;

    if (!$product_id || !$variation_id) {
        $returnValue['message'] = "Invalid data sent";
        wp_send_json_error($returnValue);
    }

    global $woocommerce;
    $product_variation = new WC_Product_Variation($_POST['variation_id']);
    $regular_price = $product_variation->get_regular_price();
    $sale_price = $product_variation->get_sale_price();

    if ($sale_price) {
        $returnValue['success'] = true;
        $returnValue['salePrice'] = $sale_price;
    }
    if ($regular_price) {
        $returnValue['success'] = true;
        $returnValue['regularPrice'] = $regular_price;
    }

    if ($returnValue['success'] === true) {
        wp_send_json_success($returnValue);
    } else {
        wp_send_json_error($returnValue);
    }

    wp_die();
}

function ajax_login() {
    $recaptchaToken = $_POST['recaptchaToken'];

    if ($recaptchaToken) {
        $validRecaptcha = verifyRecaptchaToken($_POST['recaptchaToken']);

        if ($validRecaptcha->success === false) {
            wp_send_json_error(array('Recaptcha not valid'), 400);
        }

        if ($validRecaptcha->score <= 0.6) {
            wp_send_json_error(array('score too low'), 400);
        }
    }

    $info = array();
    $info['user_login'] = $_POST['username'];
    $info['user_password'] = $_POST['password'];
    $info['remember'] = true;

    $user_signon = wp_signon( $info, false );
    if ( !is_wp_error($user_signon) ){
        wp_set_current_user($user_signon->ID);
        wp_set_auth_cookie($user_signon->ID);
        wp_send_json_success(__('Welcome back!', 'lavandre'));
    } else {
        wp_send_json_error(__('This combination of email and password is not known to us. Please try again or request a new password.', 'lavandre'), 401);
    }

    wp_die();
}

function verifyRecaptchaToken(string $token) {
    $client = new GuzzleHttp\Client();
    $res = $client->get('https://www.google.com/recaptcha/api/siteverify?secret=6Ldv2RkcAAAAAFkr8F3X2D548m3z1X66-SA0KI60&response=' . $token);
    $response = (string) $res->getBody();
    $json = json_decode($response);

    return $json;
}

function ajax_register() {
    $recaptchaToken = $_POST['recaptchaToken'];

    if ($recaptchaToken) {
        $validRecaptcha = verifyRecaptchaToken($_POST['recaptchaToken']);

        if ($validRecaptcha->success === false) {
            wp_send_json_error(array('Recaptcha not valid'), 400);
        }

        if ($validRecaptcha->score <= 0.6) {
            wp_send_json_error(array('score too low'), 400);
        }
    }

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
        $info['user_login'] = $_POST['email'];
        $info['user_password'] = $_POST['password'];
        $info['remember'] = true;

        $user_login = array(
            'user_login' => $user_data['user_login'],
            'user_password' => $user_data['user_pass'],
            'remember' => true
        );

        wp_signon( $user_login, false );

        $mandrill = Mandrill::getInstance();
        $mandrill->sendMail('lavandre-new-account', $_POST['email']);
        wp_send_json_success(__('You have registered successfully!', 'lavandre'));
    } else {
        if (isset($user_id->errors['empty_user_login'])) {
            wp_send_json_error(array('User Name and Email are mandatory'), 401);
        } elseif (isset($user_id->errors['existing_user_login'])) {
            wp_send_json_error(array('User name already exists.'), 500);
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
        wp_send_json_error( __(__('Already logged in', 'lavandre')) );
    }

    global $wpdb;
	$username = $_POST['user_login'];

    if (empty($username)) {
        wp_send_json_error( __(__('Username is empty'), 'lavandre') );
    }

    if (is_email($username)) {
        if (!email_exists($username)) {
            wp_send_json_error(__('No user with that e-mail address', 'lavandre'), 401 );
        }

        $get_by = 'email';
    }
    else if (validate_username($username)) {
        if (!username_exists($username)) {
            wp_send_json_error( __('No user with that username', 'lavandre') );
        }

        $get_by = 'login';
    } else {
        wp_send_json_error( __('Invalid credentials', 'lavandre') );
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

    $mandrill = Mandrill::getInstance();
    $mandrill->sendMail('lavandre-password-forget', $username, $name, $merge_vars);

    wp_send_json_success(__('We have sent you an email with a link to change your password.', 'lavandre'));
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
        $variation_id = $_POST['variation_id'];
        $quantity = $_POST['quantity'];

        $product = wc_get_product( $product_id );
        $subscriptionType = $_POST['subscription'];
        $hasSchemes = WCS_ATT_Product_Schemes::has_subscription_schemes($product);
        $extraCartData = [];

        if ($hasSchemes) {
            $scheme = WCS_ATT_Product_Schemes::set_subscription_scheme($product, $subscriptionType);
            $extraCartData = [ 'wcsatt_data' => array(
                'active_subscription_scheme' => $subscriptionType,
            ) ];
        }

        $cart = WC()->cart;
        $cartItemKey = $cart->add_to_cart( $product_id, $quantity, $variation_id, [], $extraCartData );
        $cartItem = $cart->get_cart_item( $cartItemKey );

        $returnValue['success'] = ($cartItemKey) ? true : false;

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
        if (!username_exists($username)) {
            wp_send_json_error( array('No user with that username') );
        }

        $get_by = 'login';
    } else {
        wp_send_json_error( array('Invalid credentials') );
    }
}

function ajax_addLoyaltyPoints(): void
{
    $LavandreLoyalty = LavandreLoyalty::getInstance();

    $user = wp_get_current_user();
    $userId = $user->ID;

    if ($userId === 0) {
        return;
    }

    $email = $user->user_email;
    $points = (int) $_POST['points'];
    $pool_id = $_POST['pool'] ?? 'default';
    $type = $_POST['type'] ?? null;

    if (!$email || !$points || !$pool_id || !$type) {
        wp_send_json_error( array(
            'message' => 'Incorrect data submitted',
            'email' => $email,
            'pool' => $pool_id,
            'points' => $points,
            'type' => $type
        ) );
    }

    $isCompleted = (bool) get_user_meta($userId, $type, true );

    if ($isCompleted) {
        wp_send_json_error( array(
            'message' => 'Already completed this action',
            'email' => $email,
            'pool' => $pool_id,
            'points' => $points,
            'type' => $type
        ) );
    }

    update_user_meta($userId, $type, true);

    $updatePoints = $LavandreLoyalty->addPoints($email, $pool_id, $points, $type);
    wp_send_json_success($updatePoints);

    wp_die();
}
