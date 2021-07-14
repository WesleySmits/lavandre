<?php
/**
 * Single Product Image
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/product-image.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.5.1
 */

defined( 'ABSPATH' ) || exit;

// Note: `wc_get_gallery_image_html` was added in WC 3.3.2 and did not exist prior. This check protects against theme overrides being used on older versions of WC.
if ( ! function_exists( 'wc_get_gallery_image_html' ) ) {
	return;
}

global $product;

$attachment_ids = $product->get_gallery_image_ids();
?>

<div class="woocommerce-product-gallery">
    <?php
        if ( $attachment_ids && $product->get_image_id() ) {
            ?>
                <ul class="product-detail__gallery__image-list">
                    <?php
                        foreach ( $attachment_ids as $key => $attachment_id ) { ?>
                            <?php
                                $active = false;
                                if ($key === array_key_first($attachment_ids)) {
                                    $active = true;
                                }
                                $width = 650;
                                $height = 865;
                                $image = wp_get_attachment_image_src($attachment_id, [$width,$height]);
                                $image_alt = get_post_meta($attachment_id, '_wp_attachment_image_alt', TRUE);
                            ?>
                            <li class="<?php echo ($active) ? 'active' : '' ?>" data-image-id="<?php echo $attachment_id; ?>" data-lazyload>
                                <img
                                    src="<?php echo get_image_kit_placeholder($image[0], 1, 1) ?>"
                                    data-src="<?php echo get_image_kit_url($image[0]); ?>"
                                    class="ww-products__image loading"
                                    alt="<?php echo $image_alt; ?>"
                                    width="<?php echo $width; ?>"
                                    height="<?php echo $height ?>"
                                    loading="lazy"
                                >
                            </li>
                            <?php
                        }
                    ?>
                </ul>
            <?php
        }
    ?>
</div>
