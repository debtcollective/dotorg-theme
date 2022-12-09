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
global $EM_Event;
$post_id = get_the_id();
$EM_Event = em_get_event( $post_id, 'post_id' );
$taxonomy = 'event-tags';

$start_date   = $EM_Event->event_start_date;
$is_past      = $start_date < date( 'Y-m-d', time() );
$is_recurring = property_exists( $EM_Event, 'recurrence_id' ) && $EM_Event->recurrence_id;
$class        = $is_past ? \esc_attr( 'past' ) : \esc_attr( 'upcoming' );
$class       .= $is_recurring ? ' is-recurring' : '';
?>

<article <?php \post_class( 'event-container event ' . $class ); ?>>
	<a href="<?php echo \esc_url( \get_permalink( $post_id ) ); ?>">

		<h3 class="event__title <?php echo \has_term( array( 'welcome-calls', 'welcome-call' ), $taxonomy, $post_id ) ? ' sr-only' : ''; ?>"><?php echo get_the_title( $post_id ); ?></h3>

		<div class="event__date">
			<time datetime="<?php echo $EM_Event->output( '#_{Y-m-d H:i:s}' ); ?>"><?php echo $EM_Event->output( '#_EVENTDATES' ); ?></time>
		</div>

		<div class="event__time event__time-start">
			<time datetime="<?php echo $EM_Event->output( '#_{Y-m-d H:i:s}' ); ?>"><?php echo $EM_Event->output( '#_EVENTTIMES' ); ?></time>
		</div>

		<div class="event__location">
			<?php
			if ( $EM_Event->has_location() ) {

				debtcollective_event_address_placeholders( $EM_Event ) ;

			} elseif ( $EM_Event->has_event_location() ) {

				debtcollective_virtual_location_text( $EM_Event );
			}
			?>
		</div>
	</a>

</article><!-- #post-## -->
