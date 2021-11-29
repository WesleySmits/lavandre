<?php
/**
 * View Order
 *
 * Shows the details of a particular order on the account page.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/view-order.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.0.0
 */

defined( 'ABSPATH' ) || exit;
?>

<div class="back-to-section flex">
    <a href="/my-account/orders/" class="back-link">
        <?php include get_stylesheet_directory() . '/partials/icons/back-arrow.svg.php'; ?>
        <span><?php _e('Back to Overview', 'lavandre');?></span>
    </a>
</div>


<div class="order-details">
    <?php include get_stylesheet_directory() . '/woocommerce/partials/overview.php'; ?>



    <div class="order-details__addresses">
        <section class="order-details__billing-address">
            <header>
                <h1><?php _e('Billing address', 'lavandre'); ?></h1>
            </header>

            <address class="order-address">
                <?php
                    $address = wc_get_account_formatted_address('billing');
                    echo wp_kses_post( $address );
                ?>
            </address>
        </section>

        <section class="order-details__shipping-address">
            <header>
                <h1><?php _e('Shipping address', 'lavandre'); ?></h1>
            </header>

            <address>
                <?php
                    $address = wc_get_account_formatted_address('shipping');
                    echo wp_kses_post( $address );
                ?>
            </address>
        </section>
    </div>

    <?php $actions = wc_get_account_orders_actions( $order ); ?>
    <?php if ($actions['invoice']) { ?>
        <section class="order-details__actions">
            <a target="_blank" class="download-link" rel="noopener" href="<?php echo $actions['invoice']['url'] ?>">
                <span><?php echo _e('Download invoice', 'lavandre'); ?></span>
                <?php include get_stylesheet_directory() . '/partials/icons/forward-arrow.svg.php'; ?>
            </a>
        </section>
    <?php } ?>
</div>
