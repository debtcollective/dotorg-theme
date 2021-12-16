<?php
/**
 * Custom scripts and styles.
 *
 * @package DebtCollective
 */
namespace DebtCollective\Inc;

 /**
  * Register Google Fonts
  */
function theme_fonts() {
	$fonts_url = 'https://fonts.googleapis.com/css2';

	$font_families   = [];
	$font_families[] = 'Libre+Franklin:wght@200;300;400;500;800;900&';
	$font_families[] = 'Material+Icons';

	$query_args = array(
		'family'  => implode( '|', $font_families ),
		'subset'  => 'latin',
		'display' => 'swap',
	);

	$fonts_url = \add_query_arg( $query_args, \esc_url( $fonts_url ) );

	return $fonts_url;
}

/**
 * Enqueue scripts and styles.
 *
 * @author Debt Collective
 */
function scripts() {
	$asset_file_path = dirname( __DIR__ ) . '/build/index.asset.php';

	if ( is_readable( $asset_file_path ) ) {
		$asset_file = include $asset_file_path;
	} else {
		$asset_file = [
			'version'      => '1.0.0',
			'dependencies' => [ 'wp-polyfill' ],
		];
	}

	// \wp_enqueue_style( 'debtcollective-fonts', theme_fonts(), null, null );
	// \wp_enqueue_style( 'debtcollective-icon-fonts', \esc_url( 'https://fonts.googleapis.com/icon?family=Material+Icons' ), null, null );

	// Register styles & scripts.
	\wp_enqueue_style( 'debtcollective', \get_stylesheet_directory_uri() . '/build/index.css', [ 'dashicons' ], $asset_file['version'] );
	\wp_enqueue_script( 'debtcollective-scripts', \get_stylesheet_directory_uri() . '/build/index.js', $asset_file['dependencies'], $asset_file['version'], true );
}
\add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\scripts', 11 );

/**
 * Remove scripts and styles.
 *
 * @author Debt Collective
 */
function remove_scripts() {

	// Disable 3rd-party styles & scripts
	\wp_dequeue_style( 'flexy-breadcrumb' );
	\wp_dequeue_style( 'flexy-breadcrumb-font-awesome' );
	// \remove_action( 'wp_head', [ '\Flexy_Breadcrumb_Typography', 'breadcrumb_typography' ] );

	/**
	 * Remove sidebar share styles
	 */
	\wp_dequeue_style( 'sssb-block-style' );
}
\add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\remove_scripts', 11 );
\remove_action( 'wp_head', [ '\Flexy_Breadcrumb_Typography', 'breadcrumb_typography' ] );



// MatchHeights for touts
/**
 * Enqueue scripts and styles.
 *
 * @author Debt Collective
 */
function frontend_scripts() {
    wp_register_script(
        'toutmatchheight',
        get_template_directory_uri() . '/build/toutmatchheight.js',
        array(),
        null,
        true
    );
    if ( has_block( 'site-functionality/tout' ) ) {
				wp_enqueue_script( 'toutmatchheight' );
    }
}
\add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\frontend_scripts', 99 );
