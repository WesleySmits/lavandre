<?php
/**
 * Orders
 *
 * Shows orders on the account page.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/orders.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.7.0
 */

defined( 'ABSPATH' ) || exit;

do_action( 'woocommerce_before_account_orders', $has_orders ); ?>

<?php if ( $has_orders ) : ?>

    <section id="completed-orders">
        <header>
            <h1>Voltooide aankopen</h1>
        </header>

        <ol class="customer-orders">
            <?php
            foreach ( $customer_orders->orders as $order ) {
                if ($order->status !== 'completed') {
                    continue;
                }
                ?>

                <li>
                    <a href="/mijn-account/view-order/<?php echo $order->id ?>/" class="customer-orders--item flex">
                        <div class="order-date">
                            <time datetime="<?php echo esc_attr( $order->get_date_created()->date( 'c' ) ); ?>">
                                <?php echo $order->get_date_created()->date_i18n('d F Y'); ?>
                            </time>
                        </div>

                        <div class="order-image">
                            <?php

                            $image_url = '';

                            foreach ( $order->get_items() as $item_id => $item ) {
                                $product = $item->get_product();
                                $image_id  = $product->get_image_id();
                                $image_url = wp_get_attachment_image_url( $image_id, 'full' );

                                if ($image_url !== '') {
                                    break;
                                }
                            }

                            ?>
                            <img src="<?php echo $image_url ?>" alt="" width="100" height="100" />
                        </div>

                        <div class="order-price">
                            <?php echo $order->get_formatted_order_total(); ?>
                        </div>

                        <div class="order-button">
                            <?php include get_stylesheet_directory() . '/partials/icons/chevron-right.svg.php'; ?>
                        </div>
                    </a>
                </li>

                <?php

            } ?>
        </ol>
    </section>

	<?php if ( 1 < $customer_orders->max_num_pages ) : ?>
		<div class="woocommerce-pagination woocommerce-pagination--without-numbers woocommerce-Pagination">
			<?php if ( 1 !== $current_page ) : ?>
				<a class="woocommerce-button woocommerce-button--previous woocommerce-Button woocommerce-Button--previous button" href="<?php echo esc_url( wc_get_endpoint_url( 'orders', $current_page - 1 ) ); ?>"><?php esc_html_e( 'Previous', 'woocommerce' ); ?></a>
			<?php endif; ?>

			<?php if ( intval( $customer_orders->max_num_pages ) !== $current_page ) : ?>
				<a class="woocommerce-button woocommerce-button--next woocommerce-Button woocommerce-Button--next button" href="<?php echo esc_url( wc_get_endpoint_url( 'orders', $current_page + 1 ) ); ?>"><?php esc_html_e( 'Next', 'woocommerce' ); ?></a>
			<?php endif; ?>
		</div>
	<?php endif; ?>

<?php else : ?>
    <section>
        <header>
            <h1><?php _e('Completed orders', 'hello-elementor-child'); ?></h1>
        </header>

        <div class="woocommerce-message woocommerce-message--info woocommerce-Message woocommerce-Message--info woocommerce-info no-orders-yet">
            <?php include get_stylesheet_directory() . '/partials/icons/empty-shopping-bag.svg.php'; ?>
            <p><?php esc_html_e( 'U heeft nog geen aankopen gedaan', 'woocommerce' ); ?></p>
        </div>
    </section>
<?php endif; ?>

<?php do_action( 'woocommerce_after_account_orders', $has_orders ); ?>
