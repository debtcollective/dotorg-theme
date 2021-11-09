<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package DebtCollective
 */
$display_global_header = get_theme_mod( 'display_global_header', 'true' );
$display_site_branding = get_theme_mod( 'display_site_branding', 'true' );
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>

	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php if ( $display_global_header ) : ?>
		<script type="module" src="<?php echo esc_url( 'https://unpkg.com/@debtcollective/dc-header-component@latest/dist/header/header.esm.js' ); ?>"></script>
	<?php endif; ?>

	<?php wp_head(); ?>

</head>

<body <?php body_class( 'site-wrapper' ); ?>>

	<?php wp_body_open(); ?>

	<?php if ( $display_global_header ) : ?>
		<dc-header
			logo=<?php echo esc_url( \get_stylesheet_directory_uri() . '/build/images/logo-black.png' ); ?>
			logosmall=<?php echo esc_url( \get_stylesheet_directory_uri() . '/build/images/logo-small.png' ); ?>
			community="<?php echo esc_url( 'https://community.debtcollective.org' ); ?>"
			homepage="/"
			returnurl="<?php echo esc_url( 'https://debtcollective.org' ); ?>"
			id="dc-header"
		></dc-header>
	<?php endif; ?>

	<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'debtcollective' ); ?></a>

	<header class="site-header">

		<div class="container">

			<?php
			if ( $display_site_branding ) :
				?>
				<div class="site-branding">

					<?php the_custom_logo(); ?>

					<?php if ( is_front_page() && is_home() ) : ?>
						<h1 class="site-title screen-reader-text"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					<?php else : ?>
						<p class="site-title screen-reader-text"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
					<?php endif; ?>

					<?php
					$description = get_bloginfo( 'description', 'display' );
					if ( $description || is_customize_preview() ) :
						?>
						<p class="site-description screen-reader-text"><?php echo esc_html( $description ); ?></p>
					<?php endif; ?>

				</div><!-- .site-branding -->
			<?php endif; ?>

			<?php if ( has_nav_menu( 'primary' ) || has_nav_menu( 'mobile' ) ) : ?>
				<button type="button" class="off-canvas-open" aria-expanded="false" aria-label="<?php esc_attr_e( 'Open Menu', 'debtcollective' ); ?>"></button>
			<?php endif; ?>

		</div><!-- .container -->

		<nav id="site-navigation" class="main-navigation navigation-menu" aria-label="<?php esc_attr_e( 'Main Navigation', 'debtcollective' ); ?>">
			<?php
			wp_nav_menu(
				[
					'fallback_cb'    => false,
					'theme_location' => 'primary',
					'menu_id'        => 'primary-menu',
					'menu_class'     => 'menu dropdown container',
					'container'      => false,
				]
			);
			?>
		</nav><!-- #site-navigation-->

		<?php echo do_shortcode( '[flexy_breadcrumb]' ); ?> 

	</header><!-- .site-header-->
