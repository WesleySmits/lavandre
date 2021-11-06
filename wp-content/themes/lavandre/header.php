<?php
/**
 * The template for displaying the header
 *
 * This is the template that displays all of the <head> section, opens the <body> tag and adds the site's header.
 *
 * @package Lavandre
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','<?php echo $_ENV['GOOGLE_TAG_MANAGER_ID']; ?>');</script>
    <!-- End Google Tag Manager -->
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<?php $viewport_content = apply_filters( 'hello_elementor_viewport_content', 'width=device-width, initial-scale=1' ); ?>
	<meta name="viewport" content="<?php echo esc_attr( $viewport_content ); ?>">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <?php include $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/lavandre/partials/_head.php'; ?>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<?php echo $_ENV['GOOGLE_TAG_MANAGER_ID']; ?>;"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<header id="header" class="ww-site-header <?php if (is_front_page() || is_shop()) { echo 'transparent'; } ?>">
    <div class="ww-site-header__top">
        <div class="ww-container flex flex-xs-center flex-md-space-between">
            <a class="hide-on-mobile" href="/product/sample-collection/"><?php _e('Request a sample', 'lavandre'); ?></a>
            <a href="/customer-service/order-and-delivery/" id="delivery-info-toggle" data-panel="order-delivery"><?php echo get_first_delivery_date(); ?></a>
            <a class="hide-on-mobile" href="/customer-service/" id="customer-service-toggle" data-panel="customer-service"><?php _e('Customer service', 'lavandre'); ?></a>
        </div>
    </div>

    <div class="ww-site-header__middle flex">
        <div class="ww-container flex flex-nowrap flex-align-items-center">
            <button class="ww-site-header__menu-toggle no-button hide-on-desktop" data-panel="mobile-menu" aria-label="mobile-menu-toggle">
                <?php include $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/lavandre/partials/icons/bars.svg.php'; ?>
            </button>

            <a href="/" class="ww-site-header__logo" aria-label="Lavandré logo">
                <?php include get_stylesheet_directory() . '/public/images/logos/lavandre-logo-open.svg'; ?>
            </a>

            <nav class="ww-site-header__nav flex flex-center hide-on-mobile hide-on-tablet">
                <ul class="no-list inline-list flex flex-center">
                    <li class="ww-site-header__nav-item">
                        <a class="ww-site-header__nav-link" href="/blog/"><?php _e('Blog', 'lavandre'); ?></a>
                    </li>

                    <li class="ww-site-header__nav-item" data-sub-menu="sustainability">
                        <a class="ww-site-header__nav-link" href="/sustainability/"><?php _e('Sustainability', 'lavandre'); ?></a>
                        <?php include $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/lavandre/partials/submenus/sustainability.php'; ?>
                    </li>

                    <li class="ww-site-header__nav-item"><a class="ww-site-header__nav-link" href="/shop/"><?php _e('Shop', 'lavandre'); ?></a></li>
                    <li class="ww-site-header__nav-item"><a class="ww-site-header__nav-link" href="/contact/"><?php _e('Contact', 'lavandre'); ?></a></li>
                </ul>
            </nav>

            <nav class="ww-site-header__icons flex flex-end">
                <ul class="no-list inline-list flex-nowrap">
                    <li class="header__search hide-on-mobile hide-on-tablet">
                        <div class="flex flex-nowrap">
                            <button type="button" class="no-button" aria-label="Search button">
                                <?php include $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/lavandre/partials/icons/search.svg.php'; ?>
                            </button>

                            <?php get_product_search_form(); ?>
                        </div>
                    </li>

                    <li class="hide-on-mobile hide-on-tablet">
                        <a href="/my-account" class="no-button" id="my-account-toggle" data-panel="my-account-panel" aria-label="My account">
                            <?php include $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/lavandre/partials/icons/account.svg.php'; ?>
                        </a>
                    </li>

                    <li>
                        <a href="/cart" class="no-button cart-amount-icon" id="cart-toggle" data-panel="cart-panel" aria-label="Shopping bag">
                            <?php include $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/lavandre/partials/icons/cart.svg.php'; ?>
                            <?php
                                global $woocommerce;
                                $count = $woocommerce->cart->cart_contents_count;
                                if ($count) {
                                    ?>
                                    <span class="cart-amount-counter"><?php echo $count; ?></span>
                                    <?php
                                }
                            ?>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
