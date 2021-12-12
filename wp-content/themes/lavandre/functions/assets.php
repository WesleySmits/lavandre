<?php
add_action( 'after_setup_theme', function() {
    // Load translation files from your child theme instead of the parent theme
    load_child_theme_textdomain( 'total', get_stylesheet_directory() . '/languages' );
    load_child_theme_textdomain( 'lavandre', get_stylesheet_directory() . '/languages' );
    load_child_theme_textdomain( 'hello-elementor-child', get_stylesheet_directory() . '/languages' );

    // Remove woo three image gallery support
    remove_theme_support( 'wc-product-gallery-zoom' );
    remove_theme_support( 'wc-product-gallery-slider' );
    remove_theme_support( 'wc-product-gallery-lightbox' );
} );

add_action( 'wp_footer', function() {
    wp_deregister_script( 'wp-embed' );
    wp_dequeue_script('wc-add-to-cart-variation');
} );

add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_scripts_lavandre();
    wp_enqueue_styles_lavandre();
    loadWebpackModules();

    /* Output enqueued scripts   */
    // global $wp_scripts;
    // global $enqueued_scripts;
    // $enqueued_scripts = array();
    // foreach( $wp_scripts->queue as $handle ) {
    //     $enqueued_scripts[] = $handle." | ".$wp_scripts->registered[$handle]->src;
    // }
    // var_dump($enqueued_scripts);
    // die;

    /* Output enqueued styles */
    // global $wp_styles;
    // foreach( $wp_styles->queue as $handle ) :
    //     var_dump($handle);
    // endforeach;
    // die;
}, 1000 );

function wp_enqueue_scripts_lavandre() {
    // Remove Gutenberg Block Library CSS from loading on the frontend
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'wp-block-library-theme' );
    wp_dequeue_style( 'wc-block-style' );
    wp_dequeue_style( 'wc-blocks-style' );

    // Remove TranslatePress Front-end code
    wp_dequeue_script('trp-frontend-compatibility');

    // Remove SVG front-end code
    wp_dequeue_script('bodhi_svg_inline');

    // Remove jetpack devicepx
    wp_dequeue_script( 'devicepx' );

    // If Woocommerce exists
    if (function_exists( 'is_woocommerce' )) {
        // Global woocommerce dequeues
        wp_dequeue_script('wc-add-to-cart');
        wp_dequeue_script('jquery-blockui');
        wp_dequeue_script('jquery-placeholder');
        wp_dequeue_script('woocommerce');
        wp_dequeue_script('jquery-cookie');
        wp_dequeue_script('wc-cart-fragments');
        wp_dequeue_script('selectWoo');
        wp_deregister_script('selectWoo');

        // Remove product search assets
        wp_dequeue_script('typewatch');
        wp_dequeue_script('product-search');

        if (!is_woocommerce() && !is_cart() && !is_account_page() ) {
            wp_dequeue_script('mailchimp-woocommerce');

            // Remove woocommerce generator
            remove_action( 'wp_head', array( $GLOBALS['woocommerce'], 'generator' ) );
        }

        if (is_product()) {
            // Load jquery for Woocommerce Analytics
            wp_enqueue_script( 'jquery' );

            wp_dequeue_script('zoom');
            wp_dequeue_script('flexslider');
            wp_dequeue_script('photoswipe-ui-default');
            wp_dequeue_script('wc-single-product');
        }
    }
}
// add_action( 'wp_enqueue_scripts', 'wp_enqueue_scripts_lavandre', 100 );
add_filter( 'jetpack_implode_frontend_css', '__return_false', 99 );
add_filter( 'jetpack_sharing_counts', '__return_false', 99 );

// add_action( 'wp_enqueue_scripts', 'woocommerce_de_style', 99999999 );
function wp_enqueue_styles_lavandre() {
    // wp_dequeue_style('affwp-forms');
    wp_dequeue_style('wpforms-full');
    wp_dequeue_style('trp-language-switcher-style');
    wp_dequeue_style('wc-block-vendors-style');
    wp_dequeue_style('product-search');
    wp_dequeue_style('wcsatt-css');

    wp_dequeue_style('wp-mediaelement');

    if (function_exists( 'is_woocommerce' )) {
        if (is_woocommerce()) {
            wp_dequeue_style('select2');
            wp_deregister_style('select2');
        }

        if (
            (!is_woocommerce() && !is_cart())
            || is_shop()
            || is_product()
        ) {
            wp_dequeue_style('woocommerce-layout');
            wp_dequeue_style('woocommerce-smallscreen');
            wp_dequeue_style('woocommerce-general');

            wp_dequeue_style('woocommerce-inline');
            wp_dequeue_style('wp-block-library');
            wp_dequeue_style('wc-block-style');
            wp_dequeue_style('wc-bundle-style');
        }
    }
}

function loadWebpackModules(): void {
    // Load lavandre styles
	wp_enqueue_style('lavandre', get_stylesheet_directory_uri() . '/style.css', [], false);

    // Load app module
    loadEncoreModule('app');

    if (is_front_page()) {
        loadEncoreModule('homepage-styles');
        loadEncoreModule('home');
    }
    if (is_shop()) loadEncoreModule('product-overview-styles');
    if ( !is_front_page() && (is_home() || is_single()) ) loadEncoreModule('blogOverviewStyles');
    if (is_product()) loadEncoreModule('product-styles');
    if (is_product()) loadEncoreModule('productDetail');
    if (is_cart()) loadEncoreModule('cart');
    if (is_404()) loadEncoreModule('404-styles');
    if (is_account_page() && is_user_logged_in()) loadEncoreModule('account-styles');
    if (is_checkout()) loadEncoreModule('checkout');
    if (get_post_type() === 'faqs') loadEncoreModule('customerServiceStyles');
    if (is_page_template('template-parts/sustainability.php')) {
        loadEncoreModule('sustainability-styles');
        loadEncoreModule('landingspage-styles');
    }

    if (is_page_template('template-parts/landingspage.php')) {
        loadEncoreModule('landingspage-styles');
    }

    if (is_page_template('template-parts/about.php')) {
        loadEncoreModule('about-styles');
    }

    if (is_page_template('template-parts/contact.php')) {
        loadEncoreModule('contact-styles');
    }

    // #TODO: Get id's somehow
    if (
        (is_account_page() && !is_user_logged_in())
        || is_page(317)
        || is_page(17)
    ) {
        loadEncoreModule('login-styles');
    }
}

include(get_stylesheet_directory() . '/functions/assets/disable-emoji.php');
include(get_stylesheet_directory() . '/functions/assets/utils.php');
include(get_stylesheet_directory() . '/functions/assets/output.php');


// Replace woocommerce address js file due to bug in their checkout field priority retrieval
add_action('wp_enqueue_scripts', 'override_woo_frontend_scripts');
function override_woo_frontend_scripts() {
    if( is_checkout() ) {
        global $wp_scripts;

        $wp_scripts->registered[ 'wc-address-i18n' ]->src = get_template_directory_uri() . '/woocommerce/js/address-i18n.min.js';
    }
}
