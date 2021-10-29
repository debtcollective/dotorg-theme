<?php
/**
 * Register and Render Block
 *
 * @since   1.0.0
 * @package Site_Functionality
 */
namespace Site_Functionality\Blocks\Tout;

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
    $wrapper_attributes = \get_block_wrapper_attributes( array( 'class' => 'tout' ) );

    $output = '<div ' . $wrapper_attributes . '>';

    foreach ( $block->inner_blocks as $inner_block ) { 

        if( 'core/image' === $inner_block->name ) {
            $attributes = $inner_block->parsed_block['attrs'];

            if( $attributes['id'] ) {
                $output .= sprintf( '<picture class="%s">%s</picture>', 
                    $attributes['className'] ?? 'tout__image',
                    \wp_get_attachment_image( $attributes['id'], $attributes['sizeSlug'] ?? 'full' )
                ); 
            }

        } else {
            $output .= $inner_block->render(); 
        }
        
    }

    $output .= '</div>';

    return $output;
}

/**
 * Registers the `site-functionality/tout` block on the server.
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