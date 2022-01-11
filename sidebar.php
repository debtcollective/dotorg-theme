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
	if ( is_active_sidebar( 'above-nav' ) ) :
		?>
			<?php dynamic_sidebar( 'above-nav' ); ?>
	<?php
	endif;
	?>

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

</aside><!-- .secondary -->
