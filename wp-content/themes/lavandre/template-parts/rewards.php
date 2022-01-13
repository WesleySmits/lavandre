<?php
    /* Template Name: Rewards Page Template */

    if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly.
    }

    get_header();

    while ( have_posts() ) : the_post();
?>

<main <?php post_class( 'site-main' ); ?> role="main">
    <?php ww_main_top_banner(get_field('main_top_banner')); ?>
    <?php ww_how_it_works(get_field('how_it_works')); ?>
    <?php ww_points_grid(get_field('points'), ['ww-block--no-border']); ?>
    <?php ww_banner_block(get_field('banner_block_1'), ['ww-banner-block--border']); ?>

    <?php
        $bannerBlock = get_field('banner_block_2');
        $heading = $bannerBlock['heading'];
        $text = $bannerBlock['text'];
        $imageUrl = $bannerBlock['image'];
    ?>
    <section class="ww-banner-block ww-banner-block--border ww-banner-block--alt" data-lazyload>
        <div class="ww-banner-block__banner">
            <img loading="lazy" class="cover-image" src="<?php echo get_image_kit_placeholder($imageUrl, 960, 1015) ?>"
                data-src="<?php echo get_image_kit_src($imageUrl, 960, 1015); ?>" data-srcset="
                        <?php echo get_image_kit_src($imageUrl, 360, 380); ?> 414w,
                        <?php echo get_image_kit_src($imageUrl, 414, 437); ?> 414w,
                        <?php echo get_image_kit_src($imageUrl, 600, 634); ?> 600w,
                        <?php echo get_image_kit_src($imageUrl, 720, 761); ?> 720w,
                        <?php echo get_image_kit_src($imageUrl, 768, 812); ?> 768w,
                        <?php echo get_image_kit_src($imageUrl, 828, 875); ?> 828w,
                        <?php echo get_image_kit_src($imageUrl, 960, 1015); ?> 960w,
                        <?php echo get_image_kit_src($imageUrl, 1242, 1313); ?> 1242w,
                        <?php echo get_image_kit_src($imageUrl, 1536, 1624); ?> 1536w,
                        <?php echo get_image_kit_src($imageUrl, 1920, 2030); ?> 1920w
                    " data-sizes="(min-width: 1024px) 50vw, 100vw" alt="">
        </div>

        <div class="ww-banner-block__content">
            <div class="ww-banner-block__inner-content">
                <h2><?php echo $heading; ?></h2>
                <div>
                    <?php echo $text; ?>
                </div>

                <form id="refer-a-friend-form" class="refer-a-friend-form" action="post">
                    <label class="sr-only" for="refer-a-friend-form-email"><?php _e('Email', 'lavandre'); ?></label>
                    <input class="refer-a-friend-form__input" type="email" name="email" id="refer-a-friend-form-email"
                        title="<?php _e('Please enter a valid e-mail address', 'lavandre'); ?>"
                        placeholder="<?php _e('Email', 'lavandre'); ?>" required>

                    <button is="lavandre-button" size="large" full-width class="refer-a-friend-form__button"
                        type="submit" id="refer-a-friend-form-submit" aria-label="Subscribe to newsletter button">
                        <?php _e('Submit', 'lavandre'); ?>
                    </button>
                </form>
            </div>
        </div>
    </section>

</main>

<?php
endwhile;

get_footer();

?>
<template id="points-grid-overlay">
    <div class="points-grid__overlay">
        <button href="/my-account/" is="lavandre-button" primary outline size="large">
            Sign up
        </button>

        <p>Already a member? <a href="/my-account/">Log in</a></p>
    </div>
</template>