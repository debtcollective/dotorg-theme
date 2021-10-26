<?php
/**
 * Content CustomFields
 *
 * @since   1.0.0
 * @package Site_Functionality
 */
namespace Site_Functionality\CustomFields;

use Site_Functionality\Abstracts\Base;
use Site_Functionality\CustomFields\UserFields as UserFields;
use Site_Functionality\CustomFields\PurchaseAgreementFields as PurchaseAgreementFields;
use Site_Functionality\CustomFields\PageFields as PageFields;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class CustomFields extends Base {

	/**
	 * Custom fields
	 */
	public const FIELDS = [
		'amount'		=> 'number',
		'number'		=> 'integer',
		'average'		=> 'number',
		'price'			=> 'number',
		'file'			=> 'string',
		'show_title'	=> 'boolean',
	];

	/**
	 * Constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct( $version, $plugin_name ) {
		parent::__construct( $version, $plugin_name );

		include_once( SITE_CORE_DIR . '/src/custom-fields/class-user-fields.php' 						);
		include_once( SITE_CORE_DIR . '/src/custom-fields/class-page-fields.php' 			);
		include_once( SITE_CORE_DIR . '/src/custom-fields/class-purchase-agreement-fields.php' 			);

		$userFields = new UserFields( $version, $plugin_name );
		$pageFields = new PageFields( $version, $plugin_name );
		$purchaseAggrementFields = new PurchaseAgreementFields( $version, $plugin_name );


		\add_action( 'acf/init', 		[ $this, 'acf_settings' ] );
		\add_action( 'acfe/init', 		[ $this, 'acfe_settings' ] );
	}

	/**
	 * Modify ACF settings
	 * 
	 * @link https://www.advancedcustomfields.com/resources/acf-settings/
	 *
	 * @return void
	 */
	public function acf_settings() {
		\acf_update_setting( 'l10n_textdomain', 'site-functionality' );

		\acf_update_setting( 'acfe/modules/taxonomies', false );
		\acf_update_setting( 'acfe/modules/forms', false );
		\acf_update_setting( 'acfe/modules/options_pages', false );
		\acf_update_setting( 'acfe/modules/post_types', false );
		\acf_update_setting( 'acfe/modules/ui', false );
	}

	/**
	 * Modify ACF settings
	 * 
	 * @link https://www.acf-extended.com/features/modules/dynamic-options-pages
	 *
	 * @return void
	 */
	public function acfe_settings() {
		\acfe_update_setting( 'modules/taxonomies', false );
		\acfe_update_setting( 'modules/forms', false );
		\acfe_update_setting( 'modules/options_pages', false );
		\acfe_update_setting( 'modules/post_types', false );
		\acfe_update_setting( 'modules/ui', false );
	}
}