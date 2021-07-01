<?php
/**
 * Content Filters
 *
 * @since   1.0.0
 * @package Site_Functionality
 */

namespace Site_Functionality;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


class Filters {

	/**
	 * Instance of the class.
	 * @var object
	 */
	private static $instance;


	/**
	 * Class Instance.
	 * @return Filters
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Filters ) ) {
			self::$instance = new Filters();

			self::$instance->actions();
		}
		return self::$instance;
	}

	/**
	 * Add Actions
	 *
	 * @return void
	 */
	function actions() {}

}

/**
 * The function provides access to the class methods.
 *
 * Use this function like you would a global variable, except without needing
 * to declare the global.
 *
 * @return object
 */
function filters() {
	return Filters::instance();
}
filters();
