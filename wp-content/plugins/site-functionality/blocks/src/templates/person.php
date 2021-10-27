<?php
/**
 * Template part for displaying a person posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package site-functionality
 */
$attributes = $data->attributes;
$user = $data->person;
$user_id = (int) $user->data->ID;
?>
<article id="user-<?php echo $user_id ?>" class='person-container person'>
	<?php if( $attributes['display']['showAvatar'] ) : ?>
		<picture class="person__avatar vcard"><?php echo get_avatar( intval( $user_id ), 120 ); ?></picture>
	<?php endif; ?>
	<div class="person_details">
		<?php if( $attributes['display']['showName'] ) : ?>
			<h3 class="person__name"><?php printf( '%s %s', $user->first_name ?? '', $user->last_name ?? '' ); ?></h3>
		<?php endif; ?>
		<?php if( $attributes['display']['showTitle'] ) : ?>
			<div class="person__title"><?php echo get_user_meta( $user_id, 'title', true ) ?? ''; ?></div>
		<?php endif; ?>
		<?php if( $attributes['display']['showBio'] ) : ?>
			<div class="person__bio"><?php echo wp_kses_post( $user->description ); ?></div>
		<?php endif; ?>
	</div>
</article><!-- #post-## -->
