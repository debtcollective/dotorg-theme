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

get_header();

$has_sidebar = \get_post_meta( get_the_ID(), 'has_sidebar', true );
?>

<div class="container site-main">
	<main id="main" class="content-container">

		<header class="page-header">
			<?php
			the_title( '<h1 class="page-title">', '</h1>' );
			the_content( '<div class="archive-description">', '</div>' );
			?>
		</header><!-- .page-header -->

		<?php
		$date_time      = new \DateTime();
		$paged          = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1;
		$posts_per_page = \get_option( 'posts_per_page', 12 );
		$sort           = ( $sort = get_post_meta( get_the_ID(), 'event_sort', true ) ) ? strtoupper( esc_attr( $sort ) ): 'DESC';
		if ( class_exists( 'WpActionNetworkEvents\App\Admin\Options' ) ) {
			$event_options  = \get_option( WpActionNetworkEvents\App\Admin\Options::OPTIONS_NAME );
			$posts_per_page = isset( $event_options['events_per_page'] ) ? (int) $event_options['events_per_page'] : $posts_per_page;
		}
		$scope = get_post_meta( get_the_ID(), 'event_scope', true );
		$args  = array(
			'post_type'  => array( 'an_event' ),
			'paged'      => $paged,
			'orderby'    => 'meta_value',
			'order'      => $sort,
			'meta_key'   => 'start_date',
			'meta_type'  => 'DATETIME',
			'meta_query' => array(
				array(
					'relation' => 'OR',
					array(
						'key'     => 'is_hidden',
						'compare' => 'NOT EXISTS',
					),
					array(
						'key'     => 'is_hidden',
						'value'   => '1',
						'compare' => '!=',
					),
					array(
						'key'     => 'is_hidden',
						'value'   => true,
						'compare' => '!=',
					),
				),
				array(
					'relation' => 'OR',
					array(
						'key'     => 'hidden',
						'compare' => 'NOT EXISTS',
					),
					array(
						'key'     => 'hidden',
						'value'   => '1',
						'compare' => '!=',
					),
					array(
						'key'     => 'hidden',
						'value'   => true,
						'compare' => '!=',
					),
				),
				array(
					'key'     => 'visibility',
					'value'   => 'private',
					'compare' => '!=',
				),
			),
		);

		if ( 'future' === $scope ) {
			$args['meta_query'][] = array(
				'key'     => 'start_date',
				'value'   => $date_time->format( 'c' ),
				'compare' => '>',
			);
		} elseif ( 'past' === $scope ) {
			$args['meta_query'][] = array(
				'key'     => 'start_date',
				'value'   => $date_time->format( 'c' ),
				'compare' => '<',
			);
		}

		$query = new \WP_Query( $args );
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
