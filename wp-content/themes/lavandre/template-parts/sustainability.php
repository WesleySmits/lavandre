<?php
    /* Template Name: Sustainability Page Template */

    if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly.
    }

    $top_banner = get_field('top_banner');
    $bottom_banner = get_field('bottom_banner');

    get_header();
?>
<?php
while ( have_posts() ) : the_post();
	?>

    <main <?php post_class( 'site-main' ); ?> role="main">
        <article class="sustainability-page">
            <header class="ww-page-banner">
                <img src="<?php echo $top_banner ?>" alt="Bees" />
                <h1 class="ww-page-banner__overlay ww-page-banner__title"><?php echo get_field('top_banner_title'); ?></h1>
            </header>

            <section class="ww-block sustainability-page__main-content">
                <div class="ww-container ww-container--small">
                    <?php echo get_field('main_content'); ?>
                </div>
            </section>

            <?php if( have_rows('cta_repeater') ): ?>
                <section class="ww-block sustainability-page__main-content">
                    <header>
                        <h2><?php echo get_field('cta_header'); ?></h2>
                    </header>

                    <div class="ww-container ww-container">
                        <ul class="no-list sustainability-page__cta-list">
                            <?php
                                while( have_rows('cta_repeater') ) : the_row();
                                    $image = get_sub_field('cta_image');
                                    $title = get_sub_field('cta_title');
                                    $link = get_sub_field('cta_button');

                                    ?>
                                    <li class="sustainability-page__cta-item">
                                        <a href="<?php echo $link; ?>">
                                            <img class="sustainability-page__cta-banner" src="<?php echo $image; ?>" alt="<?php echo $title; ?>">
                                            <h3 class="sustainability-page__cta-title"><?php echo $title; ?></h3>
                                            <span class="button button--secondary sustainability-page__cta-link"><?php _e('Read more', 'lavandre'); ?></span>
                                        </a>
                                    </li>
                                    <?php
                                endwhile;
                            ?>
                        </ul>
                    </div>
                </section>
            <?php endif; ?>

            <footer class="ww-page-banner">
                <img src="<?php echo $bottom_banner ?>" alt="Flowers" />
                <div class="ww-page-banner__overlay">
                    <h2 class="ww-page-banner__title"><?php echo get_field('bottom_banner_title'); ?></h2>
                    <p><?php echo get_field('bottom_banner_description'); ?></p>
                    <a href="<?php echo get_field('bottom_banner_cta')['url']; ?>" class="button alt inline">
                        <?php _e('View our collection', 'lavandre'); ?>
                    </a>
                </div>
            </footer>
        </article>
    </main>

	<?php
endwhile;

get_footer();
