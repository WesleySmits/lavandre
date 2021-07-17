<?php
/**
 * Variable product add to cart
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/add-to-cart/variable.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.5.5
 */

defined( 'ABSPATH' ) || exit;

global $product;

$attribute_keys = array_keys( $attributes );
$variations = $product->get_available_variations();
$variations_json = wp_json_encode( $available_variations );
$variations_attr = function_exists( 'wc_esc_json' ) ? wc_esc_json( $variations_json ) : _wp_specialchars( $variations_json, ENT_QUOTES, 'UTF-8', true );

do_action( 'woocommerce_before_add_to_cart_form' ); ?>

<form class="variations_form cart" action="<?php echo esc_url( apply_filters( 'woocommerce_add_to_cart_form_action', $product->get_permalink() ) ); ?>" method="post" enctype='multipart/form-data' data-product_id="<?php echo absint( $product->get_id() ); ?>" data-product_variations="<?php echo $variations_attr; // WPCS: XSS ok. ?>">
	<?php do_action( 'woocommerce_before_variations_form' ); ?>

	<?php if ( empty( $available_variations ) && false !== $available_variations ) : ?>
		<p class="stock out-of-stock"><?php echo esc_html( apply_filters( 'woocommerce_out_of_stock_message', __( 'This product is currently out of stock and unavailable.', 'woocommerce' ) ) ); ?></p>
	<?php else : ?>

        <section class="product-detail__variations">
            <?php foreach ( $attributes as $attribute_name => $options ) : ?>
                <div class="product-detail__variation">
                    <div class="form-row">
                        <?php foreach ($options as $key => $value) : ?>
                            <?php
                                $terms = get_terms($attribute_name);
                                $label = '';
                                $isFirst = ($key === array_key_first($options));

                                foreach ($terms as $term) :
                                    if ($term->slug !== $value) {
                                        continue;
                                    }

                                    $label = $term->name;
                                endforeach;

                                $id = $attribute_name . '-' . $value;
                            ?>

                            <?php if ($isFirst) : ?>
                                <label class="bold"><?php echo wc_attribute_label($attribute_name); ?></label><br/>
                            <?php endif; ?>

                            <input
                                id="<?php echo $id; ?>"
                                type="radio"
                                name="<?php echo 'attribute_' . $attribute_name; ?>"
                                value="<?php echo $value; ?>"
                                <?php echo ($isFirst) ? 'checked' : '' ?>
                                required
                            >
                            <label for="<?php echo $id; ?>"><?php echo $label; ?></label>
                        <?php endforeach; ?>
                    </div>
                </div>

            <?php endforeach; ?>
        </section>

		<div class="product-detail__single-variation">
			<?php
				/**
				 * Hook: woocommerce_before_single_variation.
				 */
				do_action( 'woocommerce_before_single_variation' );

				/**
				 * Hook: woocommerce_single_variation. Used to output the cart button and placeholder for variation data.
				 *
				 * @since 2.4.0
				 * @hooked woocommerce_single_variation - 10 Empty div for variation data.
				 * @hooked woocommerce_single_variation_add_to_cart_button - 20 Qty and cart button.
				 */
				do_action( 'woocommerce_single_variation' );

				/**
				 * Hook: woocommerce_after_single_variation.
				 */
				do_action( 'woocommerce_after_single_variation' );
			?>
		</div>
	<?php endif; ?>

	<?php do_action( 'woocommerce_after_variations_form' ); ?>
</form>

<?php
do_action( 'woocommerce_after_add_to_cart_form' );
