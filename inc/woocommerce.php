<?php
/**
 * Action hooks and filters.
 *
 * A place to put hooks and filters that aren't necessarily template tags.
 *
 * @package DebtCollective
 */
namespace DebtCollective\Inc;

/**
 * Move cross-sells under after cart.
 */
remove_action( 'woocommerce_cart_collaterals', 'woocommerce_cross_sell_display' );
add_action( 'woocommerce_after_cart', 'woocommerce_cross_sell_display' );

/**
 * Modify Cross-sell Heading
 *
 * @param  string $content
 * @return string $content
 */
function cross_sells_heading( $content ) : string {
	return $content;
}
add_filter( 'woocommerce_product_cross_sells_products_heading', __NAMESPACE__ . '\cross_sells_heading' );

/**
 * Add Sold Out Tag
 *
 * @return void
 */
function out_of_stock() : void {
	global $product;
	if ( ! $product->is_in_stock() ) {
		printf( '<div class="sold-out">%s</div>', esc_attr( 'Sold Out', 'debtcollective' ) );
	}
}
add_action( 'woocommerce_before_shop_loop_item_title', __NAMESPACE__ . '\out_of_stock' );
add_action( 'woocommerce_single_product_summary', __NAMESPACE__ . '\out_of_stock', 9 );