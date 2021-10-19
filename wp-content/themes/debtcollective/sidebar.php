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
		$parent_title = get_post_field( 'post_title', $parent );
		?>
		<nav class="pagenav">
			<h3 class="widget-title"><?php echo esc_attr( $parent_title ); ?></h3>

			<ul>
				<?php
				$args = [
					'child_of' 	=> $parent,
					'depth' 	=> 1,
					'title_li'	=> false,
				];

				wp_list_pages( $args );
				?>
			</ul>
		</nav>

		<?php 
	endif; ?>

	<?php
	if ( is_active_sidebar( 'sidebar-1' ) ) :
		?>
			<?php dynamic_sidebar( 'sidebar-1' ); ?>
		
		<?php
	endif; ?>
</aside><!-- .secondary -->
