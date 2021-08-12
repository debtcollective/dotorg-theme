<?php
/**
 * Functions to register client-side assets (scripts and stylesheets) for the
 * Gutenberg block.
 *
 * @package site-functionality
 */
namespace Site_Functionality\Blocks;

include_once( \plugin_dir_path( __FILE__ ) . 'src/hero/index.php' );

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function init() {

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
		'api_version' 		=> 2,
		'style' 			=> 'site-functionality',
		'editor_script' 	=> 'site-functionality',
		'render_callback' 	=> __NAMESPACE__ . '\Hero\render'
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