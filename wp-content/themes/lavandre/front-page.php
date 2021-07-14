<?php get_header(); ?>

<main>
    <section id="main-banner">
        <picture class="loading-spinner" data-lazyload>
            <?php $fallback = get_site_url() . '/wp-content/themes/lavandre/public/images/banners/wegwerphanddoeken-banner-desktop-1920.jpg' ?>
            <source media="(orientation: portrait)" type="image/jpeg" data-srcset="/wp-content/themes/lavandre/public/images/banners/wegwerphanddoeken-banner-mobile-414.jpg 414w, /wp-content/themes/lavandre/public/images/banners/wegwerphanddoeken-banner-mobile-720.jpg 720w, /wp-content/themes/lavandre/public/images/banners/wegwerphanddoeken-banner-mobile-768.jpg 768w, /wp-content/themes/lavandre/public/images/banners/wegwerphanddoeken-banner-mobile-1024.jpg 1024w, /wp-content/themes/lavandre/public/images/banners/wegwerphanddoeken-banner-mobile-1080.jpg 1080w, /wp-content/themes/lavandre/public/images/banners/wegwerphanddoeken-banner-mobile-1242.jpg 1242w, /wp-content/themes/lavandre/public/images/banners/wegwerphanddoeken-banner-mobile-1500.jpg 1500w">
            <source media="(orientation: landscape)" type="image/jpeg" data-srcset="/wp-content/themes/lavandre/public/images/banners/wegwerphanddoeken-banner-desktop-1920.jpg 1920w">

            <img
                loading="lazy"
                src="<?php echo get_image_kit_placeholder($fallback, 1920, 848) ?>"
                data-src="<?php echo get_image_kit_url($fallback); ?>"
                alt="Lavandré"
                class="loading"
                width="1920"
                height="848"
            >
        </picture>
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
                <header><h2><?php echo sprintf(__('Receive a %s discount on your first online order.', 'hello-elementor-child'), '10%'); ?></h2></header>

                <form id="homepage-newsletter-form" action="post">
                    <p>
                        <input class="newsletter-subscribe-home__input" type="email" name="email" id="homepage-newsletter-form-email" title="<?php _e('Please enter a valid e-mail address', 'hello-elementor-child'); ?>" placeholder="<?php _e('Your e-mail address', 'hello-elementor-child'); ?>" required>
                        <label class="sr-only" for="homepage-newsletter-form-email"><?php _e('Your e-mail address', 'hello-elementor-child'); ?></label>
                        <button type="submit" id="homepage-newsletter-form-submit" class="no-button newsletter-subscribe-home__button" aria-label="Subscribe to newsletter button">
                            <?php include get_stylesheet_directory() . '/partials/icons/back.svg.php'; ?>
                        </button>
                    </p>
                </form>
            </section>
        </div>
    </section>

    <section id="instagram-feed" class="ww-block">
        <?php include get_stylesheet_directory() . '/partials/_instagram-feed.php'; ?>
    </section>

    <section id="seo-content" class="ww-block ww-container ww-container--large hide-on-mobile">
        <div class="seo-content" data-curtain-content="homepage-seo-text">
            <header><h1><?php _e('First official online store in disposable towels', 'hello-elementor-child'); ?></h1></header>
            <p><?php _e('Disposable towels are the number one supplier of biodegradable disposable towels mainly to the beauty industry (hairdressers, beauty salons, pedicures, spas, massage salons and nail stylists) and healthcare. We supply quality sustainable products for the beauty industry and healthcare. In this way we contribute to a positive experience and a change of mentality. With the aim of getting people to switch to environmentally friendly products.', 'hello-elementor-child'); ?></p>

            <h2><?php _e('Ecologically sound', 'hello-elementor-child'); ?></h2>
            <p><?php _e('We stand for responsibility and a more sustainable lifestyle. By offering sustainable quality products, we want to make a difference in the daily lives of our customers and work towards a green future. By staying close to nature and making optimal and responsible use of what it has to offer, we are able to deliver the best products. That contribute to a better and sustainable society.', 'hello-elementor-child'); ?></p>

            <h2><?php _e('Single use', 'hello-elementor-child'); ?></h2>
            <p><?php sprintf(_e('Disposable towels are more hygienic (single use), more durable (completely biodegradable and are not washed, which is harmful to the environment), easier (absorbs better and immediately ready for use) and also cheaper (all costs added up can be between %s and %s save).', 'hello-elementor-child'), '25%', '50%'); ?></p>

            <h2><?php sprintf(_e('%s green', 'hello-elementor-child'), '100%'); ?></h2>
            <p><?php _e('Our disposable products are produced in an ecologically responsible way from surplus plant fibers. As a result, we do not have to cut down trees and the production of our products does not harm the environment. By using our collection of sustainable towels you can drastically reduce your laundry. Our towels are safe to dispose of in the knowledge that they will biodegrade in as little as 8-12 weeks. By saving your laundry, you save on electricity bills and reduce your emissions of CO2 and polluted water.', 'hello-elementor-child'); ?></p>
         </div>

        <a href="#" class="seo-content-toggle" data-read-more="<?php _e('Read more', 'hello-elementor-child'); ?>" data-read-less="<?php _e('Read less', 'hello-elementor-child'); ?>" data-curtain-toggle="homepage-seo-text">
            <?php _e('Read more', 'hello-elementor-child'); ?>
        </a>
    </section>

    <section id="usp-icons" class="ww-block ww-container ww-container--large hide-on-mobile">
        <ul class="no-list usp-icons">
            <li class="usp-icons__item">
                <?php include get_stylesheet_directory() . '/partials/icons/leaf.svg.php'; ?>
                <h3 class="usp-icons__title"><?php _e('Ecologically sound', 'hello-elementor-child'); ?></h3>
            </li>

            <li class="usp-icons__item">
                <?php include get_stylesheet_directory() . '/partials/icons/drop.svg.php'; ?>
                <h3 class="usp-icons__title"><?php _e('Single use', 'hello-elementor-child'); ?></h3>
            </li>

            <li class="usp-icons__item">
                <?php include get_stylesheet_directory() . '/partials/icons/earth.svg.php'; ?>
                <h3 class="usp-icons__title"><?php sprintf(_e('%s green', 'hello-elementor-child'), '100%'); ?></h3>
            </li>

            <li class="usp-icons__item">
                <?php include get_stylesheet_directory() . '/partials/icons/euro.svg.php'; ?>
                <h3 class="usp-icons__title"><?php _e('Cost effective', 'hello-elementor-child'); ?></h3>
            </li>
        </ul>
    </section>
</main>

<?php get_footer(); ?>
