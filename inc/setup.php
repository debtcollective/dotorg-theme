<?php
/**
 * Theme setup.
 *
 * @package DebtCollective
 */
namespace DebtCollective\Inc;

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 *
 * @author Debt Collective
 */
function setup() {
	/**
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on Debt Collective, use a find and replace
	 * to change 'debtcollective' to the name of your theme in all the template files.
	 * You will also need to update the Gulpfile with the new text domain
	 * and matching destination POT file.
	 */
	load_theme_textdomain( 'debtcollective', get_template_directory() . '/build/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/**
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/**
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 * @link https://developer.wordpress.org/reference/functions/add_image_size/#reserved-image-size-names
	 */
	add_theme_support( 'post-thumbnails' );

	update_option( 'thumbnail_size_w', 854 );
	update_option( 'thumbnail_size_h', 480 );
	update_option( 'thumbnail_crop', 0 );

	update_option( 'medium_size_w', 1080 );
	update_option( 'medium_size_h', 720 );
	update_option( 'medium_crop', 0 );

	update_option( 'large_size_w', 1920 );
	update_option( 'large_size_h', 1080 );
	update_option( 'large_crop', 0 );

	// Register navigation menus.
	register_nav_menus(
		array(
			'primary' => esc_html__( 'Primary Menu', 'debtcollective' ),
			'footer'  => esc_html__( 'Footer Menu', 'debtcollective' ),
			'mobile'  => esc_html__( 'Mobile Menu', 'debtcollective' ),
			'privacy' => esc_html__( 'Privacy Menu', 'debtcollective' ),
		)
	);

	/**
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'debtcollective_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Custom logo support.
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 500,
			'flex-height' => true,
			'flex-width'  => true,
			'header-text' => array( 'site-title', 'site-description' ),
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/** Now defined in ./theme.json */

	// Gutenberg support for full-width/wide alignment of supported blocks.
	add_theme_support( 'align-wide' );  // Gutenberg defaults for font sizes.

	// Gutenberg editor styles support.
	add_theme_support( 'editor-styles' );
	add_editor_style( 'build/editor.css' );

	// Gutenberg responsive embed support.
	add_theme_support( 'responsive-embeds' );
}
add_action( 'after_setup_theme', __NAMESPACE__ . '\setup' );

function add_image_sizes_to_admin( $sizes ) {
	return array_merge(
		$sizes,
		array(
			'thumbnail' => __( 'Thumbnail', 'debtcollective' ),
			'medium'    => __( 'Medium', 'debtcollective' ),
			'large'     => __( 'Large', 'debtcollective' ),
		)
	);
}
add_filter( 'image_size_names_choose', __NAMESPACE__ . '\add_image_sizes_to_admin' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 *
 * @author Debt Collective
 */
function content_width() {
	$GLOBALS['content_width'] = apply_filters( __NAMESPACE__ . '\content_width', 640 );
}
add_action( 'after_setup_theme', __NAMESPACE__ . '\content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 *
 * @author Debt Collective
 */
function widgets_init() {

	// Define sidebars.
	$sidebars = array(
		'header'    => esc_html__( 'Header', 'debtcollective' ),
		'menu-footer'    => esc_html__( 'Menu Footer', 'debtcollective' ),
		'above-nav'      => esc_html__( 'Sidebar Above Nav', 'debtcollective' ),
		'below-nav'      => esc_html__( 'Sidebar Below Nav', 'debtcollective' ),
		'content-footer' => esc_html__( 'Content Footer', 'debtcollective' ),
		'footer'         => esc_html__( 'Footer', 'debtcollective' ),
	);

	// Loop through each sidebar and register.
	foreach ( $sidebars as $sidebar_id => $sidebar_name ) {

		register_sidebar(
			array(
				'name'          => $sidebar_name,
				'id'            => $sidebar_id,
				'description'   => /* translators: the sidebar name */ sprintf( esc_html__( 'Widget area for %s', 'debtcollective' ), $sidebar_name ),
				'before_widget' => 'menu-footer' === $sidebar_id ? '<footer class="widget menu-footer %2$s">' : '<div class="widget %2$s">',
				'after_widget'  => 'menu-footer' === $sidebar_id ? '</footer>' : '</div>',
				'before_title'  => '<h2 class="widget-title">',
				'after_title'   => '</h2>',
			)
		);
	}

}
add_action( 'widgets_init', __NAMESPACE__ . '\widgets_init' );
