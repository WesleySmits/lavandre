<?php
/**
 * Checkout Payment Section
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/payment.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.5.3
 */

defined( 'ABSPATH' ) || exit;

if ( ! wp_doing_ajax() ) {
	do_action( 'woocommerce_review_order_before_payment' );
}
?>
<div id="payment" class="woocommerce-checkout-payment">
    <?php if ( WC()->cart->needs_payment() ) : ?>
    <fieldset class="ww-payment-methods">
        <legend class="sr-only">
            <?php _e('Choose a payment method', 'lavandre'); ?>
        </legend>

        <?php
                if (!empty( $available_gateways)) {
                    ?><accordion-element data-cy="payment-method-accordion"><?php
                    foreach ( $available_gateways as $gateway ) {
                        wc_get_template( 'checkout/payment-method.php', array( 'gateway' => $gateway ) );
                    }
                    ?></accordion-element><?php
                }
            ?>
    </fieldset>
    <?php endif; ?>
    <div class="form-row place-order">
        <noscript>
            <?php
			/* translators: $1 and $2 opening and closing emphasis tags respectively */
			printf( esc_html__( 'Since your browser does not support JavaScript, or it is disabled, please ensure you click the %1$sUpdate Totals%2$s button before placing your order. You may be charged more than the amount stated above if you fail to do so.', 'woocommerce' ), '<em>', '</em>' );
			?>
            <br /><button type="submit" class="button alt" name="woocommerce_checkout_update_totals"
                value="<?php esc_attr_e( 'Update totals', 'woocommerce' ); ?>"><?php esc_html_e( 'Update totals', 'woocommerce' ); ?></button>
        </noscript>

        <?php do_action( 'woocommerce_review_order_before_submit' ); ?>
        <button is="lavandre-button" primary full-width size="large" type="submit"
            id="place_order"><?php echo esc_attr( $order_button_text ) ?></button>

        <?php wc_get_template( 'checkout/terms.php' ); ?>

        <?php do_action( 'woocommerce_review_order_after_submit' ); ?>

        <div id="woocommerce-checkout-error-wrapper"></div>

        <?php wp_nonce_field( 'woocommerce-process_checkout', 'woocommerce-process-checkout-nonce' ); ?>
    </div>
</div>

<div id="checkout-errors"></div>
<?php
if ( ! wp_doing_ajax() ) {
	do_action( 'woocommerce_review_order_after_payment' );
}