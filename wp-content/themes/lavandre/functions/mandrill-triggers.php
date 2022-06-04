<?php

use Lavandre\Mailchimp\Mailchimp;
use Lavandre\Mandrill\Mandrill;
use Lavandre\User\UserHelper;

add_action( 'woocommerce_variation_set_stock', 'send_back_in_stock_mail_trigger' );
function send_back_in_stock_mail_trigger( $product ) {
    $data = $product->get_data();
    $changes = $product->get_changes();

    $old_stock = intval($data['stock_quantity']);
    $new_stock = intval($changes['stock_quantity']);

    if ($old_stock !== 0) {
        return;
    }

    if ($new_stock === 0) {
        return;
    }

    $size = $product->get_attribute('pa_size');
    $amount = toDashCase($product->get_attribute('pa_amount'));
    $tag = "product-back-in-stock-size-$size-$amount";

    $mailchimp = Mailchimp::getInstance();
    $members = $mailchimp->getSubscribedListMembers($_ENV['MAILCHIMP_LIST_ID_BACK_IN_STOCK'], $tag);

    $userHelper = UserHelper::getInstance();
    $mandrill = Mandrill::getInstance();


    $title = toDashCase($product->get_title());
    $image = "https://lavandre.com/wp-content/themes/lavandre/assets/images/email/back-in-stock-$title.jpg";

    $merge_vars = [
        [
            'name' => 'PRODUCTIMAGE',
            'content' => $image
        ],
        [
            'name' => 'PRODUCTTITLE',
            'content' => $product->get_title()
        ],
        [
            'name' => 'PRODUCTSIZE',
            'content' => $size
        ],
        [
            'name' => 'PRODUCTLINK',
            'content' => $product->get_permalink()
        ]
    ];

    $recipients = [];

    foreach ($members as $email) {
        $user = $userHelper->getUserByEmail($email);
        $name = $userHelper->getName($user);

        $recipients[] = [
            'email' => $email,
            'name' => $name,
            'type' => 'to'
        ];
    }

    if (count($recipients) === 0) {
        var_dump('no recipients');
        return;
    }
    $mandrill->sendMails('lavandre-back-in-stock', $recipients, $merge_vars, 'handlebars');
}

add_action( 'woocommerce_order_status_changed', 'action_woocommerce_order_status_changed', 10, 4 );
function action_woocommerce_order_status_changed( $this_get_id, $this_status_transition_from, $this_status_transition_to, $instance ) {
    $template_name = '';
    if ($this_status_transition_to !== 'processing' && $this_status_transition_to !== 'completed') {
        return;
    }

    $template_name = 'lavandre-order-' . $this_status_transition_to;

    $order = wc_get_order($this_get_id);

    $username = $order->get_billing_email();
    $name = $order->get_formatted_billing_full_name();

    $deliveryDate = get_delivery_date_text('nl_NL');
    $orderDate = $order->get_date_created()->date('d F Y');
    $deliveryOption = 'PostNL bezorging';
    $billingAddress = $order->get_formatted_billing_address();
    $deliveryAddress = $order->get_formatted_shipping_address();

    $tracking_link = getTrackAndTraceLinkFromOrder($this_get_id);

    $products = [];
    foreach ($order->get_items() as $item) {
        $product = $item->get_product();
        $products[] = [
            'PRODUCTIMAGE' => str_replace('.local', '.com', wp_get_attachment_url($product->get_image_id())),
            'PRODUCTLINK' => $product->get_permalink(),
            'PRODUCTTITLE' => $product->get_title(),
            'PRODUCTPRICE' => '€ '. wc_format_decimal($item->get_total() / $item->get_quantity(), 2),
            'PRODUCTTOTALPRICE' => '€ '. wc_format_decimal($item->get_total(), 2),
            'PRODUCTCOLOR' => $product->get_attribute('pa_color'),
            'PRODUCTSIZE' => $product->get_attribute('pa_size'),
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
            'content' => '€ '. wc_format_decimal($order->get_shipping_total(), 2)
        ),
        array(
            'name' => 'SUBTOTAL',
            'content' => '€ '. wc_format_decimal($order->get_subtotal(), 2)
        ),
        array(
            'name' => 'ORDERDISCOUNT',
            'content' => '€ '. wc_format_decimal($order->get_total_discount(), 2)
        ),
        array(
            'name' => 'ORDERDISCOUNTVALUE',
            'content' => $order->get_total_discount()
        ),
        array(
            'name' => 'TOTALTAX',
            'content' => '€ '. wc_format_decimal($order->get_total_tax(), 2)
        ),
        array(
            'name' => 'TOTALPRICE',
            'content' => '€ '. wc_format_decimal($order->get_total(), 2)
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
            'name' => 'ORDERDATE',
            'content' => $orderDate
        ),
        array(
            'name' => 'DELIVERYOPTION',
            'content' => $deliveryOption
        ),
        array(
            'name' => 'ADDRESS',
            'content' => $billingAddress
        ),
        array(
            'name' => 'DELIVERYADDRESS',
            'content' => $deliveryAddress
        ),
        array(
            'name' => 'TRACKINGNUMBER',
            'content' => $tracking_link
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

    $mandrill = Mandrill::getInstance();
    $mandrill->sendMail($template_name, $username, $name, $merge_vars, 'handlebars');
};
