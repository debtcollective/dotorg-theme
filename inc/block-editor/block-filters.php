<?php
/**
 * Functions to modify blocks
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/
 *
 * @package DebtCollective
 */
namespace DebtCollective\Inc;

/**
 * Filter Cover Block
 *
 * @see https://developer.wordpress.org/reference/hooks/render_block/
 *
 * @param string $block_content
 * @param array  $block
 * @return string
 */
function custom_render_block_core_cover(
	string $block_content,
	array $block
): string {
	if (
		$block['blockName'] === 'core/cover' &&
		! is_admin() &&
		! wp_is_json_request()
	) {
		// var_dump( $block );
	}

	return $block_content;
}
// add_filter( 'render_block', __NAMESPACE__. '\custom_render_block_core_cover', null, 2 );


// removes h1 tags from the block editor
function mu_remove_h1_gutenberg_editor() {
	echo '<style>
	#editor .block-library-heading-level-toolbar .components-toolbar-group button:first-child {
		width: 3px;
		min-width: auto;
		padding: 3px 0;
		pointer-events: none;
		visibility: hidden;
	}
	</style>';
}
add_action( 'admin_head', 'mu_remove_h1_gutenberg_editor' );
