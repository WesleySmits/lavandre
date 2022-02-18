<?php

function get_day_name($dayOfWeek) {
    $dayNames = [
        __('sunday', 'lavandre'),
        __('monday', 'lavandre'),
        __('tuesday', 'lavandre'),
        __('wednesday', 'lavandre'),
        __('thursday', 'lavandre'),
        __('friday', 'lavandre'),
        __('saturday', 'lavandre')
    ];

    return $dayNames[$dayOfWeek];
}

function get_month_name($month) {
    $monthNames = [
        __('january', 'lavandre'),
        __('february', 'lavandre'),
        __('march', 'lavandre'),
        __('april', 'lavandre'),
        __('may', 'lavandre'),
        __('june', 'lavandre'),
        __('july', 'lavandre'),
        __('august', 'lavandre'),
        __('september', 'lavandre'),
        __('october', 'lavandre'),
        __('november', 'lavandre'),
        __('december', 'lavandre')
    ];

    return $monthNames[$month - 1];
}

function get_first_delivery_date($locale = '') {
    if (!$locale) {
        $locale = get_locale();
    }
    $dateText = get_delivery_date_text($locale);
    return sprintf( __( 'Order now, receive it on %s', 'lavandre' ), $dateText );
}

function get_delivery_date_text($locale = 'nl_NL') {
    $today = date('Y-m-d');
    $dayOfWeek = date('w');
    $datetime = new DateTime($today);
    $interval = new DateInterval('P1D');

    switch ($dayOfWeek) {
        case 6:
            $interval = new DateInterval('P2D');
            break;
    }

    $datetime->add($interval);

    $day = get_translated_text(get_day_name($datetime->format('w')), 'lavandre', $locale);
    $date = $datetime->format('d');
    $month = get_translated_text(get_month_name($datetime->format('n')), 'lavandre', $locale);

    return $day . ' ' . $date . ' ' . $month;
}

function get_translated_text($text, $domain, $locale) {
    $translations = array();
    $path = get_stylesheet_directory() . '/languages/';
    $languages = get_available_languages($path);
    foreach ($languages as $language) {
        $mo = new MO();
        if ($mo->import_from_file($path . $language . '.mo')) {
            $translations[$language] = $mo->entries;
        }
    }

    if (!array_key_exists($locale, $translations)) {
        return $text;
    }

    return ($mo->translate($text)) ? $mo->translate($text) : $text;
}
