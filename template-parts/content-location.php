<?php
/**
 * Template part for displaying event posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package DebtCollective
 */
if ( ! class_exists( '\EM_Location' ) ) {
	return;
}
global $EM_Location;

$post_id  = get_the_ID();
$EM_Location = em_get_location( $post_id, 'post_id' );
?>

<article id="post-<?php echo $post_id; ?>" <?php \post_class( 'event-container event' ); ?>>

	<?php
	if ( has_post_thumbnail( $post_id ) ) :
		?>
		<div class="event__image wp-block-cover">
			<?php echo get_the_post_thumbnail( $post_id, 'full', array( 'class' => 'event__thumbnail wp-block-cover__image-background' ) ); ?>
		</div>

		<?php
	endif;
	?>
	
	<header class="event_header">
		<h2 class="event__title"><?php the_title(); ?></h2>
	</header>

	<div class="event__meta post-meta">
		<div class="event__location">
			<div class="event__location-address">
				<div class="event__address">
					<div class="event__location-street"><?php echo $EM_Location->output( '#_LOCATIONADDRESS' ); ?></div>
					<div class="event__location-city"><?php echo $EM_Location->output( '#_LOCATIONTOWN' ); ?></div>
					<div class="event__location-state"><?php echo $EM_Location->output( '#_LOCATIONSTATE' ); ?></div>
					<div class="event__location-zip"><?php echo $EM_Location->output( '#_LOCATIONPOSTCODE' ); ?></div>
				</div>
			</div>
		</div>
	</div>

	<div class="event__content">
		<?php echo $EM_Location->output( '#_LOCATIONNOTES' ); ?>
	</div>

	<footer class="event__footer">
		<div class="post-meta event__meta event__location-map"><?php echo $EM_Location->output( '#_LOCATIONMAP' ); ?></div>
	</footer>

</article><!-- #post-## -->
