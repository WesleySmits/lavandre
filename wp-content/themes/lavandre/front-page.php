<?php get_header(); ?>

<main class="front-page">
    <section id="main-banner" class="full-video">
        <video width="1920" autoplay muted loop>
            <source src="https://lavandre.com/wp-content/uploads/2021/09/IMG_4167.mov" type="video/mp4">
        </video>

        <a href="#shop-now" class="no-button full-video__see-more" aria-label="See more" data-scroll-to="shop-now">
            <?php include get_stylesheet_directory() . '/partials/icons/down-arrow.svg.php'; ?>
        </a>
    </section>

    <section id="shop-now" class="ww-block ww-block--large hide-on-mobile">
        <?php include get_stylesheet_directory() . '/partials/_shop-now.php'; ?>
    </section>

    <section class="ww-banner-block ww-banner-block--alt">
        <div class="ww-banner-block__banner">
            <img class="cover-image"
                src="<?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/a-cleaner-towel.jpeg', 960, 1015); ?>"
                srcset="
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/a-cleaner-towel.jpeg', 360, 380); ?> 414w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/a-cleaner-towel.jpeg', 414, 437); ?> 414w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/a-cleaner-towel.jpeg', 600, 634); ?> 600w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/a-cleaner-towel.jpeg', 720, 761); ?> 720w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/a-cleaner-towel.jpeg', 768, 812); ?> 768w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/a-cleaner-towel.jpeg', 828, 875); ?> 828w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/a-cleaner-towel.jpeg', 960, 1015); ?> 960w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/a-cleaner-towel.jpeg', 1242, 1313); ?> 1242w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/a-cleaner-towel.jpeg', 1536, 1624); ?> 1536w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/uploads/2021/12/a-cleaner-towel.jpeg', 1920, 2030); ?> 1920w
                    " sizes="(min-width: 1024px) 50vw, 100vw" alt="">
        </div>

        <div class="ww-banner-block__content">
            <div class="ww-banner-block__inner-content">
                <h4><?php _e('A Cleaner Towel', 'lavandre'); ?></h4>
                <p>
                    <?php _e('Botanical, hypoallergenic and eco-friendly mean you not only get a clean, healthy towel that fights bacteria, is good for nature, and rejuvenates the skin, it\'s also incredibly soft, absorbent, and hygienic. A towel you can use in so many ways while spending less time washing your towels and more time enjoying your laundry free day.', 'lavandre'); ?>
                </p>
            </div>
        </div>
    </section>

    <section class="ww-block ww-block--full-height bg-alabaster">
        <header class="ww-container ww-container--small">
            <h2 class="sub-title">
                <?php _e('Our towel is made from a unique combination of plant-based VEOCEL™ Specialty Viscose and charcoal. But what does that actually mean for you?', 'lavandre'); ?>
            </h2>
        </header>

        <div class="ww-container ww-container--large benefit-block flex-grid">
            <div>
                <?php include get_stylesheet_directory() . '/partials/icons/circles.svg.php'; ?>
                <h3>
                    <?php _e('Great for all skin types', 'lavandre'); ?>
                </h3>
                <p>
                    <?php _e('Especially sensitive. Thanks to key ingredient VEOCEL™ Specialty Viscose, and it\'s  naturally hypoallergenic properties, our towels remove dirt, grit and oil without causing irritation. As well as reduce highly potent irritants, like bacteria and mildew.', 'lavandre'); ?>
                </p>
            </div>

            <div>
                <?php include get_stylesheet_directory() . '/partials/icons/vegan.svg.php'; ?>
                <h3>
                    <?php _e('Botanic origin', 'lavandre'); ?>
                </h3>
                <p>
                    <?php _e('Derived from sustainable wood sources. VEOCEL™ Specialty Viscose fibers come from certified and controllerd broestes and plantations. VEOCEL™ Specialty Viscose is produced using an environmentally friendly, sustainable process to ensure our towels are certified, clean and safe', 'lavandre'); ?>
                </p>
            </div>

            <div>
                <?php include get_stylesheet_directory() . '/partials/icons/textile.svg.php'; ?>
                <h3>
                    <?php _e('Clean towel, clean skin', 'lavandre'); ?>
                </h3>
                <p>
                    <?php _e("Created from hypoallergenic and sensitive-skin-friendly materials, the biggest takeaway is that our single-use towels do not breed bacteria. Research shows that we don't wash our towels as good as they should be. Moral of the story: If you can't fully clean your towels, you might as well invest in a towel that you don't need to wash at all.", 'lavandre'); ?>
                </p>
            </div>

            <div>
                <?php include get_stylesheet_directory() . '/partials/icons/rejuvunates.svg.php'; ?>
                <h3>
                    <?php _e('Rejuvenates + hydrates skin', 'lavandre'); ?>
                </h3>
                <p>
                    <?php _e('With the ability to regulate temperature and increase the flow of oxygen back into thew skin, our towels helps rejuvenate and hydrate to let the skin breathe and not suffocate while being used.', 'lavandre'); ?>
                </p>
            </div>
        </div>
    </section>

    <section class="ww-banner-block ww-banner-block">
        <div class="ww-banner-block__banner">
            <img class="cover-image"
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
                <h4><?php echo sprintf(__('Sign up to enjoy an exclusive welcome offer', 'lavandre'), '10%'); ?>
                </h4>

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