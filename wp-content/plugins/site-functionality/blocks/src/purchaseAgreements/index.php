<?php
/**
 * Server-side rendering of the `wp-action-network-events/event-query` block.
 *
 * @package WordPress
 */
namespace Site_Functionality\Blocks\PurchaseAgreements;

use Site_Functionality\PostTypes\PurchaseAgreement;
use Site_Functionality\Taxonomies\PurchaseAgreementType;
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

	$defaults = array_merge(
		[
			'post_type'			=> PurchaseAgreement::POST_TYPE['id'],
			'taxonomy'			=> PurchaseAgreementType::TAXONOMY['id'],
			'wrapperTagName'	=> $block_type_attributes['wrapperTagName']['default'],
			'tagName'			=> $block_type_attributes['tagName']['default'],
		],
		$default_query,
		$default_display,
		[
			'posts_per_page'		=> $default_query['per_page']
		]
	);

	$args = array_merge(
		$attributes['query'],
		$attributes['display'],
		$attributes,
		[
			'posts_per_page'		=> $attributes['query']['per_page'],
		]
	);

	$args = wp_parse_args( $args, $defaults );

	$taxonomy = $args['taxonomy'];

	if( !empty( $args['purchase-types'] ) ) {
		$args['tax_query'] = [
			[
				'taxonomy' => $taxonomy,
				'field'    => 'id',
				'terms'    => $args['purchase-types'],
			]
		];
	}

	$query = new \WP_Query( $args );
	$output = '';

	if( $query->have_posts() ) :

		$wrapper_attributes = \get_block_wrapper_attributes( [ 'class' => 'purchase-agreements purchase-agreements__list' ] );
		$loader_params = \Site_Functionality\Blocks\get_template_params();
		$template_loader = new TemplateLoader( $loader_params );

		ob_start();
		?>

		<<?php echo ( $args['wrapperTagName'] ); ?> <?php echo $wrapper_attributes; ?>>

		<?php
		while( $query->have_posts() ) : $query->the_post();

			$template_loader
				->setTemplateData( [
					'id'	=> \get_the_ID(),
					'args'	=> $args
				] )
				->getTemplatePart( PurchaseAgreement::POST_TYPE['id'] ); ?>

		<?php
		endwhile; ?>

		</<?php echo ( $args['wrapperTagName'] ); ?>>

	<?php
	$output = ob_get_clean();
	\wp_reset_postdata();

	endif;

	return $output;
}

/**
 * Registers the `wp-action-network-events/event-time` block on the server.
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
