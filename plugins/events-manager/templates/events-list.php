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

$args = apply_filters( 'em_content_events_args', $args );
$args['format_header'] = '<div class="events__list">';
$args['format_footer'] = '</div><!-- .events__list -->';
$args['format'] = '
<article id="#_EVENTPOSTID" class="event{is_recurrence} recurring{/is_recurrence}">
	<a href="#_EVENTURL">
		<h3 class="event__title">#_EVENTNAME</h3>
		<div class="event__date"><time dateTime="#_{Y-m-d h:i:sa}">#_EVENTDATES</time></div>
		<div class="event__time event__time-start">
			#_EVENTTIMES
		</div>
		{has_location}<div class="event__location">#_LOCATIONLINK</div>{/has_location}
	</a>
</article><!-- .class -->
';
?>

<?php
// echo EM_Events::output( $args );
$events = EM_Events::get( $args );
// var_dump( $events );

foreach( $events as $post ) {
	global $post, $EM_Event;

	setup_postdata( $post ); 
	echo '<pre>';
	var_dump( $post );
	echo '</pre>';
	?>

	<?php the_title(); ?>
<?php
}