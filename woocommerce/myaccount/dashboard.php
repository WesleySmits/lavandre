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
        <header><h1><?php _e('Your last order', 'hello-elementor-child'); ?></h1></header>
        <?php include 'partials/_latest-order.php'; ?>
    </section>
<?php } ?>

<section class="tree-planting-campaign">
    <div class="tree-planting-campaign__info flex-col-xs-12 flex-col-md-5 flex-col-xl-6">
        <h1><?php _e('Contributing to nature', 'hello-elementor-child'); ?></h1>
        <p>
            <?php _e('Starting January 2021 we will automatically plant a tree for each item that we sell through our webshop in collaboration with our partner, Eden Reforestation Projects. This way, we ensure that we can enjoy the beautiful nature for years to come.', 'hello-elementor-child'); ?>
        </p>

        <a href="/duurzaamheid/bijdragen-aan-de-natuur/" class="cta-button cta-button--secondary"><?php _e('Read more', 'hello-elementor-child'); ?></a>
    </div>

    <div class="tree-planting-campaign__video flex-col-xs-12 flex-col-md-6">
        <iframe width="500" height="270" src="https://www.youtube.com/embed/CD7HI2H2PKU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</section>

<section id="milestones" class="flex">
    <?php
        $goal = 1000;
        $milestones = [100, 250, 500, 1000];
        $trees_to_next_milestone = get_trees_to_next_milestone($milestones, $user_trees);

        function get_trees_to_next_milestone($milestones, $user_trees) {
            foreach ($milestones as $milestone) {
                if ($milestone > $user_trees) {
                    return $milestone - $user_trees;
                }
            }

            return 0;
        }
    ?>

    <div class="flex-col-xs-12 flex-col-lg-6 flex-xs-order-2 flex-lg-order-1">
        <progress max="<?php echo $goal; ?>" value="<?php echo $user_trees; ?>"></progress>
        <ul class="planting-milestones">
            <?php foreach ($milestones as $milestone) { ?>
                <?php
                    $is_completed = ($user_trees >= $milestone) ? true: false;
                    $content = '';
                    $milestone_percent = 100/($goal/$milestone);

                    if ($is_completed) {
                        $content = sprintf(esc_html__('%sCongratulations!%s %s You have reached a new milestone of %s trees!', 'hello-elementor-child'), '<strong>', '</strong>', '<br/>',$milestone);
                    } else {
                        $trees_left = $milestone - $user_trees;
                        $content = sprintf(__('You still have to plant %s trees to reach this milestone!', 'hello-elementor-child'), $trees_left);
                    }
                ?>

                <li
                    class="planting-milestones__item planting-milestones__item--<?php echo $milestone_percent ?> <?php if ($is_completed) { echo 'planting-milestones__item--completed'; } ?>"
                    data-role="tippy"
                    data-content="<?php echo $content; ?>"
                >
                    <?php if ($milestone_percent === 100) { ?>
                        <?php include get_stylesheet_directory() . '/partials/icons/milestone-big.svg.php'; ?>
                    <?php } else { ?>
                        <?php include get_stylesheet_directory() . '/partials/icons/milestone.svg.php'; ?>
                    <?php } ?>
                </li>
            <?php } ?>
        </ul>
    </div>

    <div class="flex-col-xs-12 flex-col-lg-5 flex-xs-order-1 flex-lg-order-2">
        <h1><?php _e('Your contribution', 'hello-elementor-child'); ?></h1>
        <p>
            <?php echo sprintf(__('
                With your orders you have already planted <strong>%s trees</strong>.
                Together these trees absorb about <strong>%s kg CO<sub2</sub></strong> from our atmosphere every year.
                You should plant another <strong>%s trees</strong> to reach the next milestone.
            ', 'hello-elementor-child'), $user_trees, $user_trees * 20, $trees_to_next_milestone); ?>
        </p>
    </div>
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
