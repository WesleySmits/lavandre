<?php
    /**
     * View Subscription
     *
     * Shows the details of a particular subscription on the account page
     *
     * @author  Prospress
     * @package WooCommerce_Subscription/Templates
     * @version 2.6.0
     */

    if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly
    }

    wc_print_notices();
?>

<div class="back-to-section flex">
    <a href="/my-account/subscriptions/" class="back-link">
        <?php include get_stylesheet_directory() . '/partials/icons/back-arrow.svg.php'; ?>
        <span><?php _e('Back to Overview', 'lavandre');?></span>
    </a>
</div>

<div class="order-details">
    <?php include get_stylesheet_directory() . '/woocommerce/partials/subscription-overview.php'; ?>

    <?php $actions = wcs_get_all_user_actions_for_subscription( $subscription, get_current_user_id() ); ?>
    <section class="order-details__actions">
        <?php foreach ( $actions as $key => $action ) : ?>
            <?php if ($key === 'change_address') continue; ?>
            <?php if ($key === 'subscription_renewal_early') continue; ?>

            <button is="lavandre-button" id="<?php echo $key; ?>" href="<?php echo esc_url( $action['url'] ); ?>" size="large" outline>
                <?php echo esc_html( $action['name'] ); ?>
            </a>
        <?php endforeach; ?>
    </section>

    <?php include get_stylesheet_directory() . '/woocommerce/partials/order-address.php'; ?>
</div>
