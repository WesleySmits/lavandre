<?php
/**
 * Thankyou page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/thankyou.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.7.0
 */

defined( 'ABSPATH' ) || exit;

$customer_id = $order->get_customer_id();

$addresses = apply_filters(
    'woocommerce_my_account_get_addresses',
    array(
        'billing'  => __( 'Billing address', 'woocommerce' ),
        'shipping' => __( 'Shipping address', 'woocommerce' ),
    ),
    $customer_id
);

$billing_address = wc_get_account_formatted_address('billing');
$shipping_address = wc_get_account_formatted_address('shipping');

if (!$billing_address) {
    $billing_address = formatted_billing_address($order);
}

if (!$shipping_address) {
    $shipping_address = formatted_shipping_address($order);
}

function formatted_shipping_address($order)
{
    return
        $order->shipping_address_1 . '<br/>' .
        $order->shipping_address_2 . ' ' .
        $order->shipping_city      . ', ' .
        $order->shipping_state     . ' ' .
        $order->shipping_postcode . '<br/>' .
        WC()->countries->countries[ $order->shipping_country ];
}

function formatted_billing_address($order)
{
    return
        $order->billing_address_1 . '<br/>' .
        $order->billing_address_2 . ' ' .
        $order->billing_city      . ', ' .
        $order->billing_state     . ' ' .
        $order->billing_postcode . '<br/>' .
        WC()->countries->countries[ $order->billing_country ];
}
?>

<div class="full-width-banner-block ww-thank-you">
    <div class="full-width-banner-block__link">
        <div class="ww-order-overview">
            <section>
                <header>
                    <a href="/" class="ww-site-header__logo" aria-label="Lavandré logo">
                        <?php include get_stylesheet_directory() . '/public/images/logos/lavandre-logo-open.svg'; ?>
                    </a>

                    <h1><?php _e('Thank you for your purchase!', 'lavandre'); ?></h1>
                    <p>
                        <?php _e('Within a few minutes you will receive an e-mail with your order details.', 'lavandre'); ?>
                        <br />
                    </p>
                </header>
            </section>

            <?php include get_stylesheet_directory() . '/woocommerce/partials/overview.php'; ?>
        </div>
    </div>

    <div class="full-width-banner-block__link">
        <figure class="overlay-text">
            <img class="cover-image"
                src="https://lavandre.com/wp-content/uploads/2021/11/mathilde-langevin-dCX6Z0xjAPM-unsplash-scaled.jpeg"
                loading="lazy" alt="">
        </figure>
    </div>
    <div></div>
</div>
