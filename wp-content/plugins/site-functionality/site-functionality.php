<?php
/**
 * Plugin Name:         Site Functions
 * Description:         Custom functions for site
 * Author:              Patrizia Lutz
 * Author URI:          https://patrizia-lutz.tech
 * Text Domain:         site-functionality
 * Domain Path:         /languages
 * Version:             1.0.0
 * Requires at least: 	5.8
 * Requires PHP:      	7.2
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

const PLUGIN = 'site-functionality';
const VERSION = '1.0.0';

function site_functionality_init() {
	load_plugin_textdomain( 'site-functionality', false, SITE_CORE_DIR . '/languages' );

	include_once( SITE_CORE_DIR . '/src/helpers.php' 									);
	include_once( SITE_CORE_DIR . '/src/filters.php' 									);
	include_once( SITE_CORE_DIR . '/src/security.php' 									);
	include_once( SITE_CORE_DIR . '/src/util/util.php' 									);

	// include_once( SITE_CORE_DIR . '/src/api/graphql.php' 				);


	include_once( SITE_CORE_DIR . '/src/abstracts/class-base.php' 						);
	include_once( SITE_CORE_DIR . '/blocks/blocks.php' 									);

	include_once( SITE_CORE_DIR . '/src/admin/admin.php' 								);
	include_once( SITE_CORE_DIR . '/src/class-template-loader.php' 						);
	include_once( SITE_CORE_DIR . '/src/abstracts/class-post-type.php' 					);
	include_once( SITE_CORE_DIR . '/src/abstracts/class-taxonomy.php' 					);

	include_once( SITE_CORE_DIR . '/src/api/class-rest-api.php' 						);
	include_once( SITE_CORE_DIR . '/src/post-types/class-post-types.php' 				);
	include_once( SITE_CORE_DIR . '/src/taxonomies/class-taxonomies.php' 				);
	include_once( SITE_CORE_DIR . '/src/custom-fields/class-custom-fields.php' 			);
	
	$restAPI = new API\RestAPI( VERSION, PLUGIN );

	$postTypes = new PostTypes\PostTypes( VERSION, PLUGIN );
	$taxonomies = new Taxonomies\Taxonomies( VERSION, PLUGIN );
	$customFields = new CustomFields\CustomFields( VERSION, PLUGIN );
}
add_action( 'plugins_loaded' , __NAMESPACE__ . '\site_functionality_init' );

/**
 * The function provides access to the class methods.
 *
 * Use this function like you would a global variable, except without needing
 * to declare the global.
 *
 * @return object
 */
// function site_functionality_init() {
// 	return Site_Functions::instance();
// }

function site_functionality_activate() {
	\flush_rewrite_rules();
}
\register_activation_hook( __FILE__, __NAMESPACE__ . '\site_functionality_activate', );

function site_functionality_deactivate() {
	\flush_rewrite_rules();
}
\register_deactivation_hook( __FILE__, __NAMESPACE__ . '\site_functionality_deactivate' );

