<?php

    if ( ! defined( 'ABSPATH' ) ) {
        exit;
    }

    do_action( 'woocommerce_before_account_navigation' );

?>

<section class="ww-loyalty-coupons">
    <header>
        <h2><?php _e('My current coupons', 'lavandre'); ?></h2>
    </header>

    <ul class="ww-loyalty-coupons__list">
        <?php foreach ($coupons as $coupon) { ?>
        <?php
                $code = $coupon->post_title;
                $discount = $coupon->coupon_amount;
            ?>
        <li class="ww-loyalty-coupons__list__item">
            <div>
                <h3><?php echo sprintf(__('€%d Off', 'lavandre'), $discount); ?></h3>
                <p><?php _e('You have a coupon available', 'lavandre'); ?></p>
            </div>

            <div>
                <button is="lavandre-button" data-role="copy-coupon" data-code="<?php echo $code; ?>"
                    data-text="<?php _e('Copy code', 'lavandre'); ?>"
                    data-copied-text="<?php _e('Copied code', 'lavandre'); ?>" size="large" outline
                    full-width><?php _e('Copy code', 'lavandre'); ?></redeem>
            </div>
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

<section class="ww-rewards-history">
    <header>
        <h2><?php _e('Reward History', 'lavandre'); ?></h2>
    </header>

    <?php //echo do_shortcode('[wr_show_history]'); ?>


    <table class="ww-reward-history__table">
        <thead>
            <tr>
                <th><?php _e('Date', 'lavandre'); ?></th>
                <th><?php _e('Action', 'lavandre'); ?></th>
                <th><?php _e('Points', 'lavandre'); ?></th>
                <th><?php _e('Status', 'lavandre'); ?></th>
            </tr>
        </thead>

        <tbody>
            <?php foreach($userHistory as $row) { ?>
            <tr>
                <td>
                    <?php
                    $date = new DateTime($row['op_date']);
                    echo $date->format('d-m-Y');
                    ?>
                </td>
                <td>
                    <?php echo $row['op_reason']; ?>
                </td>
                <td>
                    <?php echo $row['op_value']; ?>
                </td>
                <td>
                    <?php echo _e('Approved', 'lavandre'); ?>
                </td>
            </tr>
            <?php } ?>
        </tbody>
    </table>

</section>