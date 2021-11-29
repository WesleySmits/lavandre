<?php
    /* Template Name: About us Page Template */

    if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly.
    }

    $about_banner = get_field('introduction_photo');
    $bottom_banner = get_field('section_1_image');

    get_header();
?>
<?php
while ( have_posts() ) : the_post();
	?>

    <main <?php post_class( 'site-main' ); ?> role="main">
        <article class="about-us-page">
            <header class="ww-block ww-block--large about__header bg-saltpan">
                <div class="ww-container ww-container--mid">
                    <h1 class="about__header__title text-center h2"><?php echo get_field('intro_title'); ?></h1>

                    <div class="about__text-wrapper">
                        <div class="about__text"><?php echo get_field('intro_paragraph_1'); ?></div>
                        <div class="about__text"><?php echo get_field('intro_paragraph_2'); ?></div>
                    </div>
                </div>
            </header>

            <section class="ww-block about__intro">
                <div class="ww-container ww-container--large">
                    <div class="about__intro__wrapper">
                        <div class="about__intro__text"><?php echo get_field('introduction_paragraph'); ?></div>
                        <div class="about__intro__banner-wrapper"><img class="about__intro__banner" src="<?php echo $about_banner; ?>" alt="" width="528" height="528"></div>
                    </div>
                </div>
            </section>

            <section class="ww-block ww-block--large bg-saltpan">
                <div class="ww-container ww-container--small">
                    <h2 class="text-center"><?php echo get_field('section_1_title'); ?></h2>
                    <div class="text-center"><?php echo get_field('section_1__intro'); ?></div>
                </div>
            </section>

            <section class="ww-block ww-block--large">
                <div class="ww-container ww-container--medium">
                    <div class="about__text-wrapper">
                        <div class="about__text"><?php echo get_field('section_1_paragraph_1'); ?></div>
                        <div class="about__text"><?php echo get_field('section_1_paragraph_2'); ?></div>
                    </div>

                    <img class="about__bottom-banner" src="<?php echo $bottom_banner; ?>" alt="">
                </div>
            </section>
        </article>
    </main>

	<?php
endwhile;

get_footer();
