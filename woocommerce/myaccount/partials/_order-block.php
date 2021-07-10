<?php
    $notes = custom_get_order_notes($order->get_id());
    $postnl_base = 'https://jouw.postnl.nl/track-and-trace/';
    $locale = strtoupper($order->data['shipping']['country']);

    if ($locale === 'be') {
        $postnl_base = 'https://jouw.postnl.be/track-and-trace/';
    }

    $trackingCode = findTrackAndTraceCode($notes);
    $postalCode = str_replace(' ', '', strtoupper($order->data['shipping']['postcode']));

    $tracking_link = $postnl_base . $trackingCode . '-' . $locale . '-' . $postalCode;


    function custom_get_order_notes( $order_id ) {
        remove_filter( 'comments_clauses', array( 'WC_Comments', 'exclude_order_comments' ) );
        $comments = get_comments( array(
            'post_id' => $order_id,
            'orderby' => 'comment_ID',
            'order'   => 'DESC',
            'approve' => 'approve',
            'type'    => 'order_note',
        ) );
        $notes = wp_list_pluck( $comments, 'comment_content' );
        add_filter( 'comments_clauses', array( 'WC_Comments', 'exclude_order_comments' ) );
        return $notes;
    }

    function findTrackAndTraceCode($notes) {
        foreach ($notes as $note) {
            if (!strpos($note, 'PostNL')) {
                continue;
            }

            $code = explode(': ', $note);
            return $code[1];
        }
    }
?>

<div class="product-information__wrapper panel">
    <ul class="product-information__items">
        <?php foreach ($order->items as $id => $product) { ?>
            <li class="product-information__item">
                <div class="product-image flex-col-2">
                    <?php echo $product->get_product()->get_image(); ?>
                </div>

                <div class="product-details flex-col-7">
                    <h3><?php echo $product->get_name() ?></h3>

                    <dl class="order-details__kvp">
                        <dt><?php _e('color', 'hello-elementor-child'); ?></dt>
                        <dd><?php echo $product->get_product()->get_attribute('kleur')?></dd>

                        <dt><?php _e('Article number', 'hello-elementor-child'); ?></dt>
                        <dd><?php echo $product->get_product()->get_sku()?></dd>
                    </dl>
                </div>

                <div class="product-price flex-col-2">
                    <span><?php echo $product->get_quantity() . ' x ' . wc_price($product->get_total()); ?></span>
                </div>
            </li>
        <?php } ?>
    </ul>

    <?php if ($tracking_link && $trackingCode) { ?>
        <footer class="product-information__track-trace">
            <a href="<?php echo $tracking_link?>" target="_blank" rel="noopener" class="cta-button alt">
                <span><?php _e('Track & Trace', 'hello-elementor-child'); ?></span>
            </a>
        </footer>
    <?php } ?>
</div>
