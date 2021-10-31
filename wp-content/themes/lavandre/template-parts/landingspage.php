<?php
    /* Template Name: Landingspage Template 1 */

    if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly.
    }


    $banner_left = get_field('banner_left');
    $banner_right = get_field('banner_right');
    $bottom_banner = get_field('bottom_banner');

    get_header();

    $bottom_banner_cta = get_field('bottom_banner_cta');
?>
<?php
while ( have_posts() ) : the_post();
	?>

    <main <?php post_class( 'site-main' ); ?> role="main">
        <article class="landings-page">
            <section class="ww-landingspage-section ww-landingspage-section--full-height">
                <div class="ww-landingspage-section__banner">
                    <img class="ww-landingspage-section__banner-image" src="<?php echo $banner_left; ?>" alt="" width="" height="" />
                </div>
                <div class="ww-landingspage-section__content">
                    <?php echo get_field('text_right'); ?>
                </div>
            </section>

            <section class="ww-landingspage-section ww-landingspage-section--single ww-block ww-container ww-container--small">
                <div class="ww-landingspage-section__content">
                    <?php echo get_field('text_middle'); ?>
                </div>
            </section>

            <section class="ww-landingspage-section alt ww-landingspage-section--full-height">
                <div class="ww-landingspage-section__banner">
                    <img class="ww-landingspage-section__banner-image" src="<?php echo $banner_right; ?>" alt="" width="" height="" />
                </div>                <div class="ww-landingspage-section__content">
                    <?php echo get_field('text_left'); ?>
                </div>
            </section>

            <section class="ww-landingspage-section ww-landingspage-section--single ww-block ww-container ww-container--small">
                <div class="ww-landingspage-section__content">
                    <?php echo get_field('text_middle_2'); ?>
                </div>
            </section>

            <footer class="ww-page-banner">
                <img src="<?php echo $bottom_banner ?>" alt="Flowers" />
                <div class="ww-page-banner__overlay">
                    <h2 class="ww-page-banner__title"><?php echo get_field('bottom_banner_title'); ?></h2>
                    <p><?php echo get_field('bottom_banner_description'); ?></p>

                    <button is="lavandre-button" primary size="large" href="<?php echo $bottom_banner_cta['url'] ?>">
                        <?php _e('View our collection', 'lavandre'); ?>
                    </button>
                </div>
            </footer>
        </article>
    </main>
	<?php
endwhile;

get_footer();
