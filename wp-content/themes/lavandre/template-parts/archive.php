<?php
    /**
     * The template for displaying archive pages.
     *
     * @package Lavandre
     */

    if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly.
    }
    get_header();
?>

<main role="main">
    <ul class="ww-blog-posts">
        <?php while ( have_posts() ) { ?>
            <?php the_post(); ?>

            <li class="ww-blog-posts__item">
                <article itemscope itemtype="http://schema.org/BlogPosting">
                    <meta itemprop="datePublished" content="<?php the_time( 'c' ); ?>">
                    <a class="ww-blog-posts__link" href="<?php echo get_permalink(); ?>" itemprop="url" title="<?php echo get_the_title(); ?>" aria-label="Read more">
                        <header class="ww-blog-posts__image-holder">
                            <img src="<?php echo get_the_post_thumbnail_url(); ?>" itemprop="image" alt="<?php echo get_the_title(); ?>">
                        </header>

                        <div class="ww-blog-posts__content">
                            <strong class="ww-blog-posts__category">CATEGORY</strong>
                            <h3 class="ww-blog-posts__title" itemprop="headline"><?php echo get_the_title(); ?></h3>
                            <a href="<?php echo get_permalink(); ?>" class="ww-blog-posts__read-more">
                                <span>Read more</span>
                                <?php include get_stylesheet_directory() . '/partials/icons/arrow-right.svg.php'; ?>
                            </a>
                        </div>
                    </a>
                </article>
            </li>
        <?php } ?>
    </ul>

    <?php include get_stylesheet_directory() . '/partials/_instagram-feed.php'; ?>
</main>

<?php
get_footer();
