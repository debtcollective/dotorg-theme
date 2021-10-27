<?php
/**
 * The sidebar containing the main widget area.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package DebtCollective
 */
?>
<aside class="sidebar widget-area">

	<?php 
	$section_navigation = \get_post_meta( $post->ID, 'display_section_navigation', true );
	if( 'sibling' === $section_navigation ) : ?>

		<?php debtcollective_render_section_navigation( $post ); ?>

	<?php elseif ( 'children' === $section_navigation ) : ?>

		<?php debtcollective_render_subpage_navigation( $post ); ?>

	<?php endif; ?>

	<?php
	if ( is_active_sidebar( 'sidebar-1' ) ) :
		?>
			<?php dynamic_sidebar( 'sidebar-1' ); ?>
		
		<?php
	endif;
	?>
</aside><!-- .secondary -->
