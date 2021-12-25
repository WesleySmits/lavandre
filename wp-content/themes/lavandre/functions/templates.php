<?php
    function ww_banner_block($block, $classes = []): void
    {
        if (!$block) {
            return;
        }

        $heading = $block['heading'];
        $text = $block['text'];
        $imageUrl = $block['image'];

        ?>
<section class="ww-banner-block <?php echo implode(' ', $classes); ?>">
    <div class="ww-banner-block__banner">
        <img class="cover-image" src="<?php echo get_image_kit_src($imageUrl, 960, 1015); ?>" srcset="
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
                " sizes="(min-width: 1024px) 50vw, 100vw" alt="">
    </div>

    <div class="ww-banner-block__content">
        <div class="ww-banner-block__inner-content">
            <h4><?php echo $heading; ?></h4>
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

            <?php if ($icon) { include get_stylesheet_directory() . $icon; } ?>
            <h3><?php echo $subheading; ?></h3>
            <p><?php echo $text; ?></p>
        </div>
        <?php } ?>
    </div>
</section>
<?php
    }