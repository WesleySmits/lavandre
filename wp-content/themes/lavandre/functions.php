<?php

/**
 * Theme functions and definitions
 *
 * @package HelloElementorChild
 */

require 'vendor/autoload.php';
require 'classes/Founder.php';
require 'classes/Address.php';
require 'classes/ContactPoint.php';
require 'classes/Company.php';

include(get_stylesheet_directory() . '/functions/utilities.php');
include(get_stylesheet_directory() . '/functions/assets.php');
include(get_stylesheet_directory() . '/functions/woocommerce-tweaks.php');
include(get_stylesheet_directory() . '/functions/woocommerce-custom-cart.php');
include(get_stylesheet_directory() . '/functions/woocommerce-account.php');
include(get_stylesheet_directory() . '/functions/woocommerce-checkout-login-step.php');
include(get_stylesheet_directory() . '/functions/faq.php');
include(get_stylesheet_directory() . '/functions/custom-ajax.php'); // #TODO: Redo with Wordpress API?

function getCompany() {
    $companyName = 'WesTrade Beheer B.V.';
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
    $company = new Company($companyName, $foundingDate, $founders, $address, $contactPoint);

    return $company;
}

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
        <ul class="accordion-list">
            <?php
            while ( $the_query->have_posts() ) { $the_query->the_post(); ?>
                <li>
                    <article>
                        <header>
                            <h3>
                                <a href="<?php echo get_the_permalink();?>" data-curtain-toggle="<?php echo 'accordion-' . get_the_ID()?>">
                                    <?php echo get_the_title(); ?>
                                </a>
                            </h3>
                        </header>

                        <div data-curtain-content="<?php echo 'accordion-' . get_the_ID()?>">
                            <?php echo get_the_content(); ?>
                        </div>
                    </article>
                </li>
            <?php }
            ?>
        </ul>
        <?php
        wp_reset_postdata();
    }
}
