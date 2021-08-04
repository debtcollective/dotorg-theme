<?php
/**
 * Plugin Name:         Site Functions
 * Description:         Custom functions for site
 * Author:              Patrizia Lutz
 * Author URI:          https://patrizia-lutz.tech
 * Text Domain:         site-functionality
 * Domain Path:         /languages
 * Version:             1.0.0
 * Requires at least:   5.4
 *
 * @package             Site_Functionality
 */

namespace Site_Functionality;

// Your code starts here.
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Plugin Directory
 *
 * @since 0.1.0
 */
define( 'SITE_CORE_DIR', dirname( __FILE__ ) );
define( 'SITE_CORE_DIR_URI', plugin_dir_url( __FILE__ ) );


function site_functionality_init() {
	load_plugin_textdomain( 'site-functionality', false, SITE_CORE_DIR . '/languages' );

	include_once( SITE_CORE_DIR . '/src/helpers.php' 					);
	include_once( SITE_CORE_DIR . '/src/filters.php' 					);
	include_once( SITE_CORE_DIR . '/src/util/util.php' 					);
	include_once( SITE_CORE_DIR . '/src/api/rest-api.php' 				);
	include_once( SITE_CORE_DIR . '/src/api/graphql.php' 				);

	include_once( SITE_CORE_DIR . '/src/admin/admin.php' 				);
}

// class Site_Functions {

// 	/**
// 	 * Instance of the class.
// 	 * @var object
// 	 */
//     private static $instance;
    
//     /**
// 	 * Plugin Dir
// 	 * @var var
// 	 */
//     public $plugin_dir;

//     /**
// 	 * Plugin Dir URI
// 	 * @var var
// 	 */
//     public $plugin_dir_uri;

// 	/**
// 	 * Class Instance.
// 	 * @return Site_Functions
// 	 */
// 	public static function instance() {
// 		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Site_Functions ) ) {
// 			self::$instance = new Site_Functions();
// 			self::$instance->init();
// 		}
// 		return self::$instance;
//     }
    
//     /**
// 	 * Initialize
// 	 *
// 	 * @return void
// 	 */
// 	function init() {
//         $this->plugin_dir = dirname( __FILE__ );
//         $this->plugin_dir_uri = plugin_dir_url( __FILE__ );
// 		$this->dependencies();
		
// 		load_plugin_textdomain( 'site-functionality', false, $this->plugin_dir . '/languages' ); 
//     }

// 	/**
// 	 * Hooks
// 	 *
// 	 * @return void
// 	 */
// 	static function hooks() {
// 		flush_rewrite_rules();
//     }

// 	/**
// 	 * Dependencies
// 	 *
// 	 * @return void
// 	 */
// 	function dependencies() {

// 	}
	
// 	/**
// 	 * Get Plugin Directory Path
// 	 *
// 	 * @return string $this->plugin_dir
// 	 */
// 	static function plugin_dir() {
// 		return $this->plugin_dir;
// 	}

// 	/**
// 	 * Get Plugin Directory URI
// 	 *
// 	 * @return string $plugin_dir_uri
// 	 */
// 	static function plugin_dir_uri() {
// 		return $this->plugin_dir_uri;
// 	}

// }

// /**
//  * The function provides access to the class methods.
//  *
//  * Use this function like you would a global variable, except without needing
//  * to declare the global.
//  *
//  * @return object
//  */
// function site_functionality_init() {
// 	return Site_Functions::instance();
// }

add_action( 'plugins_loaded' , __NAMESPACE__ . '\site_functionality_init' );

// register_activation_hook( __FILE__, array( __NAMESPACE__ . '\Site_Functions', 'hooks' ) );