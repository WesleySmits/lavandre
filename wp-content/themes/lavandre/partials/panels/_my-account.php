<template data-panel-template="my-account-panel">
    <dialog class="side-panel side-panel--alt side-panel--right side-panel--my-account" data-panel-name="my-account-panel">
        <div class="side-panel__container">
            <header class="side-panel__header">
                <h1><?php _e('Log in', 'lavandre'); ?></h1>

                <button type="button" class="side-panel__close">
                    <?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?>
                </button>
            </header>

            <section class="side-panel__section side-panel__section--bordered side-panel__section--boxed">
                <h2><?php _e('I already have an account', 'lavandre'); ?></h2>
                <p>
                    <?php _e('Log in here to view the status of your orders and to change your account information.', 'lavandre'); ?>
                </p>

                <form
                    id="ajax-login-form"
                    class="woocommerce-form woocommerce-form-login login"
                    method="post"
                    novalidate
                >
                    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <input
                            type="email"
                            id="ajax-login-username"
                            class="woocommerce-Input woocommerce-Input--text input-text"
                            name="username"
                            placeholder="<?php _e('E-mail address', 'lavandre'); ?>"
                            autocomplete="username"
                            title="<?php _e('Fill in a valid e-mail address', 'lavandre'); ?>"
                            required
                        >
                        <label for="ajax-login-username"><?php _e('E-mail address', 'lavandre'); ?>&nbsp;<span class="required">*</span></label>
                    </p>

                    <p class="password-row woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <input
                            type="password"
                            id="ajax-login-password"
                            class="woocommerce-Inputt woocommerce-Input--text input-text"
                            name="password"
                            placeholder="<?php _e('Password', 'lavandre'); ?>"
                            autocomplete="current-password"
                            title="<?php _e('Fill in the password', 'lavandre'); ?>"
                            required
                        >
                        <label for="ajax-login-password"><?php _e('Password', 'lavandre'); ?>&nbsp;<span class="required">*</span></label>
                    </p>

                    <p class="woocommerce-LostPassword lost_password">
                        <a href="/my-account/lost-password/" data-role="password-forget"><?php _e('Forgot password?', 'lavandre'); ?></a>
                    </p>

                    <button
                        type="submit"
                        class="woocommerce-button button woocommerce-form-login__submit cta-button cta-button--secondary"
                        name="login"
                        value="<?php _e('Log in', 'lavandre'); ?>"
                    ><?php _e('Log in', 'lavandre'); ?></button>
                </form>
            </section>

            <section class="side-panel__section side-panel__section--bordered side-panel__section--boxed">
                <h2><?php _e('Are you new?', 'lavandre'); ?></h2>
                <p>
                    <?php _e('Register to enjoy many benefits on our website. With the information below you can log in to our website in the future.', 'lavandre'); ?>
                </p>

                <form
                    id="ajax-register-form"
                    class="woocommerce-form woocommerce-form-login login"
                    method="post"
                    novalidate
                >
                    <div class="flex customer-register__name-fields">
                        <p class="form-row form-row-first customer-register__name-field">
                            <input
                                type="text"
                                name="first_name"
                                id="user_first_name"
                                class="input-text"
                                placeholder="<?php _e('First name', 'lavandre'); ?>"
                                required
                                title="<?php _e('We need a first name from you.', 'lavandre'); ?>">
                            <label for="user_first_name"><?php _e('First name', 'lavandre'); ?> <span class="required">*</span></label>
                        </p>

                        <p class="form-row form-row-last customer-register__name-field">
                            <input type="text"
                                class="input-text"
                                name="last_name"
                                id="user_last_name"
                                placeholder="<?php _e('Last name', 'lavandre'); ?>"
                                required
                                title="<?php _e('We need a last name from you.', 'lavandre'); ?>"
                            >
                            <label for="user_last_name"><?php _e('Last name', 'lavandre'); ?> <span class="required">*</span></label>
                        </p>
                    </div>

                    <p class=" woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <input
                            type="email"
                            class="woocommerce-Input woocommerce-Input--text input-text"
                            name="email"
                            id="user-email"
                            placeholder="<?php _e('E-mail address', 'lavandre'); ?>"
                            autocomplete="email"
                            title="<?php _e('Fill in a valid e-mail address.', 'lavandre'); ?>"
                            required
                        >
                        <label for="user-email"><?php _e('E-mail address', 'lavandre'); ?>&nbsp;<span class="required">*</span></label>
                    </p>

                    <p class="password-row woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <input
                            class="woocommerce-Inputt woocommerce-Input--text input-text"
                            type="password"
                            name="password"
                            id="register-password"
                            placeholder="<?php _e('Password', 'lavandre'); ?>"
                            autocomplete="current-password"
                            title="<?php _e('6 character minimun including at least 1 number, 1 capital letter and 1 lowercased letter.', 'lavandre'); ?>"
                            data-value-missing="<?php _e('Please fill in a password.', 'lavandre'); ?>"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                            required
                        >
                        <label for="register-password"><?php _e('Password', 'lavandre'); ?>&nbsp;<span class="required">*</span></label>
                    </p>

                    <p class="password-row woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <input
                            class="woocommerce-Inputt woocommerce-Input--text input-text"
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            placeholder="<?php _e('Password', 'lavandre'); ?>"
                            autocomplete="current-password"
                            required
                            title="<?php _e('6 character minimun including at least 1 number, 1 capital letter and 1 lowercased letter.', 'lavandre'); ?>"
                            data-custom-message="<?php _e('The passwords do not match.', 'lavandre'); ?>"
                            data-value-missing="<?php _e('Please fill in a password.', 'lavandre'); ?>"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                        >
                        <label for="confirm-password"><?php _e('Confirm password', 'lavandre'); ?>&nbsp;<span class="required">*</span></label>
                    </p>

                    <button type="submit" class="woocommerce-button button woocommerce-form-login__submit cta-button cta-button--secondary" name="register" value="<?php _e('Register', 'lavandre'); ?>"><?php _e('Register', 'lavandre'); ?></button>
                </form>
            </section>
        </div>
    </dialog>
</template>
