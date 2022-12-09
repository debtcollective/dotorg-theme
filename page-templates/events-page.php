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
if ( ! class_exists( '\EM_Events' ) ) {
	return;
}
get_header();

$has_sidebar = \get_post_meta( get_the_ID(), 'has_sidebar', true );
$paged       = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
?>

<div class="container site-main">
	<main id="main" class="content-container">

		<header class="page-header">
			<?php
			the_title( '<h1 class="page-title">', '</h1>' );
			if ( 1 === $paged ) {
				the_content( '<div class="archive-description">', '</div>' );
			}
			?>
		</header><!-- .page-header -->

		<?php
		/**
		 * Upcoming Events
		 */
		if ( 1 === $paged ) {
			$scope   = ( $scope = get_post_meta( get_the_ID(), 'event_scope_upcoming', true ) ) ? esc_attr( $scope ) : 'future';
			$sort    = ( $sort = get_post_meta( get_the_ID(), 'event_sort_upcoming', true ) ) ? strtoupper( esc_attr( $sort ) ) : 'ASC';
			$heading = ( $heading = get_post_meta( get_the_ID(), 'event_heading_upcoming', true ) ) ? esc_html( $heading ) : esc_html__( 'Upcoming', 'debtcollective' );

			$args = array(
				'scope'         => $scope,
				'order'         => $sort,
				'limit'         => 0,
				'pagination'    => 0,
				'page_queryvar' => 'upcoming',
			);

			$events = EM_Events::get( $args );

			if ( ! empty( $events ) ) :
				?>

				<section class="events upcoming">

					<header class="events__header">
						<h2 class="events__title"><?php echo $heading; ?></h2>
					</header>

					<div class="events__list">
			
						<?php
						/* Start the Loop */
						foreach ( $events as $event ) :

							// var_dump( $event );
							/**
							 * Include the Post-Format-specific template for the content.
							 * If you want to override this in a child theme, then include a file
							 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
							 */
							get_template_part( 'template-parts/loop/content', 'event', array( 'EM_Event' => $event ) );

						endforeach;
						?>

					</div>

				</section>

				<?php

			endif;
		}

		/**
		 * Past Events
		 */
		$scope   = ( $scope = get_post_meta( get_the_ID(), 'event_scope', true ) ) ? esc_attr( $scope ) : 'past';
		$sort    = ( $sort = get_post_meta( get_the_ID(), 'event_sort', true ) ) ? strtoupper( esc_attr( $sort ) ) : 'DESC';
		$limit   = get_option( 'dbem_location_event_list_limit', get_option( 'posts_per_page' ) );
		$heading = ( $heading = get_post_meta( get_the_ID(), 'event_heading', true ) ) ? esc_html( $heading ) : esc_html__( 'Past', 'debtcollective' );

		$args = array(
			'scope'         => $scope,
			'order'         => $sort,
			'pagination'    => 1,
			'limit'         => $limit,
			'page'          => $paged,
			'page_queryvar' => 'past',
		);

		$events          = EM_Events::get( $args );
		$count           = EM_Events::$num_rows_found;
		$max_pages       = ceil( $count / $args['limit'] );
		$pagination_args = array(
			'total'   => $max_pages,
			'current' => $paged,
		);

		if ( ! empty( $events ) ) :
			?>
			<section class="events past">

				<header class="events__header">
					<h2 class="events__title"><?php echo $heading; ?></h2>
				</header>

				<div class="events__list">

					<?php
					/* Start the Loop */
					foreach ( $events as $event ) :
						/**
						 * Include the Post-Format-specific template for the content.
						 * If you want to override this in a child theme, then include a file
						 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
						 */
						get_template_part( 'template-parts/loop/content', 'event', array( 'EM_Event' => $event ) );

					endforeach;
					?>

				</div>

				<?php
				debtcollective_display_numeric_pagination( $pagination_args, null );
				?>

			</section>

			<?php
		else : ?>
			
			<!-- No Event Posts Found -->
		
			<?php
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
