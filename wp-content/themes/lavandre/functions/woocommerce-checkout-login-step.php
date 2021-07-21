<?php

/**
 * Custom login/register form(s) shortcode.
 */
function ww_wc_login_register() {
    ob_start();

    do_action( 'woocommerce_before_customer_login_form' ); ?>

<?php if ( 'yes' === get_option( 'woocommerce_enable_myaccount_registration' ) ) : ?>

<div class="customer-login flex" id="customer_login">

	<div class="customer-login__login flex-col-xs-12 flex-col-lg-6">

<?php endif; ?>

		<header>
            <h3><?php esc_html_e( 'Login', 'woocommerce' ); ?></h3>
        </header>

		<form class="woocommerce-form woocommerce-form-login login" method="post">
			<?php do_action( 'woocommerce_login_form_start' ); ?>

			<p class=" woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
				<input type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" placeholder="<?php esc_html_e( 'Email address', 'woocommerce' ); ?>" autocomplete="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" required /><?php // @codingStandardsIgnoreLine ?>
				<label for="username"><?php esc_html_e( 'Email address', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
            </p>

			<p class="password-row woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
				<input class="woocommerce-Inputt woocommerce-Input--text input-text" type="password" name="password" id="password" placeholder="<?php esc_html_e( 'Password', 'woocommerce' ); ?>" autocomplete="current-password" required />
				<label for="password"><?php esc_html_e( 'Password', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
			</p>

			<?php do_action( 'woocommerce_login_form' ); ?>

			<p class="woocommerce-LostPassword lost_password">
                <?php wp_nonce_field('ajax-forgot-nonce', 'forgotsecurity'); ?>
				<a href="<?php echo esc_url( wp_lostpassword_url() ); ?>" data-role="password-forget"><?php esc_html_e( 'Lost your password?', 'woocommerce' ); ?></a>
			</p>

            <?php wp_nonce_field( 'woocommerce-login', 'woocommerce-login-nonce' ); ?>
            <button type="submit" class="woocommerce-button button woocommerce-form-login__submit cta-button" name="login" value="<?php esc_attr_e( 'Log in', 'woocommerce' ); ?>"><?php esc_html_e( 'Log in', 'woocommerce' ); ?></button>

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
                <?php esc_html_e('Registreer u gratis om te genieten van vele voordelen. Met onderstaande gegevens kunt u in de toekomst inloggen op onze website.', 'woocommerce') ?>
            </p>

            <form method="post" class="woocommerce-form woocommerce-form-register register" <?php do_action( 'woocommerce_register_form_tag' ); ?> >

                <?php wp_nonce_field( 'woocommerce-register', 'woocommerce-register-nonce' ); ?>
                <a href="/checkout/?createAccount=true" class="cta-button" ><?php esc_html_e( 'Register', 'woocommerce' ); ?></a>

                <?php do_action( 'woocommerce_register_form_end' ); ?>
            </form>
        </section>

        <section class="customer-login__guest-option">
            <header>
                <h3><?php esc_html_e( 'Bestellen als gast', 'woocommerce' ); ?></h3>
            </header>

            <p>
                <?php esc_html_e('Wanneer je bestelt als gast maak je geen account aan en kan je geen gebruik maken van de vele voordelen van een account.', 'woocommerce') ?>
            </p>

            <a href="/checkout/?createAccount=false" class="cta-button alt">
                <?php echo __('Bestellen als gast', 'woocommerce'); ?>
            </a>
        </section>
	</div>

</div>
<?php endif; ?>

<?php do_action( 'woocommerce_after_customer_login_form' );
	return ob_get_clean();
}
add_shortcode( 'wc_login_register', 'ww_wc_login_register' );
