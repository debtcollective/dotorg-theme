<?php
/**
 * Register and Render Block
 *
 * @since   1.0.0
 * @package Site_Functionality
 */
namespace Site_Functionality\Blocks\Faqs;

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
    $wrapper_attributes = \get_block_wrapper_attributes( array( 'class' => 'faq-list' ) );

    $return = '<div ' . $wrapper_attributes . '>';

    if( $block->inner_blocks ) {

        foreach ( $block->inner_blocks as $inner_block ) { 
            $return .= $inner_block->render(); 
        }
    
    }

    $return .= '</div>';

    return $return;
}

/**
 * Registers the `site-functionality/faqs` block on the server.
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
