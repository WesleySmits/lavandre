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

        <div class="page-content" itemscope itemtype="https://schema.org/FAQPage">
            <?php if ( have_posts() ) { ?>
                <accordion-element class="legal" data-cy="page-accordion">
                    <?php while ( have_posts() ) { ?>
                        <?php the_post(); ?>
                        <details is="curtain-element" itemprop="mainEntity" itemscope itemtype="http://schema.org/Question">
                            <summary>
                                <a href="<?php echo get_the_permalink();?>" itemprop="name"><?php echo get_the_title(); ?></a>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 15 15" xml:space="preserve" aria-hidden="true" data-acsb-hidden="true" data-acsb-force-hidden="true">
                                    <g fill="#2b2b2b">
                                        <polygon points="0.104,4.333 1.165,3.272 7.5,9.607 13.835,3.272 14.896,4.333 7.5,11.728 "></polygon>
                                    </g>
                                </svg>
                            </summary>

                            <div class="curtain-content" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                                <div itemprop="text"><?php echo get_the_content(); ?></div>
                            </div>
                        </details>
                    <?php } ?>
                </accordion-element>
            <?php } ?>
        </div>
    </div>
</main>

<?php
    get_footer();
