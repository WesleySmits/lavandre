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
                <h1><?php _e('Shopping bag', 'lavandre'); ?></h1>
                <p class="custom-cart--empty__overview">
                    <?php echo sprintf(__('%d articles - Total %s', 'lavandre'), 0, '€0,00-'); ?>
                </p>
                <?php include get_stylesheet_directory() . '/partials/icons/empty-shopping-bag.svg.php'; ?>

                <h2><?php _e('Your shopping bag is empty', 'lavandre'); ?></h2>
                <p><?php _e('Discover our collection and add items to your shopping cart!', 'lavandre'); ?></p>

                <a href="/shop" class="cta-button cta-button--secondary"><?php _e('Continue shopping', 'lavandre'); ?></a>
            </div>
        <?php
    } else {
    ?>

    <section id="custom-cart" class="custom-cart">

    <header class="custom-cart__header flex">
        <div class="custom-cart__previous flex-col-xs-12 flex-col-md-4 flex-col-lg-3">
            <a href="/shop" class="cta-button inline alt">
                <?php include get_stylesheet_directory() . '/partials/icons/back.svg.php'; ?>
                <span><?php _e('Continue shopping', 'lavandre'); ?></span>
            </a>
        </div>
        <div class="flex-col-xs-12 flex-col-md-4 flex-col-lg-5"><h1 class="custom-cart__heading"><?php _e('Shopping bag', 'lavandre'); ?></h1></div>
        <div class="custom-cart__overview flex-col-xs-12 flex-col-md-4">
            <p>
                <span>
                    <span data-total-items>
                        <?php echo $woocommerce->cart->cart_contents_count; ?>
                    </span>

                    <span><?php _e('articles', 'lavandre'); ?> - <?php _e('total', 'lavandre'); ?></span>
                </span>
                <data value="<?php echo $woocommerce->cart->get_subtotal(); ?>" data-total-price>
                    <?php echo wc_price($woocommerce->cart->get_subtotal()); ?>
                </data>
            </p>
        </div>
    </header>

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

                    <li class="flex custom-cart__item custom-cart__item--mobile">
                        <div class="custom-cart__name flex-col-8">
                            <p>
                                <?php echo $title; ?>
                                <?php if ($subtitle) { echo '<br/>' . $subtitle; } ?>
                            </p>
                        </div>

                        <div class="custom-cart__price flex-col-4">
                            <button class="custom-cart__delete" data-delete-item data-product-id="<?php echo $id; ?>">
                                <?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?>
                            </button>
                        </div>

                        <div class="custom-cart__thumbnail flex-col-6">
                            <?php echo $image; ?>
                        </div>

                        <div class="custom-cart__quantity flex-col-6">
                            <form method="post">
                                <label class="custom-cart__quantity-label" for="<?php echo $quantity_id . '-mobile'; ?>">Aantal</label>
                                <div class="quantity flex flex-start flex-nowrap">
                                    <button type="button" class="minus-amount">-</button>
                                    <input
                                        type="number"
                                        id="<?php echo $quantity_id . '-mobile'; ?>"
                                        class="input-text qty text custom-cart__quantity-input"
                                        step="1"
                                        min="0"
                                        max="<?php echo $product->get_stock_quantity(); ?>"
                                        name="quantity"
                                        value="<?php echo $quantity ?>"
                                        title="Aantal"
                                        size="4"
                                        placeholder=""
                                        inputmode="numeric"
                                        data-product-id="<?php echo $id; ?>"
                                    >
                                    <button type="button" class="plus-amount">+</button>
                                </div>
                            </form>

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

                                    if ($discounted_price) echo '<del>';
                                    echo wc_price($quantity * $regular_price);
                                    if ($discounted_price) echo '</del>';
                                ?></div>

                                <div>
                                    <?php
                                        if ($discounted_price) {
                                            echo '<ins>' . wc_price($discounted_price * $quantity) . '</ins>';
                                        }
                                    ?>
                                </div>

                                <?php if ($quantity > 1) { ?>
                                    <?php $unit_price = $discounted_price ? $discounted_price : $price; ?>
                                    <div>(<?php echo $quantity ?> x <?php echo wc_price($unit_price); ?>)</div>
                                <?php } ?>
                            </div>
                        </div>
                    </li>

                    <li class="flex custom-cart__item custom-cart__item--desktop">
                        <div class="custom-cart__thumbnail flex-col-3">
                            <?php echo $image; ?>
                        </div>
                        <div class="custom-cart__details flex flex-col-9">
                            <div class="custom-cart__name flex-col-5">
                                <p>
                                    <?php echo $title; ?>
                                    <?php if ($subtitle) { echo '<br/>' . $subtitle; } ?>
                                </p>
                                <button class="custom-cart__delete" data-delete-item data-product-id="<?php echo $productID; ?>" data-variation-id="<?php echo $variationID; ?>">
                                    <?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?>
                                </button>
                            </div>
                            <div class="custom-cart__quantity flex-col-5">
                                <form method="post">
                                    <label class="custom-cart__quantity-label" for="<?php echo $quantity_id; ?>">
                                        <?php _e('Amount', 'lavandre'); ?>
                                    </label>
                                    <div class="quantity flex flex-start flex-nowrap">
                                        <button type="button" class="minus-amount">-</button>
                                        <input
                                            type="number"
                                            id="<?php echo $quantity_id; ?>"
                                            class="input-text qty text custom-cart__quantity-input"
                                            step="1"
                                            min="0"
                                            max="<?php echo $product->get_stock_quantity(); ?>"
                                            name="quantity"
                                            value="<?php echo $quantity ?>"
                                            title="Aantal"
                                            size="4"
                                            placeholder=""
                                            inputmode="numeric"
                                            data-product-id="<?php echo $productID; ?>"
                                            data-variation-id="<?php echo $variationID; ?>"
                                        >
                                        <button type="button" class="plus-amount">+</button>
                                    </div>

                                </form>
                            </div>
                            <div class="custom-cart__price flex-col-2">
                                <div><?php
                                    $discounted_price = null;

                                    if ($sale_price && $adjusted_price) {
                                        $discounted_price = ($sale_price < $adjusted_price) ? $sale_price : $adjusted_price;
                                    } else if ($sale_price) {
                                        $discounted_price = $sale_price;
                                    } else if ($adjusted_price) {
                                        $discounted_price = $adjusted_price;
                                    }

                                    if ($discounted_price) echo '<del>';
                                    echo wc_price($quantity * $regular_price);
                                    if ($discounted_price) echo '</del>';
                                ?></div>

                                <div>
                                    <?php
                                        if ($discounted_price) {
                                            echo '<ins>' . wc_price($discounted_price * $quantity) . '</ins>';
                                        }
                                    ?>
                                </div>

                                <?php if ($quantity > 1) { ?>
                                    <?php $unit_price = $discounted_price ? $discounted_price : $price; ?>
                                    <div>(<?php echo $quantity ?> x <?php echo wc_price($unit_price); ?>)</div>
                                <?php } ?>
                            </div>
                        </div>
                    </li>

                <?
                }
                ?>
    </ul>

    <div class="custom-cart__actions flex">
        <div class="custom-cart_tree-planting">
            <button id="tree-planting-button" class="cta-button alt inline" data-panel="tree-planting">
                <?php include get_stylesheet_directory() . '/partials/icons/tree.svg.php'; ?>
                <span><?php _e('Read more', 'lavandre'); ?></span>
            </button>

            <p>
                <?php _e('We plant a tree for each ordered item. With this purchase you\'ll plant'); ?>
                <strong>
                    <?php
                        echo ' ' . $woocommerce->cart->cart_contents_count . '';
                        echo ($woocommerce->cart->cart_contents_count > 1) ? _e(' trees!') : _e(' tree!')
                    ?>
                </strong>
            </p>
        </div>

        <button id="coupon-code-add" class="cta-button alt inline" data-panel="coupon-code-add">
            <?php _e('Enter coupon code'); ?>
        </button>
    </div>

    <?php $active_coupons = $woocommerce->cart->applied_coupons; ?>
    <?php $total_coupon_discount = 0; ?>

    <?php foreach ($active_coupons as $active_coupon) { ?>
        <?php $coupon = new \WC_Coupon( $active_coupon ); ?>
        <?php $total_coupon_discount += $woocommerce->cart->get_coupon_discount_amount( $active_coupon ); ?>

        <ul class="custom-cart__coupon-codes">
            <li class="custom-cart__coupon-code">
                <span><?php echo $active_coupon; ?>:</span>
                <a href="?remove_coupon=<?php echo $active_coupon; ?>" data-remove-code="<?php echo $active_coupon; ?>">
                    <?php _e('Delete'); ?>
                </a>
            </li>
        </ul>
    <?php } ?>

    <footer class="custom-cart__footer flex">
        <table class="custom-cart__totals">
            <tbody>
                <tr class="custom-cart__subtotal">
                    <th><?php _e('Subtotal', 'lavandre'); ?></th>
                    <td><?php echo wc_price($woocommerce->cart->get_subtotal()); ?></td>
                </tr>

                <tr class="custom-cart__shipping">
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

                <tr class="custom-cart__taxes">
                    <th><?php _e('VAT'); ?></th>
                    <td><?php echo wc_price($woocommerce->cart->get_taxes_total()); ?></td>
                </tr>

                <?php if ($total_coupon_discount !== 0) { ?>
                    <tr class="custom-cart__discount">
                        <th><?php _e('Coupon discount'); ?>:</th>
                        <td><?php echo wc_price($total_coupon_discount); ?></td>
                    </tr>
                <?php } ?>

                <tr class="custom-cart__total">
                    <th><?php _e('Total'); ?></th>
                    <td><?php echo wc_price($woocommerce->cart->total); ?></td>
                </tr>
            </tbody>
        </table>
    </footer>

    <aside class="custom-cart__cta-wrapper">
        <a href="/checkout" class="custom-cart__cta cta-button inline"><?php _e('Proceed to checkout'); ?></a>
    </aside>

    <?php
        include get_stylesheet_directory() . '/partials/panels/_tree-planting.php';
        include get_stylesheet_directory() . '/partials/panels/_coupon-code.php';
    ?>

    <?php
    }
	return ob_get_clean();
}
add_shortcode( 'ww_custom_cart', 'ww_custom_cart' );

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
                <h1><?php _e('Shopping bag', 'lavandre'); ?></h1>
                <p class="custom-cart--empty__overview">
                    <?php echo sprintf(__('%d articles - Total %s', 'lavandre'), 0, '€0,00-'); ?>
                </p>
                <?php include get_stylesheet_directory() . '/partials/icons/empty-shopping-bag.svg.php'; ?>

                <h2><?php _e('Your shopping bag is empty', 'lavandre'); ?></h2>
                <p><?php _e('Discover our collection and add items to your shopping cart!', 'lavandre'); ?></p>

                <a href="/shop" class="cta-button cta-button--secondary"><?php _e('Continue shopping', 'lavandre'); ?></a>
            </div>
        <?php
    } else {
    ?>

    <section id="custom-cart" class="custom-cart custom-cart--mini">

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
                    <li class="flex custom-cart__item">
                        <div class="custom-cart__thumbnail flex-col-4">
                            <?php echo $image; ?>
                        </div>
                        <div class="custom-cart__details flex flex-col-8">
                            <div class="custom-cart__name flex-col-5 flex flex-column flex-align-items-start">
                                <p class="custom-cart__product-title">
                                    <?php echo $title; ?>
                                    <?php if ($subtitle) { echo '<br/>' . $subtitle; } ?>
                                </p>
                                <button class="custom-cart__delete--text" data-delete-item data-product-id="<?php echo $productID; ?>" data-variation-id="<?php echo $variationID; ?>">
                                    <?php _e('Delete', 'lavandre'); ?>
                                </button>
                            </div>

                            <div class="custom-cart__price flex-col-6">
                                <div><?php
                                    $discounted_price = null;

                                    if ($sale_price && $adjusted_price) {
                                        $discounted_price = ($sale_price < $adjusted_price) ? $sale_price : $adjusted_price;
                                    } else if ($sale_price) {
                                        $discounted_price = $sale_price;
                                    } else if ($adjusted_price) {
                                        $discounted_price = $adjusted_price;
                                    }

                                    if ($discounted_price) echo '<del>';
                                    echo wc_price($quantity * $regular_price);
                                    if ($discounted_price) echo '</del>';
                                ?></div>

                                <div>
                                    <?php
                                        if ($discounted_price) {
                                            echo '<ins>' . wc_price($discounted_price * $quantity) . '</ins>';
                                        }
                                    ?>
                                </div>

                                <?php if ($quantity > 1) { ?>
                                    <?php $unit_price = $discounted_price ? $discounted_price : $price; ?>
                                    <div>(<?php echo $quantity ?> x <?php echo wc_price($unit_price); ?>)</div>
                                <?php } ?>
                            </div>
                        </div>
                    </li>

                <?
                }
                ?>
    </ul>

    <aside class="custom-cart__cta-wrapper">
        <a href="/cart" class="custom-cart__cta cta-button inline"><?php _e('Order now', 'lavandre'); ?></a>
    </aside>

    <?php
    }
	return ob_get_clean();
}
add_shortcode( 'ww_custom_cart_mini', 'ww_custom_cart_mini' );
