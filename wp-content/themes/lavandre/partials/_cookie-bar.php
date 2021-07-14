<template id="cookie-bar-template" data-test="test">
    <aside class="cookie-bar ww-container" data-role="cookie-bar">
        <p>
            <?php _e('Lavandré uses cookies and comparable techniques such as link tracking to make the visit and shopping at the Lavandre website even easier and more personal for you. With these cookies we and third parties can track your internet behavior within and possibly also outside our website and when you click through from our e-mails. This allows us and third parties to adapt advertisements and other content to your interests and you can share information via social media. If you do not agree, we only place cookies to make the website work and to perform analyzes.', 'hello-elementor-child'); ?>
        </p>

        <div class="flex">
            <button type="button" data-role="cookies-reject" class="cta-button"><?php _e('Reject', 'hello-elementor-child'); ?></button>
            <button type="button" data-role="cookies-accept" class="cta-button"><?php _e('Agree', 'hello-elementor-child'); ?></button>
        </div>
    </aside>
</template>
