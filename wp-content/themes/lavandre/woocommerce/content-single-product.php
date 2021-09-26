<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

global $product;

/**
 * Hook: woocommerce_before_single_product.
 *
 * @hooked woocommerce_output_all_notices - 10
 */
do_action( 'woocommerce_before_single_product' );

if ( post_password_required() ) {
	echo get_the_password_form(); // WPCS: XSS ok.
	return;
}
?>
<div id="product-<?php the_ID(); ?>" <?php wc_product_class( '', $product ); ?>>
	<section class="product-detail__main-container ww-block ww-block--no-padding">

        <div class="product-detail__gallery-grid">
            <?php
                /**
                 * Hook: woocommerce_before_single_product_summary.
                 *
                 * @hooked woocommerce_show_product_sale_flash - 10
                 * @hooked woocommerce_show_product_images - 20
                 */
                do_action( 'woocommerce_before_single_product_summary' );
            ?>
        </div>

        <div class="product-detail__content">
            <?php
                /**
                 * Hook: woocommerce_single_product_summary.
                 *
                 * @hooked woocommerce_template_single_title - 5
                 * @hooked woocommerce_template_single_amount_per_pack - 10
                 * @hooked woocommerce_template_single_price - 10
                 * @hooked woocommerce_template_single_excerpt - 20
                 * @hooked woocommerce_template_single_add_to_cart - 30
                 * @hooked woocommerce_template_single_sharing - 50
                 * @hooked WC_Structured_Data::generate_product_data() - 60
                 */
                remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10 );
                add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10 );
                remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );
                do_action( 'woocommerce_single_product_summary' );
            ?>

            <?php /*
            <section id="product-detail__description">
                <button class="product-detail__description-toggle" data-curtain-toggle="product-detail-content">
                    <?php _e('Specifications', 'lavandre'); ?>
                </button>

                <div class="product-detail__description-content" data-curtain-content="product-detail-content">
                    <?php woocommerce_product_additional_information_tab(); ?>
                    <?php woocommerce_product_description_tab(); ?>
                </div>
            </section>
            */ ?>

            <?php if( have_rows('accordion') ): ?>
                <accordion-element data-cy="product-info-accordion">
                    <?php while( have_rows('accordion') ) : the_row(); ?>
                        <details is="curtain-element">
                            <summary>
                                <span><?php echo get_sub_field('title') ?></span>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 15 15" xml:space="preserve" aria-hidden="true" data-acsb-hidden="true" data-acsb-force-hidden="true">
                                    <g fill="#2b2b2b">
                                        <polygon points="0.104,4.333 1.165,3.272 7.5,9.607 13.835,3.272 14.896,4.333 7.5,11.728 "></polygon>
                                    </g>
                                </svg>
                            </summary>
                            <div class="curtain-content">
                                <?php echo get_sub_field('description'); ?>
                            </div>
                        </details>
                    <?php endwhile ?>
                </accordion-element>
            <?php endif ?>
        </div>
    </section>

    <section class="ww-banner-block ww-banner-block--alt">
        <div class="ww-banner-block__banner">
            <img src="https://lavandre.com/wp-content/uploads/2021/09/banner.jpg" alt="">
        </div>

        <div class="ww-banner-block__content">
            <div class="ww-banner-block__inner-content">
                <h4>Wash Less or As You Do</h4>
                <p>You’re supposed to wash regular towels at least after three uses. That’s a lot of washing. Resore towels are designed to stay clean after several washes, meaning your protecting your skin health while reducing the amount of washing needed to keep your skin clear of bacteria.</p>
            </div>
        </div>
    </section>

    <section class="ww-block ww-block--full-height">
        <header>
            <h2>Why it is important to use a clean towel</h2>
        </header>

        <div class="ww-container ww-container--small flex-grid">
            <div>
                <p><strong>Where does a dry face washer fit into your beauty regime and why is it important?</strong></p>
                <p>After cleansing, it’s really important to use a gentle press and pat method to dry the skin with a soft, non-abrasive cloth and to absorb any excess liquid and product. Rubbing, buffing or tugging at the complexion with coarse fabric can cause redness, irritation and really agitate the skin, as well as encourage fine lines and laxity if done frequently enough.</p>
            </div>

            <div>
                <p><strong>Where does a wet face washer fit into your beauty regime and why is it important?</strong></p>
                <p>Wet cloths are a wonderful way to gently remove thicker cleansing balms for a deep and thorough cleanse and to assist in freeing the pores of impurities. They can also be used to really gently buff away dead skin on the nose and chin, by using small circular motions and can be pressed gently into the complexion for a swift and respectful removal of peels and masks after they have been left to activate and infuse into the complexion.</p>
            </div>
        </div>
    </section>

    <section class="ww-block ww-block--full-height bg-alabaster">
        <header>
            <h2>Why it is important to use a clean towel</h2>
        </header>

        <div class="ww-container ww-container--large flex-grid">
            <div>
                <p><strong>Where does a dry face washer fit into your beauty regime and why is it important?</strong></p>
                <p>After cleansing, it’s really important to use a gentle press and pat method to dry the skin with a soft, non-abrasive cloth and to absorb any excess liquid and product. Rubbing, buffing or tugging at the complexion with coarse fabric can cause redness, irritation and really agitate the skin, as well as encourage fine lines and laxity if done frequently enough.</p>
            </div>

            <div>
                <p><strong>Where does a wet face washer fit into your beauty regime and why is it important?</strong></p>
                <p>Wet cloths are a wonderful way to gently remove thicker cleansing balms for a deep and thorough cleanse and to assist in freeing the pores of impurities. They can also be used to really gently buff away dead skin on the nose and chin, by using small circular motions and can be pressed gently into the complexion for a swift and respectful removal of peels and masks after they have been left to activate and infuse into the complexion.</p>
            </div>

            <div>
                <p><strong>Where does a dry face washer fit into your beauty regime and why is it important?</strong></p>
                <p>After cleansing, it’s really important to use a gentle press and pat method to dry the skin with a soft, non-abrasive cloth and to absorb any excess liquid and product. Rubbing, buffing or tugging at the complexion with coarse fabric can cause redness, irritation and really agitate the skin, as well as encourage fine lines and laxity if done frequently enough.</p>
            </div>

            <div>
                <p><strong>Where does a wet face washer fit into your beauty regime and why is it important?</strong></p>
                <p>Wet cloths are a wonderful way to gently remove thicker cleansing balms for a deep and thorough cleanse and to assist in freeing the pores of impurities. They can also be used to really gently buff away dead skin on the nose and chin, by using small circular motions and can be pressed gently into the complexion for a swift and respectful removal of peels and masks after they have been left to activate and infuse into the complexion.</p>
            </div>
        </div>
    </section>

    <section class="ww-banner-block">
        <div class="ww-banner-block__banner">
            <img src="https://lavandre.com/wp-content/uploads/2021/09/banner2.jpg" alt="">
        </div>

        <div class="ww-banner-block__content">
            <div class="ww-banner-block__inner-content">
                <h4>Wash Less or As You Do</h4>
                <p>You’re supposed to wash regular towels at least after three uses. That’s a lot of washing. Resore towels are designed to stay clean after several washes, meaning your protecting your skin health while reducing the amount of washing needed to keep your skin clear of bacteria.</p>
            </div>
        </div>
    </section>

    <section class="ww-block ww-block--full-height">
        <header>
            <h2>Why it is important to use a clean towel</h2>
        </header>

        <div class="ww-container ww-container--large flex-grid">
            <div>
                <p><strong>Where does a dry face washer fit into your beauty regime and why is it important?</strong></p>
                <p>After cleansing, it’s really important to use a gentle press and pat method to dry the skin with a soft, non-abrasive cloth and to absorb any excess liquid and product. Rubbing, buffing or tugging at the complexion with coarse fabric can cause redness, irritation and really agitate the skin, as well as encourage fine lines and laxity if done frequently enough.</p>
            </div>

            <div>
                <p><strong>Where does a wet face washer fit into your beauty regime and why is it important?</strong></p>
                <p>Wet cloths are a wonderful way to gently remove thicker cleansing balms for a deep and thorough cleanse and to assist in freeing the pores of impurities. They can also be used to really gently buff away dead skin on the nose and chin, by using small circular motions and can be pressed gently into the complexion for a swift and respectful removal of peels and masks after they have been left to activate and infuse into the complexion.</p>
            </div>

            <div>
                <p><strong>Where does a dry face washer fit into your beauty regime and why is it important?</strong></p>
                <p>After cleansing, it’s really important to use a gentle press and pat method to dry the skin with a soft, non-abrasive cloth and to absorb any excess liquid and product. Rubbing, buffing or tugging at the complexion with coarse fabric can cause redness, irritation and really agitate the skin, as well as encourage fine lines and laxity if done frequently enough.</p>
            </div>

            <div>
                <p><strong>Where does a wet face washer fit into your beauty regime and why is it important?</strong></p>
                <p>Wet cloths are a wonderful way to gently remove thicker cleansing balms for a deep and thorough cleanse and to assist in freeing the pores of impurities. They can also be used to really gently buff away dead skin on the nose and chin, by using small circular motions and can be pressed gently into the complexion for a swift and respectful removal of peels and masks after they have been left to activate and infuse into the complexion.</p>
            </div>
        </div>
    </section>

    <?php include get_stylesheet_directory() . '/partials/_instagram-feed.php'; ?>
</div>

<?php do_action( 'woocommerce_after_single_product' ); ?>
