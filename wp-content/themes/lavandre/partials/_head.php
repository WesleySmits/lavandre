<link rel="preconnect" href="https://connect.facebook.net">
<link rel="preconnect" href="https://www.google-analytics.com">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link
    rel="preload"
    href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600&display=swap"
    as="style"
    onload="this.onload=null;this.rel='stylesheet';"
>

<style>
    <?php include get_stylesheet_directory() . str_replace(get_site_url() . '/wp-content/themes/lavandre', '', asset('critical-styles.css', true)); ?>
</style>

<link
    rel="preload"
    href="<?php echo asset('deferred-styles.css', true); ?>"
    as="style"
    onload="this.onload=null;this.rel='stylesheet';"
>
