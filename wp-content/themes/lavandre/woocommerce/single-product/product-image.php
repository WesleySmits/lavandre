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
                                $width = 481;
                                $height = 461;
                                $sizes = '(min-width: 1024px) 24vw, 40vw';
                                $image = wp_get_attachment_image_src($attachment_id, [$width,$height]);
                                $srcset = get_image_kit_src($image[0], 127, 129) . " 127w, " .
                                get_image_kit_src($image[0], 143, 146) . " 143w, " .
                                get_image_kit_src($image[0], 164, 167) . " 164w, " .
                                get_image_kit_src($image[0], 183, 186) . " 183w, " .
                                get_image_kit_src($image[0], 255, 245) . " 255w, " .
                                get_image_kit_src($image[0], 286, 292) . " 286w, " .
                                get_image_kit_src($image[0], 429, 438) . " 429w, " .
                                get_image_kit_src($image[0], 481, 461) . " 481w, " .
                                get_image_kit_src($image[0], 510, 490) . " 510w, " .
                                get_image_kit_src($image[0], 962, 922) . " 962w";

                                if ($key === array_key_first($attachment_ids)) {
                                    $active = true;
                                    $width = 721;
                                    $height = 923;
                                    $image = wp_get_attachment_image_src($attachment_id, [$width,$height]);
                                    $sizes = '(min-width: 1024px) 36vw, 60vw';
                                    $srcset = get_image_kit_src($image[0], 214, 275) . " 214w, " .
                                    get_image_kit_src($image[0], 428, 550) . " 428w, " .
                                    get_image_kit_src($image[0], 642, 825) . " 642w, " .
                                    get_image_kit_src($image[0], 721, 923) . " 721w, " .
                                    get_image_kit_src($image[0], 1442, 1846) . " 1442w";
                                }

                                $image = wp_get_attachment_image_src($attachment_id, [$width,$height]);
                                $image_alt = get_post_meta($attachment_id, '_wp_attachment_image_alt', TRUE);
                            ?>
        <li class="<?php echo ($active) ? 'active' : '' ?>" data-image-id="<?php echo $attachment_id; ?>">
            <img src="<?php echo get_image_kit_url($image[0]); ?>" alt="<?php echo $image_alt; ?>"
                width="<?php echo $width; ?>" height="<?php echo $height ?>" srcset="<?php echo $srcset ?>"
                sizes="<?php echo $sizes ?>" class="ww-products__image" loading="eager">
        </li>
        <?php
                        }
                    ?>
    </ul>
    <?php
        }
    ?>
</div>