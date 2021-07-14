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

<?php
    /**
     * Hook: woocommerce_before_main_content.
     *
     * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
     * @hooked woocommerce_breadcrumb - 20
     * @hooked WC_Structured_Data::generate_website_data() - 30
     */
    do_action( 'woocommerce_before_main_content' );
?>

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

                    <img
                        src="<?php echo get_the_post_thumbnail_url(get_the_ID(), array( 438, 584) ); ?>"
                        class="ww-products__image"
                        alt="<?php the_title(); ?>"
                        width="438"
                        height="584"
                        loading="lazy"
                    >

                    <h2 class="ww-products__title">
                        <?php the_title(); ?>
                    </h2>
                </a>
            </li>

            <?php
		}
	}
    woocommerce_product_loop_end();
}

get_footer();
