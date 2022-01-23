<?php
    /* Template Name: About us Page Template */

    if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly.
    }

    $about_banner = get_field('introduction_photo');
    $bottom_banner = get_field('section_1_image');
    $company = getCompany();

    get_header();
?>
<?php
while ( have_posts() ) : the_post();
	?>

<main <?php post_class( 'site-main' ); ?> role="main">
    <section class="full-width-banner-block full-width-banner-block--bordered">
        <div
            class="full-width-banner-block__link full-width-banner-block__half-photo full-width-banner-block__half-photo--alt">
            <div class="background-noise"></div>
            <img src="/wp-content/themes/lavandre/public/images/wesley-maria.jpeg"
                alt="Lavandré Founders - Wesley & Maria">
        </div>

        <div class="full-width-banner-block__link full-width-banner-block__text">
            <h1><?php echo __('Meet the Founders', 'lavandre'); ?></h1>
            <p><?php echo sprintf(__('The founders of %s, Annemarie, Maria and Wesley set out in %s to create an online beauty brand. They didn’t want to create just another product to a saturated market. Their creation had to have a purpose. They created a line of products that ticks all the boxes: easy-to-use, clean ingredients, immediately satisfying and so pretty you’d want them on display.', 'lavandre'), $company->getBrandName(), $company->getFoundingDate()); ?>
            </p>
            <p><?php echo __('Every day towels are used in the beauty industry and they are so important to the well-being of healthy skin. With connections to the leading fibre houses with the latest technology, they were able to develop a product that adhered to this philosophy and reimagined the beauty segment as we know it. Creating the most advanced medically graded body, hair, and face towels has allowed the brand to position these products as mush-haves in the beauty industry.', 'lavandre'); ?>
            </p>
        </div>
        <div></div>
    </section>

    <section class="ww-banner-block ww-banner-block--alt ww-banner-block--transparent">
        <div class="ww-banner-block__banner">
            <img loading="lazy" class="cover-image"
                src="<?php echo get_image_kit_src('https://lavandre.com/wp-content/themes/lavandre/public/images/banners/about.jpeg', 960, 1015); ?>"
                srcset="
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/themes/lavandre/public/images/banners/about.jpeg', 360, 380); ?> 414w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/themes/lavandre/public/images/banners/about.jpeg', 414, 437); ?> 414w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/themes/lavandre/public/images/banners/about.jpeg', 600, 634); ?> 600w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/themes/lavandre/public/images/banners/about.jpeg', 720, 761); ?> 720w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/themes/lavandre/public/images/banners/about.jpeg', 768, 812); ?> 768w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/themes/lavandre/public/images/banners/about.jpeg', 828, 875); ?> 828w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/themes/lavandre/public/images/banners/about.jpeg', 960, 1015); ?> 960w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/themes/lavandre/public/images/banners/about.jpeg', 1242, 1313); ?> 1242w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/themes/lavandre/public/images/banners/about.jpeg', 1536, 1624); ?> 1536w,
                        <?php echo get_image_kit_src('https://lavandre.com/wp-content/themes/lavandre/public/images/banners/about.jpeg', 1920, 2030); ?> 1920w
                    " sizes="(min-width: 1024px) 50vw, 100vw" alt="">
        </div>

        <div class="ww-banner-block__content">
            <div class="ww-banner-block__inner-content">
                <h2><?php echo __('Can upgrading your towel really transform your skin?', 'lavandre'); ?></h2>

                <p><?php echo __('The towel you use matters as much as the treatment you perform. Washing your towel in a standard washing machine does not remove all bacteria, mildew, mould, and other highly potent skin irritants that not only collect on the skin, but clog the pores, flare up acne and trigger infection.', 'lavandre'); ?>
                </p>
                <p><?php echo __('It’s why we did this: A naturally hygienic and hypoallergenic towel that is fresh and clean so the skin stays that way too. Unlike standard cotton towels, our towel doesn’t breed or harbour bacteria, so you can spend less time washing your towel and more time enjoying your laundry free day.', 'lavandre'); ?>
                </p>
            </div>
        </div>
    </section>

    <?php include get_stylesheet_directory() . '/partials/_instagram-feed.php'; ?>
</main>

<?php
endwhile;

get_footer();