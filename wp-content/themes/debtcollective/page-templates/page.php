<?php
/**
 * Template Name: Full-width
 *
 * This template displays a page without a sidebar on the right side of the screen.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package DebtCollective
 */

get_header(); ?>

	<main id="main" class="container site-main">

		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'page' );

		endwhile; // End of the loop.
		?>

	</main><!-- #main -->

<?php get_footer(); ?>
