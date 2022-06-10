    <?php
    /* Template Name: Rewards Page Template */

    if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly.
    }

    get_header();

    $loggedIn = is_user_logged_in();
    $company = getCompany();
    $contactPoint = $company->getContactPoint();

    while ( have_posts() ) : the_post();
?>

<main <?php post_class( 'site-main' ); ?> role="main">
    <?php ww_main_top_banner(get_field('main_top_banner'), !$loggedIn); ?>
    <?php
        if ($loggedIn) {

            $user_info = get_userdata(get_current_user_id());
            $firstName = $user_info->first_name;
            $points = do_shortcode('[wr_simple_points raw="true"]');

            ?>
    <section id="welcome" class="ww-block">
        <header>
            <h2>
                <span><?php echo sprintf(__('Hi %s!'), $firstName); ?></span>
                <br>
                <span><?php echo sprintf(__('You have %d points'), $points); ?></span>
            </h2>
        </header>

        <div class="buttons">
            <button is="lavandre-button" href="/my-account/lws_woorewards/" primary size="large">
                Redeem Now
            </button>

            <button is="lavandre-button" href="/my-account/lws_woorewards/" primary size="large">
                Rewards History
            </button>
        </div>
    </section>
    <?php
        } else {
            ww_how_it_works(get_field('how_it_works'));
        }
    ?>
    <?php ww_points_grid(get_field('points'), ['ww-block--no-border', 'points-grid-wrapper']); ?>
    <?php ww_banner_block(get_field('banner_block_1'), ['ww-banner-block--border', 'ww-banner-block--transparent'], 'h1'); ?>

    <?php
        $bannerBlock = get_field('banner_block_2');
        $heading = $bannerBlock['heading'];
        $text = $bannerBlock['text'];
        $imageUrl = $bannerBlock['image'];
    ?>
    <section class="ww-banner-block ww-banner-block--border ww-banner-block--alt-desktop ww-banner-block--transparent"
        data-lazyload>
        <div class="ww-banner-block__banner">
            <img loading="lazy" class="cover-image" src="<?php echo get_image_kit_placeholder($imageUrl, 960, 1015) ?>"
                data-src="<?php echo get_image_kit_src($imageUrl, 960, 1015); ?>" data-srcset="
                        <?php echo get_image_kit_src($imageUrl, 360, 380); ?> 414w,
                        <?php echo get_image_kit_src($imageUrl, 414, 437); ?> 414w,
                        <?php echo get_image_kit_src($imageUrl, 600, 634); ?> 600w,
                        <?php echo get_image_kit_src($imageUrl, 720, 761); ?> 720w,
                        <?php echo get_image_kit_src($imageUrl, 768, 812); ?> 768w,
                        <?php echo get_image_kit_src($imageUrl, 828, 875); ?> 828w,
                        <?php echo get_image_kit_src($imageUrl, 960, 1015); ?> 960w,
                        <?php echo get_image_kit_src($imageUrl, 1242, 1313); ?> 1242w,
                        <?php echo get_image_kit_src($imageUrl, 1536, 1624); ?> 1536w,
                        <?php echo get_image_kit_src($imageUrl, 1920, 2030); ?> 1920w
                    " data-sizes="(min-width: 1024px) 50vw, 100vw" alt="">
        </div>

        <div class="ww-banner-block__content">
            <div class="ww-banner-block__inner-content">
                <sponsorship-toggle>
                    <div data-name="form">
                        <h1><?php echo $heading; ?></h1>
                        <br />
                        <div>
                            <?php echo $text; ?>
                        </div>

                        <form is="refer-a-friend-form" id="refer-a-friend-form" class="refer-a-friend-form" action="post">
                            <label class="sr-only" for="refer-a-friend-form-email"><?php _e('Email', 'lavandre'); ?></label>
                            <input class="refer-a-friend-form__input" type="email" name="email" id="refer-a-friend-form-email"
                                title="<?php _e('Please enter a valid e-mail address', 'lavandre'); ?>"
                                placeholder="<?php _e('Email', 'lavandre'); ?>" required>
                            <button is="lavandre-button" size="large" full-width class="refer-a-friend-form__button"
                                type="submit" id="refer-a-friend-form-submit" aria-label="Subscribe to newsletter button"
                                outline>
                                <?php _e('Submit', 'lavandre'); ?>
                            </button>
                        </form>
                    </div>

                    <div class="refer-a-friend_thank-you" data-name="thank-you" hidden>
                        <h1 class="large-title"><?php _e('Thanks for referring', 'lavandre'); ?></h1>
                        <p class="refer-a-friend_thank-you-text">
                            <?php _e('Remind your friends to check their emails.', 'lavandre'); ?>
                        </p>
                        <button is="lavandre-button" primary full-width size="large" data-toggle>
                            <?php _e('Refer More Friends', 'lavandre'); ?>
                        </button>
                    </div>
                </sponsorship-toggle>
            </div>
        </div>
    </section>
