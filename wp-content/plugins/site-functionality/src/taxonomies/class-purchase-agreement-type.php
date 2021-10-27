<?php
/**
 * Taxonomy
 *
 * @package   Site_Functionality
 */
namespace Site_Functionality\Taxonomies;

use Site_Functionality\Abstracts\Taxonomy;
use Site_Functionality\PostTypes\PurchaseAgreement as PurchaseAgreement;

/**
 * Class Taxonomies
 *
 * @package Site_Functionality\Taxonomies
 * @since 0.1.0
 */
class PurchaseAgreementType extends Taxonomy {

	/**
	 * Taxonomy data
	 */
	public const TAXONOMY = [
		'id'       		=> 'purchase_agreement_type',
		'title'    		=> 'Purchase Agreement Types',
		'singular' 		=> 'Purchase Agreement Type',
		'menu'			=> 'Types',
		'post_types' 	=> [ 'purchase_agreement' ],
		'has_archive'	=> 'purchase-agreements/type',
		'archive'  		=> 'purchase-agreements/type',
		'with_front'	=> false,
		'rest'			=> 'purchase-types',
	];

	/** 
	 * Constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct( $version, $plugin_name ) {
	   parent::__construct( $version, $plugin_name );

	   \add_action( 'init', [ $this, 'rewrite_rules' ], 10, 0 );
	}

	/**
	 * Add rewrite rules
	 * 
	 * @link https://developer.wordpress.org/reference/functions/add_rewrite_rule/
	 *
	 * @return void
	 */
	public function rewrite_rules() {
		\add_rewrite_rule( self::TAXONOMY['archive'] . '/([^/]+)/page/([0-9]{1,})/?', 'index.php?taxonomy=' . self::TAXONOMY['id'] . '&term=$matches[1]&post_type=' . PurchaseAgreement::POST_TYPE['id'] . '&paged=$matches[2]', 'top' );
		\add_rewrite_rule( self::TAXONOMY['archive'] . '/([^/]+)/?', 'index.php?taxonomy=' . self::TAXONOMY['id'] . '&term=$matches[1]&post_type=' . PurchaseAgreement::POST_TYPE['id'], 'top' );
	}

}
