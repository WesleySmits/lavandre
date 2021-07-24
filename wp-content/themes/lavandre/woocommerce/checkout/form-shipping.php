<?php
/**
 * Checkout shipping information form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/form-shipping.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 * @global WC_Checkout $checkout
 */

defined( 'ABSPATH' ) || exit;
?>
<div class="woocommerce-shipping-fields">
	<?php if ( true === WC()->cart->needs_shipping_address() ) : ?>
		<div id="ship-to-different-address" style="display: none;">
			<input id="ship-to-different-address-checkbox" type="checkbox" name="ship_to_different_address" value="1" />
		</div>

		<h3 class="checkout-column__title">
			<?php echo __('Afleveradres', 'woocommerce'); ?>
		</h3>

		<p class="form-row form-row-wide">
			<label for="ship-to-different-address-radio-yes" class="woocommerce-form__label woocommerce-form__label-for-radio radio">
				<input
					id="ship-to-different-address-radio-yes"
					class="woocommerce-form__input woocommerce-form__input-radio input-radio"
					<?php echo get_option( 'lavandre_ship_to_different_address_by_default', false ) ? '' : 'checked'; ?>
					type="radio"
					name="ship_to_different_address_toggle"
					value="0"
				/>
				<span>
					<?php esc_html_e( 'Levering aan mijn factuuradres', 'woocommerce' ); ?>
				</span>
			</label>
		</p>

		<p class="form-row form-row-wide">
			<label for="ship-to-different-address-radio-no" class="woocommerce-form__label woocommerce-form__label-for-radio radio">
				<input
					id="ship-to-different-address-radio-no"
					class="woocommerce-form__input woocommerce-form__input-radio input-radio"
					type="radio"
					name="ship_to_different_address_toggle"
					value="1"
					<?php echo get_option( 'lavandre_ship_to_different_address_by_default', false ) ? 'checked' : ''; ?>
				/>
				<span>
					<?php esc_html_e( 'Nieuw afleveradres', 'woocommerce' ); ?>
				</span>
			</label>
		</p>

		<div class="shipping_address">

			<?php do_action( 'woocommerce_before_checkout_shipping_form', $checkout ); ?>

			<div class="woocommerce-shipping-fields__field-wrapper custom-field-wrapper">
				<?php
				$fields = $checkout->get_checkout_fields( 'shipping' );

				foreach ( $fields as $key => $field ) {
					woocommerce_form_field( $key, $field, $checkout->get_value( $key ) );
				}
				?>
			</div>

			<?php do_action( 'woocommerce_after_checkout_shipping_form', $checkout ); ?>

		</div>

	<?php endif; ?>
</div>

<script>
	(function(){
		const shippingAddressCheckbox = document.querySelector('[name="ship_to_different_address"]');
		const shippingAddressRadio = Array.from(document.querySelectorAll('[name="ship_to_different_address_toggle"]'));
		const form = document.querySelector('form[name="checkout"]');

		if (!shippingAddressCheckbox || !shippingAddressRadio || !form) {
			return;
		}

        onRadioChange();

		for (let i = 0; i < shippingAddressRadio.length; i++) {
			const radio = shippingAddressRadio[i];
			radio.addEventListener('change', onRadioChange);
		}

        function onRadioChange() {
            const formData = new FormData(form);
            shippingAddressCheckbox.checked = Number(formData.get('ship_to_different_address_toggle'));
            jQuery(shippingAddressCheckbox).change();
        }
	}());
</script>
