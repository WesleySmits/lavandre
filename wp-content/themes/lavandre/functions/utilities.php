<?php

function get_day_name($dayOfWeek) {
    $dayNames = [
        __('sunday'),
        __('monday'),
        __('tuesday'),
        __('wednesday'),
        __('thursday'),
        __('friday'),
        __('saturday')
    ];

    return $dayNames[$dayOfWeek];
}

function get_month_name($month) {
    $monthNames = [
        __('january'),
        __('february'),
        __('march'),
        __('april'),
        __('may'),
        __('june'),
        __('july'),
        __('august'),
        __('september'),
        __('october'),
        __('november'),
        __('december')
    ];

    return $monthNames[$month - 1];
}

function get_first_delivery_date($locale = 'nl_NL') {
    $dateText = get_delivery_date_text($locale);
    return sprintf( __( 'Order now, receive it on %s', 'hello-elementor-child' ), $dateText );
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

    $day = get_translated_text(get_day_name($datetime->format('w')), 'hello-elementor-child', $locale);
    $date = $datetime->format('d');
    $month = get_translated_text(get_month_name($datetime->format('n')), 'hello-elementor-child', $locale);


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
