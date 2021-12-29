<?php
    function main_banner($block): void
    {
        if (!$block) {
            return;
        }

        $file = $block['file'];
        $see_more = $block['see_more'];

        ?>
<section id="main-banner" class="full-video">
    <video width="1920" autoplay muted loop>
        <source src="<?php echo $file; ?>" type="video/mp4">
    </video>

    <?php if ($see_more) { ?>
    <a href="#<?php echo $see_more; ?>" class="no-button full-video__see-more" aria-label="See more"
        data-scroll-to="<?php echo $see_more; ?>">
        <?php include get_stylesheet_directory() . '/partials/icons/down-arrow.svg.php'; ?>
    </a>
    <?php } ?>
</section>
<?php
    }

    function ww_shop_now($block, $id = ''): void
    {
        if (!$block) {
            return;
        }

        $title = $block['title'];
        $subtitle = $block['subtitle'];
        $products = $block['products'];

        ?>
<section id="<?php echo $id; ?>" class="ww-block">
    <?php if($title) { ?>
    <header>
        <h2 class="large-title"><?php echo $title ?></h2>
        <?php if ($subtitle) { ?>
        <span class="sub-title" role="heading" aria-level="5">
            <?php echo $subtitle; ?>
        </span>
        <?php } ?>
    </header>
    <?php } ?>

    <?php product_list($products); ?>
</section>

<?php
    }

    function product_list($products): void
    {
        ?>
<ol class="ww-products-grid" data-lazyload>
    <?php foreach($products as $product) { ?>
    <?php

                        $link = $product['link'];
                        $image = $product['image'];
                        $name = $product['title'];
                    ?>

    <li>
        <a href="<?php echo $link; ?>" class="ww-products__link">
            <img src="<?php echo get_image_kit_placeholder($image, 438, 584) ?>"
                data-src="<?php echo get_image_kit_url($image); ?>" class="ww-products__image"
                alt="<?php echo $name; ?>" width="438" height="584" loading="lazy">

            <strong class="ww-products__title">
                <?php echo $name; ?>
                <?php include get_stylesheet_directory() . '/partials/icons/forward-arrow.svg.php'; ?>
            </strong>
        </a>
    </li>
    <?php } ?>
</ol>
<?php
    }

    function ww_banner_block($block, $classes = []): void
    {
        if (!$block) {
            return;
        }

        $heading = $block['heading'];
        $text = $block['text'];
        $imageUrl = $block['image'];

        ?>
<section class="ww-banner-block <?php echo implode(' ', $classes); ?>" data-lazyload>
    <div class="ww-banner-block__banner">
        <img loading="lazy" class="cover-image" src="<?php echo get_image_kit_placeholder($imageUrl, 960, 1015) ?>"
            data-src="<?php echo get_image_kit_src($imageUrl, 960, 1015); ?>" data-srcset="
                    <?php echo get_image_kit_src($imageUrl, 360, 380); ?> 414w,
                    <?php echo get_image_kit_src($imageUrl, 414, 437); ?> 414w,
                    <?php echo get_image_kit_src($imageUrl, 600, 634); ?> 600w,
                    <?php echo get_image_kit_src($imageUrl, 720, 761); ?> 720w,
                    <?php echo get_image_kit_src($imageUrl, 768, 812); ?> 768w,
                    <?php echo get_image_kit_src($imageUrl, 828, 875); ?> 828w,
                    <?php echo get_image_kit_src($imageUrl, 960, 1015); ?> 960w,
                    <?php echo get_image_kit_src($imageUrl, 1242, 1313); ?> 1242w,
                    <?php echo get_image_kit_src($imageUrl, 1536, 1624); ?> 1536w,
                    <?php echo get_image_kit_src($imageUrl, 1920, 2030); ?> 1920w
                " data-sizes="(min-width: 1024px) 50vw, 100vw" alt="">
    </div>

    <div class="ww-banner-block__content">
        <div class="ww-banner-block__inner-content">
            <h2><?php echo $heading; ?></h2>
            <div>
                <?php echo $text; ?>
            </div>
        </div>
    </div>
</section>
<?php
    }

    function ww_benefit_block($block, $classes = [], $container = 'large'): void
    {
        if (!$block) {
            return;
        }

        $heading = $block['heading'];
        $content = $block['content'];

        ?>
<section class="ww-block <?php echo implode(' ', $classes); ?>">
    <header class="ww-container ww-container--small">
        <h2 class="sub-title"><?php echo $heading; ?></h2>
    </header>

    <div class="ww-container ww-container--<?php echo $container; ?> benefit-block flex-grid">
        <?php foreach($content as $column) { ?>
        <div>
            <?php
                $icon = '/partials/icons/' . $column['icon'] . '.svg.php';
                $subheading = $column['heading'];
                $text = $column['text'];
            ?>

            <?php if ($column['icon']) { include get_stylesheet_directory() . $icon; } ?>
            <h3><?php echo $subheading; ?></h3>
            <p><?php echo $text; ?></p>
        </div>
        <?php } ?>
    </div>
</section>
<?php
    }