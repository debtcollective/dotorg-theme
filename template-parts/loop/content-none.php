<?php
/**
 * Template part for displaying no posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package DebtCollective
 */
?>

<header class="page-header">
	<?php
	the_archive_title( '<h1 class="page-title">', '</h1>' );
	the_archive_description( '<div class="archive-description">', '</div>' );
	?>
</header><!-- .page-header -->
<div class="post__list none">
	<p><?php esc_html_e( 'No items found.', 'debtcollective' ); ?></p>
</div>