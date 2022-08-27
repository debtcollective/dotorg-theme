<?php
/**
 * Template part for displaying an event RSVP form.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package DebtCollective
 */
$options = get_option( 'dc_events_manager_options' );
if( ! isset( $options['rsvp_form'] ) || ! $options['rsvp_form'] ) {
	return;
}
$EM_Event = $args['EM_Event'];

/**
 * Contact Form 7 form
 * Modify fields and markup within plugin
 * 
 * `data-status` changes to 'sent' after form is submitted
 * 'sent' class is added to form after form is submitted
 */
$form = sprintf( '[contact-form-7 id="%s" title="%s" event_id="%s" post_id="%s" zoom_id=""]', 
	$options['rsvp_form'],
	esc_html__( 'RSVP', 'debtcollective' ),
	$EM_Event->event_id,
	$args['post_id'],
	( DebtCollective\Inc\is_zoom( $EM_Event ) ) ? $EM_Event->event_location->data['id'] : null
);
?>

<div class="event__rsvp-form">
	<header class="event__rsvp-form-header">
		<h3 class="event__rsvp-form-title"><?php esc_html_e( 'RSVP', 'debtcollective' ); ?></h3>
	</header>
	<?php
	echo do_shortcode( $form );
	?>
</div>