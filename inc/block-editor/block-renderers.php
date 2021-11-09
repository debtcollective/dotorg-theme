<?php
/**
 * Block Patterns
 *
 * A place to put custom block patterns .
 *
 * @see https://developer . WordPress . org/block-editor/reference-guides/block-api/block-patterns/
 *
 * @package DebtCollective
 */
namespace DebtCollective\Inc;

/**
 * Modify Block Markup
 *
 * @link https://developer.wordpress.org/reference/hooks/render_block/
 *
 * @param string $content
 * @param object $block
 * @return string $content
 */
function render_sssb_block( $content, $block ) {

	if ( $block['blockName'] === 'sssb/block' ) {

		if ( ! is_array( $block['attrs'] ) ) {
			$block['attrs'] = array();
		}

		$attributes = $block['attrs'];

		if ( ! isset( $attributes['text_email'] ) || $attributes['text_email'] === '' ) {
			$attributes['text_email'] = __( 'You might be interested by this article : %s', 'debtcollective' );
		}
		if ( ! isset( $attributes['object_email'] ) || $attributes['object_email'] === '' ) {
			$attributes['object_email'] = __( 'Have a look at this article : %s', 'debtcollective' );
		}
		if ( ! isset( $attributes['text_twitter'] ) || $attributes['text_twitter'] === '' ) {
			$attributes['text_twitter'] = __( 'Hey Twitter, Have a look at this! %s', 'debtcollective' );
		}
		if ( ! isset( $attributes['show_email'] ) ) {
			$attributes['show_email'] = 1;
		}
		if ( ! isset( $attributes['show_print'] ) ) {
			$attributes['show_print'] = 1;
		}
		if ( ! isset( $attributes['show_facebook'] ) ) {
			$attributes['show_facebook'] = 1;
		}
		if ( ! isset( $attributes['show_twitter'] ) ) {
			$attributes['show_twitter'] = 1;
		}
		if ( ! isset( $attributes['colour'] ) || $attributes['colour'] === '' ) {
			$attributes['colour'] = 'original';
		}
		if ( ! isset( $attributes['display'] ) || $attributes['display'] === '' ) {
			$attributes['display'] = 'icons';
		}
		if ( ! isset( $attributes['side'] ) || $attributes['side'] === '' ) {
			$attributes['side'] = 'right';
		}

		if ( ! isset( $attributes['url'] ) || $attributes['url'] === '' ) {
			$attributes['url'] = get_permalink();
		}

		if ( $attributes['display'] === 'mail' ) {
			$div = 'table';
			$ul  = 'tr';
			$li  = 'td';
		} else {
			$div = 'div';
			$ul  = 'ul';
			$li  = 'li';
		}
		$content = '
      
          <' . $div . ' class="wp-block-social-sharing wp-block-socia-sharing">
            <' . $ul . ' class="list-social-sharing list-socia-sharing left">';

		if ( $attributes['show_email'] === 1 ) {
			$message = esc_attr( $attributes['text_email'] );
			$object  = esc_attr( $attributes['object_email'] );

			$message .= '  ' . $attributes['url'];

			$message = sprintf( $message, get_the_title() );

			$object = sprintf( $object, get_the_title() );

			$url = esc_url( 'mailto:?&subject=' . $object . '&body=' . $message, array( 'mailto' ) );

			$content   .= "<$li>";
			  $content .= '<a class="share-button share-button__email"  href=' . $url . '>';
			  $content .= '<span class="dashicons dashicons-email"></span>';
			$content   .= "</a></$li>";
		}
		if ( $attributes['show_print'] === 1 ) {
			$content   .= "<$li>";
			  $content .= '<a class="share-button share-button__print" href="javascript:window . print();">';
			  $content .= '<span class="dashicons dashicons-printer"></span>';
			$content   .= "</a></$li>";
		}

		if ( $attributes['show_facebook'] === 1 ) {
			$url        = esc_url( 'https://www.facebook.com/sharer/sharer.php?u=' . $attributes['url'] );
			$content   .= "<$li>";
			  $content .= '<a onclick="window . open( this . href, \'_blank\', \'screenX=50,left=50,screenY=50,top=50, width=550, height=450,toolbar=no, location=no,resizable=yes, scrollbars=yes\' );return false;"
                class="share-button share-button__facebook" href="' . $url . '">';
			  $content .= '<span class="dashicons dashicons-facebook"></span>';
			$content   .= "</a></$li>";
		}
		if ( $attributes['show_twitter'] === 1 ) {
			$message = esc_attr( $attributes['text_twitter'] );
			$message = sprintf( $message, get_the_title() );

			$url = esc_url( 'https://twitter . com/intent/tweet?text=' . $message . '&url=' . $attributes['url'] );

			$content   .= "<$li>";
			  $content .= '<a onclick="window . open( this . href, \'_blank\', \'screenX=50,left=50,screenY=50,top=50, width=550, height=450,toolbar=no, location=no,resizable=yes, scrollbars=yes\' );return false;"
                class="share-button share-button_twitter" href="' . $url . '">';
			  $content .= '<span class="dashicons dashicons-twitter"></span>';
			$content   .= "</a></$li>";
		}

		  $content .= "</$ul></$div>";
	}

	return $content;
}
\add_filter( 'render_block', __NAMESPACE__ . '\render_sssb_block', 10, 2 );
