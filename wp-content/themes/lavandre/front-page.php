<?php get_header(); ?>

<main>
    <section id="main-banner">

        <video autoplay muted width="1920">
            <source src="https://lavandre.com/wp-content/uploads/2021/09/IMG_4167.mov" type="video/mp4">
        </video>

        <?php /*
        <picture class="loading-spinner" data-lazyload>
            <?php $image = get_site_url() . '/wp-content/themes/lavandre/public/images/banners/banner-spa.jpg' ?>
            <?php $imageMobile = get_site_url() . '/wp-content/themes/lavandre/public/images/banners/banner-spa-mobile.jpg' ?>
            <source media="(orientation: portrait)" type="image/jpeg" data-srcset="<?php echo get_image_kit_src($imageMobile, 414, 524) ?> 414w, <?php echo get_image_kit_src($imageMobile, 720, 912) ?> 720w, <?php echo get_image_kit_src($imageMobile, 768, 973) ?> 768w, <?php echo get_image_kit_src($imageMobile, 1024, 1297) ?> 1024w, <?php echo get_image_kit_src($imageMobile, 1080, 1368) ?>g 1080w, <?php echo get_image_kit_src($imageMobile, 1242, 1573) ?> 1242w, <?php echo get_image_kit_src($imageMobile, 1500, 1900) ?> 1500w">
            <source media="(orientation: landscape)" type="image/jpeg" data-srcset="<?php echo get_image_kit_src($image, 750, 332) ?> 750, <?php echo get_image_kit_src($image, 1024, 452) ?> 1024w, <?php echo get_image_kit_src($image, 1280, 565) ?> 1280w, <?php echo get_image_kit_src($image, 1600, 707) ?> 1600w, <?php echo get_image_kit_src($image, 1920, 848) ?> 1920w, <?php echo get_image_kit_src($image, 3840, 1696) ?> 3840w">

            <img
                loading="lazy"
                src="<?php echo get_image_kit_placeholder($image, 1920, 848) ?>"
                data-src="<?php echo get_image_kit_url($image); ?>"
                alt="Lavandré"
                class="loading"
                width="1920"
                height="848"
            >
        </picture>
        */ ?>
    </section>

    <section id="best-sellers" class="ww-block hide-on-mobile">
        <?php include get_stylesheet_directory() . '/partials/_best-sellers.php'; ?>
    </section>

    <section id="newsletter-subscribe-home" class="ww-block ww-block--accent">
        <div class="ww-container ww-container--large flex newsletter-subscribe-home">
            <header class="newsletter-subscribe-home__left">
                <h2 class="newsletter-subscribe-home__cta">
                    <span>10</span>
                    <sup class="newsletter-subscribe-home__cta-sup">%</sup>
                </h2>
            </header>
            <section class="newsletter-subscribe-home__right">
                <header><h2><?php echo sprintf(__('Receive a %s discount on your first online order.', 'lavandre'), '10%'); ?></h2></header>

                <form id="homepage-newsletter-form" action="post">
                    <p>
                        <input class="newsletter-subscribe-home__input" type="email" name="email" id="homepage-newsletter-form-email" title="<?php _e('Please enter a valid e-mail address', 'lavandre'); ?>" placeholder="<?php _e('Your e-mail address', 'lavandre'); ?>" required>
                        <label class="sr-only" for="homepage-newsletter-form-email"><?php _e('Your e-mail address', 'lavandre'); ?></label>
                        <button type="submit" id="homepage-newsletter-form-submit" class="no-button newsletter-subscribe-home__button" aria-label="Subscribe to newsletter button">
                            <?php include get_stylesheet_directory() . '/partials/icons/back.svg.php'; ?>
                        </button>
                    </p>
                </form>
            </section>
        </div>
    </section>

    <section id="seo-content" class="ww-block ww-container ww-container--large hide-on-mobile">
        <div class="seo-content" data-curtain-content="homepage-seo-text">
            <header><h1><?php _e('First official online store in disposable towels', 'lavandre'); ?></h1></header>
            <p><?php _e('Disposable towels are the number one supplier of biodegradable disposable towels mainly to the beauty industry (hairdressers, beauty salons, pedicures, spas, massage salons and nail stylists) and healthcare. We supply quality sustainable products for the beauty industry and healthcare. In this way we contribute to a positive experience and a change of mentality. With the aim of getting people to switch to environmentally friendly products.', 'lavandre'); ?></p>

            <h2><?php _e('Ecologically sound', 'lavandre'); ?></h2>
            <p><?php _e('We stand for responsibility and a more sustainable lifestyle. By offering sustainable quality products, we want to make a difference in the daily lives of our customers and work towards a green future. By staying close to nature and making optimal and responsible use of what it has to offer, we are able to deliver the best products. That contribute to a better and sustainable society.', 'lavandre'); ?></p>

            <h2><?php _e('Single use', 'lavandre'); ?></h2>
            <p><?php echo sprintf(__('Disposable towels are more hygienic (single use), more durable (completely biodegradable and are not washed, which is harmful to the environment), easier (absorbs better and immediately ready for use) and also cheaper (all costs added up can be between %s and %s save).', 'lavandre'), '25%', '50%'); ?></p>

            <h2><?php echo sprintf(__('%s green', 'lavandre'), '100%'); ?></h2>
            <p><?php _e('Our disposable products are produced in an ecologically responsible way from surplus plant fibers. As a result, we do not have to cut down trees and the production of our products does not harm the environment. By using our collection of sustainable towels you can drastically reduce your laundry. Our towels are safe to dispose of in the knowledge that they will biodegrade in as little as 8-12 weeks. By saving your laundry, you save on electricity bills and reduce your emissions of CO2 and polluted water.', 'lavandre'); ?></p>
         </div>

        <a href="#" class="seo-content-toggle" data-read-more="<?php _e('Read more', 'lavandre'); ?>" data-read-less="<?php _e('Read less', 'lavandre'); ?>" data-curtain-toggle="homepage-seo-text">
            <?php _e('Read more', 'lavandre'); ?>
        </a>
    </section>

    <section id="usp-icons" class="ww-block ww-container ww-container--large hide-on-mobile">
        <ul class="no-list usp-icons">
            <li class="usp-icons__item">
                <?php include get_stylesheet_directory() . '/partials/icons/leaf.svg.php'; ?>
                <h3 class="usp-icons__title"><?php _e('Ecologically sound', 'lavandre'); ?></h3>
            </li>

            <li class="usp-icons__item">
                <?php include get_stylesheet_directory() . '/partials/icons/drop.svg.php'; ?>
                <h3 class="usp-icons__title"><?php _e('Single use', 'lavandre'); ?></h3>
            </li>

            <li class="usp-icons__item">
                <?php include get_stylesheet_directory() . '/partials/icons/earth.svg.php'; ?>
                <h3 class="usp-icons__title"><?php echo sprintf(__('%s green', 'lavandre'), '100%'); ?></h3>
            </li>

            <li class="usp-icons__item">
                <?php include get_stylesheet_directory() . '/partials/icons/euro.svg.php'; ?>
                <h3 class="usp-icons__title"><?php _e('Cost effective', 'lavandre'); ?></h3>
            </li>
        </ul>
    </section>

    <?php include get_stylesheet_directory() . '/partials/_instagram-feed.php'; ?>
</main>

<?php get_footer(); ?>
