<?php
/**
 * Template part for displaying event posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package DebtCollective
 */
if( ! class_exists( '\EM_Event' ) ) {
	return;
}
$post_id  = get_the_ID();
$taxonomy = 'event-tags';

$EM_Event       = em_get_event( $post_id, 'post_id' );
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
$class                = $is_past ? \esc_attr( 'past' ) : \esc_attr( 'upcoming' );

/** Get timezone abbreviation */
$generic_date = new \DateTime( $raw_start_date );
$generic_date->setTimezone( new \DateTimeZone( $timezone ) );
$timezone_abbr = $generic_date->format( 'T' );
?>

<article <?php \post_class( 'event-container event ' . $class ); ?>>

	<?php
	if ( has_post_thumbnail( $post_id ) ) :
		?>
		<picture class="event__image">
			<?php echo get_the_post_thumbnail( $post_id, 'full', array( 'class' => 'event__thumbnail' ) ); ?>
		</picture>

		<?php
	endif;
	?>
	
	<header class="event_header">
		<h2 class="event__title <?php echo \has_term( array( 'welcome-calls', 'welcome-call' ), $taxonomy, $post_id ) ? ' sr-only' : ''; ?>"><?php the_title(); ?></h2>
		<div class="event__ical post-meta">
			<a href="<?php echo esc_url( $EM_Event->get_ical_url() ); ?>" title="<?php esc_attr_e( 'Add to Calendar (ical file)', 'debt-collective' ); ?>"><?php esc_attr_e( 'Add to Calendar', 'debt-collective' ); ?></a>
		</div>
	</header>

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

	<div class="event__content">
		<?php echo apply_filters( 'the_content', $EM_Event->post_content ); ?>
	</div>

	<div  class="event__location">
		<?php 
		if ( $EM_Event->has_location() ) {

			debtcollective_event_map( $EM_Event );

		} elseif ( $EM_Event->has_event_location() ) {

			debtcollective_virtual_location( $EM_Event );
		}
		?>
	</div>

	<footer class="event__footer">
		<?php
		if ( property_exists( $EM_Event, 'recurrence_id' ) && $EM_Event->recurrence_id ) {
			$args = array(
				'recurrence' => (int) $EM_Event->recurrence_id,
				'scope'      => 'all',
			);

			debtcollective_event_recurrences( (int) $EM_Event->recurrence_id, $args, (int) $post_id );
		}
		?>
	</footer>

</article><!-- #post-## -->
