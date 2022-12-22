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
if ( ! class_exists( '\EM_Events' ) ) {
	return;
}
get_header();

$has_sidebar = \get_post_meta( get_the_ID(), 'has_sidebar', true );
$page        = isset( $_GET['pno'] ) ? (int) $_GET['pno'] : \get_query_var( 'pno', 1 );
$scope       = ( $scope = \get_post_meta( \get_the_ID(), 'event_scope_upcoming', true ) ) ? \esc_attr( $scope ) : 'future';
$sort        = ( $sort = \get_post_meta( get_the_ID(), 'event_sort_upcoming', true ) ) ? strtoupper( \esc_attr( $sort ) ) : 'ASC';

$args = array(
	'scope'          => $scope,
	'limit'          => get_option( 'dbem_events_default_limit', 24 ),
	'order'          => $sort,
	'orderby'        => get_option( 'dbem_events_default_orderby', 'event_start_date,event_start_time,event_name' ),
	'pagination'     => 1,
	'no_results_msg' => '<p class="no-events">' . get_option( 'dbem_no_events_message', esc_html( 'There are no events at this time.', 'debtcollective' ) ) . '</p>',
);
?>

<div class="container site-main">
	<main id="main" class="content-container">

		<header class="page-header">
			<?php
			the_title( '<h1 class="page-title">', '</h1>' );
			?>
			<div class="archive-description">
				<?php the_content(); ?>
			</div>
		</header><!-- .page-header -->

		<div class="events_list <?php echo esc_attr( $scope ); ?>">
	
			<?php
			echo EM_Events::output( $args );
			?>
			
		</div><!-- .events_list.<?php echo esc_attr( $scope ); ?> -->

		<?php
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
