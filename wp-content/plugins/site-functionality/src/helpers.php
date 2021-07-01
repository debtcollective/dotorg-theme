<?php
/**
 * Helper Functions
 *
 * @since   1.0.0
 * @package Site_Functionality
 */

namespace Site_Functionality;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Debug Helper
 */
if( !function_exists( 'console_log' ) ) {
function console_log( $data ) {
    $output = $data;
    if ( is_array( $output ) )
        $output = implode( ',', $output );

    echo "<script>console.log( $output );</script>";
}
}

/**
 * Simple helper to debug to the console
 *
 * @param $data object, array, string $data
 * @param $context string  Optional a description.
 *
 * @return string
 */
function debug_to_console( $data, $context = 'Debug in Console' ) {

    // Buffering to solve problems frameworks, like header() in this and not a solid return.
    ob_start();

    $output  = 'console.info(\'' . $context . ':\');';
    $output .= 'console.log(' . json_encode( $data ) . ');';
    $output  = sprintf( '<script>%s</script>', $output );

    echo $output;
}