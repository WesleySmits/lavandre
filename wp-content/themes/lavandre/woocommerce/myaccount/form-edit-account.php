<?php
/**
 * Edit account form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/form-edit-account.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.5.0
 */

defined( 'ABSPATH' ) || exit;

do_action( 'woocommerce_before_edit_account_form' ); ?>

<form class="woocommerce-EditAccountForm edit-account" action="" method="post" <?php do_action( 'woocommerce_edit_account_form_tag' ); ?> >

    <?php do_action( 'woocommerce_edit_account_form_start' ); ?>

    <h1><?php _e('Account details', 'lavandre'); ?></h1>

	<div class="flex">
        <p class="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
            <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="account_first_name" id="account_first_name" autocomplete="given-name" value="<?php echo esc_attr( $user->first_name ); ?>" placeholder="<?php esc_html_e( 'First name', 'woocommerce' ); ?>" />
            <label for="account_first_name"><?php esc_html_e( 'First name', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
        </p>

        <p class="woocommerce-form-row woocommerce-form-row--last form-row form-row-last ">
            <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="account_last_name" id="account_last_name" autocomplete="family-name" value="<?php echo esc_attr( $user->last_name ); ?>" placeholder="<?php esc_html_e( 'Last name', 'woocommerce' ); ?>" />
            <label for="account_last_name"><?php esc_html_e( 'Last name', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
        </p>
    </div>

	<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
		<input type="email" class="woocommerce-Input woocommerce-Input--email input-text" name="account_email" id="account_email" autocomplete="email" value="<?php echo esc_attr( $user->user_email ); ?>" placeholder="<?php esc_html_e( 'Email', 'lavandre' ); ?>" />
		<label for="account_email"><?php esc_html_e( 'Email', 'lavandre' ); ?>&nbsp;<span class="required">*</span></label>
    </p>

    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <input
            type="tel"
            class="woocommerce-Input woocommerce-Input--phone input-text"
            name="billing_phone"
            id="billing_phone"
            value="<?php echo esc_attr( $user->billing_phone ); ?>"
            placeholder="<?php _e( 'Phone', 'woocommerce' ); ?>"
            pattern="(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)"
        />
        <label for="billing_phone"><?php _e( 'Phone', 'woocommerce' ); ?> <span class="required">*</span></label>
    </p>

    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <input type="text" class="woocommerce-Input woocommerce-Input--phone input-text" name="billing_company" id="billing_company" value="<?php echo esc_attr( $user->billing_company ); ?>" placeholder="<?php _e( 'Company', 'lavandre' ); ?>" />
        <label for="billing_company"><?php _e( 'Company', 'lavandre' ); ?> <span class="required">*</span></label>
    </p>

    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <?php $selected = esc_attr( $user->billing_company_type ); ?>
        <select class="woocommerce-Input woocommerce-Input--phone input-text" name="billing_company_type" id="billing_company_type" value="<?php echo esc_attr( $user->billing_company_type ); ?>">
            <option value="0" <?php if ($selected === '0') { ?> selected <?php } ?>><?php _e( 'Choose a branch', 'lavandre' ); ?></option>
                <option value="<?php _e('hairdresser', 'lavandre'); ?>" <?php if ($selected === __('hairdresser', 'lavandre')) { ?> selected <?php } ?>><?php echo ucfirst(__('hairdresser', 'lavandre')); ?></option>
                <option value="<?php _e('pedicure', 'lavandre'); ?>" <?php if ($selected === __('pedicure', 'lavandre')) { ?> selected <?php } ?>><?php echo ucfirst(__('pedicure', 'lavandre')); ?></option>
                <option value="<?php _e('spa', 'lavandre'); ?>" <?php if ($selected === __('spa', 'lavandre')) { ?> selected <?php } ?>><?php echo ucfirst(__('spa', 'lavandre')); ?></option>
                <option value="<?php _e('massage parlor', 'lavandre'); ?>" <?php if ($selected === __('massage parlor', 'lavandre')) { ?> selected <?php } ?>><?php echo ucfirst(__('massage parlor', 'lavandre')); ?></option>
                <option value="<?php _e('nail stylist', 'lavandre'); ?>" <?php if ($selected === __('nail stylist', 'lavandre')) { ?> selected <?php } ?>><?php echo ucfirst(__('nail stylist', 'lavandre')); ?></option>
                <option value="<?php _e('beauty salon', 'lavandre'); ?>" <?php if ($selected === __('beauty salon', 'lavandre')) { ?> selected <?php } ?>><?php echo ucfirst(__('beauty salon', 'lavandre')); ?></option>
                <option value="<?php _e('medical', 'lavandre'); ?>" <?php if ($selected === __('medical', 'lavandre')) { ?> selected <?php } ?>><?php echo ucfirst(__('medical', 'lavandre')); ?></option>
                <option value="<?php _e('travel', 'lavandre'); ?>" <?php if ($selected === __('travel', 'lavandre')) { ?> selected <?php } ?>><?php echo ucfirst(__('travel', 'lavandre')); ?></option>
                <option value="<?php _e('cleaning', 'lavandre'); ?>" <?php if ($selected === __('cleaning', 'lavandre')) { ?> selected <?php } ?>><?php echo ucfirst(__('cleaning', 'lavandre')); ?></option>
                <option value="<?php _e('other', 'lavandre'); ?>" <?php if ($selected === __('other', 'lavandre')) { ?> selected <?php } ?>><?php echo ucfirst(__('other', 'lavandre')); ?></option>
        </select>
        <label for="billing_company_type"><?php _e( 'Branch', 'lavandre' ); ?> <span class="required">*</span></label>
    </p>

    <?php do_action( 'woocommerce_edit_account_form' ); ?>

    <h3 data-curtain-toggle="password-save">
        <span><?php esc_html_e( 'Change password', 'lavandre' ); ?></span>
        <?php include get_stylesheet_directory() . '/partials/icons/chevron-down.svg.php'; ?>
    </h3>

    <div class="password-save" data-curtain-content="password-save">
        <p class="password-row woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <input type="password" class="woocommerce-Inputt woocommerce-Input--password input-text" name="password_current" id="password_current" autocomplete="off" placeholder="<?php esc_html_e( 'Current password (leave blank to leave unchanged)', 'woocommerce' ); ?>" />
            <label for="password_current"><?php esc_html_e( 'Current password', 'lavandre' ); ?></label>
        </p>

        <p class="password-row woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <input type="password" class="woocommerce-Inputt woocommerce-Input--password input-text" name="password_1" id="password_1" autocomplete="off" placeholder="<?php esc_html_e( 'New password (leave blank to leave unchanged)', 'woocommerce' ); ?>" />
            <label for="password_1"><?php esc_html_e( 'New password', 'lavandre' ); ?></label>
        </p>

        <p class="password-row woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <input type="password" class="woocommerce-Inputt woocommerce-Input--password input-text" name="password_2" id="password_2" autocomplete="off" placeholder="<?php esc_html_e( 'Confirm new password', 'woocommerce' ); ?>" />
            <label for="password_2"><?php esc_html_e( 'Confirm new password', 'lavandre' ); ?></label>
        </p>
    </div>

    <p>
        <?php wp_nonce_field( 'save_account_details', 'save-account-details-nonce' ); ?>
        <button type="submit" is="lavandre-button" primary full-width size="large" name="save_account_details" value="<?php esc_attr_e( 'Save', 'woocommerce' ); ?>"><?php esc_html_e( 'Save', 'woocommerce' ); ?></button>
        <input type="hidden" name="action" value="save_account_details" />
    </p>

	<?php do_action( 'woocommerce_edit_account_form_end' ); ?>
</form>

<?php do_action( 'woocommerce_after_edit_account_form' ); ?>
