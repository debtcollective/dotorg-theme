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

	<ul>
		<?php
		$args = [
			'child_of' 	=> $post->post_parent,
			'depth' 	=> 1,
			'title_li'	=> false
		];

		wp_list_pages( $args );
		?>
	</ul>

	<?php
	if ( is_active_sidebar( 'sidebar-1' ) ) :
		?>
			<?php dynamic_sidebar( 'sidebar-1' ); ?>
		
		<?php
	endif; ?>
</aside><!-- .secondary -->
