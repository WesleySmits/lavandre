<?php
    /* ENCORE MODULE METHODS */
    function loadEncoreModule(string $moduleName) {
        $webpackEncore = WebpackEncore::getInstance();

        if (!$webpackEncore) {
            return;
        }

        $webpackEncore->enqueue_entry_css($moduleName, false);
        $webpackEncore->enqueue_entry_js($moduleName, false);
    }

    /* IMAGE KIT METHODS */
    function get_image_kit_url(string $src) {
        return $src;

        $baseUrl = get_site_url();
        $newSrc = str_replace($baseUrl, 'https://ik.imagekit.io/gw83zqxvr9d/', $src);
        return $newSrc;
    }

    function get_image_kit_placeholder($src, $width = 400, $height = 300) {
        $url = get_image_kit_url($src);
        return $url . '?tr=w-1,h-1:w-' . $width . ',h-' . $height;
    }

    function get_image_kit_src($src, $width = 400, $height = 300) {
        $url = get_image_kit_url($src);
        return $url . '?tr=w-' . $width . ',h-' . $height;
    }
