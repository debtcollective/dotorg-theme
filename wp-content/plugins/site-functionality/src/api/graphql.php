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


class GraphQL {

	/**
	 * Instance of the class.
	 * @var object
	 */
	private static $instance;


	/**
	 * Class Instance.
	 * @return GraphQL
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof GraphQL ) ) {
			self::$instance = new GraphQL();

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
function graphql() {
	return GraphQL::instance();
}
graphql();
