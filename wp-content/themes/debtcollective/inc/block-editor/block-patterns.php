<?php
/**
 * Block Patterns
 *
 * A place to put custom block patterns.
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-patterns/
 *
 * @package DebtCollective
 */
namespace DebtCollective\Inc;

/**
 * Regster custom patterns
 *
 * @return void
 */
function register_block_patterns() {
    /**
     * Post Grids
     */
    // \register_block_pattern();
}
   
add_action( 'init', __NAMESPACE__ . '\register_block_patterns' );