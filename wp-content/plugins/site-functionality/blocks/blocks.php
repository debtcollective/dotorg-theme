<?php
/**
 * Functions to register client-side assets (scripts and stylesheets) for the
 * Gutenberg block.
 *
 * @package site-functionality
 */
namespace Site_Functionality\Blocks;

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
// function init() {
// 	// Skip block registration if Gutenberg is not enabled/merged.
// 	if ( ! function_exists( 'register_block_type' ) ) {
// 		return;
// 	}
// 	$dir = dirname( __FILE__ );

// 	$index_js = 'blocks/index.js';
// 	\wp_register_script(
// 		'custom-blocks-block-editor',
// 		\plugins_url( $index_js, __FILE__ ),
// 		[
// 			'wp-blocks',
// 			'wp-i18n',
// 			'wp-element',
// 		],
// 		filemtime( "{$dir}/{$index_js}" )
// 	);

// 	$editor_css = 'blocks/editor.css';
// 	\wp_register_style(
// 		'custom-blocks-block-editor',
// 		\plugins_url( $editor_css, __FILE__ ),
// 		[],
// 		filemtime( "{$dir}/{$editor_css}" )
// 	);

// 	$style_css = 'blocks/style.css';
// 	\wp_register_style(
// 		'custom-blocks-block',
// 		\plugins_url( $style_css, __FILE__ ),
// 		[],
// 		filemtime( "{$dir}/{$style_css}" )
// 	);

// 	\register_block_type( 'site-functionality/custom-blocks', [
// 		'editor_script' => 'custom-blocks-block-editor',
// 		'editor_style'  => 'custom-blocks-block-editor',
// 		'style'         => 'custom-blocks-block',
// 	] );
// }

// add_action( 'init', __NAMESPACE__ . '\init' );


/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function init() {
	// automatically load dependencies and version
	$asset_file = include( \plugin_dir_path( __FILE__ ) . 'build/index.asset.php' );

	\wp_register_script(
		'site-functionality',
		\plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	\wp_register_style(
		'site-functionality',
		\plugins_url( 'build/style.css', __FILE__ ),
		array( ),
		null
		// filemtime( \plugin_dir_path( __FILE__ ) . 'build/style.css' )
	);

	\register_block_type( 'site-functionality/hero', array(
		'style' 			=> 'site-functionality',
		'editor_script' 	=> 'site-functionality',
	) );

  if ( function_exists( '\wp_set_script_translations' ) ) {
    /**
     * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
     * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
     * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
     */
    wp_set_script_translations( 'site-functionality', 'site-functionality' );
  }

}
add_action( 'init', __NAMESPACE__ . '\init' );