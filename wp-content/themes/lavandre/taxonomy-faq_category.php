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

    $term = get_queried_object();
    $top_banner = get_field('top_banner', $term);
    $top_banner_title = get_field('top_banner_title', $term);
?>

<main <?php post_class( 'site-main' ); ?> role="main">
    <div class="page-wrapper">
        <header class="ww-page-banner">
            <img src="<?php echo $top_banner ?>" alt="" />
            <h1 class="ww-page-banner__overlay ww-page-banner__title ww-page-banner__title--large"><?php echo $top_banner_title; ?></h1>
        </header>

        <nav class="side-navigation">
           <ul>
            <?php
                    $post_type = 'faqs';
                    $taxonomies = get_object_taxonomies( (object) array(
                        'post_type' => $post_type,
                    ) );
                    foreach( $taxonomies as $taxonomy ) {
                        $terms = get_terms([
                            'taxonomy' => $taxonomy,
                            'order' => 'ASC',
                            'orderby' => 'term_order'
                        ]);
                        foreach( $terms as $loop_term) {
                            ?>
                                <li class="side-navigation__item">
                                    <a href="<?php echo get_term_link($loop_term, $taxonomy); ?>" class="side-navigation__link">
                                        <?php echo $loop_term->name; ?>
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
                $args = array(
                    'post_type' => 'faqs',
                    'posts_per_page' => -1,
                    'taxonomy' => 'faq_category',
                    'term' => $term->slug,
                    'orderby' => 'menu_order',
                    'order' => 'ASC',
                );
                $faqs = new WP_Query( $args );
            ?>

            <?php if ( $faqs->have_posts() ) { ?>
                <?php while ( $faqs->have_posts() ) { ?>
                    <?php $faqs->the_post(); ?>
                    <div class="question">
                        <h2 itemprop="name"><?php echo get_the_title(); ?></h2>

                        <div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
                            <div itemprop="text"><?php echo get_the_content(); ?></div>
                        </div>
                    </div>
                <?php } ?>
            <?php } ?>
        </div>
    </div>
</main>

<?php
    get_footer();
