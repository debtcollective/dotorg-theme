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
	<?php debtcollective_render_section_navigation( $post ); ?>

	<?php debtcollective_render_subpage_navigation( $post ); ?>


	<?php
	if ( is_active_sidebar( 'sidebar-1' ) ) :
		?>
			<?php dynamic_sidebar( 'sidebar-1' ); ?>
		
		<?php
	endif;
	?>
</aside><!-- .secondary -->
