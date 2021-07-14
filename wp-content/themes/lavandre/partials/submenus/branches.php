<div class="ww-sub-menu hidden" data-lazyload>
    <div class="ww-container flex">
        <nav class="ww-sub-menu__nav">
            <header>
                <h3><?php _e('Beauty', 'lavandre'); ?></h3>
            </header>
            <ul class="ww-sub-menu__list">
                <li><a href="/branches/kappers/"><?php _e('Hair salons', 'lavandre'); ?></a></li>
                <li><a href="/branches/pedicures/"><?php _e('Pedicures', 'lavandre'); ?></a></li>
                <li><a href="/branches/manicure/"><?php _e('Manicures', 'lavandre'); ?></a></li>
                <li><a href="/branches/beauty-salons/"><?php _E('Beauty Salons', 'lavandre'); ?></a></li>
                <li><a href="/branches/spa/"><?php _e('Spa / Massage Salons', 'lavandre'); ?></a></li>
            </ul>
        </nav>

        <nav class="ww-sub-menu__nav">
            <header>
                <h3><?php _e('Medical', 'lavandre'); ?></h3>
            </header>
            <ul class="ww-sub-menu__list">
                <li><a href="/branches/zorg/"><?php _e('Healthcare', 'lavandre'); ?></a></li>
            </ul>
        </nav>

        <nav class="ww-sub-menu__nav">
            <header>
                <h3><?php _e('Sport', 'lavandre'); ?></h3>
            </header>
            <ul class="ww-sub-menu__list">
                <li><a href="/branches/sport-fitness/"><?php _e('Fitness', 'lavandre'); ?></a></li>
            </ul>
        </nav>

        <div class="ww-sub-menu__banner">
            <?php $image = get_site_url() . '/wp-content/themes/lavandre/public/images/banners/branches.jpg' ?>
            <img
                src=""
                data-src="<?php echo get_image_kit_url($image); ?>"
                alt=""
                width="562"
                height="375"
            >
        </div>
    </div>
</div>
