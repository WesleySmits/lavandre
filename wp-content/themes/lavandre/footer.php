<?php
    $company = getCompany();
    $contactPoint = $company->getContactPoint();
?>

<?php
    if (is_checkout()) {
        include '_footer-checkout.php';
    } else {
        include '_footer-site.php';
    }
?>

<?php include 'partials/_cookie-bar.php'; ?>

<?php wp_footer(); ?>

<?php include 'partials/panels/panels.php'; ?>
<?php include 'partials/popups/popups.php'; ?>
</body>

</html>
