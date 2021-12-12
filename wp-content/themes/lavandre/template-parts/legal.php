<?php
    /* Template Name: Legal page */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
get_header();
?>

<main <?php post_class( 'site-main ww-container ww-container--small' ); ?> role="main">
    <section class="ww-block">

    <?php if ( apply_filters( 'hello_elementor_page_title', true ) ) : ?>
        <header class="page-header">
            <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
        </header>
    <?php endif; ?>

    <div class="page-content page-content--legal">
        <?php the_content(); ?>
    </div>
    </section>
</main>

<?php
    get_footer();
?>
