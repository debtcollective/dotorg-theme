<?php
/**
 * The content footer containing widgets.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package DebtCollective
 */
?>
<aside class="content-footer widget-area">

	<?php
	if ( ! is_front_page() && is_active_sidebar( 'sidebar-2' ) ) :
		?>
			<?php dynamic_sidebar( 'sidebar-2' ); ?>
		
		<?php
	endif;
	?>
</aside><!-- .secondary -->
