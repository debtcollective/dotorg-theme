<?php
/**
 * Content Taxonomies
 *
 * @since   1.0.0
 * @package Site_Functionality
 */
namespace Site_Functionality\Taxonomies;

use Site_Functionality\Abstracts\Base;
use Site_Functionality\Taxonomies\PurchaseAgreementType;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Taxonomies extends Base {

	/**
	 * Constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct( $version, $plugin_name ) {
		parent::__construct( $version, $plugin_name );

		include_once( SITE_CORE_DIR . '/src/taxonomies/class-purchase-agreement-type.php' 				);
		new PurchaseAgreementType( $version, $plugin_name );
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
function taxonomies() {
	return new Taxonomies( SITE_CORE_VERSION, SITE_CORE_PLUGIN );
}
// taxonomies();
