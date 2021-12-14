<?php
/**
 * Debt Collective functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package DebtCollective
 */

/**
 * Get all the include files for the theme.
 *
 * @author Debt Collective
 */
function debtcollective_get_theme_include_files() {
	return [
		'inc/setup.php', // Theme set up. Should be included first.
		'inc/compat.php', // Backwards Compatibility.
		'inc/customizer/customizer.php', // Customizer additions.
		'inc/extras.php', // Custom functions that act independently of the theme templates.
		'inc/hooks.php', // Load custom filters and hooks.
		'inc/helpers.php', // Helper functions.
		'inc/security.php', // WordPress hardening.
		'inc/scripts.php', // Load styles and scripts.
		'inc/shortcodes.php', // Custom shortcodes.
		'inc/template-tags.php', // Custom template tags for this theme.
		'inc/block-editor/blocks-enqueue.php', // Load block editor scripts.
		'inc/block-editor/block-filters.php', // Functions to modify blocks.
		'inc/block-editor/block-patterns.php', // Custom patterns for this theme.
		'inc/block-editor/block-styles.php', // Custom styles for this theme.
		'inc/block-editor/block-variations.php', // Custom variations for this theme.
		'inc/block-editor/block-renderers.php', // Custom dynamic block renderers for this theme.
	];
}

foreach ( debtcollective_get_theme_include_files() as $include ) {
	require trailingslashit( get_template_directory() ) . $include;
}


function disable_all_guttenberg_colors() {
        add_theme_support( 'editor-color-palette' );
	add_theme_support( 'disable-custom-colors' );
}
add_action( 'after_setup_theme', 'disable_all_guttenberg_colors' );
