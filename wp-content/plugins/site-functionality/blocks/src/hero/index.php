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
 * Register block
 * 
 * @link https://developer.wordpress.org/reference/functions/register_block_type/
 *
 * @return void
 */
function register_block() {
    register_block_type( 'site-functionality/hero', array(
        'editor_script'     => 'abf-blocks-editor-script',
        'editor_style'      => 'abf-blocks-editor-style',
        'style'             => 'abf-blocks-style',
        'attributes'        => [
            'title'           => [
                'type' => 'string',
            ],
            'publisher'           => [
                'type' => 'string',
            ],
            'description'         => [
                'type' => 'string',
            ],
            'image'           => [
                'type' => 'integer',
            ],
            'imageUrl'        => [
                'type' => 'string',
            ],
            'url'           => [
                'type' => 'string',
            ],
            'text'          => [
                'type' => 'string',
            ]
        ],
        'render_callback'   => __NAMESPACE__ . '\render',
    ) );
}
// \add_action( 'init', __NAMESPACE__ . '\register_block' );

/**
 * Render Block
 *
 * @param array $block_attributes
 * @param string $content
 * @return string
 */
function render( $block_attributes, $content ) {
    return $content;
}