<?php
/**
 * Template part for displaying a person posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package site-functionality
 */
$user = $args;
$user_id = (int) $args->data->ID;
?>

<article id="user-<?php echo $user_id ?>" class='person-container person'>
	<picture class="person__avatar vcard"><?php echo get_avatar( intval( $user_id ), 120 ); ?></picture>
	<div class="person_details">
		<h3 class="person__name"><?php printf( '%s %s', $user->first_name ?? '', $user->last_name ?? '' ); ?></h3>
		<div class="person__title"><?php echo get_user_meta( $user_id, 'title', true ) ?? ''; ?></div>
	</div>
</article><!-- #post-## -->