</main>

<?php
endwhile;

get_footer();

?>
<template id="points-grid-overlay">
    <div class="points-grid__overlay">
        <button type="button" data-close
            class="points-grid__overlay__close"><?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?></button>
        <button href="/my-account/" is="lavandre-button" outline size="large" full-width>
            <?php _e('Sign up', 'lavandre'); ?>
        </button>

        <p><?php _e('Already a member?', 'lavandre'); ?> <a href="/my-account/"><?php _e('Log in', 'lavandre'); ?></a>
        </p>
    </div>
</template>

<template id="points-grid-overlay--completed">
    <div class="points-grid__overlay">
        <button type="button" data-close
            class="points-grid__overlay__close"><?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?></button>
        <p><?php _e('You already completed this campaign', 'lavandre'); ?></p>
    </div>
</template>

<template id="points-grid-overlay--completed--woorewards_birthday">
    <div class="points-grid__overlay">
        <button type="button" data-close
            class="points-grid__overlay__close"><?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?></button>
        <p><?php _e('Thanks! We\'re looking forward to helping you celebrate :)', 'lavandre'); ?></p>
    </div>
</template>

<template id="points-grid-overlay--default">
    <div class="points-grid__overlay">
        <button type="button" data-close
            class="points-grid__overlay__close"><?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?></button>
        <p><?php _e('Earn 1 point for every €1 you spend in our store', 'lavandre'); ?></p>
    </div>
</template>

<template id="points-grid-overlay--woorewards_liked_on_facebook">
    <div class="points-grid__overlay">
        <button type="button" data-close
            class="points-grid__overlay__close"><?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?></button>
        <p><?php _e('Earn 5 points when you like our Facebook page', 'lavandre'); ?></p>
        <button is="lavandre-button" outline size="large"
            full-width><?php _e('Like on Facebook', 'lavandre'); ?></button>
    </div>
</template>

<template id="points-grid-overlay--woorewards_shared_on_facebook">
    <div class="points-grid__overlay">
        <button type="button" data-close
            class="points-grid__overlay__close"><?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?></button>
        <p><?php _e('Earn 5 points when you share us on Facebook', 'lavandre'); ?></p>
        <button is="lavandre-button" outline size="large"
            full-width><?php _e('Share on Facebook', 'lavandre'); ?></button>
    </div>
</template>

<template id="points-grid-overlay--woorewards_birthday">
    <div class="points-grid__overlay">
        <button type="button" data-close
            class="points-grid__overlay__close"><?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?></button>
        <p><?php _e('Earn 15 points on your birthday', 'lavandre'); ?></p>

        <form is="birthday-form">

            <div class="custom-date-wrapper">
                <lavandre-select id="birthday-day" class="lavandre-select--blue" name="day"></lavandre-select>
                <lavandre-select id="birthday-month" class="lavandre-select--blue" name="month"></lavandre-select>
            </div>

            <br>

            <button is="lavandre-button" type="submit" outline size="large"
                full-width><?php _e('Add my Birthday', 'lavandre'); ?></button>
        </form>
    </div>
</template>

<template id="points-grid-overlay--woorewards_followed_on_instagram">
    <div class="points-grid__overlay">
        <button type="button" data-close
            class="points-grid__overlay__close"><?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?></button>
        <p><?php _e('Earn 5 points when you follow us on Instagram', 'lavandre'); ?></p>
        <button is="lavandre-button" outline size="large" full-width><?php _e('Follow Us', 'lavandre'); ?></button>
    </div>
</template>
