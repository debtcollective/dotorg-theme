<?php
/**
 * Block Styles
 *
 * A place to put custom block styles.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/
 *
 * @package DebtCollective
 */
namespace DebtCollective\Inc;

\register_block_style(
    'core/list', [
    'name'         => 'inline-bullet-list',
    'label'        => __( 'Inline Bullet List', 'debtcollective' ),
    ]
);

\register_block_style(
    'core/list', [
    'name'         => 'bullet-list',
    'label'        => __( 'Bullet List', 'debtcollective' ),
    ]
);

/**
 * Unregister Core Block Styles
 *
 * @see https://developer.wordpress.org/reference/functions/unregister_block_style/
 */
// \unregister_block_style( 'core/button', 'fill' );
// \unregister_block_style( 'core/button', 'outline' );

// \unregister_block_style( 'core/image', 'rounded' );
