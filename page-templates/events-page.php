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

				<div class="events__list <?php echo esc_attr( $scope ); ?>">
				
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

				</div><!-- .events__list -->

				<?php debtcollective_display_numeric_pagination( $pagination_args, null ); ?>

				<?php

			endif;
		}

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
