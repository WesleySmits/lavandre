<template data-panel-template="cart-panel">
    <dialog class="side-panel side-panel--right" data-panel-name="cart-panel">
        <div class="side-panel__container">
                <header class="side-panel__header">
                    <h1><?php _e('Shopping bag', 'lavandre'); ?></h1>

                    <button type="button" data-close class="side-panel__close">
                        <?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?>
                    </button>
                </header>

                <?php echo do_shortcode("[ww_custom_cart_mini]"); ?>
            </div>
    </dialog>
</template>
<dialog class="side-panel side-panel--right" data-panel-name="cart-panel">
        <div class="side-panel__container">
                <header class="side-panel__header">
                    <h1><?php _e('Shopping bag', 'lavandre'); ?></h1>

                    <button type="button" data-close class="side-panel__close">
                        <?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?>
                    </button>
                </header>

                <?php echo do_shortcode("[ww_custom_cart_mini]"); ?>
            </div>
    </dialog>
