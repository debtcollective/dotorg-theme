<?php
/**
 * Register and Render Block
 *
 * @since   1.0.0
 * @package Site_Functionality
 */
namespace Site_Functionality\Blocks\Faq;

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
	$wrapper_attributes = \get_block_wrapper_attributes();
	
	ob_start();

	if( isset( $attributes['question'] ) || isset( $attributes['answer'] ) ) : 
		$uuid = uniqid( 'faq-' );
	?>

	<article id="<?php echo esc_attr( $uuid ); ?>" <?php echo $wrapper_attributes; ?>>

		<div class="faq__question question">
			<?php
			if( $question = $attributes['question'] ) : ?>
				<h3>
					<?php echo apply_filters( 'the_title', $question ); ?>
				</h3>
				<a href="#" class="chevron">
					<svg width="27" height="42" viewBox="0 0 27 42" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0.499999 5.28333L5.41892 0.500001L26.5 21L5.41891 41.5L0.499994 36.7167L16.6622 21L0.499999 5.28333Z" fill="white"/>
					</svg>
				</a>
			<?php
			endif; ?>
		</div>
		<div class="faq__answer answer">
			<?php
			if( $answer = $attributes['answer'] ) : ?>
				<div class="answer-wrapper">
					<?php echo wp_kses_post( $answer ); ?>
				</div>
				<?php
			endif; ?>
		</div>
	</article>

	<?php
	endif;
    $return = apply_filters( __NAMESPACE__ . '\RenderHTML', ob_get_clean(), $attributes, $content, $block );

    return $return;
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