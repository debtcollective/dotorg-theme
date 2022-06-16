<?php
/**
 * Template part for displaying event posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package DebtCollective
 */
if ( ! class_exists( '\EM_Event' ) ) {
	return;
}
$EM_Event = $args['EM_Event'];
$post_id  = property_exists( $EM_Event, 'post_id' ) ? $EM_Event->post_id : get_the_ID();
$taxonomy = 'event-tags';

$raw_start_date = $EM_Event->event_start_date . ' ' . $EM_Event->event_start_time;
$raw_end_date   = $EM_Event->event_end_date . ' ' . $EM_Event->event_end_time;
$location_type  = DebtCollective\Inc\get_event_location_type( $EM_Event );
$location       = $EM_Event->location;
$meta           = get_post_meta( $post_id );

$date_format          = 'l F j, Y';
$time_format          = 'g:ia';
$timezone             = ( property_exists( $EM_Event, 'event_timezone' ) ) ? $EM_Event->event_timezone : get_option( 'timezone_string' );
$start_datetime       = new \DateTime( $raw_start_date );
$end_datetime         = $raw_end_date ? new \DateTime( $raw_end_date ) : null;
$formatted_start_date = $start_datetime->format( $date_format );
$formatted_start_time = $start_datetime->format( $time_format );
$formatted_end_time   = $end_datetime ? $end_datetime->format( $time_format ) : null;
$is_past              = $start_datetime->format( 'Y-m-d' ) < date( 'Y-m-d', time() );
$is_recurring         = property_exists( $EM_Event, 'recurrence_id' ) && $EM_Event->recurrence_id;
$class                = $is_past ? \esc_attr( 'past' ) : \esc_attr( 'upcoming' );
$class               .= $is_recurring ? ' is-recurring' : '';


/** Get timezone abbreviation */
$generic_date = new \DateTime( $raw_start_date );
$generic_date->setTimezone( new \DateTimeZone( $timezone ) );
$timezone_abbr = $generic_date->format( 'T' );
?>

<article <?php \post_class( 'event-container event ' . $class ); ?>>
	<a href="<?php echo \esc_url( \get_permalink( $post_id ) ); ?>">

		<h3 class="event__title <?php echo \has_term( array( 'welcome-calls', 'welcome-call' ), $taxonomy, $post_id ) ? ' sr-only' : ''; ?>"><?php echo apply_filters( 'the_title', $EM_Event->event_name ); ?></h3>

		<div class="event__date">
			<time dateTime="<?php echo \esc_attr( $raw_start_date ); ?>"><?php echo $formatted_start_date; ?></time>
		</div>

		<div class="event__time event__time-start">
			<?php
				printf(
					'<time dateTime="%1$s">%2$s</time> %3$s <span class="timezone-abbr">%4$s</span>',
					\esc_attr( $raw_start_date ),
					$formatted_start_time,
					( $formatted_end_time && ! \has_term( 'welcome-call', $taxonomy, $post_id ) ) ? sprintf( '<span class="separator">-</span> <time dateTime=%1$s>%2$s</time>', \esc_attr( $raw_end_date ), $formatted_end_time ) : '',
					$timezone_abbr
				);
				?>
		</div>

		<div class="event__location">
			<?php
			if ( $EM_Event->has_location() ) {

				debtcollective_event_address( $EM_Event );

			} elseif ( $EM_Event->has_event_location() ) {

				debtcollective_virtual_location_text( $EM_Event );
			}
			?>
		</div>
	</a>

</article><!-- #post-## -->
