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

class PurchaseAgreementFields extends Base {

	/**
	 * Custom fields
	 */
	public const FIELDS = [
		'amount'		=> 'string',
		'number'		=> 'string',
		'average'		=> 'string',
		'price'			=> 'string',
		'file'			=> 'string',
		'show_title'	=> 'boolean',
		'display_title'	=> 'string'
	];

	/**
	 * Constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct( $version, $plugin_name ) {
		parent::__construct( $version, $plugin_name );

		\add_action( 'init',			[ $this, 'register_post_meta' ] );
		\add_action( 'acf/init', 		[ $this, 'register_fields' ] );

		\add_filter( 'the_title', 		[ $this, 'filter_title' ], 10, 2 );
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
						'instructions' => __( 'Select if purchase agreement has a title that should be displayed.', 'site-functionality' ),
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => 0,
						'ui' 			=> 1,
						'ui_on_text' 	=> __( 'Show', 'site-functionality' ),
						'ui_off_text' 	=> __( 'Hide', 'site-functionality' ),
						'prepend' 		=> '',
						'append' 		=> '',
					),
					array(
						'key' => 'field_display_title',
						'label' => __( 'Display Title', 'site-functionality' ),
						'name' => 'display_title',
						'type' => 'text',
						'instructions' => __( 'Enter title to be displayed in place of standard post title. Leave blank to use post title. Note: Ignored if "Show Title" option is false.', 'site-functionality' ),
						'required' => 0,
						'conditional_logic' => array(
							array(
								array(
									'field' => 'field_show_title',
									'operator' => '==',
									'value' => '1',
								),
							),
						),
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => '',
						'placeholder' => '',
						'prepend' => '',
						'append' => '',
						'maxlength' => '',
					),
					array(
						'key' => 'field_amount',
						'label' => __( 'Amount Abolished', 'site-functionality' ),
						'name' => 'amount',
						'type' => 'text',
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
					),
					array(
						'key' => 'field_number',
						'label' => __( 'Number of Debtors', 'site-functionality' ),
						'name' => 'number',
						'type' => 'text',
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
					),
					array(
						'key' => 'field_average',
						'label' => __( 'Average Debt / Debtor', 'site-functionality' ),
						'name' => 'average',
						'type' => 'text',
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
					),
					array(
						'key' => 'field_price',
						'label' => __( 'Purchase Price', 'site-functionality' ),
						'name' => 'price',
						'type' => 'text',
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
				'instruction_placement' => 'field',
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

	/**
	 * Filter Title
	 * 
	 * @link https://developer.wordpress.org/reference/hooks/the_title/
	 *
	 * @param string $title
	 * @param int $post_id
	 * @return string $title
	 */
	public function filter_title( $title, $post_id = null ) {
		if( PurchaseAgreement::POST_TYPE['id'] !== \get_post_type( $post_id ) || \is_admin() ) {
			return $title;
		}
		$display_title = \get_post_meta( $post_id, 'display_title', true );
		if( $display_title && \get_post_meta( $post_id, 'show_title', true ) ) {
			$title = \esc_html( $display_title );
		}
		return $title;
	}

}