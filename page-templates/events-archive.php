<?php
/**
 * Template Name: Events Archive
 *
 * The template for displaying the event archive page.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package DebtCollective
 */

get_header(); ?>

	<main id="main" class="container site-main">

		<header class="page-header">
			<?php
			the_title( '<h1 class="page-title">', '</h1>' );
			the_content( '<div class="archive-description">', '</div>' );
			?>
		</header><!-- .page-header -->

		<?php
		$date_time = new \DateTime();
		$paged     = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1;
		$args      = [
			'post_type'  => [ 'an_event' ],
			'paged'      => $paged,
			'orderby'    => 'meta_value',
			'order'      => 'DESC',
			'meta_key'   => 'start_date',
			'meta_type'  => 'DATETIME',
			'meta_query' => [
				[
					'key'     => 'start_date',
					'value'   => $date_time->format( 'c' ),
					'compare' => '<',
				],
			],
		];
		$query     = new \WP_Query( $args );
		if ( $query->have_posts() ) :
			?>

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

			wp_reset_postdata();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>

	</main><!-- #main -->

<?php get_footer(); ?>
