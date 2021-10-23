<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package DebtCollective
 */

get_header(); ?>

	<main id="main" class="container site-main">

		<?php
		while ( have_posts() ) :
			the_post();

			if ( 'post' === get_post_type() ) :

				get_template_part( 'template-parts/content', get_post_format() );

			else :

				get_template_part( 'template-parts/content', get_post_type() );

			endif;

			the_post_navigation();

		endwhile; // End of the loop.
		?>

	</main><!-- #main -->

<?php get_footer(); ?>
