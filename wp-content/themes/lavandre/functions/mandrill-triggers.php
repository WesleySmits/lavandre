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

function toDashCase($string): string
{
    return str_replace(' ', '-', strtolower($string));
}
