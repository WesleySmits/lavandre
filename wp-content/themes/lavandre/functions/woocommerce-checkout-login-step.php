<?php

/**
 * Custom login/register form(s) shortcode.
 */
function ww_wc_login_register() {
    ob_start();
?>

<div class="full-width-banner-block">
    <div class="background-noise"></div>
    <div class="full-width-banner-block__link">
        <figure class="overlay-text">
            <img class="cover-image" src="https://lavandre.com/wp-content/uploads/2021/11/mathilde-langevin-BB40cNIL-i8-unsplash-1-scaled.jpeg" alt="">
        </figure>
    </div>

    <div class="full-width-banner-block__link">
        <div id="password-forget-form" class="customer-account-wrapper" hidden>
            <section class="password-forget-wrapper">
                <header>
                    <h1><?php esc_html_e( 'Reset your password', 'woocommerce' ); ?></h1>
                    <p><?php _e('We will send you an email to reset your password.', 'lavandre'); ?></p>
                </header>

                <form id="ajax-password-forget-form" method="post" data-field-validation>
                    <p class=" woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <input type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" placeholder="<?php esc_html_e( 'Email', 'woocommerce' ); ?>" autocomplete="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" title="<?php _e('Fill in a valid email address.', 'lavandre'); ?>" required /><?php // @codingStandardsIgnoreLine ?>
                        <label for="username"><?php esc_html_e( 'Email', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
                    </p>

                    <button type="submit" is="lavandre-button" data-role="password-forget" primary full-width size="large" name="password-forget" value="<?php esc_attr_e( 'Submit', 'woocommerce' ); ?>"><?php esc_html_e( 'Submit', 'woocommerce' ); ?></button>
                </form>

                <a href="#" class="back-link" style="margin-top: 1rem;" data-role="password-forget-toggle">
                    <?php include get_stylesheet_directory() . '/partials/icons/back.svg.php'; ?>
                    <span><?php esc_html_e( 'Back', 'woocommerce' ); ?></span>
                </a>

            </section>
        </div>

        <div id="login-register-form" class="customer-account-wrapper">
            <section class="login-wrapper">
                <header>
                    <h1><?php esc_html_e( 'Login', 'woocommerce' ); ?></h1>
                </header>

                <form id="ajax-login-form" class="woocommerce-form woocommerce-form-login login" data-redirect="true" method="post" data-field-validation>
                    <?php do_action( 'woocommerce_login_form_start' ); ?>

                    <p class=" woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <input type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" placeholder="<?php esc_html_e( 'Email', 'woocommerce' ); ?>" autocomplete="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" title="<?php _e('Fill in a valid email address.', 'lavandre'); ?>" required /><?php // @codingStandardsIgnoreLine ?>
                        <label for="username"><?php esc_html_e( 'Email', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
                    </p>

                    <p class="password-row woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <input class="woocommerce-Inputt woocommerce-Input--text input-text" type="password" name="password" id="password" placeholder="<?php esc_html_e( 'Password', 'woocommerce' ); ?>" autocomplete="current-password" title="<?php _e('Fill in the password.', 'lavandre'); ?>" required />
                        <label for="password"><?php esc_html_e( 'Password', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
                    </p>

                    <?php do_action( 'woocommerce_login_form' ); ?>

                    <p class="woocommerce-LostPassword lost_password form-row">
                        <?php wp_nonce_field('ajax-forgot-nonce', 'forgotsecurity'); ?>
                        <a href="<?php echo esc_url( wp_lostpassword_url() ); ?>" class="accent-link" data-role="password-forget-toggle"><?php esc_html_e( 'Forgot your password?', 'woocommerce' ); ?></a>
                    </p>

                    <?php wp_nonce_field( 'woocommerce-login', 'woocommerce-login-nonce' ); ?>
                    <button type="submit" is="lavandre-button" primary full-width size="large" name="login" value="<?php esc_attr_e( 'Sign in', 'woocommerce' ); ?>"><?php esc_html_e( 'Sign in', 'woocommerce' ); ?></button>

                    <?php do_action( 'woocommerce_login_form_end' ); ?>
                </form>
            </section>

            <section class="register-wrapper">
                <header>
                    <h1><?php esc_html_e( 'Register', 'woocommerce' ); ?></h1>
                    <p><?php _e('Checkout faster, view your order history and be the first to hear about new product launches!','lavandre'); ?></p>
                </header>

                <button is="lavandre-button" href="/checkout/?createAccount=true" size="large" primary full-width>
                    <?php _e('Register', 'lavandre'); ?>
                </button>
            </section>

            <section class="guest-wrapper">
                <header>
                    <h1><?php esc_html_e( 'Order as guest', 'woocommerce' ); ?></h1>
                </header>

                <button is="lavandre-button" href="/checkout/?createAccount=false" size="large" primary full-width data-cy="order-guest-button">
                    <?php _e('Order as guest', 'lavandre'); ?>
                </button>
            </section>
        </div>
    </div>

    <div class="full-width-banner-block__link"></div>
</div>

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
