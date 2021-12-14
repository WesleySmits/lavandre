<?php
    /* Template Name: Sustainability page */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
get_header();
?>

<main role="main">
    <section id="main-banner" class="full-video">
        <video width="1920" autoplay muted loop>
            <source src="/wp-content/themes/lavandre/assets/video/sustainability.mov" type="video/mp4">
        </video>

        <a href="#shop-now" class="no-button full-video__see-more" data-scroll-to="shop-now">
            <?php include get_stylesheet_directory() . '/partials/icons/down-arrow.svg.php'; ?>
        </a>
    </section>

    <section class="ww-block ww-block--full-height">
        <header>
            <h2><?php _e('Derived from nature | Defining a new standard of sustainability | Feels right,naturally', 'lavandre'); ?></h2>
        </header>

        <div class="ww-container ww-container--small flex-grid">
            <div>
                <p><strong><?php _e('TENCEL&trade; cellulosic fibers of botanic origin define a new standard of sustainability and natural comfort for you.', 'lavandre'); ?></strong></p>
                <p><?php _e('TENCEL&trade; Lyocell figers help to maintain the environmental blance by being integrated into nature\'s cycle. The fibers originate from the renewable raw material wood, created by photosynthesis. The certified biobased fibers are manufactured using an environmentally responsible production process. The fibers are certified as compostable and biodegradable, and thus can fully revert back to nature.', 'lavandre'); ?></p>
            </div>

            <div>
            <p><strong><?php _e('Subject 2', 'lavandre'); ?></strong></p>
            <p><?php _e('Lorum ipsum dolar sit amet.', 'lavandre'); ?></p>
            </div>
        </div>
    </section>

    <section class="full-width-banner-block full-width-banner-block--alt">
        <div class="background-noise"></div>
        <div class="full-width-banner-block__link full-width-banner-block__text">

            <h1><?php echo __('Can upgrading your towel really transform your skin?', 'lavandre'); ?></h1>
            <p><?php echo __('The towel you use matters as much as the treatment you perform. Washing your towel in a standard washing machine does not remove all bacteria, mildew, mould, and other highly potent skin irritants that not only collect on the skin, but clog the pores, flare up acne and trigger infection.', 'lavandre'); ?></p>
            <p><?php echo __('It’s why we did this: A naturally hygienic and hypoallergenic towel that is fresh and clean so the skin stays that way too. Unlike standard cotton towels, our towel doesn’t breed or harbour bacteria, so you can spend less time washing your towel and more time enjoying your laundry free day.', 'lavandre'); ?></p>
        </div>

        <div class="full-width-banner-block__link">
            <img class="cover-image" src="/wp-content/themes/lavandre/public/images/banners/about.jpeg" alt="Lavandré">
        </div>
    </section>

    <section class="ww-block ww-block--full-height">
        <header>
            <h2>Why it is important to use a clean towel</h2>
        </header>

        <div class="ww-container ww-container--small flex-grid">
            <div>
                <p><strong>Where does a dry face washer fit into your beauty regime and why is it important?</strong></p>
                <p>After cleansing, it’s really important to use a gentle press and pat method to dry the skin with a soft, non-abrasive cloth and to absorb any excess liquid and product. Rubbing, buffing or tugging at the complexion with coarse fabric can cause redness, irritation and really agitate the skin, as well as encourage fine lines and laxity if done frequently enough.</p>
            </div>

            <div>
                <p><strong>Where does a wet face washer fit into your beauty regime and why is it important?</strong></p>
                <p>Wet cloths are a wonderful way to gently remove thicker cleansing balms for a deep and thorough cleanse and to assist in freeing the pores of impurities. They can also be used to really gently buff away dead skin on the nose and chin, by using small circular motions and can be pressed gently into the complexion for a swift and respectful removal of peels and masks after they have been left to activate and infuse into the complexion.</p>
            </div>
        </div>
    </section>

    <section class="full-width-banner-block full-width-banner-block--alt">
        <div class="background-noise"></div>

        <div class="full-width-banner-block__link">
            <img class="cover-image" src="/wp-content/themes/lavandre/public/images/banners/about.jpeg" alt="Lavandré">
        </div>

        <div class="full-width-banner-block__link full-width-banner-block__text">
            <h1><?php echo __('Can upgrading your towel really transform your skin?', 'lavandre'); ?></h1>
            <p><?php echo __('The towel you use matters as much as the treatment you perform. Washing your towel in a standard washing machine does not remove all bacteria, mildew, mould, and other highly potent skin irritants that not only collect on the skin, but clog the pores, flare up acne and trigger infection.', 'lavandre'); ?></p>
            <p><?php echo __('It’s why we did this: A naturally hygienic and hypoallergenic towel that is fresh and clean so the skin stays that way too. Unlike standard cotton towels, our towel doesn’t breed or harbour bacteria, so you can spend less time washing your towel and more time enjoying your laundry free day.', 'lavandre'); ?></p>
        </div>
    </section>
</main>

<?php
    get_footer();
?>
