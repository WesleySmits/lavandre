<?php
    /* Template Name: Recycle Page Template */

    if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly.
    }

    get_header();

    while ( have_posts() ) : the_post();
?>

<main <?php post_class( 'site-main' ); ?> role="main">
    <?php ww_main_top_banner(get_field('main_top_banner')); ?>
    <?php ww_step_list(get_field('steps')); ?>


    <?php include get_stylesheet_directory() . '/partials/_instagram-feed.php'; ?>
</main>

<?php
endwhile;

get_footer();