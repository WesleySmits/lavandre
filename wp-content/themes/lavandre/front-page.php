<?php get_header(); ?>

<main>
    <section id="main-banner">
        <video width="1920" autoplay muted loop>
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

        <a class="no-button main-banner__see-more" data-scroll-to="best-sellers">
            <?php include get_stylesheet_directory() . '/partials/icons/down-arrow.svg.php'; ?>
        </a>
    </section>

    <section id="best-sellers" class="ww-block hide-on-mobile">
        <?php include get_stylesheet_directory() . '/partials/_best-sellers.php'; ?>
    </section>

    <section class="ww-banner-block ww-banner-block--alt">
        <div class="ww-banner-block__banner">
            <img src="https://lavandre.com/wp-content/uploads/2021/09/banner.jpg" alt="">
        </div>

        <div class="ww-banner-block__content">
            <div class="ww-banner-block__inner-content">
                <h4>Wash Less or As You Do</h4>
                <p>You’re supposed to wash regular towels at least after three uses. That’s a lot of washing. Resore towels are designed to stay clean after several washes, meaning your protecting your skin health while reducing the amount of washing needed to keep your skin clear of bacteria.</p>
            </div>
        </div>
    </section>

    <section class="ww-block ww-block--full-height bg-alabaster">
        <header>
            <h2>Why it is important to use a clean towel</h2>
        </header>

        <div class="ww-container ww-container--large benefit-block flex-grid">
            <div>
                <?php include get_stylesheet_directory() . '/partials/icons/back.svg.php'; ?>
                <h3>Where does a dry face washer fit into your beauty regime and why is it important?</h3>
                <p>After cleansing, it’s really important to use a gentle press and pat method to dry the skin with a soft, non-abrasive cloth and to absorb any excess liquid and product. Rubbing, buffing or tugging at the complexion with coarse fabric can cause redness, irritation and really agitate the skin, as well as encourage fine lines and laxity if done frequently enough.</p>
            </div>

            <div>
                <?php include get_stylesheet_directory() . '/partials/icons/back.svg.php'; ?>
                <h3>Where does a wet face washer fit into your beauty regime and why is it important?</h3>
                <p>Wet cloths are a wonderful way to gently remove thicker cleansing balms for a deep and thorough cleanse and to assist in freeing the pores of impurities. They can also be used to really gently buff away dead skin on the nose and chin, by using small circular motions and can be pressed gently into the complexion for a swift and respectful removal of peels and masks after they have been left to activate and infuse into the complexion.</p>
            </div>

            <div>
                <?php include get_stylesheet_directory() . '/partials/icons/back.svg.php'; ?>
                <h3>Where does a dry face washer fit into your beauty regime and why is it important?</h3>
                <p>After cleansing, it’s really important to use a gentle press and pat method to dry the skin with a soft, non-abrasive cloth and to absorb any excess liquid and product. Rubbing, buffing or tugging at the complexion with coarse fabric can cause redness, irritation and really agitate the skin, as well as encourage fine lines and laxity if done frequently enough.</p>
            </div>

            <div>
                <?php include get_stylesheet_directory() . '/partials/icons/back.svg.php'; ?>
                <h3>Where does a wet face washer fit into your beauty regime and why is it important?</h3>
                <p>Wet cloths are a wonderful way to gently remove thicker cleansing balms for a deep and thorough cleanse and to assist in freeing the pores of impurities. They can also be used to really gently buff away dead skin on the nose and chin, by using small circular motions and can be pressed gently into the complexion for a swift and respectful removal of peels and masks after they have been left to activate and infuse into the complexion.</p>
            </div>
        </div>
    </section>

    <section class="ww-banner-block ww-banner-block">
        <div class="ww-banner-block__banner">
            <img src="https://lavandre.com/wp-content/uploads/2021/09/banner.jpg" alt="">
        </div>

        <div class="ww-banner-block__content">
            <div class="ww-banner-block__inner-content">
                <h2><?php echo sprintf(__('Sign up to enjoy an exclusive welcome offer', 'lavandre'), '10%'); ?></h2>

                <p>
                    <?php _e('Sign up to receive the Lavandré newsletter and be the first to discover new arrivals, limited editions and email-only exclusive offers.', 'lavandre'); ?>
                </p>

                <form id="homepage-newsletter-form" class="homepage-newsletter-form" action="post">
                    <label class="sr-only" for="homepage-newsletter-form-email"><?php _e('E-mail address', 'lavandre'); ?></label>
                    <input class="newsletter-subscribe-home__input" type="email" name="email" id="homepage-newsletter-form-email" title="<?php _e('Please enter a valid e-mail address', 'lavandre'); ?>" placeholder="<?php _e('Email address', 'lavandre'); ?>" required>
                    <button type="submit" id="homepage-newsletter-form-submit" class="ww-button newsletter-subscribe-home__button" aria-label="Subscribe to newsletter button">
                        <?php _e('Submit', 'lavandre'); ?>
                    </button>
                </form>
            </div>
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
