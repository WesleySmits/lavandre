<template data-panel-template="tree-planting">
    <dialog class="side-panel side-panel--right" data-panel-name="tree-planting">
        <div class="side-panel__container">
                <header class="side-panel__header">
                    <h1><?php _e('Our tree project', 'lavandre'); ?></h1>

                    <button type="button" class="side-panel__close">
                        <?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?>
                    </button>
                </header>

                <section class="side-panel__section side-panel__section--bordered side-panel__section--boxed">
                    <p><?php _e('In addition to our environmentally friendly products, we would like to contribute directly to nature. That is why we will automatically plant a tree for every item that we sell through our webshop from 1 January 2021. In this way we ensure that we can enjoy the beautiful nature for years to come.', 'lavandre'); ?></p>
                </section>

                <section class="side-panel__section side-panel__section--bordered side-panel__section--boxed">
                    <h2><?php _e('Step 1: Place an order', 'lavandre'); ?></h2>
                    <p><?php _e('For every item you order on our webshop, we plant a tree in collaboration with our tree partner, Eden Reforestation Projects. This process is fully automatic and you do not have to do or pay anything extra.', 'lavandre'); ?></p>
                </section>

                <section class="side-panel__section side-panel__section--bordered side-panel__section--boxed">
                    <h2><?php _e('Step 2: We plant a tree in nature', 'lavandre'); ?></h2>
                    <p><?php _e('At the beginning of each month, we plan together with Eden Reforestation Projects based on how many items we were able to deliver the month before. In this way we contribute to nature and we help to compensate for CO2 emissions and thus keep the earth green and give plant and animal species back their habitat.', 'lavandre'); ?></p>
                </section>

                <section class="side-panel__section side-panel__section--bordered side-panel__section--boxed">
                    <h2><?php _e('Step 3: View your impact on nature', 'lavandre'); ?></h2>
                    <p><?php _e('We automatically keep track of how many trees we have been able to plant with your help. You can also see this yourself on your account dashboard. Simply log into your account and you will see how many trees you have planted!.', 'lavandre'); ?></p>
                </section>

                <section class="side-panel__section side-panel__section--boxed">
                    <?php $image = get_site_url() . '/wp-content/themes/lavandre/public/images/banners/lemur.jpg'; ?>
                    <img
                        src="<?php echo get_image_kit_placeholder($image, 562, 375) ?>"
                        data-src="<?php echo get_image_kit_url($image); ?>"
                        alt=""
                        width="768"
                        height="320"
                        data-lazyload
                    >
                </section>
            </div>
    </dialog>
</template>
