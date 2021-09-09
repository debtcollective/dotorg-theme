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
	if( $parent = $post->post_parent ) : 
		?>

		<ul>
			<?php
			$parent_title = get_post_field( 'post_title', $parent );
			$args = [
				'child_of' 	=> $parent,
				'depth' 	=> 1,
				'title_li'	=> $parent_title,
			];

			wp_list_pages( $args );
			?>
		</ul>

		<?php 
	endif; ?>

	<?php
	if ( is_active_sidebar( 'sidebar-1' ) ) :
		?>
			<?php dynamic_sidebar( 'sidebar-1' ); ?>
		
		<?php
	endif; ?>
</aside><!-- .secondary -->
