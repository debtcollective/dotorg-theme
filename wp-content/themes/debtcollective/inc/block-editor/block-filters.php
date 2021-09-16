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
 * @param array $block
 * @return string
 */
function custom_render_block_core_cover (
	string $block_content, 
	array $block
): string 
{
	if (
		$block['blockName'] === 'core/cover' && 
		!is_admin() &&
		!wp_is_json_request()
	) {
		// var_dump( $block );
	}

	return $block_content;
}

add_filter( 'render_block', __NAMESPACE__. '\custom_render_block_core_cover', null, 2 );