<template data-panel-template="mobile-menu">
    <dialog class="side-panel side-panel--left" data-panel-name="mobile-menu">
        <div class="side-panel__container">
            <header class="side-panel__header">
                <img src="/wp-content/themes/lavandre/public/images/logos/lavandre-logo-open.svg" alt="Lavandré" width="150" height="26" loading="lazy">

                <button type="button" class="side-panel__close">
                    <?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?>
                </button>
            </header>

            <section class="side-panel__section side-panel__section--alt">
                <?php include get_stylesheet_directory() . '/woocommerce/product-searchform.php'; ?>
            </section>

            <nav class="side-panel__section side-panel__navigation">
                <ul class="no-list">
                    <li>
                        <a href="/">
                            <span><?php _e('Homepage', 'hello-elementor-child'); ?></span>
                        </a>
                    </li>

                    <li>
                        <a href="/shop">
                            <span><?php _e('Shop', 'hello-elementor-child'); ?></span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span><?php _e('Branches', 'hello-elementor-child'); ?></span>
                        </a>
                    </li>

                    <li>
                        <a href="/my-account">
                            <span><?php _e('My account', 'hello-elementor-child'); ?></span>
                        </a>
                    </li>

                    <li>
                        <a href="/product/sample-collection/">
                            <span><?php _e('Request sample', 'hello-elementor-child'); ?></span>
                        </a>
                    </li>
                </ul>
            </nav>

            <section class="side-panel__section side-panel__section--alt"></section>

            <nav class="side-panel__section side-panel__usps">
                <ul class="no-list flex">
                    <li>
                        <a href="/my-account">
                            <?php include $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/lavandre/partials/icons/user.svg.php'; ?>
                            <span><?php _e('Log in', 'hello-elementor-child'); ?></span>
                        </a>
                    </li>

                    <li>
                        <a href="/my-account">
                            <?php include $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/lavandre/partials/icons/user-register.svg.php'; ?>
                            <span><?php _e('Register', 'hello-elementor-child'); ?></span>
                        </a>
                    </li>

                    <li>
                        <a href="/product/sample-collection/">
                            <?php include $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/lavandre/partials/icons/gift.svg.php'; ?>
                            <span><?php _e('Request sample', 'hello-elementor-child'); ?></span>
                        </a>
                    </li>
                </ul>
            </nav>

            <nav class="side-panel__section side-panel__section--alt side-panel__navigation">
                <ul class="no-list">
                    <li>
                        <a href="/sustainability">
                            <span><?php _e('Sustainability', 'hello-elementor-child'); ?></span>
                        </a>
                    </li>

                    <li>
                        <a href="/customer-service">
                            <span><?php _e('Customer service', 'hello-elementor-child'); ?></span>
                        </a>
                    </li>

                    <li>
                        <a href="/contact">
                            <span><?php _e('Contact', 'hello-elementor-child'); ?></span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </dialog>
</template>
