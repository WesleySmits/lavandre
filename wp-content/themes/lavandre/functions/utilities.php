<?php

function get_day_name($dayOfWeek) {
    $dayNames = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
    ];

    return $dayNames[$dayOfWeek];
}

function get_month_name($month) {
    $monthNames = [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
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

    switch ($dayOfWeek) {
        case 6:
            $datetime->add(new DateInterval('P2D'));
            break;
        default:
            $datetime->add(new DateInterval('P1D'));
    }

    $day = get_translated_text(get_day_name($datetime->format('w')), 'lavandre', $locale);
    $date = $datetime->format('d');
    $month = get_translated_text(get_month_name($datetime->format('n')), 'lavandre', $locale);


    return $dateText = $day . ' ' . $date . ' ' . $month;
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
