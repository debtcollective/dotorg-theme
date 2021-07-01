<?php
/**
 * Admin Customizations
 *
 * @since   1.0.0
 * @package Site_Functionality
 */

namespace Site_Functionality\Admin;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Admin {

	/**
	 * Instance of the class.
	 * @var object
	 */
	private static $instance;

	/**
	 * Class Instance.
	 * @return Admin
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Admin ) ) {
            self::$instance = new Admin();
            
            self::$instance->dependencies();
                        
		}
		return self::$instance;
    }
    
	/**
	 * Dependencies
	 *
	 * @return void
	 */
	function dependencies() {
		include_once( SITE_CORE_DIR . '/src/admin/options.php' );
    }

    /**
     * Load admin JS
     * 
     * @see https://developer.wordpress.org/reference/hooks/admin_enqueue_scripts/
     *
     * @param string $hook
     * @return void
     */
    function admin_enqueue_scripts( $hook ) {
        \wp_enqueue_script( 'site-functionality-admin-js', SITE_CORE_DIR_URI . 'assets/js/admin.js', [ 'jquery' ], '', true );
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
function admin() {
	return Admin::instance();
}
admin();
