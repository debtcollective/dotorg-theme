<?php
/**
 * Post Type
 *
 * @package   Site_Functionality
 */
namespace Site_Functionality\PostTypes;

use Site_Functionality\Abstracts\PostType;

/**
 * Class PurchaseAgreement
 *
 * @package Site_Functionality\PostTypes
 * @since 0.1.0
 */
class PurchaseAgreement extends PostType {

	/**
	 * Post type data
	 */
	public const POST_TYPE = [
		'id'       		=> 'purchase_agreement',
		'menu'    		=> 'Purchase Agreements',
		'title'    		=> 'Agreements',
		'singular' 		=> 'Agreement',
		'icon'     		=> 'dashicons-bank',
		'taxonomies'	=> [ 'purchase_agreement_type' ],
		'has_archive'  	=> 'purchase-agreements',
		'with_front'  	=> false,
		'archive'  		=> 'purchase-agreements',
		'rest_base'		=> 'purchase-agreements',
	];

	/**
	 * Post fields
	 */
	public const FIELDS = [
		'amount' 			=> 'number',
		'number' 			=> 'number',
		'average'			=> 'number',
		'purchase_price'	=> 'number',
		'file'				=> 'string',
	];

	/**
	 * Register custom query vars
	 * 
	 * @link https://developer.wordpress.org/reference/hooks/query_vars/
	 *
	 * @param array $vars The array of available query variables
	 */
	public function registerQueryVars( $vars ) : array {
		return $vars;
	}
}
