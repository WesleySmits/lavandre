<?php
/**
 * Checkout Form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/form-checkout.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.5.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<form name="checkout" method="post" class="checkout woocommerce-checkout ww-form" action="<?php echo esc_url( wc_get_checkout_url() ); ?>" enctype="multipart/form-data">
	<?php if ( $checkout->get_checkout_fields() ) : ?>

		<?php do_action( 'woocommerce_checkout_before_customer_details' ); ?>

		<div class="customer-address checkout-column" id="customer_billing">
			<div class="customer-billing-address">
				<?php do_action( 'woocommerce_checkout_billing' ); ?>
			</div>

            <div class="customer-shipping-address">
                <?php do_action( 'woocommerce_checkout_shipping' ); ?>
            </div>
		</div>

		<?php do_action( 'woocommerce_checkout_after_customer_details' ); ?>

	<?php endif; ?>

	<?php do_action( 'woocommerce_checkout_before_order_review' ); ?>

	<div id="payment-methods" class="woocommerce-checkout-payment-methods checkout-column">
		<?php do_action( 'woocommerce_checkout_before_order_review_heading' ); ?>
		<h1 id="order_review_heading"><?php esc_html_e( 'Overview', 'lavandre' ); ?></h3>
		<?php do_action( 'woocommerce_checkout_order_review' ); ?>
		<?php do_action( 'woocommerce_checkout_after_order_review' ); ?>

        <h1><?php esc_html_e( 'Payment', 'lavandre' ); ?></h1>
        <?php do_action( 'woocommerce_checkout_order_payment_methods' ); ?>
    </div>
</form>

<?php do_action( 'woocommerce_after_checkout_form', $checkout ); ?>


<script>
    jQuery( document ).ajaxComplete( function() {
        if ( jQuery( 'body' ).hasClass( 'woocommerce-checkout' ) || jQuery( 'body' ).hasClass( 'woocommerce-cart' ) ) {
            jQuery( 'html, body' ).stop();
        }
    } );

	const originalRequestOpen = XMLHttpRequest.prototype.open;
	XMLHttpRequest.prototype.open = function() {
	this.addEventListener('load', function() {
		const url = new URL(this.responseURL);

		if (
			!url.searchParams.get('wc-ajax')
			|| !this.responseText
		) {
			return;
		}

		const responseData = JSON.parse(this.responseText);

		if (!responseData.messages) {
			return;
		}

        setTimeout(() => {
            const wrapper = document.getElementById('woocommerce-checkout-error-wrapper');
            wrapper.innerHTML = responseData.messages;
        }, 500);
	});
	originalRequestOpen.apply(this, arguments);
	};
</script>
