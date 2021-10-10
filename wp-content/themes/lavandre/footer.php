<?php
    $company = getCompany();
    $contactPoint = $company->getContactPoint();
?>

<footer id="footer" class="ww-footer">
    <section class="ww-footer__top">
        <a href="/" class="ww-footer__logo" aria-label="Lavandré logo">
            <?php include get_stylesheet_directory() . '/public/images/logos/lavandre-logo-open.svg'; ?>
        </a>
    </section>

    <section class="ww-footer__slider">
        <ul class="usp-slider">
            <li class="usp-slider__item">Cruelty-Free</li>
            <li class="usp-slider__item">Eco-Friendly</li>
            <li class="usp-slider__item">Hypoallergenic</li>
            <li class="usp-slider__item">Sustainable</li>
            <li class="usp-slider__item">Recyclable Packaging</li>
            <li class="usp-slider__item">Vegan</li>
            <li class="usp-slider__item">Cruelty-Free</li>
            <li class="usp-slider__item">Eco-Friendly</li>
            <li class="usp-slider__item">Hypoallergenic</li>
            <li class="usp-slider__item">Sustainable</li>
            <li class="usp-slider__item">Recyclable Packaging</li>
            <li class="usp-slider__item">Vegan</li>
        </ul>
    </section>

    <section class="ww-footer__middle">
        <div class="ww-footer__column ww-footer__social">
            <section class="ww-footer__subscribe flex flex-column">
                <h3 class="footer__h3"><?php _e('Stay up to date', 'lavandre'); ?></h3>

                <div class="ww-footer__subscribe-form-wrapper">
                    <form class="ww-form" id="footer-newsletter-form" action="post">
                        <p class="ww-form__field">
                            <input type="email" name="email" id="footer-newsletter-form-email" title="<?php _e('Please enter a valid e-mail address', 'lavandre'); ?>" placeholder="<?php _e('E-mail address', 'lavandre'); ?>">
                        </p>
                        <button is="lavandre-button" outline size="large" type="submit" id="footer-newsletter-form-submit"><?php _e('Submit', 'lavandre'); ?></button>
                    </form>
                </div>

                <section class="ww-footer__social-links">
                    <ul class="socialmedia-list no-list flex">
                        <li class="socialmedia-list__item"><a class="socialmedia-list__anchor" href="mailto:<?php echo $contactPoint->getEmailAddress(); ?>" aria-label="E-mail"><?php include get_stylesheet_directory() . '/partials/icons/envelope2.svg.php'; ?></a></li>
                        <li class="socialmedia-list__item"><a class="socialmedia-list__anchor" target="_blank" rel="noopener" href="<?php echo $contactPoint->getFacebook(); ?>" aria-label="Facebook"><?php include get_stylesheet_directory() . '/partials/icons/facebook-f.svg.php'; ?></a></li>
                        <li class="socialmedia-list__item"><a class="socialmedia-list__anchor" target="_blank" rel="noopener" href="<?php echo $contactPoint->getInstagram(); ?>" aria-label="Instagram"><?php include get_stylesheet_directory() . '/partials/icons/instagram.svg.php'; ?></a></li>
                        <li class="socialmedia-list__item"><a class="socialmedia-list__anchor" target="_blank" rel="noopener" href="<?php echo $contactPoint->getYoutube(); ?>" aria-label="YouTube"><?php include get_stylesheet_directory() . '/partials/icons/youtube.svg.php'; ?></a></li>
                        <li class="socialmedia-list__item"><a class="socialmedia-list__anchor" target="_blank" rel="noopener" href="<?php echo $contactPoint->getTwitter(); ?>" aria-label="Twitter"><?php include get_stylesheet_directory() . '/partials/icons/twitter.svg.php'; ?></a></li>
                        <li class="socialmedia-list__item"><a class="socialmedia-list__anchor" target="_blank" rel="noopener" href="<?php echo $contactPoint->getLinkedin(); ?>" aria-label="LinkedIn"><?php include get_stylesheet_directory() . '/partials/icons/linkedin.svg.php'; ?></a></li>
                    </ul>
                </section>
            </section>
        </div>

        <div class="ww-footer__column ww-footer__link">
            <section class="ww-footer__links__column">
                <header class="ww-footer__links__header">
                    <h3 class="footer__h3" data-curtain-toggle="footer-column-1"><?php _e('Customer service', 'lavandre'); ?></h3>
                </header>

                <ul class="no-list" data-curtain-content="footer-column-1" data-only-on-mobile="true">
                    <li class="footer-links__item"><a class="footer-links__anchor" href="/customer-service/"><?php _e('Customer service', 'lavandre'); ?></a></li>
                    <li class="footer-links__item"><a class="footer-links__anchor" href="/contact/"><?php _e('Contact', 'lavandre'); ?></a></li>
                    <li class="footer-links__item"><a class="footer-links__anchor" href="/customer-service/payment/"><?php _e('Payment', 'lavandre'); ?></a></li>
                    <li class="footer-links__item"><a class="footer-links__anchor" href="/customer-service/order-and-delivery/"><?php _e('Ordering and delivery', 'lavandre'); ?></a></li>
                    <li class="footer-links__item"><a class="footer-links__anchor" href="/customer-service/returns/"><?php _e('Returns', 'lavandre'); ?></a></li>
                </ul>
            </section>

            <section class="ww-footer__links__column">
                <header class="ww-footer__links__header">
                    <h3 class="footer__h3" data-curtain-toggle="footer-column-2"><?php _e('Online orders', 'lavandre'); ?></h3>
                </header>

                <ul class="no-list" data-curtain-content="footer-column-2" data-only-on-mobile="true">
                    <li class="footer-links__item"><a class="footer-links__anchor" href="/my-account/"><?php _e('My account', 'lavandre'); ?></a></li>
                    <li class="footer-links__item"><a class="footer-links__anchor" href="/customer-service/payment/"><?php _e('Payment', 'lavandre'); ?></a></li>
                    <li class="footer-links__item"><a class="footer-links__anchor" href="/customer-service/order-and-delivery/"><?php _e('Ordering and delivery', 'lavandre'); ?></a></li>
                    <li class="footer-links__item"><a class="footer-links__anchor" href="/customer-service/returns/"><?php _e('Returns', 'lavandre'); ?></a></li>
                </ul>
            </section>

            <section class="ww-footer__links__column">
                <header class="ww-footer__links__header">
                    <h3 class="footer__h3" data-curtain-toggle="footer-column-3"><?php _e('Sustainability', 'lavandre'); ?></h3>
                </header>

                <ul class="no-list" data-curtain-content="footer-column-3" data-only-on-mobile="true">
                    <li class="footer-links__item"><a class="footer-links__anchor" href="/sustainability/"><?php _e('Sustainability', 'lavandre'); ?></a></li>
                    <li class="footer-links__item"><a class="footer-links__anchor" href="/sustainability/acting-responsibly/"><?php _e('Acting responsibly', 'lavandre'); ?></a></li>
                    <li class="footer-links__item"><a class="footer-links__anchor" href="/sustainability/sustainable-production/"><?php _e('Sustainable production', 'lavandre'); ?></a></li>
                    <li class="footer-links__item"><a class="footer-links__anchor" href="/sustainability/derived-from-nature/"><?php _e('Derived from nature', 'lavandre'); ?></a></li>
                    <li class="footer-links__item"><a class="footer-links__anchor" href="/sustainability/contributing-to-nature/"><?php _e('Contributing to nature', 'lavandre'); ?></a></li>
                </ul>
            </section>
        </div>
    </section>

    <section class="ww-footer__bottom">
        <ul class="legal-list no-list inline-list">
            <li class="legal-list__item"><a class="legal-list__anchor" href="/terms-and-conditions/"><?php _e('Terms of use', 'lavandre'); ?></a></li>
            <li class="legal-list__item"><a class="legal-list__anchor" href="/privacy-policy/"><?php _e('Privacy policy', 'lavandre'); ?></a></li>
            <li class="legal-list__item"><span class="legal-list__anchor">&copy; <?php echo date("Y"); ?> <?php echo $company->getBrandName(); ?>. All Rights Reserved.</span></li>
        </ul>
    </section>
</footer>

<?php include 'partials/_cookie-bar.php'; ?>

<?php wp_footer(); ?>

<!-- Start of LiveChat (www.livechatinc.com) code -->
<script async>
    window.__lc = window.__lc || {};
    window.__lc.license = 11991231;
    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
</script>
<noscript><a href="https://www.livechatinc.com/chat-with/11991231/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechatinc.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a></noscript>
<!-- End of LiveChat code -->

<?php include 'partials/panels/panels.php'; ?>
<?php include 'partials/popups/popups.php'; ?>
</body>
</html>
