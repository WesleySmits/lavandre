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
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                    y="0px" width="15px" height="15px" viewBox="0 0 15 15" xml:space="preserve" aria-hidden="true"
                    data-acsb-hidden="true" data-acsb-force-hidden="true">
                    <g fill="#2b2b2b">
                        <polygon points="0.104,4.333 1.165,3.272 7.5,9.607 13.835,3.272 14.896,4.333 7.5,11.728 ">
                        </polygon>
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

<?php ww_banner_block(get_field('block_1'), ['ww-banner-block--alt']); ?>
<?php ww_benefit_block(get_field('block_2'), ['ww-block--full-height'], 'small'); ?>
<?php ww_benefit_block(get_field('block_3'), ['ww-block--full-height']); ?>
<?php ww_banner_block(get_field('block_4')); ?>
<?php ww_benefit_block(get_field('block_5'), ['ww-block--full-height'], 'small'); ?>

<?php include get_stylesheet_directory() . '/partials/_instagram-feed.php'; ?>
</div>

<?php do_action( 'woocommerce_after_single_product' ); ?>