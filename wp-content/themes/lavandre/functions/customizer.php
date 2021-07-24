<?php
    /**
    * Create Logo Setting and Upload Control
    */
    function your_theme_new_customizer_settings($wp_customize) {
        $wp_customize->add_panel( 'lavandre_theme_options',
            array(
                //'priority'       => 100,
                'title'            => __( 'Theme Options', 'lavandre' ),
                'description'      => __( 'Theme Modifications like color scheme, theme texts and layout preferences can be done here', 'lavandre' ),
            )
        );

        $wp_customize->add_section( 'lavandre_checkout' , array(
            'title'      => 'Checkout',
            'priority'   => 30,
            'panel'         => 'lavandre_theme_options'
        ) );

        shipToDifferentAddressByDefault($wp_customize);
    }
    add_action('customize_register', 'your_theme_new_customizer_settings');

    function shipToDifferentAddressByDefault($wp_customize): void {
        $wp_customize->add_setting( 'lavandre_ship_to_different_address_by_default',
            array(
                'type'              => 'option',
                'default'           => false,
                'sanitize_callback' => 'lavandre_sanitize_checkbox',
                'transport'         => 'refresh',
            )
        );

        $wp_customize->add_control(
            'lavandre_ship_to_different_address_by_default',
            array(
              'label'    => __( 'Ship to different address?', 'lavandre' ),
              'description' => __( 'Let the customer choose a different address to ship to by default?', 'lavandre' ),
              'section'  => 'lavandre_checkout',
              'type'     => 'checkbox',
            )
        );
    }




    /**
     * Checkbox sanitization callback example.
     *
     * Sanitization callback for 'checkbox' type controls. This callback sanitizes `$checked`
     * as a boolean value, either true or false.
     *
     * @param bool $checked Whether the checkbox is checked.
     * @return bool Whether the checkbox is checked.
     */
    function lavandre_sanitize_checkbox( $checked ) {
        // Boolean check.
        return ( ( isset( $checked ) && true == $checked ) ? true : false );
    }
