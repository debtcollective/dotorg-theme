<?php
/**
 * Taxonomy
 *
 * @package   Site_Functionality
 */
namespace Site_Functionality\Taxonomies;

use Site_Functionality\Abstracts\Taxonomy;

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
		'archive'  		=> 'purchase-types',
		'title'    		=> 'Purchase Agreement Types',
		'singular' 		=> 'Purchase Agreement Type',
		'menu'			=> 'Types',
		'post_types' 	=> [ 'purchase_agreement' ],
		'rest'			=> 'purchase-types'
	];

}
