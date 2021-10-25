<template data-panel-template="coupon-code-add">
    <dialog class="side-panel side-panel--right side-panel--my-account" data-panel-name="coupon-code-add">
        <div class="side-panel__container">
                <header class="side-panel__header">
                    <h1><?php _e('Add coupon code', 'lavandre'); ?></h1>

                    <button type="button" data-close class="side-panel__close">
                        <?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?>
                    </button>
                </header>

                <section class="side-panel__section side-panel__section--boxed">
                    <p><?php _e('Enter your coupon code here.', 'lavandre'); ?></p>

                    <form id="coupon-code-form" method="post" novalidate>
                        <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                            <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="coupon-code" id="coupon-code" placeholder="<?php _e('Coupon code', 'lavandre'); ?>" autocomplete="Coupon code" title="<?php _e('Fill in a valid coupon code', 'lavandre'); ?>" required>
                            <label for="coupon-code"><?php _e('Coupon code', 'lavandre'); ?><span class="required">*</span></label>
                        </p>

                        <button type="submit" is="lavandre-button" primary full-width size="large">
                            <?php _e('Activate', 'lavandre'); ?>
                        </button>
                    </form>
                </section>
            </div>
    </dialog>
</template>
