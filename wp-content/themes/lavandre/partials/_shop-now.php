<?php
    $productIds = [195, 194, 198];
    $products = [];

    foreach ($productIds as $id) {
        $products[] = wc_get_product($id);
    }

    if (count($products) === 0) {
        return;
    }
?>

<header>
    <h2 class="large-title"><?php _e('Daily Rituals', 'lavandre'); ?></h2>
    <span class="sub-title" role="heading" aria-level="5">
        <?php _e('If your skin is important. Then so is your towel.', 'lavandre'); ?>
    </span>
</header>

<ol class="ww-products-grid no-list" data-lazyload>
    <?php foreach($products as $product) { ?>
    <li>
        <a href="<?php echo get_permalink( $product->get_id() ); ?>" class="ww-products__link">
            <?php $image = wp_get_attachment_image_src($product->get_image_id(), [438,584]); ?>
            <?php
                    if (strpos(strtolower($product->get_name()), 'facial') !== false) {
                        $image[0] = 'https://lavandre.com/wp-content/uploads/2021/09/mauro-lima-nfqDGE2WVGs-unsplash-scaled.jpeg';
                    } else if (strpos(strtolower($product->get_name()), 'bath') !== false) {
                        $image[0] = 'https://lavandre.com/wp-content/uploads/2021/09/pexels-agafonova-photo-5276984-scaled.jpeg';
                    } else {
                        $image[0] = 'https://lavandre.com/wp-content/uploads/2021/09/pexels-agafonova-photo-5284980-scaled.jpeg';
                    }
                ?>

            <img src="<?php echo get_image_kit_placeholder($image[0], 438, 584) ?>"
                data-src="<?php echo get_image_kit_url($image[0]); ?>" class="ww-products__image"
                alt="<?php echo $product->get_name(); ?>" width="438" height="584" loading="lazy">

            <strong class="ww-products__title">
                <?php
                    if (strpos(strtolower($product->get_name()), 'facial') !== false) {
                        _e('Face towels', 'lavandre');
                    } else if (strpos(strtolower($product->get_name()), 'bath') !== false) {
                        _e('Body towels', 'lavandre');
                    } else {
                        _e('Hand / Hair towels', 'lavandre');
                    }
                ?>
                <?php include get_stylesheet_directory() . '/partials/icons/forward-arrow.svg.php'; ?>
            </strong>
        </a>
    </li>
    <?php } ?>
</ol>