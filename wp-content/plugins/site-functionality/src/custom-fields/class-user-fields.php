<?php
/**
 * User Fields
 *
 * @since   1.0.0
 * @package Site_Functionality
 */
namespace Site_Functionality\CustomFields;

use Site_Functionality\Abstracts\Base;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class UserFields extends Base {

	/**
	 * Custom fields
	 */
	public const FIELDS = [
		'title'			=> 'string',
		'is_public'		=> 'boolean',
	];

	/**
	 * Constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct( $version, $plugin_name ) {
		parent::__construct( $version, $plugin_name );

		\add_action( 'init',			[ $this, 'register_user_meta' ] );
		\add_action( 'acf/init', 		[ $this, 'register_fields' ] );
	}

	/**
	 * Register Fields
	 *
	 * @return void
	 */
	public function register_fields() {
		\acf_add_local_field_group( array(
			'key' => 'group_user_meta',
			'title' => __( 'User Details', 'site-functionality' ),
			'fields' => array(
				array(
					'key' => 'field_title',
					'label' => __( 'Title', 'site-functionality' ),
					'name' => 'title',
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
					'maxlength' => '',
				),
				array(
					'key' => 'field_is_public',
					'label' => __( 'Public', 'site-functionality' ),
					'name' => 'is_public',
					'type' => 'true_false',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'message' => '',
					'default_value' => 1,
					'ui' => 1,
					'ui_on_text' => __( 'Public', 'site-functionality' ),
					'ui_off_text' => __( 'Private', 'site-functionality' ),
				),
			),
			'location' => array(
				array(
					array(
						'param' => 'user_form',
						'operator' => '==',
						'value' => 'edit',
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
		));
	}

	/**
	 * Register post meta with Rest API
	 * 
	 * @see https://developer.wordpress.org/reference/functions/register_user_meta/
	 *
	 * @return void
	 */
	public function register_user_meta() {

		foreach( self::FIELDS as $name => $type  ) {
			\register_meta(
				'user', 
				$name, [
					'show_in_rest' 	=> true,
					'single' 		=> true,
					'type' 			=> $type,
				]
			);
		}
	}

}