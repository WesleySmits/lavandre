<?php

// Load translation files from your child theme instead of the parent theme
function my_child_theme_locale() {
    load_child_theme_textdomain( 'total', get_stylesheet_directory() . '/languages' );
    load_child_theme_textdomain( 'lavandre', get_stylesheet_directory() . '/languages' );
}
add_action( 'after_setup_theme', 'my_child_theme_locale' );

/**
 * Remove Gutenberg Block Library CSS from loading on the frontend
 */
function smartwp_remove_wp_block_library_css(){
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'wp-block-library-theme' );
    wp_dequeue_style( 'wc-block-style' );
}
add_action( 'wp_enqueue_scripts', 'smartwp_remove_wp_block_library_css', 100 );

// add_action( 'wp_enqueue_scripts', function() { wp_dequeue_style( 'font-awesome' ); }, 50 );

add_action( 'wp_enqueue_scripts', 'crunchify_enqueue_scripts_styles' );
function crunchify_enqueue_scripts_styles() {
     wp_dequeue_script( 'devicepx' );
}
add_filter( 'jetpack_implode_frontend_css', '__return_false', 99 );
add_filter( 'jetpack_sharing_counts', '__return_false', 99 );

function enqueque_login_stylesheet() {
    if (
        (is_account_page() && !is_user_logged_in())
        || is_page(5710)
        || is_page(18)
    ) {
        wp_enqueue_style(
			'login-styles',
			get_stylesheet_directory_uri() . '/public/login-styles.css',
			[
				'hello-elementor-child-style',
			],
			'2.7.8'
		);
    }
}
add_action( 'wp_enqueue_scripts', 'enqueque_login_stylesheet' );


add_action( 'wp_enqueue_scripts', 'remove_woocommerce_generator', 99 );
function remove_woocommerce_generator() {
    if (function_exists( 'is_woocommerce' )) {
        if (!is_woocommerce()) {
            remove_action( 'wp_head', array( $GLOBALS['woocommerce'], 'generator' ) );
        }
    }
}

add_action( 'wp_print_scripts', 'woocommerce_de_script', 100 );
add_action( 'wp_enqueue_scripts', 'hello_elementor_child_enqueue_scripts', 20 );
function woocommerce_de_script() {
    // wp_dequeue_script('font-awesome-4-shim');
    wp_dequeue_script('bodhi_svg_inline');
    wp_dequeue_script('trp-frontend-compatibility');
    wp_dequeue_script('wp-embed');

    if (function_exists( 'is_woocommerce' )) {
        if (!is_woocommerce() && !is_cart() && !is_account_page() ) {
            wp_dequeue_script('wc-add-to-cart');
            wp_dequeue_script('jquery-blockui');
            wp_dequeue_script('jquery-placeholder');
            wp_dequeue_script('woocommerce');
            wp_dequeue_script('jquery-cookie');
            wp_dequeue_script('wc-cart-fragments');
            wp_dequeue_script('wpm_product_gtin_frontend');
            wp_dequeue_script('mailchimp-woocommerce');
        }
    }

    if (is_front_page()) {
        // wp_dequeue_script('smartmenus'); // neccessary for mobile menu dropdown and possibly accordeons?
        wp_dequeue_script('typewatch');
        wp_dequeue_script('product-search');
    }

    // global $wp_scripts;
    // global $enqueued_scripts;
    // $enqueued_scripts = array();
    // foreach( $wp_scripts->queue as $handle ) {
    //     $enqueued_scripts[] = $handle." | ".$wp_scripts->registered[$handle]->src;
    // }
    // var_dump($enqueued_scripts);
    // die;
}

add_action( 'wp_enqueue_scripts', 'woocommerce_de_style', 99999999 );
function woocommerce_de_style() {
    // wp_dequeue_style('affwp-forms');

    // WPForms Contact page
    if (!is_page(11)) {
        wp_dequeue_style('wpforms-full');
    }

    if (function_exists( 'is_woocommerce' )) {
        if (
            (!is_woocommerce()
            && !is_cart()
            && !is_page(6126))
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

    // wp_dequeue_style('font-awesome-5-all');
    // wp_dequeue_style('font-awesome-4-shim');
    wp_dequeue_style('trp-language-switcher-style');

    if (is_front_page()) {
        wp_dequeue_style('wc-block-vendors-style');
        wp_dequeue_style('product-search');
        wp_dequeue_style('wcsatt-css');

        wp_dequeue_style('hello-elementor-theme-style');
    }

    // global $wp_styles;
    // foreach( $wp_styles->queue as $handle ) :
    //     var_dump($handle);
    // endforeach;
    // die;
}

/**
 * Load child theme css and optional scripts
 *
 * @return void
 */
function hello_elementor_child_enqueue_scripts() {
    wp_dequeue_style('hello-elementor');

	wp_enqueue_style(
		'hello-elementor-child-style',
		get_stylesheet_directory_uri() . '/style.css',
		[],
		'2.7.8'
	);

    wp_enqueue_style(
		'application-style',
		get_stylesheet_directory_uri() . '/public/app.css',
		[],
		'2.7.8'
    );

    wp_enqueue_script(
        'webpack-runtime',
        get_stylesheet_directory_uri() . '/public/runtime.js',
		[],
        '2.7.8',
        true
    );

    wp_enqueue_script(
        'application-script',
        get_stylesheet_directory_uri() . '/public/app.js',
		['webpack-runtime'],
        '2.7.8',
        true
    );

    if (is_shop()) {
        wp_enqueue_style(
            'product-overview-styles',
            get_stylesheet_directory_uri() . '/public/product-overview-styles.css',
            [],
            '2.7.8',
        );
    }

    if (is_product()) {
        wp_enqueue_style(
            'product-styles',
            get_stylesheet_directory_uri() . '/public/product-styles.css',
            [],
            '2.7.8',
        );
    }

    if (is_account_page() && is_user_logged_in()) {
        wp_enqueue_style(
            'account-styles',
            get_stylesheet_directory_uri() . '/public/account-styles.css',
            [],
            '2.7.8'
        );
    }

    if (is_front_page()) {
        wp_enqueue_style(
            'homepage-styles',
            get_stylesheet_directory_uri() . '/public/homepage-styles.css',
            [],
            '2.7.8'
        );
    }
}


function add_rel_preload($html, $handle, $href, $media) {
    if (is_admin()) {
        return $html;
    }

    return <<<EOT
        <link rel='preload' as='style' onload="this.onload=null;this.rel='stylesheet'" href='$href' type='text/css' media='all' />
        EOT;
}
add_filter( 'style_loader_tag', 'add_rel_preload', 10, 4 );


/**
 * Disable the emoji's
 */
function disable_emojis() {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );

	// Remove from TinyMCE
	add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
}
add_action( 'init', 'disable_emojis' );

/**
 * Filter out the tinymce emoji plugin.
 */
function disable_emojis_tinymce( $plugins ) {
	if ( is_array( $plugins ) ) {
		return array_diff( $plugins, array( 'wpemoji' ) );
	} else {
		return array();
	}
}

/**
 * Get image kit URL
 */
function get_image_kit_url(string $src) {
    $baseUrl = get_site_url();
    $newSrc = str_replace($baseUrl, 'https://ik.imagekit.io/gw83zqxvr9d/', $src);
    return $newSrc;
}

function get_image_kit_placeholder($src, $width = 400, $height = 300) {
    $url = get_image_kit_url($src);
    return $url . '?tr=w-1,h-1:w-' . $width . ',h-' . $height;
}
