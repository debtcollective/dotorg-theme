<?php
/**
 * The sidebar containing the main widget area.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package DebtCollective
 */
?>
<aside class="sidebar primary widget-area ">
	<?php
	if( function_exists( 'is_shop' ) && is_shop() && is_active_sidebar( 'shop' ) ) :
		?>
		<div class="widgets shop">
			<?php dynamic_sidebar( 'shop' ); ?>
		</div>
		<?php
	endif;
	?>
	<?php
	if ( is_active_sidebar( 'above-nav' ) ) :
		?>
		<?php dynamic_sidebar( 'above-nav' ); ?>
		<?php
	endif;
	?>
</aside>
<aside class="sidebar subnav widget-area ">
	<?php
	$section_navigation = \get_post_meta( $post->ID, 'display_section_navigation', true );
	if( 'children' === $section_navigation ) : ?>
		<?php debtcollective_render_subpage_navigation( $post ); ?>
	<?php elseif ( ! empty( $section_navigation ) ) : ?>
		<?php debtcollective_render_section_navigation( $post ); ?>
	<?php endif; ?>
	<?php
	if ( is_active_sidebar( 'below-nav' ) ) :
	?>
			<?php dynamic_sidebar( 'below-nav' ); ?>
	<?php
	endif;
	?>
</aside>
<aside class="sidebar secondary widget-area ">
	<?php
		get_template_part( 'template-parts/components/join-tout', 'sidebar' );
	?>
</aside><!-- .secondary -->
