<template data-panel-template="order-delivery">
    <dialog class="side-panel side-panel--alt side-panel--right" data-panel-name="order-delivery">
        <div class="side-panel__container">
                <header class="side-panel__header">
                    <h1><?php _e('Order and delivery', 'hello-elementor-child'); ?></h1>

                    <button type="button" class="side-panel__close">
                        <?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?>
                    </button>
                </header>

                <section class="side-panel__section">
                    <p>
                        <?php _e('Above €75,- delivery is free.', 'hello-elementor-child'); ?>
                    </p>

                    <table class="table--classy">
                        <thead>
                            <tr>
                                <th><?php _e('Delivery on Monday to Friday', 'hello-elementor-child'); ?></th>
                                <th><?php _e('Costs', 'hello-elementor-child'); ?></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td><?php _e('Delivery in The Netherlands', 'hello-elementor-child'); ?></td>
                                <td><?php _e('&euro;5,95-', 'hello-elementor-child'); ?></td>
                            </tr>

                            <tr>
                                <td><?php _e('Delivery in Belgium', 'hello-elementor-child'); ?></td>
                                <td><?php _e('&euro;9,95-', 'hello-elementor-child'); ?></td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section class="side-panel__section">
                    <h2><?php _e('Delivery', 'hello-elementor-child'); ?></h2>
                    <?php get_accordion('order-and-delivery'); ?>
                </section>

                <section class="side-panel__section">
                    <h2><?php _e('Returns', 'hello-elementor-child'); ?></h2>
                    <?php get_accordion('returns'); ?>
                </section>
            </div>
    </dialog>
</template>
