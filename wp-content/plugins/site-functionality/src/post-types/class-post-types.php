<?php
/**
 * Content PostTypes
 *
 * @since   1.0.0
 * @package Site_Functionality
 */
namespace Site_Functionality\PostTypes;

use Site_Functionality\Abstracts\Base;
use Site_Functionality\PostTypes\PurchaseAgreement;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class PostTypes extends Base {

	/**
	 * Constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct( $version, $plugin_name ) {
		parent::__construct( $version, $plugin_name );

		include_once( SITE_CORE_DIR . '/src/post-types/class-purchase-agreement.php' 				);
		new PurchaseAgreement( $version, $plugin_name );

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
function postTypes() {
	return new PostTypes( Site_Functionality::SITE_CORE_VERSION, Site_Functionality::SITE_CORE_PLUGIN );
}
// postTypes();
