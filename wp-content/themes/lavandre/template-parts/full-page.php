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
        <div class="page-content">
            <?php the_content(); ?>
        </div>
    </main>

	<?php
endwhile;

get_footer();
