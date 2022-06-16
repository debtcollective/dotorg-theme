<?php
/**
 * The template for displaying archive pages.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package DebtCollective
 */
get_header(); ?>

	<main id="main" class="container site-main">

		<?php
		if ( have_posts() ) :
			$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
			$limit = get_option( 'dbem_location_event_list_limit', get_option( 'posts_per_page' ) );
			?>

			<header class="page-header">
				<?php
				the_archive_title( '<h1 class="page-title">', '</h1>' );
				if ( 1 === $paged ) {
					the_archive_description( '<div class="archive-description">', '</div>' );
				}
				?>
			</header><!-- .page-header -->

			<?php
			/**
			 * Upcoming Events
			 */
			if ( 1 === $paged && class_exists( '\EM_Events' ) ) {
				/**
				 * @link https://wp-events-plugin.com/documentation/event-search-attributes/
				 * future, past, today, tomorrow, month, next-month, 1-months, 2-months, 3-months, 6-months, 12-months, all
				 */
				$scope   = 'future';
				$sort    = ( $sort = get_post_meta( get_the_ID(), 'event_sort', true ) ) ? strtoupper( esc_attr( $sort ) ) : 'DESC';
				$heading = ( $heading = get_post_meta( get_the_ID(), 'event_heading_upcoming', true ) ) ? esc_html( $heading ) : esc_html__( 'Upcoming', 'debtcollective' );

				$args = array(
					'scope'         => $scope,
					'order'         => $sort,
					'groupby'       => 'scope',
					'limit'         => 0,
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
								/**
								 * Include the Post-Format-specific template for the content.
								 * If you want to override this in a child theme, then include a file
								 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
								 */
								get_template_part( 'template-parts/loop/content', get_post_type(), array( 'post_id' => $event->post_id ) );

							endforeach;
							?>

						</div>

					</section>

					<?php

				endif;
			}
			?>

			<section class="events past">
				<?php
				$heading = ( $heading = get_post_meta( get_the_ID(), 'event_heading', true ) ) ? esc_html( $heading ) : esc_html__( 'Past', 'debtcollective' );
				?>

				<header class="events__header">
					<?php
					if ( ! empty( $events ) ) :
						?>
						<h2 class="events__title"><?php echo $heading; ?></h2>
						<?php
					endif;
					?>
				</header>
				
				<div class="events__list">

					<?php
					/* Start the Loop */
					while ( have_posts() ) :
						the_post();

							get_template_part( 'template-parts/loop/content', get_post_type() );

					endwhile;
					?>
				</div>

			<?php
			debtcollective_display_numeric_pagination();
			?>
			</section><!-- //.events.past -->


			<?php
		else :
			get_template_part( 'template-parts/content', 'none' );
		endif;
		?>

	</main><!-- #main -->

<?php get_footer(); ?>
