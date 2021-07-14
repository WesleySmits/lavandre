<header>
    <h2><?php _e('Best sellers', 'lavandre'); ?></h2>
</header>

<div class="ww-container ww-container--large">
    <ul class="ww-products ww-products--three-columns no-list" data-lazyload>
        <li class="ww-products__item">
            <a class="ww-products__link" href="/product/organic-badhanddoek-200x100-wit/">
                <?php $image = wp_get_attachment_image_src(218, [438,584]); ?>

                <!-- <span class="badge onsale perc">15%</span> -->

                <img
                    src="<?php echo get_image_kit_placeholder($image[0], 438, 584) ?>"
                    data-src="<?php echo get_image_kit_url($image[0]); ?>"
                    class="ww-products__image"
                    alt="Organic Badhanddoek – 200×100"
                    width="438"
                    height="584"
                    loading="lazy"
                >

                <h2 class="ww-products__title">Organic Badhanddoek – 200×100</h2>
            </a>
        </li>

        <li class="ww-products__item">
            <a class="ww-products__link" href="/product/organic-handdoek-100x60-wit/">
                <?php $image = wp_get_attachment_image_src(233, [438,584]); ?>

                <!-- <span class="badge onsale perc">15%</span> -->

                <img
                    src="<?php echo get_image_kit_placeholder($image[0], 438, 584) ?>"
                    data-src="<?php echo get_image_kit_url($image[0]); ?>"
                    class="ww-products__image"
                    alt="Organic Handdoek – 100×60"
                    width="438"
                    height="584"
                    loading="lazy"
                >

                <h2 class="ww-products__title">Organic Handdoek – 100×60</h2>
            </a>
        </li>

        <li class="ww-products__item">
            <a class="ww-products__link" href="/product/organic-gastendoek-40x20-wit/">
                <?php $image = wp_get_attachment_image_src(220, [438,584]); ?>

                <!-- <span class="badge onsale perc">15%</span> -->

                <img
                    src="<?php echo get_image_kit_placeholder($image[0], 438, 584) ?>"
                    data-src="<?php echo get_image_kit_url($image[0]); ?>"
                    class="ww-products__image"
                    alt="Organic Gastendoek – 40×20"
                    width="438"
                    height="584"
                    loading="lazy"
                >

                <h2 class="ww-products__title">Organic Gastendoek – 40×20</h2>
            </a>
        </li>
    </ul>
</div>
