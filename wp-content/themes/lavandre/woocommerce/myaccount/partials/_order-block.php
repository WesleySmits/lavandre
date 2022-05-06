<?php
    $tracking_link = getTrackAndTraceLinkFromOrder($order->get_id());
?>

<div class="product-information__wrapper panel">
    <ul class="product-information__items">
        <?php foreach ($order->items as $id => $product) { ?>
            <li class="product-information__item">
                <div class="product-image">
                    <?php echo $product->get_product()->get_image(); ?>
                </div>

                <div class="product-details">
                    <h3><?php echo $product->get_name() ?></h3>

                    <dl class="order-details__kvp">
                        <dt><?php _e('color', 'lavandre'); ?></dt>
                        <dd><?php echo $product->get_product()->get_attribute('kleur')?></dd>

                        <dt><?php _e('Article number', 'lavandre'); ?></dt>
                        <dd><?php echo $product->get_product()->get_sku()?></dd>
                    </dl>
                </div>

                <div class="product-price">
                    <span><?php echo $product->get_quantity() . ' x ' . wc_price($product->get_total()); ?></span>
                </div>
            </li>
        <?php } ?>
    </ul>

    <?php if ($tracking_link) { ?>
        <footer class="product-information__track-trace">
            <button is="lavandre-button" primary full-width size="large" href="<?php echo $tracking_link?>" target="_blank" rel="noopener">
                <span><?php _e('Track & Trace', 'lavandre'); ?></span>
            </button>
        </footer>
    <?php } ?>
</div>
