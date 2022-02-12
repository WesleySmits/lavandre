<?php

/**
 * Custom login/register form(s) shortcode.
 */
function ww_custom_cart() {
    ob_start();

    global $woocommerce;

    if (!$woocommerce->cart) {
    	return ob_get_clean();
    }

    $items = $woocommerce->cart->get_cart();

    if (count($items) === 0) {
        ?>
<div class="custom-cart--empty">
    <p><?php _e('Your bag is currently empty.', 'lavandre'); ?></p>
    <button is="lavandre-button" href="/shop" primary full-width
        size="large"><?php _e('Continue shopping', 'lavandre'); ?></button>
</div>
<?php
    } else {
    ?>

<section id="custom-cart" class="custom-cart">

    <header class="custom-cart__header">
        <div class="custom-cart__previous">
            <a href="/shop" class="back-link">
                <?php include get_stylesheet_directory() . '/partials/icons/back-arrow.svg.php'; ?>
                <span><?php _e('Continue Shopping', 'lavandre'); ?></span>
            </a>
        </div>
    </header>

    <p class="custom-cart__notification">
        <?php
            if (intval($woocommerce->cart->total) >= 75) {
                _e('Your order qualifies for Free shipping', 'lavandre');
            } else {
                $remaining = wc_price(75.00 - $woocommerce->cart->total);
                echo sprintf(__('You are %s away from free shipping.', 'lavandre'), $remaining);
            }
        ?>
    </p>

    <div class="custom-cart__main">
        <ul class="custom-cart__items">
            <?php
                uasort(
                    $items,
                    function( $a, $b ) {
                        return strnatcmp( $a['product_id'], $b['product_id'] );
                    }
                );
                foreach($items as $item => $values) {
                    $id = $values['data']->get_id();
                    $product =  wc_get_product( $id );
                    $id = $values['data']->get_id();
                    $productID = $values['product_id'];
                    $variationID = $values['variation_id'];
                    $title = $product->get_title();
                    $subtitle = ($variationID) ? $values['data']->get_description() : '';
                    $quantity = $values['quantity'];
                    $price = get_post_meta($id, '_price', true);
                    $image = $product->get_image('medium');
                    $quantity_id = 'cart__item__quantity_' . $id;
                    $isSubscriptionProduct = ($values['wcsatt_data']['active_subscription_scheme']) ? true : false;
                    $href = $product->get_permalink();

                    $productVariation = wc_get_product($variationID);
                    $attributes =  $productVariation->get_variation_attributes() ;

                    $color = (array_key_exists('attribute_pa_color', $attributes)) ? $attributes['attribute_pa_color'] : '';
                    $amount = (array_key_exists('attribute_pa_amount', $attributes)) ? $attributes['attribute_pa_amount'] : '';
                    $size = (array_key_exists('attribute_pa_size', $attributes)) ? $attributes['attribute_pa_size'] : '';

                    $adjusted_price = null;
                    $sale_price = null;
                    $regular_price = $price;

                    if ($values['data']->get_sale_price()) {
                        $regular_price = $values['data']->get_regular_price();
                        $sale_price = $values['data']->get_sale_price();
                    }

                    if (
                        array_key_exists('discounts', $values)
                        && array_key_exists('price_adjusted', $values['discounts'])
                        && $values['discounts']['price_adjusted'] < $price
                    ) {
                        $adjusted_price = $values['discounts']['price_adjusted'];
                    }
                    ?>

            <li class="custom-cart__item custom-cart__item--mobile" data-product-id="<?php echo $productID; ?>"
                data-variation-id="<?php echo $variationID; ?>">
                <div class="custom-cart__thumbnail">
                    <?php echo $image; ?>
                </div>

                <div class="custom-cart__details">
                    <div class="custom-cart__name">
                        <p>
                            <a href="<?php echo $href; ?>">
                                <?php echo $title; ?>
                                <?php if ($subtitle) { echo '<br/>' . $subtitle; } ?>
                            </a>
                        </p>
                    </div>

                    <?php if ($isSubscriptionProduct): ?>
                    <?php
                        $activeSchemeKey = WCS_ATT_Cart::get_subscription_scheme( $values );
                        $schemes = WCS_ATT_Product_Schemes::get_subscription_schemes( $product );

                        $period = $schemes[$activeSchemeKey]->get_period();
                        $interval = $schemes[$activeSchemeKey]->get_interval();
                        $periodTitle = getPeriodTitle($period, $interval);
                    ?>
                    <p class="custom-cart__product-subtitle">
                        <span
                            class="custom-cart__product-subtitle"><?php echo sprintf(__('Delivery every %s %s', 'lavandre'), $interval, $periodTitle); ?></span>
                    </p>
                    <?php endif; ?>

                    <div class="custom-cart__quantity">
                        <form method="post">
                            <div class="product-detail__quantity-selector">
                                <?php
                                                do_action( 'woocommerce_before_add_to_cart_quantity' );

                                                woocommerce_quantity_input(
                                                    array(
                                                        'min_value'   => apply_filters( 'woocommerce_quantity_input_min', $product->get_min_purchase_quantity(), $product ),
                                                        'max_value'   => apply_filters( 'woocommerce_quantity_input_max', $product->get_max_purchase_quantity(), $product ),
                                                        'input_value' => isset( $quantity ) ? wc_stock_amount( wp_unslash( $quantity ) ) : $product->get_min_purchase_quantity(), // WPCS: CSRF ok, input var ok.
                                                    ),
                                                    $product
                                                );

                                                do_action( 'woocommerce_after_add_to_cart_quantity' );
                                            ?>
                            </div>
                        </form>

                        <div class="custom-cart__delete">
                            <button class="custom-cart__delete--text" data-delete-item
                                data-product-id="<?php echo $productID; ?>"
                                data-variation-id="<?php echo $variationID; ?>">
                                <?php _e('Remove', 'lavandre'); ?>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="custom-cart__price">
                    <div>
                        <?php
                                    $discounted_price = null;

                                    if ($sale_price && $adjusted_price) {
                                        $discounted_price = ($sale_price < $adjusted_price) ? $sale_price : $adjusted_price;
                                    } else if ($sale_price) {
                                        $discounted_price = $sale_price;
                                    } else if ($adjusted_price) {
                                        $discounted_price = $adjusted_price;
                                    }

                                    if ($isSubscriptionProduct) {
                                        $priceToShow = $discounted_price ?? $regular_price;
                                        echo wc_price($quantity * $priceToShow);
                                    } else {
                                        if ($discounted_price) echo '<del>';
                                    echo wc_price($quantity * $regular_price);
                                    if ($discounted_price) echo '</del>';
                                ?></div>

                    <div>
                        <?php
                                        if ($discounted_price) {
                                            echo '<ins>' . wc_price($discounted_price * $quantity) . '</ins>';
                                        }
                                    }

                                    ?>
                    </div>
                </div>
            </li>

            <li class="custom-cart__item custom-cart__item--desktop" data-product-id="<?php echo $productID; ?>"
                data-variation-id="<?php echo $variationID; ?>">
                <div class="custom-cart__thumbnail">
                    <?php echo $image; ?>
                </div>

                <div class="custom-cart__name">
                    <p class="custom-cart__product-title">
                        <a href="<?php echo $href; ?>">
                            <span class="custom-cart__title"><?php echo $title; ?></span>
                            <?php if ($subtitle) { echo '<br/><span class="custom-cart__subtitle">' . $subtitle . '</span>'; } ?>
                        </a>
                    </p>

                    <?php if ($color || $size): ?>
                    <p class="custom-cart__product-subtitle">
                        <?php echo $color; ?> <?php echo $size; ?>
                    </p>
                    <?php endif; ?>

                    <?php if ($isSubscriptionProduct): ?>
                    <?php
                        $activeSchemeKey = WCS_ATT_Cart::get_subscription_scheme( $values );
                        $schemes = WCS_ATT_Product_Schemes::get_subscription_schemes( $product );

                        $period = $schemes[$activeSchemeKey]->get_period();
                        $interval = $schemes[$activeSchemeKey]->get_interval();
                        $periodTitle = getPeriodTitle($period, $interval);
                    ?>
                    <p class="custom-cart__product-subtitle">
                        <span
                            class="custom-cart__product-subtitle"><?php echo sprintf(__('Delivery every %s %s', 'lavandre'), $interval, $periodTitle); ?></span>
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

                <div class="custom-cart__quantity">
                    <form method="post">
                        <div class="product-detail__quantity-selector">
                            <?php
                                            do_action( 'woocommerce_before_add_to_cart_quantity' );

                                            woocommerce_quantity_input(
                                                array(
                                                    'min_value'   => apply_filters( 'woocommerce_quantity_input_min', $product->get_min_purchase_quantity(), $product ),
                                                    'max_value'   => apply_filters( 'woocommerce_quantity_input_max', $product->get_max_purchase_quantity(), $product ),
                                                    'input_value' => isset( $quantity ) ? wc_stock_amount( wp_unslash( $quantity ) ) : $product->get_min_purchase_quantity(), // WPCS: CSRF ok, input var ok.
                                                ),
                                                $product
                                            );

                                            do_action( 'woocommerce_after_add_to_cart_quantity' );
                                        ?>
                        </div>
                    </form>
                </div>

                <div class="custom-cart__price">
                    <div><?php
                                    $discounted_price = null;

                                    if ($sale_price && $adjusted_price) {
                                        $discounted_price = ($sale_price < $adjusted_price) ? $sale_price : $adjusted_price;
                                    } else if ($sale_price) {
                                        $discounted_price = $sale_price;
                                    } else if ($adjusted_price) {
                                        $discounted_price = $adjusted_price;
                                    }


                                    if ($isSubscriptionProduct) {
                                        $priceToShow = $discounted_price ?? $regular_price;
                                        echo wc_price($quantity * $priceToShow);
                                    } else {
                                        if ($discounted_price) echo '<del>';
                                    echo wc_price($quantity * $regular_price);
                                    if ($discounted_price) echo '</del>';
                                ?></div>

                    <div>
                        <?php
                                        if ($discounted_price) {
                                            echo '<ins>' . wc_price($discounted_price * $quantity) . '</ins>';
                                        }
                                    }

                                    ?>
                    </div>
                </div>

                <div class="custom-cart__remove">
                    <button class="custom-cart__delete--text" data-delete-item
                        data-product-id="<?php echo $productID; ?>" data-variation-id="<?php echo $variationID; ?>">
                        <?php _e('Remove', 'lavandre'); ?>
                    </button>
                </div>
            </li>

            <?
                    }
                    ?>
        </ul>

        <?php
            $active_coupons = $woocommerce->cart->applied_coupons;
            $total_coupon_discount = 0;

            foreach ($active_coupons as $active_coupon) { ?>
        <?php $coupon = new \WC_Coupon( $active_coupon ); ?>
        <?php $total_coupon_discount += $woocommerce->cart->get_coupon_discount_amount( $active_coupon ); ?>
        <?php }
        ?>


        <aside class="custom-cart__sidebar">
            <h1 class="sr-only"><?php _e('Order summary', 'lavandre'); ?></h1>
            <table class="custom-cart__order-totals">
                <tbody>
                    <tr class="custom-cart__sidebar__row custom-cart__sidebar__row--large custom-cart__sidebar__row--large-font"
                        data-cy="subtotal">
                        <th><?php _e('Subtotal', 'lavandre'); ?></th>
                        <td><?php echo wc_price($woocommerce->cart->get_subtotal()); ?></td>
                    </tr>

                    <tr class="custom-cart__sidebar__row">
                        <th><?php _e('Shipping', 'lavandre'); ?></th>

                        <td><?php
                            $shipping_total = $woocommerce->cart->get_shipping_total();
                            if ($shipping_total == 0.00) {
                                _e('Free');
                            } else {
                                echo wc_price($shipping_total);
                            }
                        ?></td>
                    </tr>

                    <tr class="custom-cart__sidebar__row">
                        <th><?php _e('Tax'); ?></th>
                        <td><?php _e('TBD'); //echo wc_price($woocommerce->cart->get_taxes_total()); ?></td>
                    </tr>

                    <?php if ($total_coupon_discount !== 0) { ?>
                    <tr class="custom-cart__sidebar__row">
                        <th><?php _e('Discount code'); ?>:</th>
                        <td><?php echo wc_price($total_coupon_discount); ?></td>
                    </tr>
                    <?php } ?>

                    <tr class="custom-cart__sidebar__row custom-cart__sidebar__row--large-font">
                        <th><?php _e('Total'); ?></th>
                        <td><?php echo wc_price($woocommerce->cart->total); ?></td>
                    </tr>
                </tbody>
            </table>

            <accordion-element class="custom-cart__coupon-accordion" data-cy="coupon-accordion">
                <details is="curtain-element">
                    <summary>
                        <span><?php _e('Discount code', 'lavandre'); ?></span>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px" y="0px" width="15px" height="15px" viewBox="0 0 15 15" xml:space="preserve"
                            aria-hidden="true" data-acsb-hidden="true" data-acsb-force-hidden="true">
                            <g fill="#2b2b2b">
                                <polygon
                                    points="0.104,4.333 1.165,3.272 7.5,9.607 13.835,3.272 14.896,4.333 7.5,11.728 ">
                                </polygon>
                            </g>
                        </svg>
                    </summary>
                    <div class="curtain-content">
                        <form id="coupon-code-form" class="ww-form" method="post" novalidate>
                            <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                <input type="text" class="woocommerce-Input woocommerce-Input--text input-text"
                                    name="coupon-code" id="coupon-code"
                                    placeholder="<?php _e('Coupon code', 'lavandre'); ?>" autocomplete="Coupon code"
                                    title="<?php _e('Fill in a valid coupon code', 'lavandre'); ?>" required>
                                <label for="coupon-code"><?php _e('Discount code', 'lavandre'); ?><span
                                        class="required">*</span></label>
                            </p>

                            <button type="submit" is="lavandre-button" outline full-width size="large">
                                <?php _e('Apply', 'lavandre'); ?>
                            </button>
                        </form>
                    </div>
                </details>
            </accordion-element>

            <?php foreach ($active_coupons as $active_coupon) { ?>
            <?php $coupon = new \WC_Coupon( $active_coupon ); ?>

            <ul class="custom-cart__coupon-codes">
                <li class="custom-cart__coupon-code">
                    <span><?php echo $active_coupon; ?>:</span>
                    <a href="?remove_coupon=<?php echo $active_coupon; ?>"
                        data-remove-code="<?php echo $active_coupon; ?>">
                        <?php _e('Delete'); ?>
                    </a>
                </li>
            </ul>
            <?php } ?>

            <div class="custom-cart_tree-planting">
                <p>
                    <?php
                        $treeAmount = $woocommerce->cart->cart_contents_count;
                        $treeWord = ($woocommerce->cart->cart_contents_count > 1) ? __('trees') : __('tree');
                        echo sprintf(__('We plant a tree for each ordered item. With this purchase you\'ll plant %s %s!', 'lavandre'), $treeAmount, $treeWord);
                    ?>
                </p>
            </div>

            <button is="lavandre-button" href="/checkout" class="custom-cart__cta" primary size="large" full-width>
                <?php _e('Continue to checkout'); ?>
            </button>
        </aside>
    </div>

    <?php
    }
	return ob_get_clean();
}

