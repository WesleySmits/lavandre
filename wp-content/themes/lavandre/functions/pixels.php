<?php
    function getGoogleTagManagerId(): string {
        $environment = getEnvironment();

        if ($environment === 'production') {
            return 'GTM-WRKTQ4W';
        }

        if ($environment === 'development') {
            return 'GTM-T9PJ3GK';
        }

        return '';
    }

    function getEnvironment(): string {
        $url = get_site_url();

        if (strpos($url, 'lavandre.local') !== false) {
            return 'development';
        }

        if (strpos($url, 'lavandrestage') !== false) {
            return 'staging';
        }

        if (strpos($url, 'lavandre.com') !== false) {
            return 'production';
        }

        return 'production';
    }
