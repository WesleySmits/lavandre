<ol class="customer-orders">
    <?php foreach ( $subscriptions as $subscription_id => $subscription ) : ?>
        <li class="customer-orders--item">
            <?php include '_subscription-item.php'; ?>
        </li>
    <?php endforeach; ?>
</ol>
