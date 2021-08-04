<?php
/**
 * Utilies
 */
namespace Site_Functionality\Util;

use Site_Functionality\Comments\Comments;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


class Util {

	/**
	 * Instance of the class.
	 * @var object
	 */
	private static $instance;


	/**
	 * Class Instance.
	 * @return Util
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Util ) ) {
			self::$instance = new Util();

			self::$instance->init();
		}
		return self::$instance;
	}

	/**
	 * Init
	 *
	 * @return void
	 */
	function init() {
        include_once( SITE_CORE_DIR . '/src/util/comments.php' 					);
        Comments::instance();
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
function util() {
	return Util::instance();
}
util();
