<?php
/**
 * Server-side rendering of the `wp-action-network-events/event-query` block.
 *
 * @package WordPress
 */
namespace Site_Functionality\Blocks\UserQuery;

use Site_Functionality\TemplateLoader;

/**
 * Renders the `wp-action-network-events/event-query` block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Returns the filtered post date for the current post wrapped inside "time" tags.
 */
function render( $attributes, $content, $block ) {

	$block_type_attributes = $block->block_type->attributes;
	$default_query = $block_type_attributes['query']['default'];
	$default_display = $block_type_attributes['display']['default'];

	$defaults = [
		'number'		=> \get_option( 'posts_per_page' ),
		'paged'         => 1,
		'role'			=> [],
		'orderby'		=> 'display_name'
	];

	$args = array_merge(
		$attributes['query'],
		$attributes['display'],
		$attributes,
		[
			'number'		=> $attributes['query']['per_page'],
		]
	);

	$args = wp_parse_args( $args, $defaults );

	$query_args = [
		'number'		=> $args['number'],
		'paged'         => $args['paged'],
		'order'			=> $args['order'],
		'orderby'		=> $args['orderby'],
	];

	if( $roles = $args['roles'] ) {
		$query_args = $roles;
	}

	$query = new \WP_User_Query( $query_args );

	$output = '';

	if( $query->get_results() ) : 

		$wrapper_attributes = \get_block_wrapper_attributes( [ 'class' => 'people people__list' ] );
		$loader_params = \Site_Functionality\Blocks\get_template_params();
		$template_loader = new TemplateLoader( $loader_params );
		
		ob_start();
		?>

		<div <?php echo $wrapper_attributes; ?>>

		<?php
		foreach( $query->get_results() as $person ) :

			$template_loader
			->setTemplateData( [
				'person'				=> $person,
				'attributes'			=> $attributes,
			] )
			->getTemplatePart( 'person' ); ?>

		<?php
		endforeach; ?>
		
		</div>

	<?php
	$output = ob_get_clean();
	wp_reset_postdata();

	endif;

	return $output;
}

/**
 * Registers the `site-functionality/user-query` block on the server.
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
