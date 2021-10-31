<?php
    function add_type_module($html, $handle, $src) {
        if (is_admin() || strpos($html, 'lavandre/') === false) {
            return $html;
        }

        return str_replace("text/javascript", "module", $html);
    }
    add_filter( 'script_loader_tag', 'add_type_module', 10, 3 );
