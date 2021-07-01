<?php
/**
 * Site Options Page
 *
 * @since   1.0.0
 * @package Core_Functionality
 */

namespace Site_Functionality\Admin;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Options {

	/**
	 * Instance of the class.
	 * @var object
	 */
	private static $instance;

	/**
	 * Class Instance.
	 * @return Options
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Options ) ) {
			self::$instance = new Options();
		}
		return self::$instance;
	}

	/**
	 * Load Select 2
	 *
	 * @return void
	 */
	function admin_enqueue_scripts() {

		if( !wp_script_is( 'select2', 'enqueued' ) ) {
			\wp_enqueue_style( 'select2', 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css' );
			\wp_enqueue_script( 'select2', 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js', array( 'jquery' ) );
		}

		\wp_enqueue_script( 'site-functionality-admin-scripts', SITE_CORE_DIR_URI . 'assets/js/options.js', array( 'select2' ) ); 
	}
}

/**
 * The function provides access to the class methods.
 *
 * Use this function like you would a global variable, except without needing
 * to declare the global.
 *
 * @return object
 */
function options_page() {
	return Options::instance();
}
options_page();
