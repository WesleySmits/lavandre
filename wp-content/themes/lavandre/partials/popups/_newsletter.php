<template data-popup-template="newsletter-popup">
    <dialog class="popup" data-popup-name="newsletter-popup">
        <div class="popup__row">
            <button type="button" data-close class="popup__close">
                <?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?>
            </button>

            <section class="popup__column">
                <img src="/wp-content/uploads/2021/07/sustainable-towels.jpeg" alt="" width="" height="" />
            </section>

            <section class="popup__column popup__column--content">
                <h2><?php _e('Subscribe to our newsletter and receive a 10% discount code', 'lavandre'); ?></h2>

                <form
                    id="ajax-newsletter-form"
                    action="post"
                    class="woocommerce-form woocommerce-form-login login"
                >
                    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <input
                            type="text"
                            id="ajax-newsletter-first-name"
                            class="woocommerce-Input woocommerce-Input--text input-text"
                            name="first-name"
                            placeholder="<?php _e('First name', 'lavandre'); ?>"
                            autocomplete="first-name"
                            title="<?php _e('Fill in a valid name', 'lavandre'); ?>"
                            required
                        >
                        <label for="ajax-newsletter-first-name"><?php _e('First name', 'lavandre'); ?>&nbsp;<span class="required">*</span></label>
                    </p>

                    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <input
                            type="text"
                            id="ajax-newsletter-company-name"
                            class="woocommerce-Input woocommerce-Input--text input-text"
                            name="company-name"
                            placeholder="<?php _e('Company name', 'lavandre'); ?>"
                            autocomplete="company-name"
                            title="<?php _e('Fill in a valid company name', 'lavandre'); ?>"
                            required
                        >
                        <label for="ajax-newsletter-company-name"><?php _e('Company name', 'lavandre'); ?>&nbsp;<span class="required">*</span></label>
                    </p>

                    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <input
                            type="email"
                            id="ajax-newsletter-email"
                            class="woocommerce-Input woocommerce-Input--text input-text"
                            name="email"
                            placeholder="<?php _e('E-mail address', 'lavandre'); ?>"
                            autocomplete="email"
                            title="<?php _e('Fill in a valid email address', 'lavandre'); ?>"
                            required
                        >
                        <label for="ajax-newsletter-email"><?php _e('E-mail address', 'lavandre'); ?>&nbsp;<span class="required">*</span></label>
                    </p>

                    <button
                        type="submit"
                        is="lavandre-button"
                        primary
                        full-width
                        size="large"
                        name="subscribe"
                        value="<?php _e('Subscribe now', 'lavandre'); ?>"
                    ><?php _e('Subscribe now', 'lavandre'); ?></button>
                </form>
            </section>
        </div>
    </dialog>
</template>
