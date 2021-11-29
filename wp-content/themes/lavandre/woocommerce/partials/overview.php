<section>
    <header>
        <h6><?php echo sprintf(__('Order number: %s', 'lavandre'), $order->get_order_number()); ?></h6>
        <h1><?php esc_html_e( 'Overview', 'lavandre' ); ?></h1>
    </header>

    <ul class="mini-cart mini-cart--thank-you">
        <?php foreach ($order->get_items() as $item_id => $item ) { ?>
            <?php
                $product = $item->get_product();
                $productID = $item['product_id'];
                $variationID = $item['variation_id'];

                $title = $product->get_title();
                $subtitle = ($variationID) ? $product->get_description() : '';

                $productVariation = wc_get_product($variationID);
                $attributes =  $productVariation->get_variation_attributes() ;

                $color = (array_key_exists('attribute_pa_color', $attributes)) ? $attributes['attribute_pa_color'] : '';
                $amount = (array_key_exists('attribute_pa_amount', $attributes)) ? $attributes['attribute_pa_amount'] : '';
                $size = (array_key_exists('attribute_pa_size', $attributes)) ? $attributes['attribute_pa_size'] : '';
            ?>

            <li class="mini-cart__item">
                <div class="mini-cart__image">
                    <?php echo $product->get_image('thumbnail'); ?>
                </div>

                <div class="mini-cart__name">
                    <p class="custom-cart__product-title">
                        <?php echo $title; ?>
                        <?php if ($subtitle) { echo '<br/>' . $subtitle; } ?>
                    </p>

                    <?php if ($color || $size): ?>
                        <p class="custom-cart__product-subtitle">
                            <?php echo $color; ?> <?php echo $size; ?>
                        </p>
                    <?php endif; ?>

                    <?php if ($amount && $amount !== 'single-pack'): ?>
                        <p class="custom-cart__product-subtitle">
                            <?php
                                $displayAmount = attribute_slug_to_title('attribute_pa_amount', $amount);
                                echo $displayAmount;
                            ?>
                        </p>
                    <?php endif; ?>
                </div>

                <div class="mini-cart__price">
                    <?php echo wc_price($item->get_subtotal()); ?>
                    <?php if ($item->get_quantity() > 1) { ?>
                        <div>
                            <?php echo wc_price($item->get_quantity()); ?>
                            <span> x </span>
                            <?php echo wc_price($item->get_subtotal() / $item->get_quantity()); ?>
                        </div>
                    <?php } ?>
                </div>
            </li>
        <?php } ?>
    </ul>

    <table class="custom-cart__order-totals">
        <tbody>
            <tr class="cart-subtotal custom-cart__sidebar__row custom-cart__sidebar__row--large custom-cart__sidebar__row--large-font" data-cy="subtotal">
                <th><?php _e('Subtotal', 'lavandre'); ?></th>
                <td><?php echo $order->get_subtotal_to_display(); ?></td>
            </tr>

            <tr class="woocommerce-shipping-totals custom-cart__sidebar__row">
                <th><?php _e('Shipping', 'lavandre'); ?></th>
                <td><?php echo ($order->get_shipping_total() !== '0.00') ? wc_price($order->get_shipping_total()) : __('Free'); ?></td>
            </tr>

            <tr class="tax-total custom-cart__sidebar__row">
                <th><?php _e('VAT', 'lavandre'); ?></th>
                <td><?php echo wc_price($order->get_total_tax()); ?></td>
            </tr>

            <tr class="order-total custom-cart__sidebar__row custom-cart__sidebar__row--large-font">
                <th><?php _e('Total', 'lavandre'); ?></th>
                <td><?php echo $order->get_formatted_order_total(); ?></td>
            </tr>
        </tbody>
    </table>
</section>
