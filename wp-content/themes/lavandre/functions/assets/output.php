<?php
    function add_rel_preload($html, $handle, $href, $media) {
        if (is_admin()) {
            return $html;
        }

        return <<<EOT
            <link rel='preload' as='style' onload="this.onload=null;this.rel='stylesheet'" href='$href' type='text/css' media='all' />
            EOT;
    }
    // add_filter( 'style_loader_tag', 'add_rel_preload', 10, 4 );

    function add_type_module($html, $handle, $src) {
        if (is_admin() || strpos($html, 'lavandre/') === false) {
            return $html;
        }

        return str_replace("text/javascript", "module", $html);
    }
    add_filter( 'script_loader_tag', 'add_type_module', 10, 3 );
