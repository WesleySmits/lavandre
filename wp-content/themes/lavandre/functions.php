<?php

/**
 * Theme functions and definitions
 *
 * @package Lavandre
 */

require 'classes/Founder.php';
require 'classes/Address.php';
require 'classes/ContactPoint.php';
require 'classes/Company.php';

include(get_stylesheet_directory() . '/functions/utilities.php');
include(get_stylesheet_directory() . '/functions/assets.php');
include(get_stylesheet_directory() . '/functions/customizer.php');
include(get_stylesheet_directory() . '/functions/faq.php');
include(get_stylesheet_directory() . '/functions/custom-ajax.php');

include(get_stylesheet_directory() . '/functions/woocommerce-tweaks.php');
include(get_stylesheet_directory() . '/functions/woocommerce-breadcrumbs.php');
include(get_stylesheet_directory() . '/functions/woocommerce-checkout-fields.php');
include(get_stylesheet_directory() . '/functions/woocommerce-account-fields.php');
include(get_stylesheet_directory() . '/functions/woocommerce-pricing.php');
include(get_stylesheet_directory() . '/functions/woocommerce-track-trace.php');
include(get_stylesheet_directory() . '/functions/woocommerce-custom-cart.php');
include(get_stylesheet_directory() . '/functions/woocommerce-account.php');
include(get_stylesheet_directory() . '/functions/woocommerce-checkout-login-step.php');

function lavandre_setup() {
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'automatic-feed-links' );
    add_theme_support( 'title-tag' );
    add_theme_support(
        'html5',
        [
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
        ]
    );
    add_theme_support(
        'custom-logo',
        [
            'height'      => 100,
            'width'       => 350,
            'flex-height' => true,
            'flex-width'  => true,
        ]
    );

    /*
        * Editor Style.
        */
    add_editor_style( 'classic-editor.css' );

    /*
        * Gutenberg wide images.
        */
    add_theme_support( 'align-wide' );

    /*
        * Woocommerce support
        */
    add_theme_support( 'woocommerce' );

    if ( ! isset( $content_width ) ) {
        $content_width = 800;
    }
}
add_action( 'after_setup_theme', 'lavandre_setup' );


function getCompany() {
    $companyName = 'WesTrade Beheer B.V.';
    $brandName = 'Lavandré';
    $phoneNumber = '085 303 1102';
    $emailAddress = 'info@wegwerphanddoeken.nl';
    $foundingDate = '2016';
    $founders = [new Founder('Annemarie Smits'), new Founder('Wesley Smits'), new Founder('Maria Bogaevskaya')];
    $facebook = 'https://www.facebook.com/wegwerphanddoeken/';
    $instagram = 'https://www.instagram.com/wegwerphanddoeken.nl/';
    $twitter = 'https://twitter.com/wegwerphanddoek';
    $youtube = 'https://www.youtube.com/channel/UC6864dvgoxtMz-LVoY0229Q';
    $linkedin = 'https://www.linkedin.com/company/wegwerphanddoeken/';
    $facebookMessager= 'https://m.me/wegwerphanddoeken';
    $whatsapp = 'https://api.whatsapp.com/send?phone=31853031102';

    $address = new Address('Jan Valsterweg', 75, 0, 'Dordrecht', '3315 LG');
    $contactPoint = new ContactPoint($phoneNumber, $emailAddress, $facebook, $instagram, $twitter, $youtube, $linkedin, $facebookMessager, $whatsapp);
    $company = new Company($companyName, $brandName, $foundingDate, $founders, $address, $contactPoint);

    return $company;
}

// #TODO: Refactor this to get FAQ accordion which calls a get_accordion function that returns an accordion without context
function get_accordion($category, $amount = 6) {
    $args = array(
        'post_type' => 'faqs',
        'posts_per_page' => $amount,
        'tax_query' => array(
            array(
                'taxonomy' => 'faq_category',
                'field' => 'slug',
                'terms' => $category
            )
        )
    );
    $the_query = new WP_Query( $args );

    if ($the_query->have_posts()) {
        ?>
        <accordion-element>
            <?php
            while ( $the_query->have_posts() ) { $the_query->the_post(); ?>
                <details is="curtain-element">
                        <summary>
                            <a href="<?php echo get_the_permalink();?>">
                                <?php echo get_the_title(); ?>
                            </a>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 15 15" xml:space="preserve" aria-hidden="true" data-acsb-hidden="true" data-acsb-force-hidden="true">
                                <g fill="#2b2b2b">
                                    <polygon points="0.104,4.333 1.165,3.272 7.5,9.607 13.835,3.272 14.896,4.333 7.5,11.728 "></polygon>
                                </g>
                            </svg>
                        </summary>
                        <div class="curtain-content">
                            <?php echo get_the_content(); ?>
                        </div>
                    </article>
                </details>
            <?php }
            ?>
        </accordion-element>
        <?php
        wp_reset_postdata();
    }
}

function redirect_customer_service() {
    $path = $_SERVER['REQUEST_URI'];
    $post = get_post();
    $id = !empty( $post ) ? $post->ID : 0;

    if ($id !== 294) return;

    $url = site_url( '/customer-service/top-questions' );
    wp_safe_redirect($url, 301);
}
add_action( 'template_redirect', 'redirect_customer_service' );
