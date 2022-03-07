<?php
/**
 * Review order table
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/review-order.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 5.2.0
 */

defined( 'ABSPATH' ) || exit;
?>

<div class="woocommerce-checkout-review-order-table">
    <aside>
        <ul class="mini-cart">
            <?php foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) { ?>
            <?php
                    $id = $cart_item['data']->get_id();
                    $productID = $cart_item['product_id'];
                    $variationID = $cart_item['variation_id'];

                    $_product = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key );

                    $title = $_product->get_title();
                    $subtitle = ($variationID) ? $cart_item['data']->get_description() : '';

                    $productVariation = wc_get_product($variationID);
                    $attributes = $productVariation->get_variation_attributes();

                    $color = (array_key_exists('attribute_pa_color', $attributes)) ? $attributes['attribute_pa_color'] : '';
                    $amount = (array_key_exists('attribute_pa_amount', $attributes)) ? $attributes['attribute_pa_amount'] : '';
                    $size = (array_key_exists('attribute_pa_size', $attributes)) ? $attributes['attribute_pa_size'] : '';

                    $price = get_post_meta($id, '_price', true);
                    $adjusted_price = null;
                    $sale_price = null;
                    $regular_price = $price;
                    $quantity = $cart_item['quantity'];


                    $id = $cart_item['data']->get_id();
                    $product =  wc_get_product( $id );
                    $isSubscriptionProduct = ($cart_item['wcsatt_data']['active_subscription_scheme']) ? true : false;

                    if ($cart_item['data']->get_sale_price()) {
                        $regular_price = $cart_item['data']->get_regular_price();
                        $sale_price = $cart_item['data']->get_sale_price();
                    }

                    if (
                        array_key_exists('discounts', $cart_item)
                        && array_key_exists('price_adjusted', $cart_item['discounts'])
                        && $cart_item['discounts']['price_adjusted'] < $price
                    ) {
                        $adjusted_price = $cart_item['discounts']['price_adjusted'];
                    }

                    $discounted_price = null;

                    if ($sale_price && $adjusted_price) {
                        $discounted_price = ($sale_price < $adjusted_price) ? $sale_price : $adjusted_price;
                    } else if ($sale_price) {
                        $discounted_price = $sale_price;
                    } else if ($adjusted_price) {
                        $discounted_price = $adjusted_price;
                    }
                ?>

            <li class="mini-cart__item">
                <div class="mini-cart__image">
                    <?php echo $cart_item['data']->get_image(array( 120, 120)); ?>
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

                    <?php
                        if ($isSubscriptionProduct):
                            $activeSchemeKey = WCS_ATT_Cart::get_subscription_scheme( $cart_item );
                            $schemes = WCS_ATT_Product_Schemes::get_subscription_schemes( $product );

                            $period = $schemes[$activeSchemeKey]->get_period();
                            $interval = $schemes[$activeSchemeKey]->get_interval();
                            $periodTitle = getPeriodTitle($period, $interval);
                    ?>
                    <p class="custom-cart__product-subtitle">
                        <span
                            class="custom-cart__product-subtitle"><?php echo sprintf(__('Delivery every %s %s', 'lavandre'), $interval, $periodTitle); ?></span>
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
                    <?php
                        if ($isSubscriptionProduct) {
                            $priceToShow = $discounted_price ?? $regular_price;
                            echo wc_price($quantity * $priceToShow);
                        } else {
                            if ($discounted_price) echo '<del>';
                        echo wc_price($quantity * $regular_price);
                        if ($discounted_price) echo '</del>';
                    ?></div>

                <div>
                    <?php
                        if ($discounted_price) {
                            echo '<ins>' . wc_price($discounted_price * $quantity) . '</ins>';
                        }
                    }
                    ?>
                </div>
            </li>
            <?php } ?>
        </ul>
    </aside>

    <table class="custom-cart__order-totals">
        <tbody>
            <tr class="custom-cart__sidebar__row custom-cart__sidebar__row--large custom-cart__sidebar__row--large-font"
                data-cy="subtotal">
                <th><?php _e('Subtotal', 'lavandre'); ?></th>
                <td><?php wc_cart_totals_subtotal_html(); ?></td>
            </tr>

            <?php if ( WC()->cart->needs_shipping() && WC()->cart->show_shipping() ) : ?>
            <?php do_action( 'woocommerce_review_order_before_shipping' ); ?>
            <?php wc_cart_totals_shipping_html(); ?>
            <?php do_action( 'woocommerce_review_order_after_shipping' ); ?>
            <?php endif; ?>

            <?php foreach ( WC()->cart->get_fees() as $fee ) : ?>
            <tr class="custom-cart__sidebar__row fee">
                <th><?php echo esc_html( $fee->name ); ?></th>
                <td><?php wc_cart_totals_fee_html( $fee ); ?></td>
            </tr>
            <?php endforeach; ?>

            <?php if ( wc_tax_enabled() && ! WC()->cart->display_prices_including_tax() ) : ?>
            <?php if ( 'itemized' === get_option( 'woocommerce_tax_total_display' ) ) : ?>
            <?php foreach ( WC()->cart->get_tax_totals() as $code => $tax ) : // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited ?>
            <tr class="custom-cart__sidebar__row tax-rate tax-rate-<?php echo esc_attr( sanitize_title( $code ) ); ?>">
                <th><?php _e('Tax'); ?></th>
                <td><?php echo wp_kses_post( $tax->formatted_amount ); ?></td>
            </tr>
            <?php endforeach; ?>
            <?php else : ?>
            <tr class="custom-cart__sidebar__row tax-total">
                <th><?php _e('Tax'); ?></th>
                <td><?php wc_cart_totals_taxes_total_html(); ?></td>
            </tr>
            <?php endif; ?>
            <?php endif; ?>

            <?php foreach ( WC()->cart->get_coupons() as $code => $coupon ) : ?>
            <tr
                class="custom-cart__sidebar__row cart-discount coupon-<?php echo esc_attr( sanitize_title( $code ) ); ?>">
                <th><?php wc_cart_totals_coupon_label( $coupon ); ?></th>
                <td><?php wc_cart_totals_coupon_html( $coupon ); ?></td>
            </tr>
            <?php endforeach; ?>

            <tr class="custom-cart__sidebar__row custom-cart__sidebar__row--large-font order-total">
                <th><?php esc_html_e( 'Total', 'lavandre' ); ?></th>
                <td><?php wc_cart_totals_order_total_html(); ?></td>
            </tr>
        </tbody>
    </table>
</div>
