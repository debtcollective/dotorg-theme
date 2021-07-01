<?php
/**
 * Rest API Functions
 *
 * @since   1.0.0
 * @package Site_Functionality
 */

namespace Site_Functionality\API;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


class Rest_API {

	/**
	 * Instance of the class.
	 * @var object
	 */
	private static $instance;


	/**
	 * Class Instance.
	 * @return Rest_API
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Rest_API ) ) {
			self::$instance = new Rest_API();

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
function rest_api_init() {
	return Rest_API::instance();
}
rest_api_init();
