<ol class="customer-orders">
    <?php foreach ( $customer_orders->orders as $order ) { ?>
        <li class="customer-orders--item">
            <?php include '_order-item.php'; ?>
        </li>
    <?php } ?>
</ol>
