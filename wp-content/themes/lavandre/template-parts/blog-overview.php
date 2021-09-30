<?php
    /* Template Name: Blog Template */

    if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly.
    }
    get_header();
?>
<?php
while ( have_posts() ) : the_post();
	?>

    <main <?php post_class( 'site-main ww-container' ); ?> role="main">
        <div class="page-content">
            <?php the_content(); ?>
        </div>
    </main>

	<?php
endwhile;

get_footer();
