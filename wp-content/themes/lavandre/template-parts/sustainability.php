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

        <a href="#derived-from-nature" class="no-button full-video__see-more" aria-label="See more"
            data-scroll-to="derived-from-nature">
            <?php include get_stylesheet_directory() . '/partials/icons/down-arrow.svg.php'; ?>
        </a>
    </section>

    <section id="derived-from-nature" class="ww-block ww-block--full-height">
        <header>
            <h2><?php echo get_field('block_1_heading'); ?></h2>
        </header>

        <div class="ww-container ww-container--small flex-grid">
            <div>
                <p><?php echo get_field('block_1_paragraph_1'); ?></p>
            </div>

            <div>
                <p><?php echo get_field('block_1_paragraph_2'); ?></p>
            </div>
        </div>
    </section>

    <section class="full-width-banner-block full-width-banner-block--alt">
        <div class="background-noise"></div>
        <div class="full-width-banner-block__link full-width-banner-block__text">
            <header>
                <h2><?php echo get_field('block_2_heading'); ?></h2>
            </header>
            <p><?php echo get_field('block_2_paragraph_1'); ?></p>
        </div>

        <div class="full-width-banner-block__link">
            <img class="cover-image" src="/wp-content/themes/lavandre/public/images/banners/about.jpeg" alt="Lavandré">
        </div>
    </section>

    <section class="ww-block ww-block--full-height">
        <header>
            <h2><?php echo get_field('block_3_heading'); ?></h2>
        </header>

        <p class="ww-container ww-container--mid">
            <?php echo get_field('block_3_paragraph_1'); ?>
        </p>

        <br />

        <div class="ww-container ww-container--small">
            <div class="flex-grid">
                <div>
                    <p><?php echo get_field('block_3_paragraph_2'); ?></p>
                    <p><?php echo get_field('block_3_paragraph_3'); ?></p>
                </div>

                <div>
                    <p><?php echo get_field('block_3_paragraph_4'); ?></p>
                    <p><?php echo get_field('block_3_paragraph_5'); ?></p>
                </div>
            </div>
        </div>
    </section>

    <section class="full-width-banner-block full-width-banner-block--alt">
        <div class="background-noise"></div>

        <div class="full-width-banner-block__link">
            <img class="cover-image" src="/wp-content/themes/lavandre/public/images/banners/about.jpeg" alt="Lavandré">
        </div>

        <div class="full-width-banner-block__link full-width-banner-block__text">
            <header>
                <h2><?php echo get_field('block_4_heading'); ?></h2>
            </header>
            <p><?php echo get_field('block_4_paragraph_1'); ?></p>
        </div>
    </section>
</main>

<?php
    get_footer();
?>