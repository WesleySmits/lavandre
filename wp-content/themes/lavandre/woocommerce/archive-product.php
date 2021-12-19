<?php
/**
 * The Template for displaying product archives, including the main shop page which is a post type archive
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/archive-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.4.0
 */

defined( 'ABSPATH' ) || exit;

get_header( 'shop' );

?>

<?php if (!is_search()) { ?>
<div class="full-width-banner-block">
    <a class="full-width-banner-block__link" href="/product/organic-facial/">
        <figure class="overlay-text">
            <img class="cover-image"
                src="https://lavandre.com/wp-content/uploads/2021/09/mauro-lima-nfqDGE2WVGs-unsplash-scaled.jpeg"
                alt="">
            <figcaption><?php _e('Shop face towels', 'lavandre'); ?></figcaption>
        </figure>
    </a>

    <a class="full-width-banner-block__link" href="/product/organic-towel/">
        <figure class="overlay-text">
            <img class="cover-image"
                src="https://lavandre.com/wp-content/uploads/2021/09/pexels-agafonova-photo-5284980-scaled.jpeg" alt="">
            <figcaption><?php _e('Shop hand / hair towels', 'lavandre'); ?></figcaption>
        </figure>
    </a>

    <a class="full-width-banner-block__link" href="/product/organic-bath-towel/" id="bath-towel">
        <figure class="overlay-text">
            <img class="cover-image"
                src="https://lavandre.com/wp-content/uploads/2021/09/pexels-agafonova-photo-5276984-scaled.jpeg" alt="">
            <figcaption><?php _e('Shop body towels', 'lavandre'); ?></figcaption>
        </figure>
    </a>

    <div class="full-width-banner-block__see-more">
        <a href="#shop-now" class="no-button" data-scroll-to="bath-towel" aria-label="See more"
            data-header-offset="false">
            <?php include get_stylesheet_directory() . '/partials/icons/down-arrow.svg.php'; ?>
        </a>
    </div>
</div>
<?php } else {
    /**
     * Hook: woocommerce_before_main_content.
     *
     * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
     * @hooked woocommerce_breadcrumb - 20
     * @hooked WC_Structured_Data::generate_website_data() - 30
     */
    do_action( 'woocommerce_before_main_content' );

    $title = sprintf(__('Search results for "%s".', 'lavandre'), get_search_query());

    if (!wc_get_loop_prop('total')) {
        $title = sprintf(__('Sorry, nothing found for "%s".', 'lavandre'), get_search_query());
    }
        ?>
<section class="product-overview__search ww-container">
    <header>
        <p><?php echo $title; ?></p>
    </header>

    <?php include get_stylesheet_directory() . '/woocommerce/product-searchform.php'; ?>
    <?php

            if ( woocommerce_product_loop() ) {
                woocommerce_product_loop_start();

                if ( wc_get_loop_prop( 'total' ) ) {
                    while ( have_posts() ) {
                        the_post();

                        ?>

    <li class="ww-products__item">
        <a class="ww-products__link" href="<?php the_permalink(); ?>">
            <?php $image = wp_get_attachment_image_src(218, [438,584]); ?>

            <!-- <span class="badge onsale perc">15%</span> -->

            <img src="<?php echo get_the_post_thumbnail_url(get_the_ID(), array( 438, 584) ); ?>"
                srcset="<?php echo get_the_post_thumbnail_url(get_the_ID(), array( 438, 584) ); ?> 1x, <?php echo get_the_post_thumbnail_url(get_the_ID(), array( 876, 1168) ); ?> 2x, <?php echo get_the_post_thumbnail_url(get_the_ID(), array( 1314, 1752) ); ?> 3x"
                class="ww-products__image" alt="<?php the_title(); ?>" width="438" height="584" loading="lazy">

            <h2 class="ww-products__title">
                <?php the_title(); ?>
            </h2>

            <button is="lavandre-button" outline size="large" full-width href="<?php the_permalink(); ?>">
                <?php echo _e('Add to Bag'); ?>
            </button>
        </a>
    </li>

    <?php
                    }
                }
                woocommerce_product_loop_end();
            }
        ?>
</section><?php
    do_action( 'woocommerce_after_main_content' );
}

get_footer();