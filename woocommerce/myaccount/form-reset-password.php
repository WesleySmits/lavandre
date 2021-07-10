<?php
/**
 * Lost password reset form.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/form-reset-password.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.5.5
 */

defined( 'ABSPATH' ) || exit;

// do_action( 'woocommerce_before_reset_password_form' );
?>

<section class="customer-login password-forget-wrapper">
    <header>
        <h3>Verander jouw wachtwoord</h3>
    </header>

    <form id="password-reset-form" method="post" class="woocommerce-ResetPassword lost_reset_password ww-form">
        <p><?php echo apply_filters( 'woocommerce_reset_password_message', esc_html__( 'Kies een nieuw wachtwoord (advies: minimaal 12 tekens met 1 cijfer en 1 hoofdletter en kleine letter)', 'woocommerce' ) ); ?></p><?php // @codingStandardsIgnoreLine ?>

        <p class="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
            <input type="password" class="woocommerce-Inputt woocommerce-Input--text input-text" name="password_1" id="password_1" autocomplete="new-password" placeholder=" " required />
            <label for="password_1"><?php esc_html_e( 'New password', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
        </p>
        <p class="woocommerce-form-row woocommerce-form-row--last form-row form-row-last">
            <input type="password" class="woocommerce-Inputt woocommerce-Input--text input-text" name="password_2" id="password_2" autocomplete="new-password" placeholder=" " required />
            <label for="password_2"><?php esc_html_e( 'Re-enter new password', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
        </p>

        <input type="hidden" name="reset_key" value="<?php echo esc_attr( $args['key'] ); ?>" />
        <input type="hidden" name="reset_login" value="<?php echo esc_attr( $args['login'] ); ?>" />

        <div class="clear"></div>

        <?php do_action( 'woocommerce_resetpassword_form' ); ?>

        <p class="woocommerce-form-row form-row">
            <input type="hidden" name="wc_reset_password" value="true" />
            <button type="submit" class="woocommerce-button button woocommerce-form-login__submit cta-button cta-button--secondary" value="<?php esc_attr_e( 'Save', 'woocommerce' ); ?>"><?php esc_html_e( 'Save', 'woocommerce' ); ?></button>
        </p>

        <?php wp_nonce_field( 'reset_password', 'woocommerce-reset-password-nonce' ); ?>
    </form>
</section>
<?php
do_action( 'woocommerce_after_reset_password_form' );

