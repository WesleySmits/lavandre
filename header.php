<?php
/**
 * The template for displaying the header
 *
 * This is the template that displays all of the <head> section, opens the <body> tag and adds the site's header.
 *
 * @package HelloElementor
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<?php $viewport_content = apply_filters( 'hello_elementor_viewport_content', 'width=device-width, initial-scale=1' ); ?>
	<meta name="viewport" content="<?php echo esc_attr( $viewport_content ); ?>">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <?php include 'partials/_head.php'; ?>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<?php
    hello_elementor_body_open();
?>

<header id="header" class="ww-site-header">
    <div class="ww-site-header__top">
        <div class="ww-container flex flex-xs-center flex-md-space-between">
            <a class="hide-on-mobile" href="/product/wegwerphanddoek-sample-collectie/"><?php _e('Request a sample', 'hello-elementor-child'); ?></a>
            <a href="/klantenservice/bestellen-en-bezorgen/" data-panel="6150"><?php echo get_first_delivery_date(); ?></a>
            <a class="hide-on-mobile" href="/klantenservice/" data-panel="6177"><?php _e('Customer service', 'hello-elementor-child'); ?></a>
        </div>
    </div>

    <div class="ww-site-header__middle flex">
        <div class="ww-container flex flex-nowrap flex-align-items-center">
            <button class="ww-site-header__menu-toggle no-button hide-on-desktop" class="no-button" data-panel="5476" aria-label="mobile-menu-toggle">
                <?php include 'partials/icons/bars.svg.php'; ?>
            </button>

            <a href="/" class="ww-site-header__logo">
                <img src="https://wegwerphanddoeken.nl/wp-content/uploads/2020/10/WEGWERPHANDDOEKEN.NL_.svg" alt="Wegwerphanddoeken.nl" width="300" height="16" loading="lazy">
            </a>

            <nav class="ww-site-header__nav flex flex-center hide-on-mobile hide-on-tablet">
                <ul class="no-list inline-list flex flex-center">
                    <li class="ww-site-header__nav-item" data-sub-menu="branches">
                        <a class="ww-site-header__nav-link" href="#"><?php _e('Branches', 'hello-elementor-child'); ?></a>
                        <?php include 'partials/submenus/branches.php'; ?>
                    </li>
                    <li class="ww-site-header__nav-item" data-sub-menu="sustainability">
                        <a class="ww-site-header__nav-link" href="/duurzaamheid/"><?php _e('Sustainability', 'hello-elementor-child'); ?></a>
                        <?php include 'partials/submenus/sustainability.php'; ?>
                    </li>
                    <li class="ww-site-header__nav-item"><a class="ww-site-header__nav-link" href="/shop/"><?php _e('Shop', 'hello-elementor-child'); ?></a></li>
                    <li class="ww-site-header__nav-item"><a class="ww-site-header__nav-link" href="/contact/"><?php _e('Contact', 'hello-elementor-child'); ?></a></li>
                </ul>
            </nav>

            <nav class="ww-site-header__icons flex flex-end">
                <ul class="no-list inline-list flex-nowrap">
                    <li class="header__search hide-on-mobile hide-on-tablet">
                        <div class="flex flex-nowrap">
                            <button type="button" class="no-button">
                                <?php include 'partials/icons/search.svg.php'; ?>
                            </button>

                            <?php get_product_search_form(); ?>
                        </div>
                    </li>

                    <li class="hide-on-mobile hide-on-tablet">
                        <a href="/mijn-account" class="no-button" data-panel="6188">
                            <?php include 'partials/icons/account.svg.php'; ?>
                        </a>
                    </li>

                    <li>
                        <a href="/cart" class="no-button cart-amount-icon" data-panel="6237">
                            <?php include 'partials/icons/cart.svg.php'; ?>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
