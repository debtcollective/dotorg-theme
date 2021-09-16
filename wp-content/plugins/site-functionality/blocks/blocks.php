<?php
/**
 * Functions to register client-side assets (scripts and stylesheets) for the
 * Gutenberg block.
 *
 * @package site-functionality
 */
namespace Site_Functionality\Blocks;

include_once( \plugin_dir_path( __FILE__ ) . 'src/hero/index.php' );
include_once( \plugin_dir_path( __FILE__ ) . 'src/faqs/index.php' );
include_once( \plugin_dir_path( __FILE__ ) . 'src/faq/index.php' );

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function init() {

	/**
	 * Register custom pattern category
	 * 
	 * @see https://developer.wordpress.org/reference/functions/register_block_pattern_category/
	 */
	if ( class_exists( '\WP_Block_Patterns_Registry' ) ) {

		\register_block_pattern_category(
			'touts',
			[ 
				'label' => \_x( 'Heroes and touts.', 'Block pattern category', 'site-functionality' ) 
			]
		);

	}

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