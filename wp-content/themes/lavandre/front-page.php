<?php get_header(); ?>

<main>
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
            <img src="https://lavandre.com/wp-content/uploads/2021/09/banner.jpg" alt="">
        </div>

        <div class="ww-banner-block__content">
            <div class="ww-banner-block__inner-content">
                <h4>Wash Less or As You Do</h4>
                <p>You’re supposed to wash regular towels at least after three uses. That’s a lot of washing. Resore
                    towels are designed to stay clean after several washes, meaning your protecting your skin health
                    while reducing the amount of washing needed to keep your skin clear of bacteria.</p>
            </div>
        </div>
    </section>

    <section class="ww-block ww-block--largee ww-block--full-height bg-alabaster">
        <header>
            <h2 class="sub-title">Why it is important to use a clean towel</h2>
        </header>

        <div class="ww-container ww-container--large benefit-block flex-grid">
            <div>
                <?php include get_stylesheet_directory() . '/partials/icons/leaf.svg.php'; ?>
                <h3>Where does a dry face washer fit into your beauty regime and why is it important?</h3>
                <p>After cleansing, it’s really important to use a gentle press and pat method to dry the skin with a
                    soft, non-abrasive cloth and to absorb any excess liquid and product. Rubbing, buffing or tugging at
                    the complexion with coarse fabric can cause redness, irritation and really agitate the skin, as well
                    as encourage fine lines and laxity if done frequently enough.</p>
            </div>

            <div>
                <?php include get_stylesheet_directory() . '/partials/icons/drop.svg.php'; ?>
                <h3>Where does a wet face washer fit into your beauty regime and why is it important?</h3>
                <p>Wet cloths are a wonderful way to gently remove thicker cleansing balms for a deep and thorough
                    cleanse and to assist in freeing the pores of impurities. They can also be used to really gently
                    buff away dead skin on the nose and chin, by using small circular motions and can be pressed gently
                    into the complexion for a swift and respectful removal of peels and masks after they have been left
                    to activate and infuse into the complexion.</p>
            </div>

            <div>
                <?php include get_stylesheet_directory() . '/partials/icons/earth.svg.php'; ?>
                <h3>Where does a dry face washer fit into your beauty regime and why is it important?</h3>
                <p>After cleansing, it’s really important to use a gentle press and pat method to dry the skin with a
                    soft, non-abrasive cloth and to absorb any excess liquid and product. Rubbing, buffing or tugging at
                    the complexion with coarse fabric can cause redness, irritation and really agitate the skin, as well
                    as encourage fine lines and laxity if done frequently enough.</p>
            </div>

            <div>
                <?php include get_stylesheet_directory() . '/partials/icons/euro.svg.php'; ?>
                <h3>Where does a wet face washer fit into your beauty regime and why is it important?</h3>
                <p>Wet cloths are a wonderful way to gently remove thicker cleansing balms for a deep and thorough
                    cleanse and to assist in freeing the pores of impurities. They can also be used to really gently
                    buff away dead skin on the nose and chin, by using small circular motions and can be pressed gently
                    into the complexion for a swift and respectful removal of peels and masks after they have been left
                    to activate and infuse into the complexion.</p>
            </div>
        </div>
    </section>

    <section class="ww-banner-block ww-banner-block">
        <div class="ww-banner-block__banner">
            <img src="https://lavandre.com/wp-content/uploads/2021/09/banner.jpg" alt="">
        </div>

        <div class="ww-banner-block__content">
            <div class="ww-banner-block__inner-content">
                <h4><?php echo sprintf(__('Sign up to enjoy an exclusive welcome offer', 'lavandre'), '10%'); ?></h4>

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
                    <button is="lavandre-button" primary size="large" class="newsletter-subscribe-home__button"
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