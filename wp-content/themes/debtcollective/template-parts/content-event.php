<?php
/**
 * Template part for displaying event posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package DebtCollective
 */
$post_id = get_the_ID();
$date_format = $args['dateFormat'];
$time_format = $args['timeFormat'];
$default_timezone = \get_option( 'timezone_string' );
$timezone = \get_post_meta( $post_id, 'timezone', true ) ?? $default_timezone;
$raw_start_date = \get_post_meta( $post_id, 'start_date', true );
$raw_end_date = \get_post_meta( $post_id, 'end_date', true );
$start_datetime = new \DateTime( $raw_start_date );
$end_datetime = $raw_end_date ? new \DateTime( $raw_end_date ) : null;
$formatted_start_date = $start_datetime->format( $date_format );
$formatted_start_time = $start_datetime->format( $time_format );
$formatted_end_time = $end_datetime ? $end_datetime->format( $time_format ) : null;

/** Get timezone abbreviation */
$generic_date = new \DateTime( $raw_start_date );
$generic_date->setTimezone( new \DateTimeZone( $timezone ) );
$timezone_abbr = $generic_date->format( 'T' );
?>

<article <?php \post_class( 'event-container event' ); ?>>
	<a href="<?php echo \esc_url( \get_permalink() ); ?>">
		<?php if( \has_term( '', $taxonomy, $post_id ) ) : 
			$tags = \wp_get_post_terms( $post_id, $taxonomy, [ 'fields' => 'names' ] );
			?>

			<div class="event__tag entry-meta">
				<?php echo \esc_html( $tags[0] ); ?>
			</div>

		<?php endif; ?>

		<h3 class="event__title entry-title<?php echo \has_term( 'welcome-posts', $taxonomy, $post_id ) ? ' sr-only' : ''; ?>"><?php the_title(); ?></h3>

		<div class="event__date">
			<time dateTime=<?php echo \esc_attr( $raw_start_date ); ?>><?php echo $formatted_start_date; ?></time>
		</div>

		<div class="event__time event__time-start">
			<?php 
				printf( '<time dateTime=%1$s>%2$s</time> %3$s <span class="timezone-abbr">%4$s</span>',
					\esc_attr( $raw_start_date ),
					$formatted_start_time,
					( $formatted_end_time ) ? sprintf( '<span class="separator">-</span> <time dateTime=%1$s>%2$s</time>', \esc_attr( $raw_end_date ), $formatted_end_time ) : '',
					$timezone_abbr 
				); 
			?>
		</div>

		<div class="event__location"><?php echo \esc_attr( $location ); ?></div>

	</a>

</article><!-- #post-## -->