function ww_custom_cart_mini() {
    ob_start();

    global $woocommerce;

    if (!$woocommerce->cart) {
    	return ob_get_clean();
    }

    $items = $woocommerce->cart->get_cart();

    if (count($items) === 0) {
        ?>
    <div id="custom-cart" class="custom-cart--empty custom-cart--mini">
        <p><?php _e('Your bag is currently empty', 'lavandre'); ?></p>
    </div>
    <?php
    } else {
    ?>

    <section id="custom-cart" class="side-panel__section custom-cart custom-cart--mini">
        <p class="custom-cart__notification">
            <?php
            if (intval($woocommerce->cart->total) >= 75) {
                _e('Your order qualifies for Free shipping', 'lavandre');
            } else {
                $remaining = wc_price(75.00 - $woocommerce->cart->total);
                echo sprintf(__('You are %s away from free shipping.', 'lavandre'), $remaining);
            }
        ?>
        </p>

        <ul class="custom-cart__items">
            <?php
                uasort(
                    $items,
                    function( $a, $b ) {
                        return strnatcmp( $a['product_id'], $b['product_id'] );
                    }
                );
                foreach($items as $item => $values) {
                    $id = $values['data']->get_id();
                    $productID = $values['product_id'];
                    $variationID = $values['variation_id'];

                    $product =  wc_get_product($id);
                    $title = $product->get_title();
                    $subtitle = ($variationID) ? $values['data']->get_description() : '';
                    $quantity = $values['quantity'];
                    $price = get_post_meta($id, '_price', true);
                    $image = $product->get_image('medium');
                    $quantity_id = 'cart__item__quantity_' . $id;
                    $isSubscriptionProduct = ($values['wcsatt_data']['active_subscription_scheme']) ? true : false;
                    $href = $product->get_permalink();

                    $productVariation = wc_get_product($variationID);
                    $attributes =  $productVariation->get_variation_attributes() ;

                    $color = (array_key_exists('attribute_pa_color', $attributes)) ? $attributes['attribute_pa_color'] : '';
                    $amount = (array_key_exists('attribute_pa_amount', $attributes)) ? $attributes['attribute_pa_amount'] : '';
                    $size = (array_key_exists('attribute_pa_size', $attributes)) ? $attributes['attribute_pa_size'] : '';

                    $adjusted_price = null;
                    $sale_price = null;
                    $regular_price = $price;

                    if ($values['data']->get_sale_price()) {
                        $regular_price = $values['data']->get_regular_price();
                        $sale_price = $values['data']->get_sale_price();
                    }

                    if (
                        array_key_exists('discounts', $values)
                        && array_key_exists('price_adjusted', $values['discounts'])
                        && $values['discounts']['price_adjusted'] < $price
                    ) {
                        $adjusted_price = $values['discounts']['price_adjusted'];
                    }
                    ?>
            <li class="custom-cart__item custom-cart__item--new">
                <div class="custom-cart__thumbnail">
                    <?php echo $image; ?>
                </div>

                <div class="custom-cart__details">
                    <p class="custom-cart__product-title">
                        <a href="<?php echo $href; ?>">
                            <?php echo $title; ?>
                            <?php if ($subtitle) { echo '<br/>' . $subtitle; } ?>
                        </a>
                    </p>

                    <?php if ($color || $size): ?>
                    <p class="custom-cart__product-subtitle">
                        <?php echo $color; ?> <?php echo $size; ?>
                    </p>
                    <?php endif; ?>

                    <?php if ($isSubscriptionProduct): ?>
                    <?php
                        $activeSchemeKey = WCS_ATT_Cart::get_subscription_scheme( $values );
                        $schemes = WCS_ATT_Product_Schemes::get_subscription_schemes( $product );

                        $period = $schemes[$activeSchemeKey]->get_period();
                        $interval = $schemes[$activeSchemeKey]->get_interval();
                        $periodTitle = getPeriodTitle($period, $interval);
                    ?>
                    <p class="custom-cart__product-subtitle">
                        <span
                            class="custom-cart__product-subtitle"><?php echo sprintf(__('Delivery every %s %s', 'lavandre'), $interval, $periodTitle); ?></span>
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

                    <div class="quantity-wrapper">
                        <div class="product-detail__quantity-selector">
                            <?php
                                        do_action( 'woocommerce_before_add_to_cart_quantity' );

                                        woocommerce_quantity_input(
                                            array(
                                                'min_value'   => apply_filters( 'woocommerce_quantity_input_min', $product->get_min_purchase_quantity(), $product ),
                                                'max_value'   => apply_filters( 'woocommerce_quantity_input_max', $product->get_max_purchase_quantity(), $product ),
                                                'input_value' => isset( $quantity ) ? wc_stock_amount( wp_unslash( $quantity ) ) : $product->get_min_purchase_quantity(), // WPCS: CSRF ok, input var ok.
                                            ),
                                            $product
                                        );

                                        do_action( 'woocommerce_after_add_to_cart_quantity' );
                                        ?>
                        </div>

                        <button class="custom-cart__delete--text" data-delete-item
                            data-product-id="<?php echo $productID; ?>" data-variation-id="<?php echo $variationID; ?>">
                            <?php _e('Remove', 'lavandre'); ?>
                        </button>
                    </div>
                </div>

                <div class="custom-cart__price">
                    <div><?php
                                    $discounted_price = null;

                                    if ($sale_price && $adjusted_price) {
                                        $discounted_price = ($sale_price < $adjusted_price) ? $sale_price : $adjusted_price;
                                    } else if ($sale_price) {
                                        $discounted_price = $sale_price;
                                    } else if ($adjusted_price) {
                                        $discounted_price = $adjusted_price;
                                    }

                                    if ($isSubscriptionProduct) {
                                        $priceToShow = $discounted_price ?? $regular_price;
                                        echo wc_price($quantity * $priceToShow);
                                    } else {
                                        if ($discounted_price) echo '<del>';
                                    echo wc_price($quantity * $regular_price);
                                    if ($discounted_price) echo '</del>';
                                ?></div>

                    <div>
                        <?php
                                        if ($discounted_price) {
                                            echo '<ins>' . wc_price($discounted_price * $quantity) . '</ins>';
                                        }
                                    }

                                    ?>
                    </div>
                </div>
            </li>
            <?
                    }
                    ?>
        </ul>

        <section class="custom-cart--mini__messages">
            <p><?php _e('Taxes and shipping calculated at checkout.', 'lavandre'); ?></p>
        </section>

        <dl class="custom-cart--mini__sub-total">
            <dt><?php _e('Subtotal', 'lavandre'); ?></dt>
            <dd><?php echo wc_price($woocommerce->cart->get_subtotal()); ?></dd>
        </dl>

        <aside>
            <button is="lavandre-button" primary full-width size="large" href="/cart"
                data-cy="mini-cart-button"><?php _e('Continue to Checkout', 'lavandre'); ?></button>
        </aside>

        <?php
    }
	return ob_get_clean();
}

add_shortcode( 'ww_custom_cart', 'ww_custom_cart' );
add_shortcode( 'ww_custom_cart_mini', 'ww_custom_cart_mini' );