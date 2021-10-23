<?php
/**
 * Load JS
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/javascript/loading-javascript/
 *
 * @package DebtCollective
 */
namespace DebtCollective\Inc;

function enqueue_block_editor_assets() {
	\wp_enqueue_script(
		'debtcollective-editor-scripts',
		\get_stylesheet_directory_uri() . '/build/editor.js'
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_editor_assets' );
