<?php
/**
 * Register and Render Block
 *
 * @since   1.0.0
 * @package Site_Functionality
 */
namespace Site_Functionality\Blocks\PostMeta;

use Site_Functionality\TemplateLoader;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Render Block
 *
 * @param array $block_attributes
 * @param string $content
 * @return string
 */
function render( $attributes, $content, $block ) {
	if ( ! isset( $block->context['postId'] ) ) {
		return '';
	}

	$post_id            = $block->context['postId'];
	$wrapper_attributes = \get_block_wrapper_attributes( [ 
			'class' 	=> "post-field-{$attributes['type']}",
			'data-type'	=> $attributes['type']
		] 
	);

	$loader_params = \Site_Functionality\Blocks\get_template_params();
	$template_loader = new TemplateLoader( $loader_params );
	$template_slug = 'postmeta';

	$value = $attributes['field'] ? \get_post_meta( $post_id, $attributes['field'], true ) : '';
	$formatted_value = $value;

	switch( $attributes['type'] ) {
		case 'boolean' :
			$formatted_value = ( boolval( $value ) ? 'true' : 'false' );
			break;
		case 'currency' :
			$formatted_value = sprintf( '<span class="currency-symbol">%s</span>%s', __( '$', 'site-functionality' ), number_format( $value, 2 ) );
			break;
		case 'date' :
			$formatted_value = date( \get_option( 'date_format' ), $value );
			break;
		case 'file' :
			$formatted_value =  sprintf( '<a href="%s"%s>%s</a>', 
				wp_get_attachment_url( intval( $value ) ), 
				$attributes['hasTarget'] ? ' target="_blank"' : '',
				$attributes['label'] ? \esc_html( $attributes['label'] ) : __( 'Download File', 'site-functionality' )
			);
			break;
		case 'number' :
			$formatted_value = number_format( $value, 2 );
			break;
		case 'time' :
			$formatted_value = date( \get_option( 'time_format' ), $value );
			break;
		case 'url' :
			$formatted_value = \esc_url( $value );
			break;
	}

	ob_start();
		?>

		<?php
		$template_loader
			->setTemplateData( [
				'id'					=> \get_the_ID(),
				'wrapper_attributes'	=> $wrapper_attributes,
				'attributes'			=> $attributes,
				'value'					=> $value,
				'formatted_value'		=> $formatted_value
			] )
			->getTemplatePart( $template_slug ); ?>

		<?php
	$output = ob_get_clean();

	return $output;
}

/**
 * Registers the `site-functionality/faq` block on the server.
 */
function register() {
	\register_block_type(
		__DIR__,
		[
			'render_callback' 	=> __NAMESPACE__ . '\render',
		]
	);
}
add_action( 'init', __NAMESPACE__ . '\register' );