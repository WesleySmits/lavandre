<template id="cookie-bar-template">
    <aside class="cookie-bar ww-container" data-role="cookie-bar">
        <p>
            <?php _e('This website uses cookies to ensure you get the best experience.', 'lavandre'); ?>
            <a href="/privacy-policy/"><?php _e('Learn more', 'lavandre'); ?></a>
        </p>

        <button class="cookie-bar__close no-button" type="button" data-role="cookies-accept">
            <?php _e('X', 'lavandre'); ?>
        </button>
    </aside>
</template>