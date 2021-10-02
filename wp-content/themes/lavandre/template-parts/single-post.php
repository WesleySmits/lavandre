<?php
/**
 * The template for displaying singular post-types: posts, pages and user-defined custom post types.
 *
 * @package Lavandre
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>
<?php
while ( have_posts() ) : the_post();
	?>

<main <?php post_class( 'site-main ww-container ww-container--large ww-blog-post' ); ?> role="main">
    <header class="ww-blog-post__header flex-grid">
        <div class="ww-blog-post__header__image-column">
            <img class="cover-image" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php echo get_the_title(); ?>">
        </div>

        <div class="ww-blog-post__header__title-column">
            <strong class="ww-blog-posts__category"><?php echo get_the_category()[0]->name; ?></strong>
            <h1 class="ww-blog-post__title"><?php echo get_the_title(); ?></h1>
            <p class="ww-blog-post__intro"><?php echo get_the_excerpt(); ?></p>
        </div>
    </header>

	<div class="page-content">
        <?php the_content(); ?>
	</div>
</main>

	<?php
endwhile;
