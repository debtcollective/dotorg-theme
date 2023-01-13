<?php
/**
 * Template part for displaying no posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package DebtCollective
 */
$post_type = get_post_type();
$post_type_obj = get_post_type_object( $post_type );
$slug = sanitize_title( $post_type_obj->labels->name );
?>

<header class="page-header">
	<?php
	the_archive_title( '<h1 class="page-title">', '</h1>' );
	the_archive_description( '<div class="archive-description">', '</div>' );
	?>
</header><!-- .page-header -->
<div class="{$slug}__list none">
	<?php esc_html_e( sprintf( 'No %s Found.', $post_type_obj->labels->name ), 'debtcollective' ); ?>
	<?php
	if( 'post' === $post_type ) :
		?>
		<?php get_search_form(); ?>
		<?php
	endif;
	?>
</div>