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
