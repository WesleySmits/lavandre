<?php
/**
 * Single variation cart button
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.4.0
 */

defined( 'ABSPATH' ) || exit;

global $product;
?>

<?php do_action( 'woocommerce_before_add_to_cart_button' ); ?>

<div class="woocommerce-variation-add-to-cart variations_button">
    <div class="product-detail__quantity-selector">
        <?php
        do_action( 'woocommerce_before_add_to_cart_quantity' );

        woocommerce_quantity_input(
            array(
                'min_value'   => apply_filters( 'woocommerce_quantity_input_min', $product->get_min_purchase_quantity(), $product ),
                'max_value'   => apply_filters( 'woocommerce_quantity_input_max', $product->get_max_purchase_quantity(), $product ),
                'input_value' => isset( $_POST['quantity'] ) ? wc_stock_amount( wp_unslash( $_POST['quantity'] ) ) : $product->get_min_purchase_quantity(), // WPCS: CSRF ok, input var ok.
            )
        );

        do_action( 'woocommerce_after_add_to_cart_quantity' );
        ?>
    </div>

    <button is="lavandre-button" type="submit" class="single_add_to_cart_button" name="add-to-cart"
        value="<?php echo esc_attr( $product->get_id() ); ?>" primary full-width
        size="large"
        data-out-of-stock="<?php _e('Sold Out', 'lavandre'); ?>"
        data-in-stock="<?php echo esc_html( $product->single_add_to_cart_text() ); ?>"
    >
            <?php echo esc_html( $product->single_add_to_cart_text() ); ?>
    </button>

    <?php do_action( 'woocommerce_after_add_to_cart_button' ); ?>

    <input type="hidden" name="add-to-cart" value="<?php echo absint( $product->get_id() ); ?>" />
    <input type="hidden" name="product_id" value="<?php echo absint( $product->get_id() ); ?>" />
    <input type="hidden" name="variation_id" class="variation_id" value="0" />
</div>
