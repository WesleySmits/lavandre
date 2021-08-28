<?php
/**
 * View Order
 *
 * Shows the details of a particular order on the account page.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/view-order.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.0.0
 */

defined( 'ABSPATH' ) || exit;
?>

<div class="back-to-section flex">
    <a href="/my-account/orders/" class="cta-button alt inline back-to-cart-button">
        <?php include get_stylesheet_directory() . '/partials/icons/back.svg.php'; ?>
        <span><?php _e('Back to overview', 'lavandre');?></span>
    </a>
</div>

<div class="order-details">
    <header class="order-details__header">
        <div class="order-details__kvp order-details__date">
            <?php include get_stylesheet_directory() . '/partials/icons/calendar.svg.php'; ?>
            <b><?php _e('Besteld op', 'woocommerce') ?>: </b>
            <time class="order-details__value" datetime="<?php echo esc_attr( $order->get_date_created()->date( 'c' ) ); ?>">
                <?php echo $order->get_date_created()->date_i18n('d F Y'); ?>
            </time>
        </div>

        <div class="order-details__kvp order-details__number">
            <?php include get_stylesheet_directory() . '/partials/icons/ordernumber.svg.php'; ?>
            <b><?php _e('Ordernummer', 'woocommerce') ?>: </b>
            <span class="order-details__value"><?php echo $order->get_order_number() ?></span>
        </div>

        <div class="order-details__shipping-address panel">
            <button class="order-details__kvp order-details__toggle-shipping" data-curtain-toggle="shipping-address">
                <?php include get_stylesheet_directory() . '/partials/icons/delivery.svg.php'; ?>
                <b><?php _e('Bezorgadres', 'woocommerce') ?>: </b>
                <span class="order-details__value"><?php echo $order->data['shipping']['first_name'] . ' ' . $order->data['shipping']['last_name']; ?></span>

                <?php include get_stylesheet_directory() . '/partials/icons/chevron-down.svg.php'; ?>
            </button>
            <address data-curtain-content="shipping-address">
                <?php
                    $shipping_address = $order->data['shipping'];
                    foreach($shipping_address as $key => $value) {
                        if ($value === '') {
                            continue;
                        }
                        echo $value;

                        if (
                            $key === 'last_name'
                            || $key === 'company'
                            || $key === 'address_1'
                        ) {
                            echo '<br/>';
                        } else {
                            echo ' ';
                        };
                    }
                ?>
            </address>
        </div>
    </header>

    <section class="order-details__product-information">
        <?php include 'partials/_order-block.php'; ?>
    </section>

    <section class="order-details__payment-information">
        <header>
            <h1><?php _e('Betaaldetails', 'woocommerce'); ?></h1>
        </header>

        <div class="payment-information__wrapper panel">
            <div class="panel__row payment-subtotal">
                <span><?php _e('Totaal artikelen', 'woocommerce'); ?></span>
                <span><?php echo $order->get_subtotal_to_display(); ?></span>
            </div>

            <div class="panel__row payment-shipping-total">
                <span><?php _e('Verzendkosten', 'woocommerce'); ?></span>
                <span><?php echo wc_price($order->get_shipping_total()); ?></span>
            </div>

            <div class="panel__row payment-tas-total">
                <span><?php _e('BTW', 'woocommerce'); ?></span>
                <span><?php echo wc_price($order->get_total_tax()); ?></span>
            </div>

            <div class="panel__row panel__row--highlight payment-total">
                <span><?php _e('Totaal', 'woocommerce'); ?></span>
                <span><?php echo $order->get_formatted_order_total(); ?></span>
            </div>

            <?php $payment_method_title = $order->get_payment_method_title(); ?>
            <?php if ($payment_method_title) { ?>
                <footer class="panel__footer">
                    <div class="panel__row paid-with-total">
                        <span><?php _e('Betaald met ' . $order->get_payment_method_title(), 'woocommerce'); ?></span>
                        <span class="panel__row--highlight"><?php echo $order->get_formatted_order_total(); ?></span>
                    </div>
                </footer>
            <?php } ?>
        </div>
    </section>

    <div class="flex">
        <section class="order-details__billing-address flex-col-xs-12 flex-col-lg-6">
            <header>
                <h1><?php _e('Factuuradres', 'woocommerce'); ?></h1>
            </header>

            <address class="order-billing-address">
                <?php include get_stylesheet_directory() . '/partials/icons/invoice.svg.php'; ?>
                <div class="order-billing-address__data">
                    <?php
                        $billing_address = $order->data['billing'];
                        foreach($billing_address as $key => $value) {
                            if (
                                $value === ''
                                || $key === 'email'
                            ) {
                                continue;
                            }

                            $class = '';

                            if (
                                $key === 'first_name'
                                || $key === 'last_name'
                            ) {
                                $class = "address-name";
                            }

                            echo '<span class="' . $class . '">' . $value . '</span>';

                            if (
                                $key === 'last_name'
                                || $key === 'company'
                                || $key === 'address_1'
                            ) {
                                echo '<br/>';
                            } else {
                                echo ' ';
                            };
                        }
                    ?>
                </div>
            </address>
            <?php $actions = wc_get_account_orders_actions( $order ); ?>
            <?php if ($actions['invoice']) { ?>
                <ul class="user-action-list">
                    <li>
                        <a target="_blank" rel="noopener" href="<?php echo $actions['invoice']['url'] ?>">
                            <span><?php echo _e('Factuur downloaden', 'woocommcerce'); ?></span>
                            <img class="style-svg" src="<?php echo get_stylesheet_directory_uri() . '/public/images/icons/account/download-invoice.svg' ?>" alt="" width="16" height="16" />
                        </a>
                    </li>
                </ul>
            <?php } ?>
        </section>
    </div>
</div>
