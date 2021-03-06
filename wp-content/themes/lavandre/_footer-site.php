<footer id="footer" is="lv-lazy-background" class="ww-footer lazy-background">
    <section class="ww-footer__top">
        <a href="/" class="ww-footer__logo" aria-label="Lavandré logo">
            <?php include get_stylesheet_directory() . '/public/images/logos/lavandre-logo-open.svg'; ?>
        </a>
    </section>

    <section class="ww-footer__slider">
        <ul class="usp-slider" is="usp-slider">
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
            <section class="ww-footer__subscribe flex">
                <h3 class="footer__h3"><?php _e('Stay up to date', 'lavandre'); ?></h3>

                <div class="ww-footer__subscribe-form-wrapper">
                    <form class="ww-form" id="footer-newsletter-form" is="newsletter-subscribe" action="post">
                        <p class="ww-form__field">
                            <input type="email" name="email" id="footer-newsletter-form-email"
                                title="<?php _e('Please enter a valid e-mail address', 'lavandre'); ?>"
                                placeholder="<?php _e('Email', 'lavandre'); ?>">
                            <label class="sr-only" for="footer-newsletter-form-email">E-mail Address</label>
                        </p>
                        <button is="lavandre-button" outline size="large" type="submit"
                            id="footer-newsletter-form-submit"><?php _e('Submit', 'lavandre'); ?></button>
                    </form>
                </div>

                <section class="ww-footer__social-links">
                    <ul class="socialmedia-list no-list">
                        <li class="socialmedia-list__item"><a class="socialmedia-list__anchor" target="_blank"
                                rel="noopener" href="<?php echo $contactPoint->getFacebook(); ?>"
                                aria-label="Facebook"><?php include get_stylesheet_directory() . '/partials/icons/facebook-f.svg.php'; ?></a>
                        </li>
                        <li class="socialmedia-list__item"><a class="socialmedia-list__anchor" target="_blank"
                                rel="noopener" href="<?php echo $contactPoint->getInstagram(); ?>"
                                aria-label="Instagram"><?php include get_stylesheet_directory() . '/partials/icons/instagram.svg.php'; ?></a>
                        </li>
                    </ul>
                </section>
            </section>
        </div>

        <div class="ww-footer__column ww-footer__link">
            <div class="ww-footer__links__column-wrapper">
                <section class="ww-footer__links__column">
                    <header class="ww-footer__links__header">
                        <h3 class="footer__h3" data-only-on-mobile="true" data-curtain-toggle="footer-column-1">
                            <?php _e('Customer service', 'lavandre'); ?></h3>
                    </header>

                    <ul class="no-list" data-curtain-content="footer-column-1" data-only-on-mobile="true">
                        <li class="footer-links__item"><a class="footer-links__anchor"
                                href="/contact/"><?php _e('Contact', 'lavandre'); ?></a></li>
                        <li class="footer-links__item"><a class="footer-links__anchor"
                                href="/customer-service/payment/"><?php _e('Payment', 'lavandre'); ?></a></li>
                        <li class="footer-links__item"><a class="footer-links__anchor"
                                href="/customer-service/orders/"><?php _e('Orders', 'lavandre'); ?></a></li>
                        <li class="footer-links__item"><a class="footer-links__anchor"
                                href="/customer-service/shipping/"><?php _e('Shipping', 'lavandre'); ?></a></li>
                        <li class="footer-links__item"><a class="footer-links__anchor"
                                href="/customer-service/returns/"><?php _e('Returns', 'lavandre'); ?></a></li>
                    </ul>
                </section>

                <section class="ww-footer__links__column">
                    <header class="ww-footer__links__header">
                        <h3 class="footer__h3" data-only-on-mobile="true" data-curtain-toggle="footer-column-2">
                            <?php _e('About Lavandré', 'lavandre'); ?></h3>
                    </header>

                    <ul class="no-list" data-curtain-content="footer-column-2" data-only-on-mobile="true">
                        <li class="footer-links__item">
                            <a class="footer-links__anchor" href="/about/"><?php _e('About us', 'lavandre'); ?></a>
                        </li>

                        <li class="footer-links__item">
                            <a class="footer-links__anchor" href="/blog/"><?php _e('Blog', 'lavandre'); ?></a>
                        </li>

                        <li class="footer-links__item">
                            <a class="footer-links__anchor"
                                href="/sustainability/"><?php _e('Sustainability', 'lavandre'); ?></a>
                        </li>
                    </ul>
                </section>

                <section class="ww-footer__links__column">
                    <header class="ww-footer__links__header">
                        <h3 class="footer__h3" data-only-on-mobile="true" data-curtain-toggle="footer-column-3">
                            <?php _e('Information', 'lavandre'); ?></h3>
                    </header>

                    <ul class="no-list" data-curtain-content="footer-column-3" data-only-on-mobile="true">
                        <li class="footer-links__item">
                            <a class="footer-links__anchor" href="/my-account/"><?php _e('My account', 'lavandre'); ?></a>
                        </li>

                        <li>
                            <a href="/rewards">
                                <?php _e('Rewards', 'lavandre'); ?>
                            </a>
                        </li>

                        <li>
                            <a href="/customer-service/faq/">
                                <?php _e('FAQ', 'lavandre'); ?>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>

            <section class="ww-footer__links__column ww-footer__links__column--full">
                <header class="ww-footer__links__header">
                    <h3 class="footer__h3" data-only-on-mobile="true" data-curtain-toggle="footer-column-4">
                        <?php _e('Country / Region', 'lavandre'); ?></h3>
                </header>

                <language-switcher id="domain-dropdown" data-change data-curtain-content="footer-column-4" class="language-popup__dropdown lavandre-select--blue lavandre-select--high lavandre-select--top" data-json='<?php echo json_encode($websiteInfo); ?>' data-mapping='<?php echo json_encode($websiteInfoMapping); ?>' data-only-on-mobile="true"></language-switcher>
            </section>

        </div>
    </section>

    <section class="ww-footer__bottom">
        <ul class="legal-list no-list inline-list">
            <li class="legal-list__item"><a class="legal-list__anchor"
                    href="/terms-and-conditions/"><?php _e('Terms of use', 'lavandre'); ?></a></li>
            <li class="legal-list__item"><a class="legal-list__anchor"
                    href="/privacy-policy/"><?php _e('Privacy policy', 'lavandre'); ?></a></li>
            <li class="legal-list__item"><span class="legal-list__anchor">&copy; <?php echo date("Y"); ?>
                    <?php echo $company->getBrandName(); ?>. All Rights Reserved.</span></li>
        </ul>
    </section>
</footer>
