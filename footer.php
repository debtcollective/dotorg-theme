<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package DebtCollective
 */

?>

	<footer class="site-footer">
		<?php debtcollective_display_social_network_links(); ?>

		<?php
		if ( is_active_sidebar( 'footer' ) ) :
			?>
			<div class="footer-widgets widget-area">
				<?php dynamic_sidebar( 'footer' ); ?>
			</div>
			
			<?php
		endif;
		?>

		<nav id="site-footer-navigation" class="footer-navigation navigation-menu" aria-label="<?php esc_attr_e( 'Footer Navigation', 'debtcollective' ); ?>">
			<?php
			wp_nav_menu(
				[
					'fallback_cb'    => false,
					'theme_location' => 'footer',
					'menu_id'        => 'footer-menu',
					'menu_class'     => 'menu container',
					'container'      => false,
					'depth'          => 2,
				]
			);
			?>
		</nav><!-- #site-navigation-->

		<div class="container site-info">
			<?php debtcollective_display_copyright_text(); ?>

			<nav id="site-privacy-navigation" class="privacy-navigation navigation-menu" aria-label="<?php esc_attr_e( 'Privacy Navigation', 'debtcollective' ); ?>">
				<?php
				wp_nav_menu(
					[
						'fallback_cb'    => false,
						'theme_location' => 'privacy',
						'menu_id'        => 'privacy-menu',
						'menu_class'     => 'menu container',
						'container'      => false,
						'depth'          => 1,
					]
				);
				?>
			</nav><!-- #site-navigation-->

		</div><!-- .site-info -->

	</footer><!-- .site-footer container-->

	<?php wp_footer(); ?>

</body>

</html>
