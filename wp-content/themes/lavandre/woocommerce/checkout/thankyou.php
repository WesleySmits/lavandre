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

<div class="ww-thank-you flex ww-container ww-container--medium">
    <div class="thank-you-column">
        <section class="ww-order-overview thank-you-section thank-you-section--has-footer">
            <header class="thank-you-section__header">
                <h1>
                    <?php include get_stylesheet_directory() . '/partials/icons/success.svg.php'; ?>
                    <span><?php _e('Your payment has succeeded', 'hello-elementor-child'); ?></span>
                </h1>
                <small><?php echo sprintf(__('Your order number is: <strong>%s</strong>', 'hello-elementor-child'), $order->get_order_number()); ?></small>
                <br/>
                <small><?php _e('Thank you for your order!', 'hello-elementor-child'); ?></small>
            </header>

            <footer class="thank-you-section__footer">
                <table class="order-totals">
                    <tbody>
                        <tr>
                            <th><?php _e('Subtotal', 'hello-elementor-child'); ?></th>
                            <td><?php echo $order->get_subtotal_to_display(); ?></td>
                        </tr>

                        <tr>
                            <th><?php _e('Shipping', 'hello-elementor-child'); ?></th>
                            <td><?php echo ($order->get_shipping_total() !== '0.00') ? wc_price($order->get_shipping_total()) : __('Free'); ?></td>
                        </tr>

                        <tr>
                            <th><?php _e('VAT', 'hello-elementor-child'); ?></th>
                            <td><?php echo wc_price($order->get_total_tax()); ?></td>
                        </tr>

                        <tr>
                            <th><strong><?php _e('Total', 'hello-elementor-child'); ?></strong></th>
                            <td><strong><?php echo $order->get_formatted_order_total(); ?></strong></td>
                        </tr>
                    </tbody>
                </table>

                <small><?php _e('You will find the invoice in the confirmation email.', 'hello-elementor-child'); ?></small>
            </footer>
        </section>

        <section class="ww-order-progress thank-you-section">
            <header class="thank-you-section__header">
                <h1><?php _e('What happens now?', 'hello-elementor-child'); ?></h1>
            </header>

            <div class="thank-you-section__content">
                <ul class="ww-timeline no-list">
                    <li class="ww-timeline__item">
                        <div class="ww-timeline__icon">
                            <?php include get_stylesheet_directory() . '/partials/icons/delivery.svg.php'; ?>
                        </div>
                        <p> <?php echo sprintf(__('Within a few minutes you will receive a confirmation email on <strong>%s</strong>.', 'hello-elementor-child'), $order->get_billing_email()); ?></p>
                    </li>

                    <li class="ww-timeline__item">
                        <div class="ww-timeline__icon">
                            <?php include get_stylesheet_directory() . '/partials/icons/envelope.svg.php'; ?>
                        </div>
                        <p><?php _e('In the meantime, we will ship your order as soon as possible.', 'hello-elementor-child'); ?></p>

                        <h3><?php _e('Delivery address', 'hello-elementor-child'); ?></h3>
                        <address><?php echo wp_kses_post($shipping_address); ?></address>
                    </li>

                    <li class="ww-timeline__item">
                        <div class="ww-timeline__icon">
                            <?php include get_stylesheet_directory() . '/partials/icons/gift.svg.php'; ?>
                        </div>
                        <p><?php _e('Have fun with your purchase!', 'hello-elementor-child'); ?></p>
                    </li>
                </ul>
            </div>
        </section>
    </div>

    <div class="thank-you-column">
        <section class="ww-item-overview thank-you-section">
            <header class="thank-you-section__header">
                <h1><?php _e('Overview', 'hello-elementor-child'); ?></h1>
                <small><?php _e('Delivery by PostNL', 'hello-elementor-child'); ?></small>
            </header>

            <div class="thank-you-section__content">
                <ul class="mini-cart mini-cart--thank-you">
                    <?php foreach ($order->get_items() as $item_id => $item ) { ?>
                        <?php $product = $item->get_product(); ?>

                        <li class="mini-cart__item">
                            <div class="mini-cart__image">
                                <?php echo $product->get_image('thumbnail'); ?>
                            </div>

                            <div class="mini-cart__name">
                                <?php echo $product->get_name() ?>
                            </div>

                            <div class="mini-cart__price">
                                <?php echo wc_price($item->get_subtotal()); ?>
                                <?php if ($item->get_quantity() > 1) { ?>
                                    <div>
                                        <?php echo wc_price($item->get_quantity()); ?>
                                        <span> x </span>
                                        <?php echo wc_price($item->get_subtotal() / $item->get_quantity()); ?>
                                    </div>
                                <?php } ?>
                            </div>
                        </li>
                    <?php } ?>
                </ul>
            </div>
        </section>

        <section class="ww-billing-address thank-you-section">
            <header class="thank-you-section__header thank-you-section__header--has-mini-heading">
                <h1><?php _e('Invoice', 'hello-elementor-child'); ?></h1>
                <small class="mini-heading"><strong><?php echo esc_html( $addresses['billing'] ); ?></strong></small>
            </header>

            <div class="thank-you-section__content">
                <address><?php echo wp_kses_post($billing_address); ?></address>
            </div>
        </section>
    </div>
</div>
