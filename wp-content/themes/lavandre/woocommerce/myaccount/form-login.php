<?php
/**
 * Login Form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/form-login.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 4.1.0
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// do_action( 'woocommerce_before_customer_login_form' ); ?>

<?php if ( 'yes' === get_option( 'woocommerce_enable_myaccount_registration' ) ) : ?>

<div class="customer-login flex" id="customer_login">

    <?php if (isset($_GET['password-reset'])) { ?>
        <div class="flex-col-12">
            <div class="ww-alert ww-alert--success">
                <?php esc_html_e('Je wachtwoord is succesvol gewijzigd.', 'woocommerce'); ?>
            </div>
        </div>
    <?php } ?>

	<div class="customer-login__login flex-col-xs-12 flex-col-lg-6">

<?php endif; ?>

        <header>
            <h3><?php esc_html_e( 'Login', 'woocommerce' ); ?></h3>
        </header>

		<form id="login-form" class="woocommerce-form woocommerce-form-login login" method="post" data-field-validation>
			<?php do_action( 'woocommerce_login_form_start' ); ?>

			<p class=" woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
				<input type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" placeholder="<?php esc_html_e( 'Email address', 'woocommerce' ); ?>" autocomplete="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" title="<?php _e('Fill in a valid e-mail address.', 'lavandre'); ?>" required /><?php // @codingStandardsIgnoreLine ?>
				<label for="username"><?php esc_html_e( 'Email address', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
            </p>

			<p class="password-row woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
				<input class="woocommerce-Inputt woocommerce-Input--text input-text" type="password" name="password" id="password" placeholder="<?php esc_html_e( 'Password', 'woocommerce' ); ?>" autocomplete="current-password" title="<?php _e('Fill in the password.', 'lavandre'); ?>" required />
				<label for="password"><?php esc_html_e( 'Password', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
			</p>

			<?php do_action( 'woocommerce_login_form' ); ?>

			<p class="woocommerce-LostPassword lost_password">
                <?php wp_nonce_field('ajax-forgot-nonce', 'forgotsecurity'); ?>
				<a href="<?php echo esc_url( wp_lostpassword_url() ); ?>" data-role="password-forget"><?php esc_html_e( 'Lost your password?', 'woocommerce' ); ?></a>
			</p>

            <?php wp_nonce_field( 'woocommerce-login', 'woocommerce-login-nonce' ); ?>
            <button type="submit" class="woocommerce-button button woocommerce-form-login__submit cta-button cta-button--secondary" name="login" value="<?php esc_attr_e( 'Log in', 'woocommerce' ); ?>"><?php esc_html_e( 'Log in', 'woocommerce' ); ?></button>

			<?php do_action( 'woocommerce_login_form_end' ); ?>
		</form>

<?php if ( 'yes' === get_option( 'woocommerce_enable_myaccount_registration' ) ) : ?>

	</div>

	<div class="customer-login__register flex-col-xs-12 flex-col-lg-6 flex flex-column">
		<section class="customer-login__register-option">
            <header>
                <h3><?php esc_html_e( 'Register', 'woocommerce' ); ?></h3>
            </header>

            <p>
                <?php esc_html_e('Register for free to enjoy many benefits. With the information below you can log in to our website in the future.', 'lavandre') ?>
            </p>

            <form method="post" class="woocommerce-form woocommerce-form-register register" <?php do_action( 'woocommerce_register_form_tag' ); ?> >
                <?php do_action( 'woocommerce_register_form_start' ); ?>
                <?php if ( 'no' === get_option( 'woocommerce_registration_generate_username' ) ) : ?>
                    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="reg_username" autocomplete="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" required placeholder="<?php esc_html_e( 'Username', 'woocommerce' ); ?>" /><?php // @codingStandardsIgnoreLine ?>
                        <label for="reg_username"><?php esc_html_e( 'Username', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
                    </p>
                <?php endif; ?>

                <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <?php wp_nonce_field( 'woocommerce-email-check', 'woocommerce-email-check-nonce' ); ?>
                    <input type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" autocomplete="email" value="<?php echo ( ! empty( $_POST['email'] ) ) ? esc_attr( wp_unslash( $_POST['email'] ) ) : ''; ?>" required placeholder="<?php esc_html_e( 'Email address', 'woocommerce' ); ?>" /><?php // @codingStandardsIgnoreLine ?>
                    <label for="reg_email"><?php esc_html_e( 'Email address', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
                </p>

                <p class="password-row woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <input type="password" class="woocommerce-Inputt woocommerce-Input--text input-text" name="password" id="reg_password" autocomplete="new-password" required placeholder="<?php esc_html_e( 'Password', 'woocommerce' ); ?>" />
                    <label for="reg_password"><?php esc_html_e( 'Password', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
                </p>

                <p class="woocommerce-form-row form-row">
                    <?php wp_nonce_field( 'woocommerce-register', 'woocommerce-register-nonce' ); ?>
                    <button type="submit" class="woocommerce-Button woocommerce-button button woocommerce-form-register__submit cta-button cta-button--secondary" name="register" value="<?php esc_attr_e( 'Register', 'woocommerce' ); ?>"><?php esc_html_e( 'Register', 'woocommerce' ); ?></button>
                </p>

                <?php do_action( 'woocommerce_register_form_end' ); ?>

            </form>
        </section>
	</div>

</div>
<?php endif; ?>

<?php do_action( 'woocommerce_after_customer_login_form' ); ?>
