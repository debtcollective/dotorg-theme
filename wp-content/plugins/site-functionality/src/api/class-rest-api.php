<?php
/**
 * Rest API Functions
 *
 * @since   1.0.0
 * @package Site_Functionality
 */

namespace Site_Functionality\API;

use Site_Functionality\Abstracts\Base;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class RestAPI extends Base {

	/**
	 * @var string
	 */
	const API_NAMESPACE = 'site-functionality/v1';

	/**
	 * Constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct( $version, $plugin_name ) {
		parent::__construct( $version, $plugin_name );

		add_action( 'rest_api_init', [ $this, 'register_routes' ] );
	}

	/**
	 * Register API Routes
	 *
	 * @return void
	 */
	public function register_routes() {
		\register_rest_route( self::API_NAMESPACE, '/roles', 
			[
				'methods' 				=> 'GET',
				'callback' 				=> [ $this, 'get_user_roles' ],
				'permission_callback' 	=> \__return_true(),
			]
		);
	}

	/**
	 * Get WP user roles
	 *
	 * @return array An array of user roles.
	 */
	public function get_user_roles() {
		return ( $roles = \wp_roles() ) ? $roles->role_names : [];
	}

}
