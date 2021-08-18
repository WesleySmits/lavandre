<?php
    $productIds = [199, 200, 202];
    $products = [];

    foreach ($productIds as $id) {
        $products[] = wc_get_product($id);
    }

    if (count($products) === 0) {
        return;
    }
?>

<header>
    <h2><?php _e('Best sellers', 'lavandre'); ?></h2>
</header>

<div class="ww-container ww-container--large">
    <ul class="ww-products ww-products--three-columns no-list" data-lazyload>
        <?php foreach($products as $product) { ?>
            <li class="ww-products__item">
                <a href="<?php echo get_permalink( $product->get_id() ); ?>" class="ww-products__link">
                    <?php $image = wp_get_attachment_image_src($product->get_image_id(), [438,584]); ?>
                    <!-- <span class="badge onsale perc">15%</span> -->

                    <img
                        src="<?php echo get_image_kit_placeholder($image[0], 438, 584) ?>"
                        data-src="<?php echo get_image_kit_url($image[0]); ?>"
                        class="ww-products__image"
                        alt="<?php echo $product->get_name(); ?>"
                        width="438"
                        height="584"
                        loading="lazy"
                    >

                    <h2 class="ww-products__title">
                        <?php echo $product->get_name(); ?>
                    </h2>
                </a>
            </li>
        <?php } ?>
    </ul>
</div>
