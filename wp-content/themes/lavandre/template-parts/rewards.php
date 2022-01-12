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
    <?php ww_banner_block(get_field('banner_block_1')); ?>
    <?php ww_banner_block(get_field('banner_block_2'), ['ww-banner-block--alt']); ?>
</main>

<?php
endwhile;

get_footer();

?>
<template id="points-grid-overlay">
    <div class="points-grid__overlay">
        <button href="/my-account/" is="lavandre-button" primary size="large">
            Sign up
        </button>

        <p>Already a member? <a href="/my-account/">Log in</a></p>
    </div>
</template>