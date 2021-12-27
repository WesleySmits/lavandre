<?php get_header(); ?>

<main class="front-page">
    <?php main_banner(get_field('main_banner')); ?>

    <section id="shop-now" class="ww-block ww-block--large hide-on-mobile">
        <?php include get_stylesheet_directory() . '/partials/_shop-now.php'; ?>
    </section>

    <?php ww_banner_block(get_field('block_3'), ['ww-banner-block--alt']); ?>
    <?php ww_benefit_block(get_field('block_4'), ['ww-block--full-height']); ?>

    <section class="ww-banner-block ww-banner-block">
        <div class="ww-banner-block__banner">
            <img loading="lazy" class="cover-image"
                src="<?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/newsletter-signup.jpeg', 960, 1015); ?>"
                srcset="
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/newsletter-signup.jpeg', 360, 380); ?> 414w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/newsletter-signup.jpeg', 414, 437); ?> 414w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/newsletter-signup.jpeg', 600, 634); ?> 600w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/newsletter-signup.jpeg', 720, 761); ?> 720w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/newsletter-signup.jpeg', 768, 812); ?> 768w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/newsletter-signup.jpeg', 828, 875); ?> 828w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/newsletter-signup.jpeg', 960, 1015); ?> 960w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/newsletter-signup.jpeg', 1242, 1313); ?> 1242w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/newsletter-signup.jpeg', 1536, 1624); ?> 1536w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/newsletter-signup.jpeg', 1920, 2030); ?> 1920w
                    " sizes="(min-width: 1024px) 50vw, 100vw" alt="">
        </div>

        <div class="ww-banner-block__content">
            <div class="ww-banner-block__inner-content">
                <h2><?php echo sprintf(__('Sign Up To Enjoy an Exclusive Welcome Offer', 'lavandre'), '10%'); ?>
                </h2>

                <p>
                    <?php _e('Sign up to receive the Lavandré newsletter and be the first to discover new arrivals, limited editions and email-only exclusive offers.', 'lavandre'); ?>
                </p>

                <form id="homepage-newsletter-form" class="homepage-newsletter-form" action="post">
                    <label class="sr-only"
                        for="homepage-newsletter-form-email"><?php _e('Email', 'lavandre'); ?></label>
                    <input class="newsletter-subscribe-home__input" type="email" name="email"
                        id="homepage-newsletter-form-email"
                        title="<?php _e('Please enter a valid e-mail address', 'lavandre'); ?>"
                        placeholder="<?php _e('Email', 'lavandre'); ?>" required>
                    <button is="lavandre-button" outline size="large" class="newsletter-subscribe-home__button"
                        type="submit" id="homepage-newsletter-form-submit" aria-label="Subscribe to newsletter button">
                        <?php _e('Submit', 'lavandre'); ?>
                    </button>
                </form>
            </div>
        </div>
    </section>

    <?php include get_stylesheet_directory() . '/partials/_instagram-feed.php'; ?>
</main>

<?php get_footer(); ?>