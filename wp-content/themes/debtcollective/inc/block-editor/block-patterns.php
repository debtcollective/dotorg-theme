<?php
/**
 * Block Patterns
 *
 * A place to put custom block patterns.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-patterns/
 *
 * @package DebtCollective
 */
namespace DebtCollective\Inc;

/**
 * Regster custom patterns
 *
 * @return void
 */
function register_block_patterns() {

	\register_block_pattern_category(
		'components',
		[
			'label' => __( 'Components', 'debtcollective' ),
		]
	);

	\register_block_pattern_category(
		'landing-pages',
		[
			'label' => __( 'Landing Pages', 'debtcollective' ),
		]
	);

	/**
	 * Touts
	 */
	\register_block_pattern(
		'debtcollective/landing-page-touts',
		[
			'title'       => __( 'Landing Page Touts', 'debtcollective' ),
			'description' => __( 'Touts for landing pages', 'debtcollective' ),
			'categories'  => [
				'components',
				'landing-pages',
				'layout',
			],
			'keywords'    => [
				__( 'touts', 'debtcollective' ),
				__( 'layout', 'debtcollective' ),
				__( 'components', 'debtcollective' ),
			],
			'content'     => '<!-- wp:columns -->
            <div class="wp-block-columns"><!-- wp:column -->
            <div class="wp-block-column"><!-- wp:cover {"overlayColor":"salmon","contentPosition":"top left","className":"tout tout\u002d\u002dsalmon"} -->
            <div class="wp-block-cover has-salmon-background-color has-background-dim has-custom-content-position is-position-top-left tout tout--salmon"><div class="wp-block-cover__inner-container"><!-- wp:heading {"placeholder":"Add Heading...","textColor":"gray-darker","className":"tout__heading h1"} -->
            <h2 class="tout__heading h1 has-gray-darker-color has-text-color">Some Landing Page</h2>
            <!-- /wp:heading -->
            
            <!-- wp:heading {"level":3,"textColor":"gray-darker"} -->
            <h3 class="has-gray-darker-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum sodales hendrerit. In dignissim, diam eget facilisis tempus, turpis urna hendrerit mi, et ornare dui augue quis diam. Quisque varius urna vitae maximus dapibus.</h3>
            <!-- /wp:heading --></div></div>
            <!-- /wp:cover --></div>
            <!-- /wp:column --></div>
            <!-- /wp:columns -->
            
            <!-- wp:columns -->
            <div class="wp-block-columns"><!-- wp:column -->
            <div class="wp-block-column"><!-- wp:cover {"overlayColor":"canary","contentPosition":"top left","className":"tout tout\u002d\u002dcanary"} -->
            <div class="wp-block-cover has-canary-background-color has-background-dim has-custom-content-position is-position-top-left tout tout--canary"><div class="wp-block-cover__inner-container"><!-- wp:heading {"placeholder":"Add Heading...","textColor":"gray-darker","className":"tout__heading h1"} -->
            <h2 class="tout__heading h1 has-gray-darker-color has-text-color">Second</h2>
            <!-- /wp:heading -->
            
            <!-- wp:heading {"level":3,"textColor":"gray-darker"} -->
            <h3 class="has-gray-darker-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum justo sit amet turpis gravida viverra</h3>
            <!-- /wp:heading --></div></div>
            <!-- /wp:cover --></div>
            <!-- /wp:column -->
            
            <!-- wp:column -->
            <div class="wp-block-column"><!-- wp:cover {"overlayColor":"salmon","contentPosition":"top left","className":"tout tout\u002d\u002dsalmon"} -->
            <div class="wp-block-cover has-salmon-background-color has-background-dim has-custom-content-position is-position-top-left tout tout--salmon"><div class="wp-block-cover__inner-container"><!-- wp:heading {"placeholder":"Add Heading...","textColor":"gray-darker","className":"tout__heading h1"} -->
            <h2 class="tout__heading h1 has-gray-darker-color has-text-color">Third</h2>
            <!-- /wp:heading -->
            
            <!-- wp:heading {"level":3,"textColor":"gray-darker"} -->
            <h3 class="has-gray-darker-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat erat sodales magna pulvinar</h3>
            <!-- /wp:heading --></div></div>
            <!-- /wp:cover --></div>
            <!-- /wp:column --></div>
            <!-- /wp:columns -->',
		]
	);

	\register_block_pattern(
		'debtcollective/landing-page-touts-alt',
		[
			'title'       => __( 'Landing Page Touts', 'debtcollective' ),
			'description' => __( 'Touts for landing pages', 'debtcollective' ),
			'categories'  => [
				'components',
				'landing-pages',
				'layout',
			],
			'keywords'    => [
				__( 'touts', 'debtcollective' ),
				__( 'layout', 'debtcollective' ),
				__( 'components', 'debtcollective' ),
			],
			'content'     => '
            <!-- wp:columns -->
            <div class="wp-block-columns"><!-- wp:column -->
            <div class="wp-block-column"><!-- wp:cover {"url":"' . \get_stylesheet_directory_uri() . '/build/images/hero.png","id":136,"dimRatio":90,"overlayColor":"salmon","focalPoint":{"x":"0.00","y":"0.00"},"contentPosition":"top left","className":"tout tout\u002d\u002dsalmon"} -->
            <div class="wp-block-cover has-background-dim-90 has-salmon-background-color has-background-dim has-custom-content-position is-position-top-left tout tout--salmon"><img class="wp-block-cover__image-background wp-image-136" alt="" src="' . \get_stylesheet_directory_uri() . '/build/images/hero.png" style="object-position:0% 0%" data-object-fit="cover" data-object-position="0% 0%"/><div class="wp-block-cover__inner-container"><!-- wp:heading {"placeholder":"Add Heading...","textColor":"gray-darker","className":"tout__heading h1"} -->
            <h2 class="tout__heading h1 has-gray-darker-color has-text-color">Some Landing Page</h2>
            <!-- /wp:heading -->

            <!-- wp:heading {"level":3,"textColor":"gray-darker"} -->
            <h3 class="has-gray-darker-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum sodales hendrerit. In dignissim, diam eget facilisis tempus, turpis urna hendrerit mi, et ornare dui augue quis diam. Quisque varius urna vitae maximus dapibus.</h3>
            <!-- /wp:heading --></div></div>
            <!-- /wp:cover --></div>
            <!-- /wp:column --></div>
            <!-- /wp:columns -->

            <!-- wp:columns -->
            <div class="wp-block-columns"><!-- wp:column -->
            <div class="wp-block-column"><!-- wp:cover {"overlayColor":"salmon","contentPosition":"top left","className":"tout tout\u002d\u002dcanary"} -->
            <div class="wp-block-cover has-salmon-background-color has-background-dim has-custom-content-position is-position-top-left tout tout--canary"><div class="wp-block-cover__inner-container"><!-- wp:heading {"placeholder":"Add Heading...","textColor":"gray-darker","className":"tout__heading h1"} -->
            <h2 class="tout__heading h1 has-gray-darker-color has-text-color">Second</h2>
            <!-- /wp:heading -->
            
            <!-- wp:heading {"level":3,"textColor":"gray-darker"} -->
            <h3 class="has-gray-darker-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum justo sit amet turpis gravida viverra</h3>
            <!-- /wp:heading --></div></div>
            <!-- /wp:cover --></div>
            <!-- /wp:column -->
            
            <!-- wp:column -->
            <div class="wp-block-column"><!-- wp:cover {"overlayColor":"canary","contentPosition":"top left","className":"tout tout\u002d\u002dsalmon"} -->
            <div class="wp-block-cover has-canary-background-color has-background-dim has-custom-content-position is-position-top-left tout tout--salmon"><div class="wp-block-cover__inner-container"><!-- wp:heading {"placeholder":"Add Heading...","textColor":"gray-darker","className":"tout__heading h1"} -->
            <h2 class="tout__heading h1 has-gray-darker-color has-text-color">Third</h2>
            <!-- /wp:heading -->
            
            <!-- wp:heading {"level":3,"textColor":"gray-darker"} -->
            <h3 class="has-gray-darker-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat erat sodales magna pulvinar</h3>
            <!-- /wp:heading --></div></div>
            <!-- /wp:cover --></div>
            <!-- /wp:column --></div>
            <!-- /wp:columns -->',
		]
	);
}

add_action( 'init', __NAMESPACE__ . '\register_block_patterns' );
