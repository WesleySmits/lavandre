<a href="/my-account/view-order/<?php echo $order->id ?>/" class="latest-order panel">
    <div class="latest-order__image">
        <?php
            $first_product = $order->items[array_key_first($order->items)];
            echo $first_product->get_product()->get_image();
        ?>
    </div>

    <div class="latest-order__date">
        <time class="order-details__value" datetime="<?php echo esc_attr( $order->get_date_created()->date( 'c' ) ); ?>">
            <?php echo $order->get_date_created()->date_i18n('d F Y'); ?>
        </time>
    </div>

    <div class="latest-order__read-more">
        <?php include get_stylesheet_directory() . '/partials/icons/chevron-right.svg.php'; ?>
    </div>
</a>
