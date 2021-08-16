<?php
/**
 * Server-side rendering of the `site-functionality/event-date` block.
 *
 * @package WordPress
 */
namespace Site_Functionality\Blocks\Event_Date;

/**
 * Renders the `site-functionality/event-date` block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Returns the filtered post date for the current post wrapped inside "time" tags.
 */
function render( $attributes, $content, $block ) {
	if ( ! isset( $block->context['postId'] ) ) {
		return '';
	}

	$format = $attributes['format'] ?? \get_option( 'date_format' );
	$format .= ( 'g:i a' === $format ) ? ' T' : '';
	$timezone = \get_option( 'timezone_string' );

	$calculated_timezone = \Site_Functionality\get_nearest_timezone( '37.778008', '-122.431272', 'CA' );

	$post_ID            = $block->context['postId'];
	$wrapper_attributes = \get_block_wrapper_attributes( array( 'class' => 'event-date' ) );
	$raw_date			= \get_post_meta( $post_ID, '_start_date', true );

	$datetime = new \DateTime( $raw_date );
	// echo $datetime->format( $format );
	$la_time = new \DateTimeZone( $calculated_timezone );
	$datetime->setTimezone( $la_time );
	// echo $datetime->format( $format );
	$ny_time = new \DateTimeZone( $timezone );
	$datetime->setTimezone( $ny_time );
	// echo $datetime->format( $format );
	
	$formatted_date 	= date( $format, strtotime( "$raw_date UTC" ) );

	return sprintf(
		'<div %1$s><time datetime="%2$s">%3$s</time></div>',
		$wrapper_attributes,
		$raw_date,
		$raw_date
	);
}

/**
 * Registers the `site-functionality/event-time` block on the server.
 */
function register() {
	\register_block_type(
		__DIR__,
		[
			'render_callback' 	=> __NAMESPACE__ . '\render',
		]
	);
}
add_action( 'init', __NAMESPACE__ . '\register' );
