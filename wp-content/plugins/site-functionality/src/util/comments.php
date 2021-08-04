<?php
/**
 * Comments
 */
namespace Site_Functionality\Comments;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Comments {

	/**
	 * Instance of the class.
	 * @var object
	 */
	private static $instance;


	/**
	 * Class Instance.
	 * @return Comments
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Comments ) ) {
			self::$instance = new Comments();

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
		add_action( 'wp_before_admin_bar_render', 	[ $this, 'remove_admin_bar_menu' ] );
		add_action( 'admin_menu', 					[ $this, 'remove_admin_menu' ] );
		add_action( 'init', 						[ $this, 'remove_post_support' ], 100 );
	}

	/**
	 * Removes comments from the admin bar
	 *
	 * @since 1.0.0
	 */
	function remove_admin_bar_menu() {

		global $wp_admin_bar;

		$wp_admin_bar->remove_menu( 'comments' );

	}

	/**
	 * Removes comments from the admin menu
	 *
	 * @since 1.0.0
	 */
	function remove_admin_menu() {

		remove_menu_page( 'edit-comments.php' );

	}

	/**
	 * Remove support for comments
	 *
	 * @since 1.0.0
	 */
	function remove_post_support() {

		remove_post_type_support( 'post', 'comments' );
		remove_post_type_support( 'page', 'comments' );
		remove_post_type_support( 'an_event', 'comments' );

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
function comments() {
	return Comments::instance();
}
comments();
