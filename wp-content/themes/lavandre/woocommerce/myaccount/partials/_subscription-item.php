<a href="<?php echo esc_url( $subscription->get_view_order_url() ); ?>" class="latest-order panel">
    <div class="latest-order__image">
        <?php
            $products = $subscriptions[0]->get_items();
            $first_key = array_key_first($products);
            $first_product = $products[$first_key];
            echo $first_product->get_product()->get_image();
        ?>
    </div>

    <div class="latest-order__next-date">
        <strong><?php echo esc_html_x( 'Next payment', 'table heading', 'woocommerce-subscriptions' ); ?></strong></br>
        <time class="order-details__value" datetime="<?php echo esc_attr( $subscription->get_date( 'next_payment' ) ); ?>">
            <?php echo esc_attr( $subscription->get_date_to_display( 'next_payment' ) ); ?>
        </time>
    </div>

    <div class="latest-order__total">
        <strong><?php echo esc_html_x( 'Total', 'table heading', 'woocommerce-subscriptions' ); ?></strong></br>
        <?php echo wp_kses_post( $subscription->get_formatted_order_total() ); ?>
    </div>

    <div class="latest-order__read-more">
        <?php include get_stylesheet_directory() . '/partials/icons/chevron-right.svg.php'; ?>
    </div>
</a>
