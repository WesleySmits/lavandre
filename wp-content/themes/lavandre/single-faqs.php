<?php
    /**
     *
     * The template for displaying single FAQ pages.
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

        <div class="page-content" itemscope itemtype="https://schema.org/FAQPage">
            <?php
                if ( have_posts() ) {
                    while ( have_posts() ) {
                        the_post();

                        ?>
                            <article class="ww-panel" itemprop="mainEntity" itemscope itemtype="http://schema.org/Question">
                                <header>
                                    <h3 itemprop="name">
                                        <a href="<?php echo get_the_permalink();?>" data-curtain-toggle="<?php echo 'accordion-' . get_the_ID()?>">
                                            <?php echo get_the_title(); ?>
                                        </a>
                                    </h3>
                                </header>

                                <div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                                    <div itemprop="text"><?php echo get_the_content(); ?></div>
                                </div>
                            </article>
                        <?php
                    }
                }
            ?>
        </div>
    </div>
</main>

<?php
    get_footer();
