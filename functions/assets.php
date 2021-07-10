<?php

/**
 * Remove Gutenberg Block Library CSS from loading on the frontend
 */
function smartwp_remove_wp_block_library_css(){
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'wp-block-library-theme' );
    wp_dequeue_style( 'wc-block-style' );
}
add_action( 'wp_enqueue_scripts', 'smartwp_remove_wp_block_library_css', 100 );

/**
 * Remove font-awesome from elementor
 */
add_action( 'elementor/frontend/after_register_styles', function() {
	foreach( [ 'solid', 'regular', 'brands', 'all' ] as $style ) {
		wp_deregister_style( 'elementor-icons-fa-' . $style );
	}
}, 20 );

add_action( 'wp_enqueue_scripts', function() { wp_dequeue_style( 'font-awesome' ); }, 50 );
add_action( 'elementor/frontend/after_enqueue_styles', function () { wp_dequeue_style( 'font-awesome' ); } );
add_filter( 'elementor/frontend/print_google_fonts', '__return_false' );

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
			'2.7.4'
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
add_action( 'elementor/frontend/after_enqueue_scripts', 'woocommerce_de_script', 99999999 );
add_action( 'elementor/frontend/after_enqueue_scripts', 'woocommerce_de_script', 99999999 );
add_action( 'wp_enqueue_scripts', 'hello_elementor_child_enqueue_scripts', 20 );
function woocommerce_de_script() {
    wp_dequeue_script('font-awesome-4-shim');
    wp_dequeue_script('bodhi_svg_inline');

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

    // Check -> product-gtin-wc-frontend.min.js
}

// add_action( 'wp_enqueue_scripts', 'remove_elementor_dependencies', 6 );
function remove_elementor_dependencies() {

    // Customize guard clauses to bail if we don't want to run this code.
    /*if ( ! is_singular( 'cpt' ) ) {
        return;
    }*/

    // Get all scripts.
    $scripts = wp_scripts();

    // Bail if something went wrong.
    if ( ! ( $scripts instanceof WP_Scripts ) ) {
        return;
    }

    // Array of handles to remove.
    $handles_to_remove = [
        'swiper',
    ];

    // Flag indicating if we have removed the handles.
    $handles_updated = false;

    // Remove desired handles from the elementor-frontend script.
    foreach ( $scripts->registered as $dependency_object_id => $dependency_object ) {

        if ( 'elementor-frontend' === $dependency_object_id ) {

            // Bail if something went wrong.
            if ( ! ( $dependency_object instanceof _WP_Dependency ) ) {
                return;
            }

            // Bail if there are no dependencies for some reason.
            if ( empty( $dependency_object->deps ) ) {
                return;
            }

            // Do the handle removal.
            foreach ( $dependency_object->deps as $dep_key => $handle ) {
                if ( in_array( $handle, $handles_to_remove ) ) {
                    unset( $dependency_object->deps[ $dep_key ] );
                    $dependency_object->deps = array_values( $dependency_object->deps );  // "reindex" array
                    $handles_updated = true;
                }
            }
        }
    }

    // If we have updated the handles, dequeue the relevant dependencies which
    // were enqueued separately Elementor\Frontend.
    if ( $handles_updated ) {
        wp_dequeue_script( 'elementor-dialog' );
        wp_deregister_script( 'elementor-dialog' );
    }
}



add_action( 'wp_enqueue_scripts', 'woocommerce_de_style', 99999999 );
add_action( 'elementor/frontend/after_enqueue_styles', 'woocommerce_de_style', 99999999 );
function woocommerce_de_style() {
    // wp_dequeue_style('font-awesome-4-shim');
    // wp_dequeue_style('elementor-animations');
    wp_dequeue_style('affwp-forms');

    // WPForms Contact page
    if (!is_page(11)) {
        wp_dequeue_style('wpforms-full');
    }

    if (function_exists( 'is_woocommerce' )) {
        if (!is_cart()) {
            wp_dequeue_style('powerpack-frontend');
        }

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


    wp_dequeue_style('font-awesome-5-all');
    wp_dequeue_style('font-awesome-4-shim');

    if (is_front_page()) {
        wp_dequeue_style('elementor-post-6324'); // 6324 - Side panel – Cookie revoke
        wp_dequeue_style('elementor-post-6237'); // 6237 - Side panel – Mini shopping cart
        wp_dequeue_style('elementor-post-6188'); // 6188 - Side panel – My Account
        wp_dequeue_style('elementor-post-6177'); // 6177 - Side panel – Customer Service
        wp_dequeue_style('elementor-post-6150'); // 6150 - Side panel - Delivery and Returns
        wp_dequeue_style('elementor-post-5476'); // 5476 - Mobile Menu
        wp_dequeue_style('elementor-post-5370'); // 5370 - Newsletter Signup

        wp_dequeue_style('elementor-post-8'); // Elementor Homepage of wordpress page ID 8
        wp_dequeue_style('elementor-post-5492'); // Elementor Homepage theme builder of wordpress page ID 8
        wp_dequeue_style('elementor-post-4098'); // Elementor theme kit
        wp_dequeue_style('wc-block-vendors-style');
        wp_dequeue_style('product-search');
        wp_dequeue_style('elementor-icons');
        wp_dequeue_style('wcsatt-css');

        wp_dequeue_style('hello-elementor-theme-style');

        wp_enqueue_style(
            'elementor-popup-styles',
            get_stylesheet_directory_uri() . '/public/elementor-popup-styles.css',
            [],
            '2.7.4'
        );
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
		[
			'hello-elementor-theme-style',
		],
		'2.7.4'
	);

    wp_enqueue_style(
		'application-style',
		get_stylesheet_directory_uri() . '/public/app.css',
		[
			'hello-elementor-theme-style',
		],
		'2.7.4'
    );

    wp_enqueue_script(
        'webpack-runtime',
        get_stylesheet_directory_uri() . '/public/runtime.js',
		[],
        '2.7.4',
        true
    );

    wp_enqueue_script(
        'application-script',
        get_stylesheet_directory_uri() . '/public/app.js',
		['webpack-runtime'],
        '2.7.4',
        true
    );

    if (is_shop()) {
        wp_enqueue_style(
            'product-overview-styles',
            get_stylesheet_directory_uri() . '/public/product-overview-styles.css',
            [],
            '2.7.4',
        );
    }

    if (is_product()) {
        wp_enqueue_style(
            'product-styles',
            get_stylesheet_directory_uri() . '/public/product-styles.css',
            [],
            '2.7.4',
        );
    }

    if (is_account_page() && is_user_logged_in()) {
        wp_enqueue_style(
            'account-styles',
            get_stylesheet_directory_uri() . '/public/account-styles.css',
            [],
            '2.7.4'
        );
    }

    if (is_front_page()) {
        wp_enqueue_style(
            'homepage-styles',
            get_stylesheet_directory_uri() . '/public/homepage-styles.css',
            [],
            '2.7.4'
        );
    }
}

// add_action('wp_head', function () {
//     global $wp_scripts;

//     foreach ($wp_scripts->queue as $handle) {
//         $script = $wp_scripts->registered[$handle];

//         var_dump($handle);

//         if (strpos($handle, 'jquery') === false) {
//             continue;
//         }

//         //-- If version is set, append to end of source.
//         $source = $script->src . ($script->ver ? "?ver={$script->ver}" : "");

//         //-- Spit out the tag.
//         echo "<link rel='preload' href='{$source}' as='script'/>\n";
//     }
//   }, 1);
