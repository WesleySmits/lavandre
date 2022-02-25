<?php
    $preferredLanguage = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2) ?? 'en';

    $languages = [
        'en' => 'English',
        'fr' => 'French',
        'de' => 'German',
        'nl' => 'Dutch'
    ];

    $domains = [
        'en' => 'https://lavandre.com/',
        'fr' => 'https://lavandre.fr/',
        'de' => 'https://lavandre.de/',
        'nl' => 'https://lavandre.nl/'
    ];

    $websiteNames = [
        'en' => 'International',
        'fr' => 'French',
        'de' => 'German',
        'nl' => 'Dutch'
    ];

    $company = getCompany();
    $websiteInfo = $company->getWebsiteInfo()->websiteInfo;
    $websiteInfoMapping = $company->getWebsiteInfo()->websiteInfoMapping;

    $language = $languages[$preferredLanguage] ?? 'English';
    $domain = $domains[$preferredLanguage] ?? 'https://lavandre.com/';
    $websiteName = $websiteNames[$preferredLanguage] ?? 'International';
?>

<template data-popup-template="language-popup">
    <dialog class="popup language-popup" data-popup-name="language-popup">
        <div class="language-popup__container">
            <button type="button" data-close class="popup__close">
                <?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?>
            </button>

            <header class="language-popup__header">
                <div class="language-popup__logo"><?php include get_stylesheet_directory() . '/public/images/logos/lavandre-logo-open.svg'; ?></div>
                <h2 class="language-popup__title"><?php _e('Welcome to Lavandré', 'lavandre'); ?></h2>
            </header>

            <p><?php echo sprintf(__('It seems you are %s. Do you want to go to our %s website?', 'lavandre'), $language, $websiteName); ?></p>

            <footer class="language-popup__footer">
                <button id="moveDomain" is="lavandre-button" href="<?php echo $domain;?>" outline full-width size="large"><?php echo sprintf(__('Continue to %s', 'lavandre'), $websiteName); ?></button>
                <button id="stayDomain" is="lavandre-button" primary full-width size="large"><?php _e('Confirm', 'lavandre') ?></button>
                <button class="otherDomains" is="lavandre-button" link><?php _e('Other countries', 'lavandre'); ?></button>
            </footer>
        </div>

        <div class="language-popup__container" hidden>
            <button type="button" data-close class="popup__close">
                <?php include get_stylesheet_directory() . '/partials/icons/close.svg.php'; ?>
            </button>

            <section>
                <p><?php _e('If you are viewing this website from another country/region, item availability, prices and delivery details will be updated according to the new destination chosen.', 'lavandre'); ?></p>
            </section>

            <footer class="language-popup__footer">
                <language-switcher id="domain-dropdown" class="language-popup__dropdown" data-json='<?php echo json_encode($websiteInfo); ?>' data-mapping='<?php echo json_encode($websiteInfoMapping); ?>'></language-switcher>
                <button id="submit-domain" is="lavandre-button" primary full-width size="large"><?php _e('Confirm', 'lavandre') ?></button>
            </footer>
        </div>
    </dialog>
</template>
