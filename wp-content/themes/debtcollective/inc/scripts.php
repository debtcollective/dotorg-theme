<?php
/**
 * Custom scripts and styles.
 *
 * @package DebtCollective
 */
namespace DebtCollective\Inc;

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

	// wp_enqueue_script( 'global-header', \esc_url( 'https://unpkg.com/@debtcollective/dc-header-component@latest/dist/header/header.esm.js' ), null, null, false );

	// wp_enqueue_script( 'global-header', \get_stylesheet_directory_uri() . '/build/web-components.js', null, null, false );

	// Register styles & scripts.
	wp_enqueue_style( 'debtcollective', \get_stylesheet_directory_uri() . '/build/index.css', [], $asset_file['version'] );
	wp_enqueue_script( 'debtcollective-scripts', \get_stylesheet_directory_uri() . '/build/index.js', $asset_file['dependencies'], $asset_file['version'], true );

}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\scripts' );
