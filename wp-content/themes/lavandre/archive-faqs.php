<?php
    /* Template Name: Customer service page */

    /**
     *
     * The template for displaying archive pages.
     *
     * @package Lavandre
     */

    if ( ! defined( 'ABSPATH' ) ) {
        exit;
    }
    get_header();
?>
<main <?php post_class( 'site-main ww-container' ); ?> role="main">
    <header>
        <h1 class="customer-service__title"><?php _e('What do you have a question about?', 'lavandre'); ?></h1>
    </header>

    <div class="ww-panel">
        <?php
            $post_type = 'faqs';

            $taxonomies = get_object_taxonomies( (object) array( 'post_type' => $post_type ) );
            foreach( $taxonomies as $taxonomy ) :
                $terms = get_terms( $taxonomy );

                ?>
                <ul class="no-list customer-service__categories">
                <?php
                foreach( $terms as $term ) :
                    if ($term->slug === 'top-questions') {
                        continue;
                    }

                    $args = array(
                        'post_type' => $post_type,
                        'posts_per_page' => 5,
                        'taxonomy' => $taxonomy,
                        'term' => $term->slug
                    );

                    $posts = new WP_Query( $args );
                    if( $posts->have_posts() ):
                        ?>
                            <li class="customer-service__category">
                                <header class="customer-service__category-header">
                                    <?php include $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/lavandre/partials/icons/user.svg.php'; ?>
                                    <h3><?php echo $term->name; ?></h3>
                                </header>
                                <ul class="customer-service__items">
                                    <?php
                                    while( $posts->have_posts() ) : $posts->the_post();
                                    ?>
                                        <li>
                                            <a href="<?php echo get_the_permalink(); ?>" title="<?php echo get_the_title(); ?>">
                                                <?php echo get_the_title(); ?>
                                            </a>
                                        </li>
                                    <?php
                                    endwhile;
                                    ?>
                                </ul>

                                <a href="<?php echo get_term_link($term, $taxonomy); ?>" class="customer-service__view-all">
                                    <?php _e('View all questions', 'lavandre'); ?>
                                </a>
                            </li>
                        <?php
                    endif;
                endforeach;
                ?></ul><?php
            endforeach;
        ?>
    </div>
</main>

<?php
    get_footer();
