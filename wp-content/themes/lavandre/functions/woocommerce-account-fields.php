<?php
    ///////////////////////////////
    // 1. ADD FIELDS

    add_action( 'woocommerce_register_form_start', 'bbloomer_add_name_woo_account_registration' );

    function bbloomer_add_name_woo_account_registration() {
        ?>

        <div class="flex customer-register__name-fields">
            <p class="form-row form-row-first customer-register__name-field">
                <input type="text" class="input-text" name="billing_first_name" id="reg_billing_first_name" value="<?php if ( ! empty( $_POST['billing_first_name'] ) ) esc_attr_e( $_POST['billing_first_name'] ); ?>" placeholder="<?php _e( 'First name', 'woocommerce' ); ?>" required />
                <label for="reg_billing_first_name"><?php _e( 'First name', 'woocommerce' ); ?> <span class="required">*</span></label>
            </p>

            <p class="form-row form-row-last customer-register__name-field">
                <input type="text" class="input-text" name="billing_last_name" id="reg_billing_last_name" value="<?php if ( ! empty( $_POST['billing_last_name'] ) ) esc_attr_e( $_POST['billing_last_name'] ); ?>" placeholder="<?php _e( 'Last name', 'woocommerce' ); ?>" required />
                <label for="reg_billing_last_name"><?php _e( 'Last name', 'woocommerce' ); ?> <span class="required">*</span></label>
            </p>
        </div>

        <div class="clear"></div>

        <?php
    }

    ///////////////////////////////
    // 2. VALIDATE FIELDS

    add_filter( 'woocommerce_registration_errors', 'bbloomer_validate_name_fields', 10, 3 );
    function bbloomer_validate_name_fields( $errors, $username, $email ) {
        if ( isset( $_POST['billing_first_name'] ) && empty( $_POST['billing_first_name'] ) ) {
            $errors->add( 'billing_first_name_error', __( '<strong>Error</strong>: First name is required!', 'woocommerce' ) );
        }
        if ( isset( $_POST['billing_last_name'] ) && empty( $_POST['billing_last_name'] ) ) {
            $errors->add( 'billing_last_name_error', __( '<strong>Error</strong>: Last name is required!.', 'woocommerce' ) );
        }
        return $errors;
    }

    ///////////////////////////////
    // 3. SAVE FIELDS

    add_action( 'woocommerce_created_customer', 'bbloomer_save_name_fields' );
    function bbloomer_save_name_fields( $customer_id ) {
        if ( isset( $_POST['billing_first_name'] ) ) {
            update_user_meta( $customer_id, 'billing_first_name', sanitize_text_field( $_POST['billing_first_name'] ) );
            update_user_meta( $customer_id, 'first_name', sanitize_text_field($_POST['billing_first_name']) );
        }
        if ( isset( $_POST['billing_last_name'] ) ) {
            update_user_meta( $customer_id, 'billing_last_name', sanitize_text_field( $_POST['billing_last_name'] ) );
            update_user_meta( $customer_id, 'last_name', sanitize_text_field($_POST['billing_last_name']) );
        }
    }
