<section>
    <header>
        <h1><?php esc_html_e( 'Overview', 'lavandre' ); ?></h1>
    </header>

    <ul class="mini-cart mini-cart--thank-you">
        <?php foreach ($subscription->get_items() as $item_id => $item ) { ?>
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

                    <p class="custom-cart__product-subtitle custom-cart__product-subtitle--accent">
                        <?php echo sprintf('every %s %s', $subscription->get_billing_interval(), getPeriodTitle($subscription->get_billing_period(), $subscription->get_billing_interval())); ?>
                    </p>
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
                <td><?php echo $subscription->get_subtotal_to_display(); ?></td>
            </tr>

            <tr class="custom-cart__sidebar__row">
                <th><?php _e('Next payment date', 'lavandre'); ?></th>
                <td>
                    <?php
                        $date_type = 'next_payment';
                        echo esc_html( $subscription->get_date_to_display( $date_type ) );
                    ?>
                </td>
            </tr>

            <tr class="custom-cart__sidebar__row">
                <th><?php _e('Payment', 'lavandre'); ?></th>
                <td>
                    <span data-is_manual="<?php echo esc_attr( wc_bool_to_string( $subscription->is_manual() ) ); ?>" class="subscription-payment-method"><?php echo esc_html( $subscription->get_payment_method_to_display( 'customer' ) ); ?></span>
                </td>
            </tr>

            <tr class="woocommerce-shipping-totals custom-cart__sidebar__row">
                <th><?php _e('Shipping', 'lavandre'); ?></th>
                <td><?php echo ($subscription->get_shipping_total() !== '0.00') ? wc_price($subscription->get_shipping_total()) : __('Free'); ?></td>
            </tr>

            <tr class="tax-total custom-cart__sidebar__row">
                <th><?php _e('VAT', 'lavandre'); ?></th>
                <td><?php echo wc_price($subscription->get_total_tax()); ?></td>
            </tr>

            <tr class="order-total custom-cart__sidebar__row custom-cart__sidebar__row--large-font">
                <th><?php _e('Total', 'lavandre'); ?></th>
                <td><?php echo WC_Price($subscription->get_total()); ?></td>
            </tr>
        </tbody>
    </table>
</section>
