<?php
/**
 * Custom functions that act independently of the theme templates.
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package DebtCollective
 */
namespace DebtCollective\Inc;

/**
 * Get an attachment ID from it's URL.
 *
 * @author Debt Collective
 *
 * @param string $attachment_url The URL of the attachment.
 *
 * @return int    The attachment ID.
 */
function get_attachment_id_from_url( $attachment_url = '' ) {
	global $wpdb;

	$attachment_id = false;

	// If there is no url, return.
	if ( '' === $attachment_url ) {
		return false;
	}

	// Get the upload directory paths.
	$upload_dir_paths = wp_upload_dir();

	// Make sure the upload path base directory exists in the attachment URL, to verify that we're working with a media library image.
	if ( false !== strpos( $attachment_url, $upload_dir_paths['baseurl'] ) ) {

		// If this is the URL of an auto-generated thumbnail, get the URL of the original image.
		$attachment_url = preg_replace( '/-\d+x\d+(?=\.(jpg|jpeg|png|gif)$)/i', '', $attachment_url );

		// Remove the upload path base directory from the attachment URL.
		$attachment_url = str_replace( $upload_dir_paths['baseurl'] . '/', '', $attachment_url );

		// Do something with $result.
		// phpcs:ignore phpcs:ignore WordPress.DB -- db call ok, cache ok, placeholder ok.
		$attachment_id = $wpdb->get_var( $wpdb->prepare( "SELECT wposts.ID FROM {$wpdb->posts} wposts, {$wpdb->postmeta} wpostmeta WHERE wposts.ID = wpostmeta.post_id AND wpostmeta.meta_key = '_wp_attached_file' AND wpostmeta.meta_value = %s AND wposts.post_type = 'attachment'", $attachment_url ) );
	}

	return $attachment_id;
}

/**
 * Determine if post has children
 *
 * @param obj $post
 * @return boolean
 */
function has_parent( $post = null ) {
	$children = get_posts(
		array(
			'post_type'   => 'page',
			'post_parent' => $post->ID,
			'fields'      => 'ids',
		)
	);
	return count( $children ) > 0;
}

/**
 * Determine if post should show featured image in header
 *
 * @param obj $post
 * @return boolean
 */
function show_featured_image_header() {
	global $post;
	$featured_image_is_hero = get_post_meta( get_the_ID(), 'featured_image_is_hero', true );
	return $featured_image_is_hero && has_post_thumbnail();
}

/**
 * Convert a string to currency-formatted number
 *
 * @param string  $string
 * @param boolean $decimal
 * @return float $formatted
 */
function convert_string_to_number( $string, $decimal = true, $trim = true ) {
	$pattern = '/[^0-9\.{1}]/';
	// $cleaned_number = preg_replace( $pattern, '', $string );
	$cleaned_number = filter_var( preg_replace( $pattern, '', $string ), FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION );
	$formatted      = number_format( $cleaned_number, $decimal ? 2 : 0 );
	$formatted      = $trim ? str_replace( '.00', '', $formatted ) : $formatted;
	return $formatted;
}

/**
 * Query Event IDs
 *
 * @since 1.0.2
 *
 * @link https://developer.wordpress.org/apis/handbook/transients/
 *
 * @param string $scope
 * @param array  $args
 * @return array \WP_Post()->ID
 */
function get_event_ids( $scope = 'all', $args = array() ): array {
	if ( method_exists( '\WpActionNetworkEvents\App\General\Queries', 'getAnEventIds' ) ) {

		return \WpActionNetworkEvents\App\General\Queries::getAnEventIds( $scope, $args );

	}
}
