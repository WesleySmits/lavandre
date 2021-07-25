<?php
    /**
     *
     * The template for displaying FAQ categorypage.
     *
     * @package Lavandre
     */

    if ( ! defined( 'ABSPATH' ) ) {
        exit;
    }
    get_header();
?>

<main <?php post_class( 'site-main' ); ?> role="main">
    <div class="page-wrapper">
        <nav class="side-navigation">
           <ul>
            <?php
                    $post_type = 'faqs';
                    $taxonomies = get_object_taxonomies( (object) array( 'post_type' => $post_type ) );
                    foreach( $taxonomies as $taxonomy ) {
                        $terms = get_terms( $taxonomy );
                        foreach( $terms as $term) {
                            ?>
                                <li class="side-navigation__item">
                                    <a href="<?php echo get_term_link($term, $taxonomy); ?>" class="side-navigation__link">
                                        <?php echo $term->name; ?>
                                    </a>
                                </li>
                            <?php
                        }
                    }
                ?>
           </ul>
        </nav>

        <div class="page-content">
            <?php
                if ( have_posts() ) {
                    ?><ul class="accordion-list"><?php
                    while ( have_posts() ) {
                        the_post();

                        ?>
                        <li>
                            <article>
                                <header>
                                    <h3>
                                        <a href="<?php echo get_the_permalink();?>" data-curtain-toggle="<?php echo 'accordion-' . get_the_ID()?>">
                                            <?php echo get_the_title(); ?>
                                        </a>
                                    </h3>
                                </header>

                                <div data-curtain-content="<?php echo 'accordion-' . get_the_ID()?>">
                                    <?php echo get_the_content(); ?>
                                </div>
                            </article>
                        </li>
                        <?php
                    }
                    ?></ul><?php
                }?>
        </div>
    </div>
</main>

<?php
    get_footer();
