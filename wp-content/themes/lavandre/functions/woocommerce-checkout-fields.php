<?php
    /**
     * Outputs a checkout/address form field.
     *
     * @param string $key Key.
     * @param mixed  $args Arguments.
     * @param string $value (default: null).
     * @return string
     */
    function woocommerce_form_field( $key, $args, $value = null ) {
        $defaults = array(
            'type'              => 'text',
            'label'             => '',
            'description'       => '',
            'placeholder'       => '',
            'maxlength'         => false,
            'required'          => false,
            'autocomplete'      => false,
            'id'                => $key,
            'class'             => array(),
            'label_class'       => array(),
            'input_class'       => array(),
            'return'            => false,
            'options'           => array(),
            'custom_attributes' => array(),
            'validate'          => array(),
            'default'           => '',
            'autofocus'         => '',
            'priority'          => '',
        );

        $args = wp_parse_args( $args, $defaults );
        $args = apply_filters( 'woocommerce_form_field_args', $args, $key, $value );

        if ( $args['required'] ) {
            $args['class'][] = 'validate-required';
            $required        = '&nbsp;<abbr class="required" title="' . esc_attr__( 'required', 'woocommerce' ) . '">*</abbr>';
        } else {
            $required = '';
        }

        if ( is_string( $args['label_class'] ) ) {
            $args['label_class'] = array( $args['label_class'] );
        }

        if ( is_null( $value ) ) {
            $value = $args['default'];
        }

        // Custom attribute handling.
        $custom_attributes         = array();
        $args['custom_attributes'] = array_filter( (array) $args['custom_attributes'], 'strlen' );

        if ( $args['maxlength'] ) {
            $args['custom_attributes']['maxlength'] = absint( $args['maxlength'] );
        }

        if ( ! empty( $args['autocomplete'] ) ) {
            $args['custom_attributes']['autocomplete'] = $args['autocomplete'];
        }

        if ( true === $args['autofocus'] ) {
            $args['custom_attributes']['autofocus'] = 'autofocus';
        }

        if ( $args['description'] ) {
            $args['custom_attributes']['aria-describedby'] = $args['id'] . '-description';
        }

        if ( ! empty( $args['custom_attributes'] ) && is_array( $args['custom_attributes'] ) ) {
            foreach ( $args['custom_attributes'] as $attribute => $attribute_value ) {
                $custom_attributes[] = esc_attr( $attribute ) . '="' . esc_attr( $attribute_value ) . '"';
            }
        }

        if ( ! empty( $args['validate'] ) ) {
            foreach ( $args['validate'] as $validate ) {
                $args['class'][] = 'validate-' . $validate;
            }
        }

        $field           = '';
        $label_id        = $args['id'];
        $sort            = $args['priority'] ? $args['priority'] : '';
        $field_container = '<p class="form-row %1$s" id="%2$s" data-priority="' . esc_attr( $sort ) . '">%3$s</p>';

        switch ( $args['type'] ) {
            case 'country':
                $countries = 'shipping_country' === $key ? WC()->countries->get_shipping_countries() : WC()->countries->get_allowed_countries();

                if ( 1 === count( $countries ) ) {

                    $field .= '<strong>' . current( array_values( $countries ) ) . '</strong>';

                    $field .= '<input type="hidden" name="' . esc_attr( $key ) . '" id="' . esc_attr( $args['id'] ) . '" value="' . current( array_keys( $countries ) ) . '" ' . implode( ' ', $custom_attributes ) . ' class="country_to_state" readonly="readonly" />';

                } else {

                    $field = '<select name="' . esc_attr( $key ) . '" id="' . esc_attr( $args['id'] ) . '" class="country_to_state country_select ' . esc_attr( implode( ' ', $args['input_class'] ) ) . '" ' . implode( ' ', $custom_attributes ) . '><option value="default">' . esc_html__( 'Select a country / region&hellip;', 'woocommerce' ) . '</option>';

                    foreach ( $countries as $ckey => $cvalue ) {
                        $field .= '<option value="' . esc_attr( $ckey ) . '" ' . selected( $value, $ckey, false ) . '>' . esc_html( $cvalue ) . '</option>';
                    }

                    $field .= '</select>';

                    $field .= '<noscript><button type="submit" name="woocommerce_checkout_update_totals" value="' . esc_attr__( 'Update country / region', 'woocommerce' ) . '">' . esc_html__( 'Update country / region', 'woocommerce' ) . '</button></noscript>';

                }

                break;
            case 'state':
                /* Get country this state field is representing */
                $for_country = isset( $args['country'] ) ? $args['country'] : WC()->checkout->get_value( 'billing_state' === $key ? 'billing_country' : 'shipping_country' );
                $states      = WC()->countries->get_states( $for_country );

                if ( is_array( $states ) && empty( $states ) ) {

                    $field_container = '<p class="form-row %1$s" id="%2$s" style="display: none">%3$s</p>';

                    $field .= '<input type="hidden" class="hidden" name="' . esc_attr( $key ) . '" id="' . esc_attr( $args['id'] ) . '" value="" ' . implode( ' ', $custom_attributes ) . ' placeholder="' . esc_attr( $args['placeholder'] ) . '" readonly="readonly" data-input-classes="' . esc_attr( implode( ' ', $args['input_class'] ) ) . '"/>';

                } elseif ( ! is_null( $for_country ) && is_array( $states ) ) {

                    $field .= '<select name="' . esc_attr( $key ) . '" id="' . esc_attr( $args['id'] ) . '" class="state_select ' . esc_attr( implode( ' ', $args['input_class'] ) ) . '" ' . implode( ' ', $custom_attributes ) . ' data-placeholder="' . esc_attr( $args['placeholder'] ? $args['placeholder'] : esc_html__( 'Select an option&hellip;', 'woocommerce' ) ) . '"  data-input-classes="' . esc_attr( implode( ' ', $args['input_class'] ) ) . '">
                        <option value="">' . esc_html__( 'Select an option&hellip;', 'woocommerce' ) . '</option>';

                    foreach ( $states as $ckey => $cvalue ) {
                        $field .= '<option value="' . esc_attr( $ckey ) . '" ' . selected( $value, $ckey, false ) . '>' . esc_html( $cvalue ) . '</option>';
                    }

                    $field .= '</select>';

                } else {

                    $field .= '<input type="text" class="input-text ' . esc_attr( implode( ' ', $args['input_class'] ) ) . '" value="' . esc_attr( $value ) . '"  placeholder="' . esc_attr( $args['placeholder'] ) . '" name="' . esc_attr( $key ) . '" id="' . esc_attr( $args['id'] ) . '" ' . implode( ' ', $custom_attributes ) . ' data-input-classes="' . esc_attr( implode( ' ', $args['input_class'] ) ) . '"/>';

                }

                break;
            case 'textarea':
                $field .= '<textarea name="' . esc_attr( $key ) . '" class="input-text ' . esc_attr( implode( ' ', $args['input_class'] ) ) . '" id="' . esc_attr( $args['id'] ) . '" placeholder="' . esc_attr( $args['placeholder'] ) . '" ' . ( empty( $args['custom_attributes']['rows'] ) ? ' rows="2"' : '' ) . ( empty( $args['custom_attributes']['cols'] ) ? ' cols="5"' : '' ) . implode( ' ', $custom_attributes ) . '>' . esc_textarea( $value ) . '</textarea>';

                break;
            case 'checkbox':
                $field = '<label class="checkbox ' . implode( ' ', $args['label_class'] ) . '" ' . implode( ' ', $custom_attributes ) . '>
                        <input type="' . esc_attr( $args['type'] ) . '" class="input-checkbox ' . esc_attr( implode( ' ', $args['input_class'] ) ) . '" name="' . esc_attr( $key ) . '" id="' . esc_attr( $args['id'] ) . '" value="1" ' . checked( $value, 1, false ) . ' /> ' . $args['label'] . $required . '</label>';

                break;
            case 'text':
            case 'password':
            case 'datetime':
            case 'datetime-local':
            case 'date':
            case 'month':
            case 'time':
            case 'week':
            case 'number':
            case 'email':
            case 'url':
            case 'tel':
                $field .= '<input type="' . esc_attr( $args['type'] ) . '" class="input-text ' . esc_attr( implode( ' ', $args['input_class'] ) ) . '" name="' . esc_attr( $key ) . '" id="' . esc_attr( $args['id'] ) . '" placeholder="' . esc_attr( $args['placeholder'] ) . '"  value="' . esc_attr( $value ) . '" ' . implode( ' ', $custom_attributes ) . ' />';
                break;
            case 'hidden':
                $field .= '<input type="' . esc_attr( $args['type'] ) . '" class="input-hidden ' . esc_attr( implode( ' ', $args['input_class'] ) ) . '" name="' . esc_attr( $key ) . '" id="' . esc_attr( $args['id'] ) . '" value="' . esc_attr( $value ) . '" ' . implode( ' ', $custom_attributes ) . ' />';

                break;
            case 'select':
                $field   = '';
                $options = '';

                if ( ! empty( $args['options'] ) ) {
                    foreach ( $args['options'] as $option_key => $option_text ) {
                        if ( '' === $option_key ) {
                            // If we have a blank option, select2 needs a placeholder.
                            if ( empty( $args['placeholder'] ) ) {
                                $args['placeholder'] = $option_text ? $option_text : __( 'Choose an option', 'woocommerce' );
                            }
                            $custom_attributes[] = 'data-allow_clear="true"';
                        }
                        $options .= '<option value="' . esc_attr( $option_key ) . '" ' . selected( $value, $option_key, false ) . '>' . esc_html( $option_text ) . '</option>';
                    }

                    $field .= '<select name="' . esc_attr( $key ) . '" id="' . esc_attr( $args['id'] ) . '" class="select ' . esc_attr( implode( ' ', $args['input_class'] ) ) . '" ' . implode( ' ', $custom_attributes ) . ' data-placeholder="' . esc_attr( $args['placeholder'] ) . '">
                            ' . $options . '
                        </select>';
                }

                break;
            case 'radio':
                $label_id .= '_' . current( array_keys( $args['options'] ) );

                if ( ! empty( $args['options'] ) ) {
                    foreach ( $args['options'] as $option_key => $option_text ) {
                        $field .= '<input type="radio" class="input-radio ' . esc_attr( implode( ' ', $args['input_class'] ) ) . '" value="' . esc_attr( $option_key ) . '" name="' . esc_attr( $key ) . '" ' . implode( ' ', $custom_attributes ) . ' id="' . esc_attr( $args['id'] ) . '_' . esc_attr( $option_key ) . '"' . checked( $value, $option_key, false ) . ' />';
                        $field .= '<label for="' . esc_attr( $args['id'] ) . '_' . esc_attr( $option_key ) . '" class="radio ' . implode( ' ', $args['label_class'] ) . '">' . esc_html( $option_text ) . '</label>';
                    }
                }

                break;
        }

        if ( ! empty( $field ) ) {
            $field_html = '';

            $field_html .= $field;

            if ( $args['label'] && 'checkbox' !== $args['type'] ) {
                $field_html .= '<label for="' . esc_attr( $label_id ) . '" class="' . esc_attr( implode( ' ', $args['label_class'] ) ) . '">' . $args['label'] . $required . '</label>';
            }

            if ( $args['description'] ) {
                $field_html .= '<span class="description" id="' . esc_attr( $args['id'] ) . '-description" aria-hidden="true">' . wp_kses_post( $args['description'] ) . '</span>';
            }

            $container_class = esc_attr( implode( ' ', $args['class'] ) );
            $container_id    = esc_attr( $args['id'] ) . '_field';
            $field           = sprintf( $field_container, $container_class, $container_id, $field_html );
        }

        /**
         * Filter by type.
         */
        $field = apply_filters( 'woocommerce_form_field_' . $args['type'], $field, $key, $args, $value );

        /**
         * General filter on form fields.
         *
         * @since 3.4.0
         */
        $field = apply_filters( 'woocommerce_form_field', $field, $key, $args, $value );

        if ( $args['return'] ) {
            return $field;
        } else {
            // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
            echo $field;
        }
    }

    /**
     * Make company field optional
     */
    add_filter( 'woocommerce_billing_fields', 'disable_require_wc_company_field');
    function disable_require_wc_company_field( $fields ) {
        $fields['billing_company']['required'] = false;
        return $fields;
    }

    /**
     * Add placeholders to form fields in checkout & Align address fields
     */
    function override_billing_checkout_fields( $fields ) {
        $emailAddress = __( 'Email', 'lavandre' );
        $vatNumber = __( 'VAT number', 'lavandre' );

        $fields['billing']['billing_email']['placeholder'] = $emailAddress;
        $fields['shipping']['shipping_email']['placeholder'] = $emailAddress;
        $fields['billing']['billing_email']['label'] = $emailAddress;
        $fields['shipping']['shipping_email']['label'] = $emailAddress;

        $fields['billing']['billing_vat_number']['placeholder'] = $vatNumber;
        $fields['shipping']['shipping_vat_number']['placeholder'] = $vatNumber;
        $fields['billing']['billing_vat_number']['label'] = $vatNumber;
        $fields['shipping']['shipping_vat_number']['label'] = $vatNumber;

        // Ordering
        $fields['billing']['billing_email']['priority'] = 1;
        $fields['shipping']['shipping_email']['priority'] = 1;

        $fields['billing']['billing_vat_number']['priority'] = 5;
        $fields['shipping']['shipping_vat_number']['priority'] = 5;

        // Alignment
        $fields['billing']['billing_email']['class'] = ['form-row-wide'];
        $fields['shipping']['shipping_email']['class'] = ['form-row-wide'];

        $fields['billing']['billing_vat_number']['class'] = ['form-row-last'];
        $fields['shipping']['shipping_vat_number']['class'] = ['form-row-last'];

        $fields['order']['order_comments']['placeholder'] = '';

        // Remove
        unset($fields['billing']['billing_phone']);
        unset($fields['shipping']['shipping_phone']);

        return $fields;
    }
    add_filter( 'woocommerce_checkout_fields' , 'override_billing_checkout_fields', 20, 1 );

    add_filter( 'woocommerce_form_field', 'checkout_fields_in_label_error', 10, 4 );
    function checkout_fields_in_label_error( $field, $key, $args, $value ) {
        if (strpos( $field, '</label>' ) !== false && $args['required']) {
            $error = '<span class="error" style="display:none">';
            $error .= sprintf( __( '%s is a required field.', 'woocommerce' ), $args['label'] );
            $error .= '</span>';
            $field = substr_replace( $field, $error, strpos( $field, '</label>' ) + 8, 0);
        }
        return $field;
    }

    add_filter( 'woocommerce_default_address_fields' , 'custom_override_default_address_fields' );

    // Our hooked in function - $address_fields is passed via the filter!
    function custom_override_default_address_fields( $fields ) {
        $firstName = __( 'First name', 'lavandre' );
        $lastName = __( 'Last name', 'lavandre' );
        $companyName = __( 'Company', 'lavandre' );
        $streetName = __( 'Street', 'lavandre' );
        $houseNumber = __( 'House number', 'lavandre' );
        $houseNumberAddition = __( 'Addition', 'lavandre' );
        $postalCode = __( 'Postal code', 'lavandre' );
        $city = __( 'City', 'lavandre' );
        $country = __( 'Country', 'lavandre' );
        $phoneNumber = __( 'Phone number', 'lavandre' );

        $fields['house_number_suffix'] = [
            'class' => array( 'form-row-last' ),
            'label' => $houseNumberAddition,
            'placeholder' => '',
            'required' => false,
        ];

        $fields['first_name'] = update_address_field_label($fields['first_name'], $firstName, 2, ['form-row-first']);
        $fields['last_name'] = update_address_field_label($fields['last_name'], $lastName, 3, ['form-row-last']);
        $fields['company'] = update_address_field_label($fields['company'], $companyName, 4, ['form-row-first']);
        $fields['address_1'] = update_address_field_label($fields['address_1'], $streetName, 6, ['form-row-wide', 'address-field']);
        $fields['address_2'] = update_address_field_label($fields['address_2'], $houseNumber, 7, ['form-row-first', 'address-field']);
        $fields['house_number_suffix'] = update_address_field_label($fields['house_number_suffix'], $houseNumberAddition, 8, ['form-row-last', 'address-field']);
        $fields['country'] = update_address_field_label($fields['country'], $country, 9, ['form-row-wide', 'address-field']);
        $fields['postcode'] = update_address_field_label($fields['postcode'], $postalCode, 10, ['form-row-first', 'address-field']);
        $fields['city'] = update_address_field_label($fields['city'], $city, 11, ['form-row-last', 'address-field']);

        return $fields;
    }

    function update_address_field_label($field, $value, $priority = 10, $class = ['form-row-wide']) {
        $field['placeholder'] = $value;
        $field['label'] = $value;
        $field['priority'] = $priority;
        $field['class'] = $class;
        $field['label_class'] = [];
        return $field;
    }