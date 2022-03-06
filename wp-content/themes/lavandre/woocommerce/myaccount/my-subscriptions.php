<?php
/**
 * My Subscriptions section on the My Account page
 *
 * @author   Prospress
 * @category WooCommerce Subscriptions/Templates
 * @version  2.6.4
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
?>
<div class="woocommerce_account_subscriptions">

<?php
    $active_subscriptions = [];

    foreach ( $subscriptions as $subscription_id => $subscription ) :
        if ( $subscription->has_status( wcs_get_subscription_ended_statuses() ) ) {
            continue;
        }

        $active_subscriptions[] = $subscription;
    endforeach;
?>

	<?php if (!empty($active_subscriptions)) : ?>
        <section id="completed-orders">
            <?php include 'partials/_subscriptions.php'; ?>
        </section>
    <?php else : ?>
        <section>
            <div class="woocommerce-message woocommerce-message--info woocommerce-Message woocommerce-Message--info woocommerce-info no-orders-yet">
                <p><?php esc_html_e( 'You have no active subscriptions yet.', 'lavandre' ); ?></p>
                <button is="lavandre-button" href="/shop" primary full-width size="large"><?php _e('Continue shopping', 'lavandre'); ?></button>
            </div>
        </section>
	<?php endif; ?>
</div>
