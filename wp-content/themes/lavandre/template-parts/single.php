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
        <?php
            if( have_rows('accordion') ):
                $index = 0;
                ?><ul class="accordion-list accordion-list--legal"><?php
                while( have_rows('accordion') ) : the_row();
                    $title = get_sub_field('title');
                    $description = get_sub_field('description');
                    $id = "page-accordion-" . $index;

                    ?>
                        <li>
                            <article>
                                <header>
                                    <h3 data-curtain-toggle="<?php echo $id; ?>"><?php echo $title; ?></h3>
                                </header>

                                <div data-curtain-content="<?php echo $id; ?>">
                                    <?php echo $description; ?>
                                </div>
                            </article>
                        </li>
                    <?php

                    $index++;
                endwhile;

                ?></ul><?php
            endif;
        ?>

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
