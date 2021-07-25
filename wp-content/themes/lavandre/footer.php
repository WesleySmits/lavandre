<?php
    $company = getCompany();
    $contactPoint = $company->getContactPoint();
?>

<footer id="footer" class="ww-footer">
    <section class="ww-footer__top">
        <ul class="usp-list ww-container flex flex-xs-column flex-md-row">
            <li class="usp-list__item">
                <a href="/klantenservice/bestellen-en-bezorgen/" data-panel="order-delivery">
                    <?php include get_stylesheet_directory() . '/partials/icons/check.svg.php'; ?>
                    <span><?php _e('Free delivery from 75 euros', 'lavandre'); ?></span>
                </a>
            </li>
            <li class="usp-list__item">
                <a href="/klantenservice/bestellen-en-bezorgen/" data-panel="order-delivery">
                    <?php include get_stylesheet_directory() . '/partials/icons/check.svg.php'; ?>
                    <span><?php echo get_first_delivery_date(); ?></span>
                </a>
            </li>
            <li class="usp-list__item">
                <a href="/klantenservice/bestellen-en-bezorgen/" data-panel="order-delivery">
                    <?php include get_stylesheet_directory() . '/partials/icons/check.svg.php'; ?>
                    <span><?php _e('14 day return policy', 'lavandre'); ?></span>
                </a>
            </li>
        </ul>
    </section>

    <section class="ww-footer__middle">
        <div class="ww-container flex">
            <div class="ww-footer__contact flex-col-xs-12 flex-col-md-8">
                <h3 class="footer__h3"><?php _e('Available every day between 08:00 - 21:00', 'lavandre'); ?></h3>
                <ul class="contactoption-list no-list flex">
                    <li class="contactoption-list__item">
                        <a class="contactoption-list__anchor" href="#" onclick="LC_API.open_chat_window();return false;" aria-label="<?php _e('Open chat', 'lavandre'); ?>">
                            <?php include get_stylesheet_directory() . '/partials/icons/comment-dots.svg.php'; ?>
                            <span class="contactoption-list__text"><strong class="contactoption-list__title"><?php _e('Via chat', 'lavandre'); ?></strong> <?php _e('replies within 5 minutes', 'lavandre'); ?></span>
                        </a>
                    </li>
                    <li class="contactoption-list__item">
                        <a class="contactoption-list__anchor" href="tel:<?php echo $contactPoint->getInternationalPhoneNumber()?>" target="_blank" rel="noopener" aria-label="<?php _e('Call us', 'lavandre'); ?>">
                            <?php include get_stylesheet_directory() . '/partials/icons/phone.svg.php'; ?>
                            <span class="contactoption-list__text"><strong class="contactoption-list__title"><?php echo sprintf(__('Call %s', 'lavandre'), $contactPoint->getPhoneNumber()); ?></strong> <?php _e('available till 21:00', 'lavandre'); ?></span>
                        </a>
                    </li>
                    <li class="contactoption-list__item">
                        <a class="contactoption-list__anchor" href="<?php echo $contactPoint->getFacebookMessager(); ?>" target="_blank" rel="noopener" aria-label="<?php _e('Message us on Facebook', 'lavandre'); ?>">
                            <?php include get_stylesheet_directory() . '/partials/icons/facebook-f.svg.php'; ?>
                            <span class="contactoption-list__text"><strong class="contactoption-list__title"><?php _e('Via Facebook', 'lavandre'); ?></strong> <?php _e('replies within 10 minutes', 'lavandre'); ?></span>
                        </a>
                    </li>
                    <li class="contactoption-list__item">
                        <a class="contactoption-list__anchor" href="<?php echo $contactPoint->getWhatsapp(); ?>" target="_blank" rel="noopener" aria-label="<?php _e('Message us on WhatsApp', 'lavandre'); ?>">
                            <?php include get_stylesheet_directory() . '/partials/icons/whatsapp.svg.php'; ?>
                            <span class="contactoption-list__text"><strong class="contactoption-list__title"><?php _e('Via WhatsApp', 'lavandre'); ?></strong> <?php _e('replies within 10 minutes', 'lavandre'); ?></span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="ww-footer__subscribe flex flex-column flex-col-xs-12 flex-col-md-4">
                <h3 class="footer__h3"><?php _e('Subscribe to our newsletter', 'lavandre'); ?></h3>

                <div class="ww-footer__subscribe-form-wrapper">
                    <form class="ww-form" id="footer-newsletter-form" action="post">
                        <p class="ww-form__field">
                            <input type="email" name="email" id="footer-newsletter-form-email" title="<?php _e('Please enter a valid e-mail address', 'lavandre'); ?>" placeholder="<?php _e('Your e-mail address', 'lavandre'); ?>">
                            <label for="footer-newsletter-form-email"><?php _e('Your e-mail address', 'lavandre'); ?></label>
                        </p>
                        <button class="cta-button alt" type="submit" id="footer-newsletter-form-submit"><?php _e('Subscribe', 'lavandre'); ?></button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <section class="ww-footer__bottom">
        <div class="ww-container">
            <ul class="paymentmethod-list no-list flex">
                <li class="paymentmethod-list__item">
                    <?php include get_stylesheet_directory() . '/partials/icons/ideal.svg.php'; ?>
                </li>

                <li class="paymentmethod-list__item">
                    <?php include get_stylesheet_directory() . '/partials/icons/mistercash.svg.php'; ?>
                </li>

                <li class="paymentmethod-list__item">
                    <?php include get_stylesheet_directory() . '/partials/icons/apple-pay.svg.php'; ?>
                </li>

                <li class="paymentmethod-list__item">
                    <?php include get_stylesheet_directory() . '/partials/icons/visa.svg.php'; ?>
                </li>

                <li class="paymentmethod-list__item">
                    <?php include get_stylesheet_directory() . '/partials/icons/mastercard.svg.php'; ?>
                </li>

                <li class="paymentmethod-list__item">
                    <?php include get_stylesheet_directory() . '/partials/icons/paypal.svg.php'; ?>
                </li>

                <li class="paymentmethod-list__item">
                    <?php include get_stylesheet_directory() . '/partials/icons/postnl.svg.php'; ?>
                </li>
            </ul>

            <div class="ww-footer__links flex">
                <section class="ww-footer__links__column flex-col-xs-12 flex-col-md-3">
                    <header class="ww-footer__links__header">
                        <h3 class="footer__h3" data-curtain-toggle="footer-column-1"><?php _e('Customer service', 'lavandre'); ?></h3>
                    </header>

                    <ul class="no-list" data-curtain-content="footer-column-1" data-only-on-mobile="true">
                        <li class="footer-links__item"><a class="footer-links__anchor" href="/klantenservice/"><?php _e('Customer service', 'lavandre'); ?></a></li>
                        <li class="footer-links__item"><a class="footer-links__anchor" href="/contact/"><?php _e('Contact', 'lavandre'); ?></a></li>
                        <li class="footer-links__item"><a class="footer-links__anchor" href="/klantenservice/betalen/"><?php _e('Payment', 'lavandre'); ?></a></li>
                        <li class="footer-links__item"><a class="footer-links__anchor" href="/klantenservice/bestellen-en-bezorgen/"><?php _e('Ordering and delivery', 'lavandre'); ?></a></li>
                        <li class="footer-links__item"><a class="footer-links__anchor" href="/klantenservice/retourneren/"><?php _e('Returns', 'lavandre'); ?></a></li>
                    </ul>
                </section>

                <section class="ww-footer__links__column flex-col-xs-12 flex-col-md-3">
                    <header class="ww-footer__links__header">
                        <h3 class="footer__h3" data-curtain-toggle="footer-column-2"><?php _e('Online orders', 'lavandre'); ?></h3>
                    </header>

                    <ul class="no-list" data-curtain-content="footer-column-2" data-only-on-mobile="true">
                        <li class="footer-links__item"><a class="footer-links__anchor" href="/my-account/"><?php _e('My account', 'lavandre'); ?></a></li>
                        <li class="footer-links__item"><a class="footer-links__anchor" href="/klantenservice/betalen/"><?php _e('Payment', 'lavandre'); ?></a></li>
                        <li class="footer-links__item"><a class="footer-links__anchor" href="/klantenservice/bestellen-en-bezorgen/"><?php _e('Ordering and delivery', 'lavandre'); ?></a></li>
                        <li class="footer-links__item"><a class="footer-links__anchor" href="/klantenservice/retourneren/"><?php _e('Returns', 'lavandre'); ?></a></li>
                    </ul>
                </section>

                <section class="ww-footer__links__column flex-col-xs-12 flex-col-md-3">
                    <header class="ww-footer__links__header">
                        <h3 class="footer__h3" data-curtain-toggle="footer-column-3"><?php _e('About us', 'lavandre'); ?></h3>
                    </header>

                    <ul class="no-list" data-curtain-content="footer-column-3" data-only-on-mobile="true">
                        <li class="footer-links__item"><a class="footer-links__anchor" href="/over-ons/"><?php _e('About us', 'lavandre'); ?></a></li>
                    </ul>
                </section>

                <section class="ww-footer__links__column flex-col-xs-12 flex-col-md-3">
                    <header class="ww-footer__links__header">
                        <h3 class="footer__h3" data-curtain-toggle="footer-column-4"><?php _e('Sustainability', 'lavandre'); ?></h3>
                    </header>

                    <ul class="no-list" data-curtain-content="footer-column-4" data-only-on-mobile="true">
                        <li class="footer-links__item"><a class="footer-links__anchor" href="/duurzaamheid/"><?php _e('Sustainability', 'lavandre'); ?></a></li>
                        <li class="footer-links__item"><a class="footer-links__anchor" href="/duurzaamheid/verantwoordelijk-handelen/"><?php _e('Acting responsibly', 'lavandre'); ?></a></li>
                        <li class="footer-links__item"><a class="footer-links__anchor" href="/duurzaamheid/duurzame-productie/"><?php _e('Sustainable production', 'lavandre'); ?></a></li>
                        <li class="footer-links__item"><a class="footer-links__anchor" href="/duurzaamheid/afgeleid uit de natuur/"><?php _e('Derived from nature', 'lavandre'); ?></a></li>
                        <li class="footer-links__item"><a class="footer-links__anchor" href="/duurzaamheid/bijdragen-aan-de-natuur/"><?php _e('Contributing to nature', 'lavandre'); ?></a></li>
                    </ul>
                </section>
            </div>

            <div class="ww-footer__bottom-row flex">
                <div class="flex-col-xs-12 flex-col-lg-3">
                    <ul class="socialmedia-list no-list flex">
                        <li class="socialmedia-list__item"><a class="socialmedia-list__anchor" href="mailto:<?php echo $contactPoint->getEmailAddress(); ?>" aria-label="E-mail"><?php include get_stylesheet_directory() . '/partials/icons/envelope2.svg.php'; ?></a></li>
                        <li class="socialmedia-list__item"><a class="socialmedia-list__anchor" target="_blank" rel="noopener" href="<?php echo $contactPoint->getFacebook(); ?>" aria-label="Facebook"><?php include get_stylesheet_directory() . '/partials/icons/facebook-f.svg.php'; ?></a></li>
                        <li class="socialmedia-list__item"><a class="socialmedia-list__anchor" target="_blank" rel="noopener" href="<?php echo $contactPoint->getInstagram(); ?>" aria-label="Instagram"><?php include get_stylesheet_directory() . '/partials/icons/instagram.svg.php'; ?></a></li>
                        <li class="socialmedia-list__item"><a class="socialmedia-list__anchor" target="_blank" rel="noopener" href="<?php echo $contactPoint->getYoutube(); ?>" aria-label="YouTube"><?php include get_stylesheet_directory() . '/partials/icons/youtube.svg.php'; ?></a></li>
                        <li class="socialmedia-list__item"><a class="socialmedia-list__anchor" target="_blank" rel="noopener" href="<?php echo $contactPoint->getTwitter(); ?>" aria-label="Twitter"><?php include get_stylesheet_directory() . '/partials/icons/twitter.svg.php'; ?></a></li>
                        <li class="socialmedia-list__item"><a class="socialmedia-list__anchor" target="_blank" rel="noopener" href="<?php echo $contactPoint->getLinkedin(); ?>" aria-label="LinkedIn"><?php include get_stylesheet_directory() . '/partials/icons/linkedin.svg.php'; ?></a></li>
                    </ul>
                </div>

                <div class="flex-col-xs-12 flex-col-lg-5 flex-center">
                    <ul class="legal-list no-list inline-list">
                        <li class="legal-list__item"><a class="legal-list__anchor" data-panel="6324" href="/cookie-informatie/"><?php _e('Cookie information &amp; settings', 'lavandre'); ?></a></li>
                        <li class="legal-list__item"><a class="legal-list__anchor" href="/algemene-voorwaarden/"><?php _e('Terms of use', 'lavandre'); ?></a></li>
                        <li class="legal-list__item"><a class="legal-list__anchor" href="/privacy-policy/"><?php _e('Privacy policy', 'lavandre'); ?></a></li>
                        <li class="legal-list__item"><a class="legal-list__anchor" href="/disclaimer/"><?php _e('Disclaimer', 'lavandre'); ?></a></li>
                    </ul>
                </div>

                <div class="flex-col-xs-12 flex-col-lg-4"></div>
            </div>
        </section>
    </div>
</footer>

<?php include 'partials/_cookie-bar.php'; ?>

<?php wp_footer(); ?>

<!-- #TODO: Change with new script -->
<!-- <script defer>
    var LC_API = LC_API || {};
    LC_API.on_chat_started = function () {
        // track this chat in Google AdWords
        var google_conversion_id, google_conversion_label, img;
        google_conversion_id = '782491094';
        google_conversion_label = 'lMoECOfVktMBENa7j_UC';
        img = new Image(1, 1);
        img.src = 'https://www.googleadservices.com/pagead/conversion/' + google_conversion_id + '/?label=' + google_conversion_label + '&script=0';
    };
</script> -->

<?php include 'partials/panels/panels.php'; ?>
</body>
</html>
