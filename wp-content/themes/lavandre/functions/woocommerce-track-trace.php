<?php
    function custom_get_order_notes( $order_id ) {
        remove_filter( 'comments_clauses', array( 'WC_Comments', 'exclude_order_comments' ) );
        $comments = get_comments( array(
            'post_id' => $order_id,
            'orderby' => 'comment_ID',
            'order'   => 'DESC',
            'approve' => 'approve',
            'type'    => 'order_note',
        ) );
        $notes = wp_list_pluck( $comments, 'comment_content' );
        add_filter( 'comments_clauses', array( 'WC_Comments', 'exclude_order_comments' ) );
        return $notes;
    }

    function findTrackAndTraceCode($notes) {
        foreach ($notes as $note) {
            $term = strtoupper('postnl');

            if (!strpos($note, $term)) {
                continue;
            }

            $code = explode(': ', $note);
            $trackingCode = explode(', ', $code[1]);

            return $trackingCode[0];
        }
    }

    function getTrackAndTraceLinkFromOrder($order_id) {
        $notes = custom_get_order_notes($order_id);
        return findTrackAndTraceCode($notes);
    }
