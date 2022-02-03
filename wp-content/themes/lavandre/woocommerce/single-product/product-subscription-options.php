<?php
/**
 * Product Subscription Options Template.
 *
 * Override this template by copying it to 'yourtheme/woocommerce/single-product/product-subscription-options.php'.
 *
 * On occasion, this template file may need to be updated and you (the theme developer) will need to copy the new files to your theme to maintain compatibility.
 * We try to do this as little as possible, but it does happen.
 * When this occurs the version of the template file will be bumped and the readme will list any important changes.
 *
 * @version 3.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<div class="wcsatt-options-wrapper <?php echo esc_attr( implode( ' ', $wrapper_classes ) ); ?>"
    data-sign_up_text="<?php echo esc_attr( $sign_up_text ); ?>"
    <?php echo $hide_wrapper ? 'style="display:none;"' : ''; ?>>

    <?php
        $input_name = 'convert_to_sub_' . absint( $product_id );
    ?>

    <div class="wcsatt-options-product-wrapper"
        <?php echo in_array( 'closed', $wrapper_classes ) ? 'style="display:none;"' : '' ?>>

        <div class="form-row">
            <label
                class="wcsatt-options-product-prompt product-detail__variation__label product-detail__variation__label--subscription <?php echo esc_attr( implode( ' ', $prompt_classes ) ); ?>"
                data-prompt_type="<?php echo esc_attr( $prompt_type ); ?>"><?php echo $prompt; ?>
            </label>

            <div class="product-detail-variation-wrapper product-detail-variation-wrapper--subscription">
                <div class="product-detail__variation custom-radio--variation custom-radio--subscription">
                    <input type="radio" id="one_time_purchase" name="<?php echo $input_name; ?>" data-custom_data="[]"
                        value="0" checked="checked" required>

                    <label for="one_time_purchase">
                        <span><?php echo $options[0]['description']; ?></span>
                    </label>
                </div>
            </div>

            <div class="product-detail-variation-wrapper product-detail-variation-wrapper--subscription">
                <div class="product-detail__variation custom-radio--variation custom-radio--subscription">
                    <input type="radio" name="<?php echo $input_name; ?>" id="subscription_plan" value="0">

                    <label for="subscription_plan">
                        <span>Something</span>

                        <ul class="custom-radio--variation__content">
                            <li class="product-detail-variation-wrapper product-detail-variation-wrapper--amount">

                                <?php
                                foreach ( $options as $option ) {
                                    if ( ! $option[ 'value' ] ) {
                                        continue;
                                    }

                                    $interval = $option['data']['subscription_scheme']['interval'];
                                    $period = $option['data']['subscription_scheme']['period'];
                                    $periodTitle = $period;

                                    if ($interval > 1) {
                                        if ($period === 'month') {
                                            $periodTitle = 'months';
                                        }

                                        if ($period === 'week') {
                                            $periodTitle = 'weeks';
                                        }

                                        if ($period === 'day') {
                                            $periodTitle = 'days';
                                        }

                                        if ($period === 'year') {
                                            $periodTitle = 'years';
                                        }
                                    }

                                ?>
                                <div
                                    class="product-detail__variation custom-radio--variation custom-radio--subscription-option">

                                    <input id="<?php echo sprintf('subscription-%s-%s', $interval, $period); ?>"
                                        type="radio" name="subscription-term"
                                        value="<?php echo esc_attr( $option[ 'value' ] ); ?>"
                                        data-custom_data="<?php echo esc_attr( json_encode( $option[ 'data' ] ) ); ?>"
                                        <?php checked( $option[ 'selected' ], true, true ); ?> />

                                    <label for="<?php echo sprintf('subscription-%s-%s', $interval, $period); ?>">
                                        <span>
                                            <?php
                                            if ($interval === 1) {
                                                echo sprintf(__('%s %s'), $interval, $periodTitle);
                                            } else {
                                                echo sprintf(__('%s %s'), $interval, $periodTitle);
                                            }
                                        ?></span>
                                    </label>
                                </div>
                                <?php } ?>
                            </li>
                        </ul>
                    </label>
                </div>
            </div>
        </div>
    </div>
</div>