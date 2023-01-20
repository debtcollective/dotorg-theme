<?php
/**
 * The template for displaying archive pages.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package DebtCollective
 */
$scope = get_option( 'dbem_events_archive_scope' );
get_header(); ?>

	<main id="main" class="container site-main">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<?php
				the_archive_title( '<h1 class="page-title">', '</h1>' );
				the_archive_description( '<div class="archive-description">', '</div>' );
				?>
			</header><!-- .page-header -->

			<div class="events__list scope-<?php echo esc_attr( $scope ); ?>">

				<?php
				/* Start the Loop */
				while ( have_posts() ) :
					the_post();

					/**
					 * Include the Post-Format-specific template for the content.
					 * If you want to override this in a child theme, then include a file
					 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
					 */
					get_template_part( 'template-parts/loop/content', 'event' );

				endwhile;
				?>

			</div>

			<?php
			debtcollective_display_numeric_pagination();

		else :
			get_template_part( 'template-parts/loop/content', 'none' );
		endif;
		?>

	</main><!-- #main -->

<?php get_footer(); ?>

