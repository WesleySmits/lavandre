<?php
/**
 * Output a single payment method
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/payment-method.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce\Templates
 * @version     3.5.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<details is="curtain-element" class="ww-payment-method">
    <summary>
        <label class="radio" for="payment_method_<?php echo esc_attr( $gateway->id ); ?>">
            <input id="payment_method_<?php echo esc_attr( $gateway->id ); ?>" type="radio" class="input-radio woocommerce-form__input-radio" name="payment_method" value="<?php echo esc_attr( $gateway->id ); ?>" <?php checked( $gateway->chosen, true ); ?> data-order_button_text="<?php echo esc_attr( $gateway->order_button_text ); ?>" />
            <span class="ww-payment-method__item">
                <span class="ww-payment-method__name"><?php echo $gateway->get_title(); ?></span>
                <span class="ww-payment-method__logo"><?php echo $gateway->get_icon(); ?></span>
            </span>
        </label>
    </summary>

    <?php if ($gateway->get_description() && strlen($gateway->get_description()) > 0) : ?>
        <div class="curtain-content">
            <?php $gateway->payment_fields(); ?>
        </div>
	<?php endif; ?>
</details>
