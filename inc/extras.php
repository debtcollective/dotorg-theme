<?php
/**
 * Custom functions that act independently of the theme templates.
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package Debt Collective
 */
namespace DebtCollective\Inc;

/**
 * Returns true if a blog has more than 1 category, else false.
 *
 * @author Debt Collective
 *
 * @return bool Whether the blog has more than one category.
 */
function categorized_blog() {
	$category_count = get_transient( __NAMESPACE__ . '\categories' );

	if ( false === $category_count ) {
		$category_count_query = get_categories( [ 'fields' => 'count' ] );

		$category_count = isset( $category_count_query[0] ) ? (int) $category_count_query[0] : 0;

		set_transient( __NAMESPACE__ . '\categories', $category_count );
	}

	return $category_count > 1;
}

/**
 * Turn of autop for contact forms
 *
 * @link https://contactform7.com/2018/01/31/contact-form-7-50/
 */
\add_filter( 'wpcf7_autop_or_not', '__return_false' );

\add_filter(
	'wpcf7_form_class_attr',
	function( $class ) {
		return $class;
	}
);