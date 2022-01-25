<?php

    if ( ! defined( 'ABSPATH' ) ) {
        exit;
    }

    do_action( 'woocommerce_before_account_navigation' );

?>

<section>
    <header>
        <h2><?php _e('Your current coupons', 'lavandre'); ?></h2>
    </header>

    <ul>
        <?php foreach ($coupons as $coupon) { ?>
        <?php
                $code = $coupon->post_title;
                $discount = $coupon->coupon_amount;
            ?>
        <li>
            <?php echo sprintf(__('You can use the coupon <strong>%s</strong> for a €%s,- discount', 'lavandre'), $code, $discount); ?>
        </li>

        <?php } ?>
    </ul>
</section>

<section>
    <header>
        <h2><?php _e('Redeem Points', 'lavandre'); ?></h2>
        <p><?php _e('Redeeming your points is easy! Click the redeem button and copy and paste your code at the checkout.', 'lavandre'); ?>
        </p>

        <strong><?php echo sprintf(__('You have %s points', 'lavandre'), do_shortcode('[wr_simple_points raw="true"]')); ?></strong>
    </header>

    <ul>
        <?php foreach($unlockableCoupons as $coupon) { ?>

        <?php
            $points = $coupon->cost;
            $amount = 0.05 * $points;
        ?>

        <li>
            <h3><?php echo sprintf(__('€%d off', 'lavandre'), $amount); ?></h3>
            <p><?php echo sprintf(__('%s points', 'lavandre'), $points); ?></p>
            <button is="lavandre-button" size="large" primary>Redeem</redeem>
        </li>
        <?php } ?>
    </ul>
</section>