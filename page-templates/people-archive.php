<?php
/**
 * Template Name: People
 *
 * The template for displaying a people list page.
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
		$paged    = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1;
		$per_page = get_option( 'posts_per_page' );
		$args     = [
			'number'  => $per_page,
			'paged'   => $paged,
			'role'    => [],
			'orderby' => 'display_name',
		];
		$query    = new \WP_User_Query( $args );
		if ( ! empty( $query->get_results() ) ) :
			?>

			<div class="people people__list">

				<?php
				/* Start the Loop */
				foreach ( $query->get_results() as $person ) :
					/**
					 * Include the Post-Format-specific template for the content.
					 * If you want to override this in a child theme, then include a file
					 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
					 */
					get_template_part( 'template-parts/content', 'person', $person );

				endforeach;
				?>

			</div>

			<?php
			debtcollective_display_numeric_pagination( null, $query );

			wp_reset_postdata();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>

		<?php get_sidebar( 'content-footer' ); ?>

	</main><!-- #main -->

<?php get_footer(); ?>
