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
 * Get timezone based on longitude and latitude
 *
 * @param string $cur_lat
 * @param string $cur_long
 * @param string $country_code
 * @return mixed timezone || 'unknown'
 */
function get_nearest_timezone( $cur_lat, $cur_long, $country_code = '' ) {
    $timezone_ids = ( $country_code ) ? \DateTimeZone::listIdentifiers( \DateTimeZone::PER_COUNTRY, $country_code )
                                    : \DateTimeZone::listIdentifiers();

    if( $timezone_ids && is_array( $timezone_ids ) && isset( $timezone_ids[0] ) ) {

        $time_zone = '';
        $tz_distance = 0;

        //only one identifier?
        if ( count($timezone_ids) == 1 ) {
            $time_zone = $timezone_ids[0];
        } else {

            foreach( $timezone_ids as $timezone_id ) {
                $timezone = new \DateTimeZone( $timezone_id );
                $location = $timezone->getLocation();
                $tz_lat   = $location['latitude'];
                $tz_long  = $location['longitude'];

                $theta    = $cur_long - $tz_long;
                $distance = ( sin( deg2rad( $cur_lat ) ) * sin( deg2rad( $tz_lat ) ) ) 
                + ( cos( deg2rad( $cur_lat ) ) * cos( deg2rad( $tz_lat ) ) * cos( deg2rad( $theta ) ) );
                $distance = acos( $distance );
                $distance = abs( rad2deg( $distance ) );
                // echo '<br />'.$timezone_id.' '.$distance; 

                if ( !$time_zone || $tz_distance > $distance ) {
                    $time_zone   = $timezone_id;
                    $tz_distance = $distance;
                } 

            }
        }
        return  $time_zone;
    }
    return 'unknown';
}

/**
 * Convert a string to currency-formatted number
 *
 * @param string $string
 * @param boolean $decimal
 * @return float $formatted
 */
function convert_string_to_number( $string, $decimal = true, $trim = true ) {
	$pattern = '/[^0-9\.{1}]/';
	// $cleaned_number = preg_replace( $pattern, '', $string );
	$cleaned_number = filter_var( preg_replace( $pattern, '', $string ), FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION );
	$formatted = number_format( $cleaned_number, $decimal ? 2 : 0 );
	$formatted = $trim ? str_replace( '.00', '', $formatted ) : $formatted;
	return $formatted;
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