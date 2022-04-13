<?php
/**
 * Template Name: Events Page
 *
 * The template for displaying the event archive page.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package DebtCollective
 */

get_header();

$has_sidebar    = \get_post_meta( get_the_ID(), 'has_sidebar', true );
$posts_per_page = \get_option( 'posts_per_page', 12 );
if ( class_exists( '\WpActionNetworkEvents\App\Admin\Options' ) ) {
	$event_options  = \get_option( \WpActionNetworkEvents\App\Admin\Options::OPTIONS_NAME );
	$posts_per_page = isset( $event_options['events_per_page'] ) ? (int) $event_options['events_per_page'] : $posts_per_page;
}
$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
?>

<div class="container site-main">
	<main id="main" class="content-container">

		<header class="page-header">
			<?php
			the_title( '<h1 class="page-title">', '</h1>' );
			if( 1 === $paged ) {
				the_content( '<div class="archive-description">', '</div>' );
			}
			?>
		</header><!-- .page-header -->

		<?php
		/**
		 * Upcoming Events
		 */
		if( 1 === $paged ) {
			$scope   = ( $scope = get_post_meta( get_the_ID(), 'event_scope_upcoming', true ) ) ? esc_attr( $scope ) : 'future';
			$sort    = ( $sort = get_post_meta( get_the_ID(), 'event_sort_upcoming', true ) ) ? strtoupper( esc_attr( $sort ) ) : 'ASC';
			$heading = ( $heading = get_post_meta( get_the_ID(), 'event_heading_upcoming', true ) ) ? esc_html( $heading ) : esc_html__( 'Upcoming', 'debtcollective' );

			$events = DebtCollective\Inc\get_event_ids( $scope );

			$args = array(
				'post_type'      => array( 'an_event' ),
				'posts_per_page' => $posts_per_page,
				'orderby'        => 'meta_value',
				'order'          => $sort,
				'meta_key'       => 'start_date',
				'meta_type'      => 'DATETIME',
				'post__in'       => $events,
			);

			$query = new \WP_Query( $args );

			if ( $query->have_posts() ) :
				?>

				<section class="events upcoming">

					<header class="events__header">
						<h2 class="events__title"><?php echo $heading; ?></h2>
					</header>

					<div class="events__list">
			
						<?php
						/* Start the Loop */
						while ( $query->have_posts() ) :
							$query->the_post();
							/**
							 * Include the Post-Format-specific template for the content.
							 * If you want to override this in a child theme, then include a file
							 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
							 */
							get_template_part( 'template-parts/content', get_post_type() );

						endwhile;
						?>

					</div>

				</section>

				<?php
				wp_reset_postdata();

			endif;
		}

		/**
		 * Past Events
		 */
		$scope   = ( $scope = get_post_meta( get_the_ID(), 'event_scope', true ) ) ? esc_attr( $scope ) : 'past';
		$sort    = ( $sort = get_post_meta( get_the_ID(), 'event_sort', true ) ) ? strtoupper( esc_attr( $sort ) ) : 'DESC';
		$heading = ( $heading = get_post_meta( get_the_ID(), 'event_heading', true ) ) ? esc_html( $heading ) : esc_html__( 'Past', 'debtcollective' );

		$events = DebtCollective\Inc\get_event_ids( $scope );

		// $paged          = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1;

		$args = array(
			'post_type'      => array( 'an_event' ),
			'paged'          => $paged,
			'posts_per_page' => $posts_per_page,
			'orderby'        => 'meta_value',
			'order'          => $sort,
			'meta_key'       => 'start_date',
			'meta_type'      => 'DATETIME',
			'post__in'       => $events,
		);

		$query = new \WP_Query( $args );

		if ( $query->have_posts() ) :
			?>

			<section class="events past">

				<header class="events__header">
					<h2 class="events__title"><?php echo $heading; ?></h2>
				</header>
				
				<div class="events__list">

					<?php
					/* Start the Loop */
					while ( $query->have_posts() ) :
						$query->the_post();
						/**
						 * Include the Post-Format-specific template for the content.
						 * If you want to override this in a child theme, then include a file
						 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
						 */
						get_template_part( 'template-parts/content', get_post_type() );

					endwhile;
					?>

				</div>

				<?php
				debtcollective_display_numeric_pagination( null, $query );
				?>

			</section>

			<?php
			wp_reset_postdata();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif;

		if ( ! $has_sidebar ) :

			get_sidebar( 'content-footer' );

		endif;
		?>

	</main><!-- #main -->

	<?php
	if ( $has_sidebar ) :

		get_sidebar();

	endif;
	?>
</div><!-- .container -->

<?php get_footer(); ?>
