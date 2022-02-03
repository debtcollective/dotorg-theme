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
	if ( ! is_front_page() && is_active_sidebar( 'content-footer' ) ) :
		?>
			<?php dynamic_sidebar( 'content-footer' ); ?>
		
		<?php
	endif;
	?>
</aside><!-- .secondary -->
