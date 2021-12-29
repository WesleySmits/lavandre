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

<?php
    $page_id = wc_get_page_id( 'shop' );
    ww_shop_now(get_field('block_1', $page_id), 'shop-now');
?>
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
        $searchProducts = [];
        if ( woocommerce_product_loop() ) {
            woocommerce_product_loop_start();

            if ( wc_get_loop_prop( 'total' ) ) {
                while ( have_posts() ) {
                    the_post();
                    array_push($searchProducts, [
                        'title' => get_the_title(),
                        'link' => get_the_permalink(),
                        'image' => get_the_post_thumbnail_url()
                    ]);
                }
            }
            woocommerce_product_loop_end();
        }
        product_list($searchProducts);
    ?>
</section><?php
    do_action( 'woocommerce_after_main_content' );
}

get_footer();