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

<main <?php post_class( 'site-main ww-container ww-container--small' ); ?> role="main">
	<?php if ( apply_filters( 'hello_elementor_page_title', true ) ) : ?>
		<header class="page-header">
			<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
		</header>
	<?php endif; ?>
	<div class="page-content">
        <?php if( have_rows('accordion') ): ?>
            <accordion-element class="legal" data-cy="page-accordion">
                <?php while( have_rows('accordion') ) : the_row(); ?>
                    <details is="curtain-element">
                        <summary>
                            <span><?php echo get_sub_field('title') ?></span>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 15 15" xml:space="preserve" aria-hidden="true" data-acsb-hidden="true" data-acsb-force-hidden="true">
                                <g fill="#2b2b2b">
                                    <polygon points="0.104,4.333 1.165,3.272 7.5,9.607 13.835,3.272 14.896,4.333 7.5,11.728 "></polygon>
                                </g>
                            </svg>
                        </summary>

                        <div class="curtain-content">
                            <?php echo get_sub_field('description'); ?>
                        </div>
                    </details>
                <?php endwhile; ?>
            </accordion-element>
        <?php endif; ?>

        <?php the_content(); ?>
		<div class="post-tags">
			<?php the_tags( '<span class="tag-links">' . __( 'Tagged ', 'hello-elementor' ), null, '</span>' ); ?>
		</div>
		<?php wp_link_pages(); ?>
	</div>

	<?php comments_template(); ?>
</main>

	<?php
endwhile;
