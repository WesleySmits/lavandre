<template id="cookie-bar-template" data-test="test">
    <aside class="cookie-bar ww-container" data-role="cookie-bar" data-test="test2">
        <p>
            <?php _e('Lavandré uses cookies and comparable techniques such as link tracking to make the visit and shopping at the Lavandre website even easier and more personal for you. With these cookies we and third parties can track your internet behavior within and possibly also outside our website and when you click through from our e-mails. This allows us and third parties to adapt advertisements and other content to your interests and you can share information via social media. If you do not agree, we only place cookies to make the website work and to perform analyzes.', 'lavandre'); ?>
        </p>

        <div class="flex">
            <button is="lavandre-button" size="large" full-width outline type="button" data-role="cookies-reject"><?php _e('Reject', 'lavandre'); ?></button>
            <button is="lavandre-button" size="large" full-width primary type="button" data-role="cookies-accept"><?php _e('Agree', 'lavandre'); ?></button>
        </div>
    </aside>
</template>
