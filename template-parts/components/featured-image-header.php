<?php
/**
 * Template part for displaying featured image has hero header.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package DebtCollective
 */
?>
<div class="featured-image-header" role="banner">
	<?php the_post_thumbnail( 'full', array(
		'class'	=> 'image',
		'title' => esc_attr( get_the_title() ),
	) ); ?>
	<div class="container">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</div>
</div><!-- .entry-header -->
