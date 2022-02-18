<template data-panel-template="shipping">
    <dialog class="side-panel side-panel--right" data-panel-name="shipping">
        <div class="side-panel__container">
                <header class="side-panel__header">
                    <h1><?php _e('Shipping and Returns', 'lavandre'); ?></h1>

                    <button type="button" data-close class="side-panel__close">
                        <?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?>
                    </button>
                </header>

                <section class="side-panel__section">
                    <p>
                        <?php _e('Free shipping on orders over €75.', 'lavandre'); ?>
                    </p>
                </section>

                <section class="side-panel__section">
                    <h2><?php _e('Shipping', 'lavandre'); ?></h2>
                    <?php get_accordion('shipping'); ?>
                </section>

                <section class="side-panel__section">
                    <h2><?php _e('Returns', 'lavandre'); ?></h2>
                    <?php get_accordion('returns'); ?>
                </section>
            </div>
    </dialog>
</template>

<dialog class="side-panel side-panel--right" data-panel-name="shipping">
        <div class="side-panel__container">
                <header class="side-panel__header">
                    <h1><?php _e('Shipping and Returns', 'lavandre'); ?></h1>

                    <button type="button" data-close class="side-panel__close">
                        <?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?>
                    </button>
                </header>

                <section class="side-panel__section">
                    <p>
                        <?php _e('Free shipping on orders over €75.', 'lavandre'); ?>
                    </p>
                </section>

                <section class="side-panel__section">
                    <h2><?php _e('Shipping', 'lavandre'); ?></h2>
                    <?php get_accordion('shipping'); ?>
                </section>

                <section class="side-panel__section">
                    <h2><?php _e('Returns', 'lavandre'); ?></h2>
                    <?php get_accordion('returns'); ?>
                </section>
            </div>
    </dialog>
