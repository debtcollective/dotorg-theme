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

$post_id  = get_the_ID();
$taxonomy = 'event-tags';
$EM_Event = em_get_event( $post_id, 'post_id' );

$start_date   = $EM_Event->event_start_date;
$is_past      = $start_date < date( 'Y-m-d', time() );
$is_recurring = property_exists( $EM_Event, 'recurrence_id' ) && $EM_Event->recurrence_id;
$class        = $is_past ? \esc_attr( 'past' ) : \esc_attr( 'upcoming' );
$class       .= $is_recurring ? ' is-recurring' : '';
?>

<article id="post-<?php echo $post_id; ?>" <?php \post_class( 'event-container event ' . $class ); ?>>

	<?php
	if ( has_post_thumbnail( $post_id ) ) :
		?>
		<div class="event__image wp-block-cover">
			<?php echo get_the_post_thumbnail( $post_id, 'full', array( 'class' => 'event__thumbnail wp-block-cover__image-background' ) ); ?>
		</div>

		<?php
	endif;
	?>
	
	<header class="event_header">
		<h2 class="event__title <?php echo \has_term( array( 'welcome-calls', 'welcome-call' ), $taxonomy, $post_id ) ? ' sr-only' : ''; ?>"><?php the_title(); ?></h2>
	</header>

	<div class="event__meta post-meta">
		<div class="event__ical">
			<?php echo $EM_Event->output( '#_EVENTADDTOCALENDAR' ); ?>
		</div>
		<div class="event__date">
			<time datetime="<?php echo $EM_Event->output( '#_{Y-m-d H:i:s}' ); ?>"><?php echo $EM_Event->output( '#_EVENTDATES' ); ?></time>
		</div>

		<div class="event__time event__time-start">
			<time datetime="<?php echo $EM_Event->output( '#_{Y-m-d H:i:s}' ); ?>"><?php echo $EM_Event->output( '#_EVENTTIMES' ); ?> <span class="timezone"><?php echo $EM_Event->output( '#_{T}' ); ?></span></time>
		</div>
	</div>

	<div class="event__content">
		<?php
		remove_filter( 'the_content', array( 'EM_Event_Post', 'the_content' ) );
		echo apply_filters( 'the_content', $EM_Event->post_content );
		?>

		<div class="event__location">
			<?php
			if ( $EM_Event->has_location() ) :
				?>
				<?php debtcollective_event_address_placeholders( $EM_Event ); ?>
			
				<?php
			elseif ( $EM_Event->has_event_location() ) :
				?>

				<?php debtcollective_location_link( $EM_Event ); ?>
				<?php
			endif;
			?>
		</div>
	</div>

	<footer class="event__footer">
		<?php
		if ( $EM_Event->has_location() ) :
			?>
			<div class="post-meta event__meta event__location-map"><?php echo $EM_Event->output( '#_LOCATIONMAP' ); ?></div>
			<?php
		endif;
		?>

		<?php debtcollective_event_recurrences_placeholders( $EM_Event ); ?>
	</footer>

</article><!-- #post-## -->
