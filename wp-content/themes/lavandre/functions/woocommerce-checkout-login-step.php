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
            <button is="lavandre-button" type="submit" name="login" size="large" primary full-width>
                <?php _e('Log in', 'lavandre'); ?>
            </button>

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

                <?php wp_nonce_field( 'woocommerce-register', 'woocommerce-register-nonce' ); ?>
                <button is="lavandre-button" href="/checkout/?createAccount=true" size="large" primary full-width>
                    <?php _e('Register', 'lavandre'); ?>
                </button>


                <?php do_action( 'woocommerce_register_form_end' ); ?>
            </form>
        </section>

        <section class="customer-login__guest-option">
            <header>
                <h3><?php esc_html_e( 'Order as a guest user', 'woocommerce' ); ?></h3>
            </header>

            <p>
                <?php esc_html_e('When you order as a guest you do not create an account and you cannot use the many advantages of an account.', 'lavandre') ?>
            </p>

            <button is="lavandre-button" href="/checkout/?createAccount=false" size="large" outline full-width>
                <?php _e('Order as a guest user', 'lavandre'); ?>
            </button>
        </section>
	</div>

</div>
<?php endif; ?>

<?php
    do_action( 'woocommerce_after_customer_login_form' );
        return ob_get_clean();
    }
    add_shortcode( 'wc_login_register', 'ww_wc_login_register' );

    // Pre PHP8 polyfill for str_contains
    if (!function_exists('str_contains')) {
        function str_contains(string $haystack, string $needle): bool
        {
            return '' === $needle || false !== strpos($haystack, $needle);
        }
    }

    /**
     * Redirect to login/register pre-checkout.
     *
     * Redirect guest users to login/register before completing an order.
     */
    function redirect_pre_checkout() {
        if ( ! function_exists( 'wc' ) ) return;
        if (isset($_GET['createAccount'])) return;

        $path = $_SERVER['REQUEST_URI'];
        if (str_contains($path, 'order-received')) return;

        $redirect_page_id = 317; // #TODO: Retrieve ID's somehow
        if ( ! is_user_logged_in() && is_checkout() && is_page(16) === true ) {
            wp_safe_redirect( get_permalink( $redirect_page_id ) );
            die;
        } elseif ( is_user_logged_in() && is_page( $redirect_page_id ) ) {
            wp_safe_redirect( get_permalink( wc_get_page_id( 'checkout' ) ) );
            die;
        }
    }
    add_action( 'template_redirect', 'redirect_pre_checkout' );
