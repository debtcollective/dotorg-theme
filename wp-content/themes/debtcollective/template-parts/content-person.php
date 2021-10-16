<?php
/**
 * Template part for displaying a person post.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package DebtCollective
 */
$user = $args;
$user_id = (int) $args->data->ID;
?>

<article id="user-<?php echo $user_id ?>" class='person-container person vcard'>
	<picture class="person__avatar"><?php echo get_avatar( intval( $user_id ), 120 ); ?></picture>
	<div class="person_details">
		<h3 class="person__name"><?php printf( '%s %s', esc_html( $user->first_name ) ?? '', esc_html( $user->last_name ) ?? '' ); ?></h3>
		<div class="person__title"><?php echo esc_html( get_user_meta( $user_id, 'title', true ) ?? '' ); ?></div>
	</div>
</article><!-- #post-## -->
