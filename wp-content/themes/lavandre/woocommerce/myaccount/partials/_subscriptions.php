<ol class="customer-orders">
    <?php if (count($active_subscriptions) > 0) : ?>
        <?php foreach ( $active_subscriptions as $subscription_id => $subscription ) : ?>
            <li class="customer-orders--item">
                <?php include '_subscription-item.php'; ?>
            </li>
        <?php endforeach; ?>
    <?php endif; ?>
</ol>
