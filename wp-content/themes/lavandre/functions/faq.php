<?php

function add_faq_post_type() {
    $labels = array(
        'name'                => _x( 'FAQs', 'Post Type General Name', 'twentytwenty' ),
        'singular_name'       => _x( 'FAQ', 'Post Type Singular Name', 'twentytwenty' ),
        'menu_name'           => __( 'FAQs', 'twentytwenty' ),
        'parent_item_colon'   => __( 'Parent FAQ', 'twentytwenty' ),
        'all_items'           => __( 'All FAQs', 'twentytwenty' ),
        'view_item'           => __( 'View FAQ', 'twentytwenty' ),
        'add_new_item'        => __( 'Add New FAQ', 'twentytwenty' ),
        'add_new'             => __( 'Add New', 'twentytwenty' ),
        'edit_item'           => __( 'Edit FAQ', 'twentytwenty' ),
        'update_item'         => __( 'Update FAQ', 'twentytwenty' ),
        'search_items'        => __( 'Search FAQ', 'twentytwenty' ),
        'not_found'           => __( 'Not Found', 'twentytwenty' ),
        'not_found_in_trash'  => __( 'Not found in Trash', 'twentytwenty' ),
    );

    $args = array(
        'label'               => __( 'faqs', 'twentytwenty' ),
        'description'         => __( 'FAQs', 'twentytwenty' ),
        'labels'              => $labels,
        'supports'            => array( 'title', 'editor', 'thumbnail', 'revisions', 'custom-fields', ),
        'taxonomies'          => array( 'faq-categories' ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => false,
        'publicly_queryable'  => true,
        'capability_type'     => 'post',
        'show_in_rest' => true,
    );

    // Registering your Custom Post Type
    register_post_type( 'faqs', $args );

    register_taxonomy('faq_category', array('faqs'), array(
        'hierarchical' => true,
        'labels' => array(
            'name' => _x( 'FAQ categories', 'taxonomy general name' ),
            'singular_name' => _x( 'FAQ category', 'taxonomy singular name' ),
            'search_items' =>  __( 'Search FAQ categories' ),
            'all_items' => __( 'All FAQ categories' ),
            'parent_item' => __( 'Parent FAQ category' ),
            'parent_item_colon' => __( 'Parent FAQ category:' ),
            'edit_item' => __( 'Edit FAQ category' ),
            'update_item' => __( 'Update FAQ category' ),
            'add_new_item' => __( 'Add New FAQ category' ),
            'new_item_name' => __( 'New FAQ category Name' ),
            'menu_name' => __( 'FAQ categories' ),
        ),
        'show_ui' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array( 'slug' => 'faq-category' ),
    ));
}

add_action( 'init', 'add_faq_post_type', 0 );
