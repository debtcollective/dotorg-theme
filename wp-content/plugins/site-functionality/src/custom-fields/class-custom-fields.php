<?php
/**
 * Content CustomFields
 *
 * @since   1.0.0
 * @package Site_Functionality
 */
namespace Site_Functionality\CustomFields;

use Site_Functionality\Abstracts\Base;
use Site_Functionality\PostTypes\PurchaseAgreement;

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

		\add_action( 'init',			[ $this, 'register_post_meta' ] );

		\add_action( 'acf/init', 		[ $this, 'acf_settings' ] );
		\add_action( 'acfe/init', 		[ $this, 'acfe_settings' ] );
		\add_action( 'acf/init', 		[ $this, 'register_fields' ] );

		\add_filter( 'acf/format_value/name=amount', 	[ $this, 'format_number_as_currency' ], 20, 3 );
		\add_filter( 'acf/format_value/name=average', 	[ $this, 'format_number_as_currency' ], 20, 3 );
		\add_filter( 'acf/format_value/name=price', 	[ $this, 'format_number_as_currency' ], 20, 3 );
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

	/**
	 * Register Fields
	 *
	 * @return void
	 */
	public function register_fields() {
		\acf_add_local_field_group( 
			[
				'key' => 'group_purchase_agreement_group',
				'title' => __( 'Purchase Agreement Details', 'site-functionality' ),
				'fields' => array(
					array(
						'key' => 'field_show_title',
						'label' => __( 'Show Title', 'site-functionality' ),
						'name' => 'show_title',
						'type' => 'true_false',
						'instructions' => __( 'Select if purchase agreement has no title.', 'site-functionality' ),
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => '',
						'placeholder' => '',
						'prepend' => '',
						'append' => '',
					),
					array(
						'key' => 'field_amount',
						'label' => __( 'Amount Abolished', 'site-functionality' ),
						'name' => 'amount',
						'type' => 'number',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => '',
						'placeholder' => '',
						'prepend' => '$',
						'append' => '',
						'min' => '0.00',
						'max' => '',
						'step' => '0.01',
					),
					array(
						'key' => 'field_number',
						'label' => __( 'Number of Debtors', 'site-functionality' ),
						'name' => 'number',
						'type' => 'number',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => '',
						'placeholder' => '',
						'prepend' => '',
						'append' => '',
						'min' => 0,
						'max' => '',
						'step' => 1,
					),
					array(
						'key' => 'field_average',
						'label' => __( 'Average Debt / Debtor', 'site-functionality' ),
						'name' => 'average',
						'type' => 'number',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => '',
						'placeholder' => '',
						'prepend' => '$',
						'append' => '',
						'min' => '0.00',
						'max' => '',
						'step' => '0.01',
					),
					array(
						'key' => 'field_price',
						'label' => __( 'Purchase Price', 'site-functionality' ),
						'name' => 'price',
						'type' => 'number',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => '',
						'placeholder' => '',
						'prepend' => '$',
						'append' => '',
						'min' => '0.00',
						'max' => '',
						'step' => '0.01',
					),
					array(
						'key' => 'field_file',
						'label' => __( 'File', 'site-functionality' ),
						'name' => 'file',
						'type' => 'file',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'uploader' => '',
						'return_format' => 'array',
						'min_size' => '',
						'max_size' => '',
						'mime_types' => 'pdf, doc, docx',
						'library' => 'all',
					),
				),
				'location' => array(
					array(
						array(
							'param' 	=> 'post_type',
							'operator' 	=> '==',
							'value' 	=> PurchaseAgreement::POST_TYPE['id'],
						),
					),
				),
				'menu_order' => 0,
				'position' => 'normal',
				'style' => 'default',
				'label_placement' => 'top',
				'instruction_placement' => 'label',
				'hide_on_screen' => '',
				'active' => true,
				'description' => '',
				'acfe_display_title' => '',
				'acfe_autosync' => '',
				'acfe_form' => 0,
				'acfe_meta' => '',
				'acfe_note' => '',
			]
		);
	}

	/**
	 * Register post meta with Rest API
	 * 
	 * @see https://developer.wordpress.org/reference/functions/register_post_meta/
	 *
	 * @return void
	 */
	public function register_post_meta() {

		foreach( self::FIELDS as $name => $type  ) {
			\register_post_meta(
				PurchaseAgreement::POST_TYPE['id'], 
				$name, [
					'show_in_rest' 	=> true,
					'single' 		=> true,
					'type' 			=> $type,
				]
			);
		}
	}

	/**
	 * Format number fields
	 * 
	 * @see https://www.advancedcustomfields.com/resources/acf-format_value/
	 *
	 * @param mixed $value
	 * @param int $post_id
	 * @param array $field
	 * @return void
	 */
	protected function format_number_as_currency( $value, $post_id, $field ) : floatval {
		if( $value > 0 ) {
			$value = number_format( ( $value ), 0, '.', ',' );
		}
		return $value;
	}

}