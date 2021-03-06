<header id="header"
    class="ww-site-header <?php if (is_front_page() || is_page_template('template-parts/sustainability.php') || is_page_template('template-parts/rewards.php')) { echo 'transparent'; } ?>"
    <?php if (is_front_page() || is_page_template('template-parts/sustainability.php') || is_page_template('template-parts/rewards.php')) { echo 'is="sticky-header"'; } ?>>
    <div class="ww-site-header__top">
        <div class="ww-container ww-site-header__top__container flex">
            <a class="hide-on-mobile customer-service-toggle" href="/customer-service/faq" id="customer-service-toggle"
                data-panel="customer-service"><?php _e('Customer service', 'lavandre'); ?></a>
            <a href="/customer-service/shipping/" id="delivery-info-toggle" class="delivery-info-toggle"
                data-panel="shipping"><?php echo get_first_delivery_date(); ?></a>
            <a href="/rewards" class="hide-on-mobile sign-in-link">
                <?php _e('Rewards', 'lavandre'); ?>
            </a>
        </div>
    </div>

    <div class="ww-site-header__middle flex">
        <div class="ww-container ww-site-header__middle__container flex">
            <button class="ww-site-header__menu-toggle no-button hide-on-desktop" data-panel="mobile-menu"
                aria-label="mobile-menu-toggle">
                <?php include $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/lavandre/partials/icons/bars.svg.php'; ?>
            </button>

            <a href="/" class="ww-site-header__logo" aria-label="Lavandré logo">
                <?php include get_stylesheet_directory() . '/public/images/logos/lavandre-logo-open.svg'; ?>
            </a>

            <nav class="ww-site-header__nav flex hide-on-mobile hide-on-tablet">
                <ul class="no-list inline-list flex">
                    <li class="ww-site-header__nav-item"><a class="ww-site-header__nav-link"
                            href="/shop/"><?php _e('Shop', 'lavandre'); ?></a></li>

                    <li class="ww-site-header__nav-item">
                        <a class="ww-site-header__nav-link"
                            href="/sustainability/"><?php _e('Sustainability', 'lavandre'); ?></a>
                    </li>

                    <li class="ww-site-header__nav-item">
                        <a class="ww-site-header__nav-link" href="/blog/"><?php _e('Blog', 'lavandre'); ?></a>
                    </li>
                    <li class="ww-site-header__nav-item"><a class="ww-site-header__nav-link"
                            href="/contact/"><?php _e('Contact', 'lavandre'); ?></a></li>
                </ul>
            </nav>

            <nav class="ww-site-header__icons flex">
                <ul class="no-list inline-list">
                    <li class="header__search hide-on-mobile hide-on-tablet">
                        <div class="flex">
                            <button is="header-search-toggle" type="button" class="no-button" aria-label="Search button">
                                <?php include $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/lavandre/partials/icons/search.svg.php'; ?>
                            </button>

                            <?php get_product_search_form(); ?>
                        </div>
                    </li>

                    <li class="hide-on-mobile hide-on-tablet">
                        <a href="/my-account" class="no-button" id="my-account-toggle" data-panel="my-account-panel"
                            aria-label="My account">
                            <?php include $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/lavandre/partials/icons/account.svg.php'; ?>
                        </a>
                    </li>

                    <li>
                        <a href="/cart" class="no-button cart-amount-icon" id="cart-toggle" data-panel="cart-panel"
                            aria-label="Shopping bag">
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
