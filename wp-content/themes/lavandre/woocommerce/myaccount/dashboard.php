<?php
/**
 * My Account Dashboard
 *
 * Shows the first intro screen on the account dashboard.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/dashboard.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 4.4.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$allowed_html = array(
	'a' => array(
		'href' => array(),
	),
);

$user_id = get_current_user_id();
    function get_user_trees_planted($user_id = 0) {
        global $wpdb;
        $tomorrow = new DateTime('tomorrow');

        $date_from = '2021-01-01';
        $date_to = $tomorrow->format('Y-m-d');
        $post_status = implode("','", array('wc-processing', 'wc-completed'));

        $result = (int) $wpdb->get_var("
            SELECT SUM(woim.meta_value)
            FROM {$wpdb->prefix}woocommerce_order_items AS woi
            INNER JOIN {$wpdb->prefix}woocommerce_order_itemmeta AS woim ON woi.order_item_id = woim.order_item_id
            INNER JOIN {$wpdb->prefix}posts as p ON woi.order_id = p.ID
            INNER JOIN {$wpdb->prefix}postmeta as pm ON woi.order_id = pm.post_id
            WHERE woi.order_item_type = 'line_item'
            AND p.post_type LIKE 'shop_order'
            AND p.post_status IN ('{$post_status}')
            AND p.post_date BETWEEN '{$date_from}  00:00:00' AND '{$date_to} 23:59:59'
            AND pm.meta_key LIKE '_customer_user'
            AND pm.meta_value LIKE '$user_id'
            AND woim.meta_key LIKE '_qty'
        ");

        return $result;
    }

    $user_trees = get_user_trees_planted($user_id);

    $customer = new WC_Customer( $user_id );
    $order = $customer->get_last_order();
?>

<?php if ($order) { ?>
    <section class="order-details__product-information">
        <header><h1><?php _e('Your last order', 'lavandre'); ?></h1></header>
        <?php include 'partials/_latest-order.php'; ?>
    </section>
<?php } ?>

<section id="milestones">
    <h1><?php _e('Your contribution', 'lavandre'); ?></h1>
    <p>
        <?php echo sprintf(__('
            You have planted <strong>%s trees</strong>.
        ', 'lavandre'), $user_trees); ?>
    </p>
</section>

<script src="https://unpkg.com/@popperjs/core@2"></script>
<script src="https://unpkg.com/tippy.js@6"></script>
<link rel="stylesheet" href="https://unpkg.com/tippy.js@6.2.7/themes/light.css">

<?php
	/**
	 * My Account dashboard.
	 *
	 * @since 2.6.0
	 */
	do_action( 'woocommerce_account_dashboard' );

	/**
	 * Deprecated woocommerce_before_my_account action.
	 *
	 * @deprecated 2.6.0
	 */
	do_action( 'woocommerce_before_my_account' );

	/**
	 * Deprecated woocommerce_after_my_account action.
	 *
	 * @deprecated 2.6.0
	 */
	do_action( 'woocommerce_after_my_account' );

/* Omit closing PHP tag at the end of PHP files to avoid "headers already sent" issues. */
