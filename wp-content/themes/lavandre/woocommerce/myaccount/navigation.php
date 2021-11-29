<?php
/**
 * My Account navigation
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/navigation.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 2.6.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

do_action( 'woocommerce_before_account_navigation' );

?>

<div class="background-noise"></div>

<button type="button" class="toggle-account-menu" data-curtain-toggle="account-menu">
    <span><?php _e('My account', 'lavandre'); ?></span>
    <?php include get_stylesheet_directory() . '/partials/icons/chevron-down.svg.php'; ?>
</button>

<nav class="woocommerce-MyAccount-navigation side-navigation" data-curtain-content="account-menu">
    <header>
        <h1>
            <span><?php _e('Welcome,', 'lavandre'); ?></span>
            <?php
                $user_info = get_userdata(get_current_user_id());
                $first_name = $user_info->first_name;
            ?>
            <span><?php echo esc_html( $first_name ) ?></span>
        </h1>
    </header>

    <ul>
		<?php foreach ( wc_get_account_menu_items() as $endpoint => $label ) : ?>
            <li class="side-navigation__item <?php echo wc_get_account_menu_item_classes( $endpoint ); ?>">
                <a href="<?php echo esc_url( wc_get_account_endpoint_url( $endpoint ) ); ?>" class="side-navigation__link"><?php echo esc_html( $label ); ?></a>
			</li>
		<?php endforeach; ?>
	</ul>
</nav>

<?php do_action( 'woocommerce_after_account_navigation' ); ?>
