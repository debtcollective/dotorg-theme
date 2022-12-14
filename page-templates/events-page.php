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
$scope       = ( $scope = get_post_meta( get_the_ID(), 'event_scope_upcoming', true ) ) ? esc_attr( $scope ) : 'future';
$sort        = ( $sort = get_post_meta( get_the_ID(), 'event_sort_upcoming', true ) ) ? strtoupper( esc_attr( $sort ) ) : 'ASC';
?>

<div class="container site-main">
	<main id="main" class="content-container">

		<header class="page-header">
			<?php
			the_title( '<h1 class="page-title">', '</h1>' );
			?>
		</header><!-- .page-header -->

		<?php
		apply_filters( 'em_content_events_args', 'DebtCollective\Inc\add_event_args' );
		the_content();

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
