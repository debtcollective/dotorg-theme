<?php
/**
 * The template for displaying all single pages.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package DebtCollective
 */

get_header(); ?>

	<div class="container site-main">
		<main id="main" class="content-container">

			<?php
			while ( have_posts() ) :
				the_post();

				get_template_part( 'template-parts/content', 'page' );

			endwhile; // End of the loop.
			?>

		</main><!-- #main -->

		<?php get_sidebar(); ?>
	</div>

<?php get_footer(); ?>
