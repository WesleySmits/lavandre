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

<section class="ww-redeem-points">
    <header>
        <h2><?php _e('Redeem Points', 'lavandre'); ?></h2>
        <p><?php _e('Redeeming your points is easy! Click the redeem button and copy and paste your code at the checkout.', 'lavandre'); ?>
        </p>

        <strong><?php echo sprintf(__('You have %s points', 'lavandre'), $userPoints); ?></strong>
    </header>

    <ul class="ww-redeem-points__list">
        <?php foreach($unlockableCoupons as $coupon) { ?>

        <?php
            $id = $coupon->id;
            $points = $coupon->cost;
            $amount = 0.05 * $points;
        ?>

        <li class="ww-redeem-points__list__item">
            <h3><?php echo sprintf(__('€%d Off', 'lavandre'), $amount); ?></h3>
            <p><?php echo sprintf(__('%s Points', 'lavandre'), $points); ?></p>
            <button is="lavandre-button" data-role="redeem-coupon" data-id="<?php echo $id; ?>" size="large" outline
                full-width <?php if ($points > $userPoints) { echo 'disabled'; } ?>>Redeem</redeem>
        </li>
        <?php } ?>
    </ul>
</section>