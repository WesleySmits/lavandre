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
 * @version 3.8.0
 */

defined( 'ABSPATH' ) || exit;
?>

<div class="woocommerce-checkout-review-order-table">
	<aside>
		<ul class="mini-cart">
			<?php foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) { ?>
                <?php
                    $id = $cart_item['data']->get_id();

                    $price = get_post_meta($id, '_price', true);
                    $adjusted_price = null;
                    $sale_price = null;
                    $regular_price = $price;

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


                <?php $_product = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key ); ?>
				<li class="mini-cart__item">
					<div class="mini-cart__image">
						<?php echo $cart_item['data']->get_image(array( 120, 120)); ?>
					</div>

					<div class="mini-cart__name">
						<?php echo apply_filters( 'woocommerce_cart_item_name', $_product->get_name(), $cart_item, $cart_item_key ) . '&nbsp;'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					</div>

					<div class="mini-cart__price">
                        <?php
                            if ($discounted_price) echo '<div><del>';
                            echo wc_price($cart_item['quantity'] * $regular_price);
                            if ($discounted_price) echo '</del></div>';

                            if ($discounted_price) {
                                echo '<ins>' . wc_price($discounted_price * $cart_item['quantity']) . '</ins>';
                            }
                        ?>

                        <?php if ($cart_item['quantity'] > 1) { ?>
                            <?php $unit_price = $discounted_price ? $discounted_price : $price; ?>
                            <div>(<?php echo $cart_item['quantity'] ?> x <?php echo wc_price($unit_price); ?>)</div>
                        <?php } ?>

                    </div>
				</li>
			<?php } ?>
		</ul>
	</aside>

	<table class="shop_table">
		<tbody>

			<tr class="cart-subtotal">
				<th><?php esc_html_e( 'Subtotal', 'woocommerce' ); ?></th>
				<td><?php wc_cart_totals_subtotal_html(); ?></td>
			</tr>

			<?php foreach ( WC()->cart->get_coupons() as $code => $coupon ) : ?>
				<tr class="cart-discount coupon-<?php echo esc_attr( sanitize_title( $code ) ); ?>">
					<th><?php wc_cart_totals_coupon_label( $coupon ); ?></th>
					<td><?php wc_cart_totals_coupon_html( $coupon ); ?></td>
				</tr>
			<?php endforeach; ?>

			<?php if ( WC()->cart->needs_shipping() && WC()->cart->show_shipping() ) : ?>

				<?php do_action( 'woocommerce_review_order_before_shipping' ); ?>

				<?php wc_cart_totals_shipping_html(); ?>

				<?php do_action( 'woocommerce_review_order_after_shipping' ); ?>

			<?php endif; ?>

			<?php foreach ( WC()->cart->get_fees() as $fee ) : ?>
				<tr class="fee">
					<th><?php echo esc_html( $fee->name ); ?></th>
					<td><?php wc_cart_totals_fee_html( $fee ); ?></td>
				</tr>
			<?php endforeach; ?>

			<?php if ( wc_tax_enabled() && ! WC()->cart->display_prices_including_tax() ) : ?>
				<?php if ( 'itemized' === get_option( 'woocommerce_tax_total_display' ) ) : ?>
					<?php foreach ( WC()->cart->get_tax_totals() as $code => $tax ) : // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited ?>
						<tr class="tax-rate tax-rate-<?php echo esc_attr( sanitize_title( $code ) ); ?>">
							<th><?php echo esc_html( $tax->label ); ?></th>
							<td><?php echo wp_kses_post( $tax->formatted_amount ); ?></td>
						</tr>
					<?php endforeach; ?>
				<?php else : ?>
					<tr class="tax-total">
						<th><?php echo esc_html( WC()->countries->tax_or_vat() ); ?></th>
						<td><?php wc_cart_totals_taxes_total_html(); ?></td>
					</tr>
				<?php endif; ?>
			<?php endif; ?>

			<?php do_action( 'woocommerce_review_order_before_order_total' ); ?>

			<tr class="order-total">
				<th><?php esc_html_e( 'Total', 'woocommerce' ); ?></th>
				<td><?php wc_cart_totals_order_total_html(); ?></td>
			</tr>

			<?php do_action( 'woocommerce_review_order_after_order_total' ); ?>

		</tbody>
	</table>
</div>
