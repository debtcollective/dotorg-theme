<?php
/**
 * Register and Render Block
 *
 * @since   1.0.0
 * @package Site_Functionality
 */
namespace Site_Functionality\Blocks\Hero;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


/**
 * Render Block
 *
 * @param array $block_attributes
 * @param string $content
 * @return string
 */
function render( $attributes, $content, $block ) {

    $has_image = array_key_exists( 'url', $attributes );

    $style = $has_image ? ' style="background-image: url( ' . \esc_url( $attributes['url'] ) . ' );"' : '';
    $wrapper_attributes = \get_block_wrapper_attributes( array( 'class' => $has_image ? ' has-backaground-image' : '' ) );

    $content = '<div ' . $wrapper_attributes . '>';

    foreach ( $block->inner_blocks as $inner_block ) { 
        $content .= $inner_block->render(); 
    }

    $content .= '</div>';

    return $content;
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