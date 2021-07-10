<div class="ww-sub-menu hidden" data-lazyload>
    <div class="ww-container flex">
        <nav class="ww-sub-menu__nav">
            <header>
                <h3><?php _e('Beauty', 'hello-elementor-child'); ?></h3>
            </header>
            <ul class="ww-sub-menu__list">
                <li><a href="/branches/kappers/"><?php _e('Hair salons', 'hello-elementor-child'); ?></a></li>
                <li><a href="/branches/pedicures/"><?php _e('Pedicures', 'hello-elementor-child'); ?></a></li>
                <li><a href="/branches/manicure/"><?php _e('Manicures', 'hello-elementor-child'); ?></a></li>
                <li><a href="/branches/beauty-salons/"><?php _E('Beauty Salons', 'hello-elementor-child'); ?></a></li>
                <li><a href="/branches/spa/"><?php _e('Spa / Massage Salons', 'hello-elementor-child'); ?></a></li>
            </ul>
        </nav>

        <nav class="ww-sub-menu__nav">
            <header>
                <h3><?php _e('Medical', 'hello-elementor-child'); ?></h3>
            </header>
            <ul class="ww-sub-menu__list">
                <li><a href="/branches/zorg/"><?php _e('Healthcare', 'hello-elementor-child'); ?></a></li>
            </ul>
        </nav>

        <nav class="ww-sub-menu__nav">
            <header>
                <h3><?php _e('Sport', 'hello-elementor-child'); ?></h3>
            </header>
            <ul class="ww-sub-menu__list">
                <li><a href="/branches/sport-fitness/"><?php _e('Fitness', 'hello-elementor-child'); ?></a></li>
            </ul>
        </nav>

        <div class="ww-sub-menu__banner">
            <?php $image = get_site_url() . '/wp-content/themes/lavandre/public/images/banners/branches.jpg' ?>
            <img
                src="<?php echo get_image_kit_placeholder($image, 562, 375) ?>"
                data-src="<?php echo get_image_kit_url($image); ?>"
                alt=""
                width="562"
                height="375"
            >
        </div>
    </div>
</div>
