<?php
    /* Template Name: Full-page Template */

    if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly.
    }
    get_header();
?>
<?php
while ( have_posts() ) : the_post();
	?>

    <main <?php post_class( 'site-main' ); ?> role="main">
        <?php the_content(); ?>
    </main>

	<?php
endwhile;

get_footer();
