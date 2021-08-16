<?php
/**
 * Content Security
 *
 * @since   1.0.0
 * @package Site_Functionality
 */

namespace Site_Functionality;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


class Security {

	/**
	 * Instance of the class.
	 * @var object
	 */
	private static $instance;


	/**
	 * Class Instance.
	 * @return Security
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Security ) ) {
			self::$instance = new Security();

			self::$instance->actions();
		}
		return self::$instance;
	}

	/**
	 * Add Actions
	 *
	 * @return void
	 */
	function actions() {
		/**
		 * @see https://developer.wordpress.org/reference/hooks/wp_is_application_passwords_available/
		 */
		add_filter( 'wp_is_application_passwords_available', '__return_true' );

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
function security() {
	return Security::instance();
}
security();
