<?php
/**
 * Taxonomy
 *
 * @package   Site_Functionality
 */
namespace Site_Functionality\Abstracts;

use Site_Functionality\Abstracts\Base;

/**
 * Class Taxonomies
 *
 * @package Site_Functionality\Abstractsl
 * @since 0.1.0
 */
abstract class Taxonomy extends Base {

	/**
	 * Taxonomy data
	 */
	public const TAXONOMY = self::TAXONOMY;

	/**
	 * Constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct( $version, $plugin_name ) {
		parent::__construct( $version, $plugin_name );
		$this->init();
	}

	/**
	 * Initialize the class.
	 *
	 * @since 0.1.0
	 */
	public function init() {
		/**
		 * This general class is always being instantiated as requested in the Bootstrap class
		 *
		 * @see Bootstrap::__construct
		 *
		 */

		add_action( 'init', [ $this, 'register' ] );

	}

	/**
	 * Register taxonomy
	 *
	 * @since 0.1.0
	 */
	public function register() {

		$labels = array(
			'name'                   	=> _x( $this::TAXONOMY['title'], 'Taxonomy General Name', 'wp-action-network-events' ),
			'singular_name' 			=> _x( $this::TAXONOMY['singular'], 'Taxonomy Singular Name', 'wp-action-network-events' ),
			'menu_name' 				=> __( $this::TAXONOMY['menu'], 'wp-action-network-events' ),
			'all_items'      			=> sprintf( /* translators: %s: post type title */ __( 'All %s', 'wp-action-network-events' ), $this::TAXONOMY['title'] ),
			'parent_item' 				=> sprintf( /* translators: %s: post type title */ __( 'Parent %s', 'wp-action-network-events' ), $this::TAXONOMY['singular'] ),
			'parent_item_colon' 		=> sprintf( /* translators: %s: post type title */ __( 'Parent %s:', 'wp-action-network-events' ), $this::TAXONOMY['singular'] ),
			'new_item_name' 			=> sprintf( /* translators: %s: post type singular title */ __( 'New %s Name', 'wp-action-network-events' ), $this::TAXONOMY['singular'] ),
			'add_new_item'				=> sprintf( /* translators: %s: post type singular title */ __( 'Add New %s', 'wp-action-network-events' ), $this::TAXONOMY['singular'] ),
			'edit_item'				 	=> sprintf( /* translators: %s: post type singular title */ __( 'Edit %s', 'wp-action-network-events' ), $this::TAXONOMY['singular'] ),
			'update_item'				=> sprintf( /* translators: %s: post type title */ __( 'Update %s', 'wp-action-network-events' ), $this::TAXONOMY['singular'] ),
			'view_item'				 	=> sprintf( /* translators: %s: post type singular title */ __( 'View %s', 'wp-action-network-events' ), $this::TAXONOMY['singular'] ),
			'search_items'				=> sprintf( /* translators: %s: post type title */ __( 'Search %s', 'wp-action-network-events' ), $this::TAXONOMY['title'] ),

			'separate_items_with_commas' => sprintf( /* translators: %s: post type title */ __( 'Separate %s with commas', 'wp-action-network-events' ), strtolower( $this::TAXONOMY['title'] ) ),
			'add_or_remove_items'        => sprintf( /* translators: %s: post type title */ __( 'Add or remove %s', 'wp-action-network-events' ), strtolower( $this::TAXONOMY['title'] ) ),
			'popular_items'              => sprintf( /* translators: %s: post type title */ __( 'Popular %s', 'wp-action-network-events' ), $this::TAXONOMY['title'] ),
			'search_items'               => sprintf( /* translators: %s: post type title */ __( 'Search %s', 'wp-action-network-events' ), $this::TAXONOMY['title'] ),
			'no_terms'                   => sprintf( /* translators: %s: post type title */ __( 'No %s', 'wp-action-network-events' ), strtolower( $this::TAXONOMY['title'] ) ),
			'items_list'                 => sprintf( /* translators: %s: post type title */ __( '%s list', 'wp-action-network-events' ), $this::TAXONOMY['title'] ),
			'items_list_navigation'      => sprintf( /* translators: %s: post type title */ __( '%s list navigation', 'wp-action-network-events' ), $this::TAXONOMY['title'] ),
		);

		$rewrite = [
			'slug'						=> $this::TAXONOMY['archive'],
			'with_front'				=> $this::TAXONOMY['with_front']
		];

		$args = array(
			'labels'                     => $labels,
			'hierarchical'               => false,
			'public'                     => true,
			'show_ui'                    => true,
			'show_admin_column'          => true,
			'show_in_nav_menus'          => true,
			'show_tagcloud'              => true,
			'rewrite'					 => $rewrite,
			'show_in_rest'               => true,
			'rest_base'             	 => $this::TAXONOMY['rest'],
		);
		\register_taxonomy( 
			$this::TAXONOMY['id'], 
			$this::TAXONOMY['post_types'], 
			\apply_filters( \get_class( $this ) . '\Args', $args ) 
		);
	}
}
