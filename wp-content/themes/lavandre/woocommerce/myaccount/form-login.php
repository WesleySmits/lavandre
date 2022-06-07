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
                    <h1><?php esc_html_e( 'Reset your password', 'lavandre' ); ?></h1>
                    <p><?php _e('We will send you an email to reset your password.', 'lavandre'); ?></p>
                </header>

                <form id="ajax-password-forget-form" method="post" data-field-validation>
                    <p class=" woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <input type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username-forgot-password" placeholder="<?php esc_html_e( 'Email', 'lavandre' ); ?>" autocomplete="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" title="<?php _e('Fill in a valid email address.', 'lavandre'); ?>" required /><?php // @codingStandardsIgnoreLine ?>
                        <label for="username-forgot-password"><?php esc_html_e( 'Email', 'lavandre' ); ?>&nbsp;<span class="required">*</span></label>
                    </p>

                    <button type="submit" is="lavandre-button" primary full-width size="large" name="password-forget" value="<?php esc_attr_e( 'Submit', 'lavandre' ); ?>"><?php esc_html_e( 'Submit', 'lavandre' ); ?></button>
                </form>

                <a href="#" class="back-link" data-role="password-forget-toggle">
                    <?php include get_stylesheet_directory() . '/partials/icons/back-arrow.svg.php'; ?>
                    <span><?php esc_html_e( 'Back', 'lavandre' ); ?></span>
                </a>
            </section>
        </div>

        <div id="login-register-form" class="customer-account-wrapper">
            <section class="login-wrapper">
                <header>
                    <h1><?php esc_html_e( 'Login', 'lavandre' ); ?></h1>
                </header>

                <form id="ajax-login-form" is="login-form" class="woocommerce-form woocommerce-form-login login" data-redirect="true" method="post" data-field-validation>
                    <?php do_action( 'woocommerce_login_form_start' ); ?>

                    <p class=" woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <input type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" placeholder="<?php esc_html_e( 'Email', 'lavandre' ); ?>" autocomplete="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" title="<?php _e('Fill in a valid email address.', 'lavandre'); ?>" required /><?php // @codingStandardsIgnoreLine ?>
                        <label for="username"><?php esc_html_e( 'Email', 'lavandre' ); ?>&nbsp;<span class="required">*</span></label>
                    </p>

                    <p is="password-reveal" class="password-row woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <input class="woocommerce-Inputt woocommerce-Input--text input-text" type="password" name="password" id="password" placeholder="<?php esc_html_e( 'Password', 'lavandre' ); ?>" autocomplete="current-password" title="<?php _e('Fill in the password.', 'lavandre'); ?>" required />
                        <label for="password"><?php esc_html_e( 'Password', 'lavandre' ); ?>&nbsp;<span class="required">*</span></label>
                    </p>

                    <?php do_action( 'woocommerce_login_form' ); ?>

                    <p class="woocommerce-LostPassword lost_password form-row">
                        <?php wp_nonce_field('ajax-forgot-nonce', 'forgotsecurity'); ?>
                        <a href="<?php echo esc_url( wp_lostpassword_url() ); ?>" class="accent-link" data-role="password-forget-toggle"><?php esc_html_e( 'Forgot your password?', 'lavandre' ); ?></a>
                    </p>

                    <?php wp_nonce_field( 'woocommerce-login', 'woocommerce-login-nonce' ); ?>
                    <button type="submit" is="lavandre-button" primary full-width size="large" name="login" value="<?php esc_attr_e( 'Sign in', 'lavandre' ); ?>"><?php esc_html_e( 'Sign in', 'lavandre' ); ?></button>

                    <?php do_action( 'woocommerce_login_form_end' ); ?>
                </form>
            </section>

            <section class="register-wrapper">
                <header>
                    <h1><?php esc_html_e( 'Register', 'lavandre' ); ?></h1>
                    <p><?php esc_html_e('Checkout faster, view your order history and be the first to hear about new product launches!','lavandre'); ?></p>
                </header>

                <form method="post" class="woocommerce-form woocommerce-form-register register" <?php do_action( 'woocommerce_register_form_tag' ); ?> >
                    <?php do_action( 'woocommerce_register_form_start' ); ?>
                    <?php if ( 'no' === get_option( 'woocommerce_registration_generate_username' ) ) : ?>
                        <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                            <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="reg_username" autocomplete="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" required placeholder="<?php esc_html_e( 'Username', 'lavandre' ); ?>" /><?php // @codingStandardsIgnoreLine ?>
                            <label for="reg_username"><?php esc_html_e( 'Username', 'lavandre' ); ?>&nbsp;<span class="required">*</span></label>
                        </p>
                    <?php endif; ?>

                    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <?php wp_nonce_field( 'woocommerce-email-check', 'woocommerce-email-check-nonce' ); ?>
                        <input is="email-validation" type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" autocomplete="email" value="<?php echo ( ! empty( $_POST['email'] ) ) ? esc_attr( wp_unslash( $_POST['email'] ) ) : ''; ?>" required placeholder="<?php esc_html_e( 'Email', 'lavandre' ); ?>" /><?php // @codingStandardsIgnoreLine ?>
                        <label for="reg_email"><?php esc_html_e( 'Email', 'lavandre' ); ?>&nbsp;<span class="required">*</span></label>
                    </p>

                    <p is="password-reveal" class="password-row woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <input type="password" class="woocommerce-Inputt woocommerce-Input--text input-text" name="password" id="reg_password" autocomplete="new-password" required placeholder="<?php esc_html_e( 'Password', 'lavandre' ); ?>" />
                        <label for="reg_password"><?php esc_html_e( 'Password', 'lavandre' ); ?>&nbsp;<span class="required">*</span></label>
                    </p>

                    <p class="woocommerce-form-row form-row">
                        <?php wp_nonce_field( 'woocommerce-register', 'woocommerce-register-nonce' ); ?>
                        <button type="submit" is="lavandre-button" primary full-width size="large" name="register" value="<?php esc_attr_e( 'Create Account', 'lavandre' ); ?>"><?php esc_html_e( 'Create Account', 'lavandre' ); ?></button>
                    </p>

                    <?php do_action( 'woocommerce_register_form_end' ); ?>

                </form>
            </section>
        </div>
    </div>

    <div class="full-width-banner-block__link"></div>
</div>

<?php do_action( 'woocommerce_after_customer_login_form' ); ?>
