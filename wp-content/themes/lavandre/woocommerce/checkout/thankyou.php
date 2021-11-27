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
                        <br/>
                    </p>
                </header>
            </section>

            <section>
                <header>
                    <h6><?php echo sprintf(__('Order number: %s', 'lavandre'), $order->get_order_number()); ?></h6>
                    <h1><?php esc_html_e( 'Overview', 'lavandre' ); ?></h1>
                </header>
                <ul class="mini-cart mini-cart--thank-you">
                    <?php foreach ($order->get_items() as $item_id => $item ) { ?>
                        <?php
                            $product = $item->get_product();
                            $productID = $item['product_id'];
                            $variationID = $item['variation_id'];

                            $title = $product->get_title();
                            $subtitle = ($variationID) ? $product->get_description() : '';

                            $productVariation = wc_get_product($variationID);
                            $attributes =  $productVariation->get_variation_attributes() ;

                            $color = (array_key_exists('attribute_pa_color', $attributes)) ? $attributes['attribute_pa_color'] : '';
                            $amount = (array_key_exists('attribute_pa_amount', $attributes)) ? $attributes['attribute_pa_amount'] : '';
                            $size = (array_key_exists('attribute_pa_size', $attributes)) ? $attributes['attribute_pa_size'] : '';
                        ?>

                        <li class="mini-cart__item">
                            <div class="mini-cart__image">
                                <?php echo $product->get_image('thumbnail'); ?>
                            </div>

                            <div class="mini-cart__name">
                                <p class="custom-cart__product-title">
                                    <?php echo $title; ?>
                                    <?php if ($subtitle) { echo '<br/>' . $subtitle; } ?>
                                </p>

                                <?php if ($color || $size): ?>
                                    <p class="custom-cart__product-subtitle">
                                        <?php echo $color; ?> <?php echo $size; ?>
                                    </p>
                                <?php endif; ?>

                                <?php if ($amount && $amount !== 'single-pack'): ?>
                                    <p class="custom-cart__product-subtitle">
                                        <?php
                                            $displayAmount = attribute_slug_to_title('attribute_pa_amount', $amount);
                                            echo $displayAmount;
                                        ?>
                                    </p>
                                <?php endif; ?>
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

                <table class="custom-cart__order-totals">
                    <tbody>
                        <tr class="cart-subtotal custom-cart__sidebar__row custom-cart__sidebar__row--large custom-cart__sidebar__row--large-font" data-cy="subtotal">
                            <th><?php _e('Subtotal', 'lavandre'); ?></th>
                            <td><?php echo $order->get_subtotal_to_display(); ?></td>
                        </tr>

                        <tr class="woocommerce-shipping-totals custom-cart__sidebar__row">
                            <th><?php _e('Shipping', 'lavandre'); ?></th>
                            <td><?php echo ($order->get_shipping_total() !== '0.00') ? wc_price($order->get_shipping_total()) : __('Free'); ?></td>
                        </tr>

                        <tr class="tax-total custom-cart__sidebar__row">
                            <th><?php _e('VAT', 'lavandre'); ?></th>
                            <td><?php echo wc_price($order->get_total_tax()); ?></td>
                        </tr>

                        <tr class="order-total custom-cart__sidebar__row custom-cart__sidebar__row--large-font">
                            <th><?php _e('Total', 'lavandre'); ?></th>
                            <td><?php echo $order->get_formatted_order_total(); ?></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </div>

    <div class="full-width-banner-block__link">
        <figure class="overlay-text">
            <img class="cover-image" src="https://lavandre.com/wp-content/uploads/2021/11/mathilde-langevin-dCX6Z0xjAPM-unsplash-scaled.jpeg" alt="">
        </figure>
    </div>
</div>
