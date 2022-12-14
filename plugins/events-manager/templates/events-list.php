<?php
/*
 * Default Events List Template
 * This page displays a list of events, called during the em_content() if this is an events list page.
 * You can override the default display settings pages by copying this file to yourthemefolder/plugins/events-manager/templates/ and modifying it however you need.
 * You can display events however you wish, there are a few variables made available to you:
 *
 * $args - the args passed onto EM_Events::output()
 *
 */
$defaults = apply_filters( 'em_content_events_args', $args );
$page     = isset( $_GET['pno'] ) ? (int) $_GET['pno'] : get_query_var( 'pno', 1 );

$outcoming_args = array(
	'scope'      => get_option( 'dbem_events_page_scope', 'future' ),
	'limit'      => get_option( 'dbem_events_default_limit', 24 ),
	'order'      => get_option( 'dbem_events_default_order', 'ASC' ),
	'orderby'    => get_option( 'dbem_events_default_orderby', 'event_start_date,event_start_time,event_name' ),
	'pagination' => 1,
);

$outcoming_args = wp_parse_args( $outcoming_args, $defaults ); ?>

<section class="events_list <?php echo esc_attr( $scope ); ?>">
	
	<?php
	echo EM_Events::output( $outcoming_args );
	?>
	
</section><!-- .events.past -->
