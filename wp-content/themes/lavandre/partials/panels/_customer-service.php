<?php
    $company = getCompany();
    $contactPoint = $company->getContactPoint();
?>

<template data-panel-template="customer-service">
    <dialog class="side-panel side-panel--right" data-panel-name="customer-service">
        <div class="side-panel__container">
                <header class="side-panel__header">
                    <h1><?php _e('Customer service', 'lavandre'); ?></h1>

                    <button type="button" data-close class="side-panel__close">
                        <?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?>
                    </button>
                </header>

                <nav class="side-panel__section side-panel__section--bordered side-panel__navigation side-panel__navigation--no-border side-panel__navigation--compact">
                    <ul class="no-list">
                        <li>
                            <a href="/contact">
                                <span><?php _e('Contact', 'lavandre'); ?></span>
                            </a>
                        </li>

                        <li>
                            <a href="/customer-service/account/">
                                <span><?php _e('Account', 'lavandre'); ?></span>
                            </a>
                        </li>

                        <li>
                            <a href="/customer-service/orders/">
                                <span><?php _e('Orders', 'lavandre'); ?></span>
                            </a>
                        </li>

                        <li>
                            <a href="/customer-service/payment/">
                                <span><?php _e('Payment', 'lavandre'); ?></span>
                            </a>
                        </li>


                        <li>
                            <a href="/customer-service/shipping/">
                                <span><?php _e('Shipping', 'lavandre'); ?></span>
                            </a>
                        </li>

                        <li>
                            <a href="/customer-service/returns/">
                                <span><?php _e('Returns', 'lavandre'); ?></span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <section class="side-panel__section">
                    <h2><?php _e('Frequently asked questions', 'lavandre'); ?></h2>
                    <?php get_accordion('faq', 10); ?>
                </section>
            </div>
    </dialog>
</template>
