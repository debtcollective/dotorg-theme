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
 * Adds custom classes to the array of body classes.
 *
 * @author Debt Collective
 *
 * @param array $classes Classes for the body element.
 *
 * @return array Body classes.
 */
function body_classes( $classes ) {

	// Allows for incorrect snake case like is_IE to be used without throwing errors.
	global $is_IE, $is_edge, $is_safari;

	if ( get_theme_mod( 'display_global_header' ) ) {
		$classes[] = 'has-global-header';
	} else {
		$classes[] = 'has-site-header';
	}

	// If it's IE, add a class.
	if ( $is_IE ) {
		$classes[] = 'ie';
	}

	// If it's Edge, add a class.
	if ( $is_edge ) {
		$classes[] = 'edge';
	}

	// If it's Safari, add a class.
	if ( $is_safari ) {
		$classes[] = 'safari';
	}

	// Are we on mobile?
	if ( wp_is_mobile() ) {
		$classes[] = 'mobile';
	}

	// Give all pages a unique class.
	if ( is_page() ) {
		global $post;
		$classes[] = 'page-' . $post->post_name;

		// Add a `has-sidebar` class if we're using the default page template (page.php).
		if ( ( ! is_front_page() && ! is_page_template() ) || ( is_page_template( array( 'page-templates/events-archive.php', 'page-templates/events-page.php' ) ) && \get_post_meta( get_the_ID(), 'has_sidebar', true ) ) ) {
			$section_navigation = get_post_meta( $post->ID, 'display_section_navigation', true );
			if ( is_active_sidebar( 'above-nav' ) || is_active_sidebar( 'below-nav' ) || ! empty( $section_navigation ) ) {
				$classes[] = 'has-sidebar';
			}
		}
	}

	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	// Adds a class of group-blog to blogs with more than 1 published author.
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	// Adds "no-js" class. If JS is enabled, this will be replaced (by javascript) to "js".
	$classes[] = 'no-js';

	return $classes;
}
add_filter( 'body_class', __NAMESPACE__ . '\body_classes' );

/**
 * Flush out the transients used in categorized_blog.
 *
 * @author Debt Collective
 *
 * @return bool Whether or not transients were deleted.
 */
function category_transient_flusher() {
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return false;
	}

	// Like, beat it. Dig?
	return delete_transient( __NAMESPACE__ . '\categories' );
}
add_action( 'delete_category', __NAMESPACE__ . '\category_transient_flusher' );
add_action( 'save_post', __NAMESPACE__ . '\category_transient_flusher' );

/**
 * Customize "Read More" string on <!-- more --> with the_content();
 *
 * @author Debt Collective
 *
 * @return string Read more link.
 */
function content_more_link() {
	return ' <a class="more-link" href="' . get_permalink() . '">' . esc_html__( 'Read More', 'debtcollective' ) . '...</a>';
}
add_filter( 'the_content_more_link', __NAMESPACE__ . '\content_more_link' );

/**
 * Customize the [...] on the_excerpt();
 *
 * @author Debt Collective
 *
 * @param string $more The current $more string.
 *
 * @return string Read more link.
 */
function excerpt_more( $more ) {
	return sprintf( ' <a class="more-link" href="%1$s">%2$s</a>', get_permalink( get_the_ID() ), esc_html__( 'Read more...', 'debtcollective' ) );
}
add_filter( 'excerpt_more', __NAMESPACE__ . '\excerpt_more' );

/**
 * Filters WYSIWYG content with the_content filter.
 *
 * @author Jo Murgel
 *
 * @param string $content content dump from WYSIWYG.
 *
 * @return string|bool Content string if content exists, else empty.
 */
function get_the_content( $content ) {
	return ! empty( $content ) ? $content : false;
}
add_filter( 'the_content', __NAMESPACE__ . '\get_the_content', 20 );

/**
 * Change Default Avatar Theme Mod Setting
 * Modifies the default avatar set by `wp-user-avatars`
 *
 * @link https://wordpress.org/plugins/wp-user-avatars/
 *
 * @param string $mystery
 * @return string $mystery maybe changed
 */
function get_mystery_url( $mystery ) : string {
	if ( $default_avatar = \get_option( 'default_avatar' ) ) {
		$mystery = \esc_url( $default_avatar );
	}
	return $mystery;
}
add_filter( 'wp_user_avatars_get_mystery_url', __NAMESPACE__ . '\get_mystery_url' );

/**
 * Enable custom mime types.
 *
 * @author Debt Collective
 *
 * @param array $mimes Current allowed mime types.
 *
 * @return array Mime types.
 */
function custom_mime_types( $mimes ) {
	$mimes['svg']  = 'image/svg+xml';
	$mimes['svgz'] = 'image/svg+xml';

	return $mimes;
}
add_filter( 'upload_mimes', __NAMESPACE__ . '\custom_mime_types' );

/**
 * Add SVG definitions to footer.
 *
 * @author Debt Collective
 */
function include_svg_icons() {
	// Define SVG sprite file.
	$svg_icons = get_template_directory() . '/build/images/icons/sprite.svg';

	// If it exists, include it.
	if ( file_exists( $svg_icons ) ) {
		echo '<div class="svg-sprite-wrapper">';
		require_once $svg_icons;
		echo '</div>';
	}
}
add_action( 'wp_footer', __NAMESPACE__ . '\include_svg_icons', 9999 );

/**
 * Display the customizer header scripts.
 *
 * @author Greg Rickaby
 *
 * @return string Header scripts.
 */
function display_customizer_header_scripts() {
	// Check for header scripts.
	$scripts = get_theme_mod( __NAMESPACE__ . '\header_scripts' );

	// None? Bail...
	if ( ! $scripts ) {
		return false;
	}

	// Otherwise, echo the scripts!
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- XSS OK.
	echo get_the_content( $scripts );
}
add_action( 'wp_head', __NAMESPACE__ . '\display_customizer_header_scripts', 999 );

/**
 * Display the customizer footer scripts.
 *
 * @author Greg Rickaby
 *
 * @return string Footer scripts.
 */
function display_customizer_footer_scripts() {
	// Check for footer scripts.
	$scripts = get_theme_mod( __NAMESPACE__ . '\footer_scripts' );

	// None? Bail...
	if ( ! $scripts ) {
		return false;
	}

	// Otherwise, echo the scripts!
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- XSS OK.
	echo get_the_content( $scripts );
}
add_action( 'wp_footer', __NAMESPACE__ . '\display_customizer_footer_scripts', 999 );

/**
 * Adds OG tags to the head for better social sharing.
 *
 * @author Corey Collins
 *
 * @return string An empty string if Yoast is not found, otherwise a block of meta tag HTML.
 */
function add_og_tags() {
	// Bail if Yoast is installed, since it will handle things.
	// Or if SEO Framework is active
	if ( class_exists( 'WPSEO_Options' ) || defined( 'THE_SEO_FRAMEWORK_PRESENT' ) ) {
		return '';
	}

	// Set a post global on single posts. This avoids grabbing content from the first post on an archive page.
	if ( is_singular() ) {
		global $post;
	}

	// Get the post content.
	$post_content = ! empty( $post ) ? $post->post_content : '';

	// Strip all tags from the post content we just grabbed.
	$default_content = ( $post_content ) ? wp_strip_all_tags( strip_shortcodes( $post_content ) ) : $post_content;

	// Set our default title.
	$default_title = get_bloginfo( 'name' );

	// Set our default URL.
	$default_url = get_permalink();

	// Set our base description.
	$default_base_description = ( get_bloginfo( 'description' ) ) ? get_bloginfo( 'description' ) : esc_html__( 'Visit our website to learn more.', 'debtcollective' );

	// Set the card type.
	$default_type = 'article';

	// Get our custom logo URL. We'll use this on archives and when no featured image is found.
	$logo_id    = get_theme_mod( 'custom_logo' );
	$logo_image = ( $logo_id ) ? wp_get_attachment_image_src( $logo_id, 'full' ) : '';
	$logo_url   = ( $logo_id ) ? $logo_image[0] : '';

	// Set our final defaults.
	$card_title            = $default_title;
	$card_description      = $default_base_description;
	$card_long_description = $default_base_description;
	$card_url              = $default_url;
	$card_image            = $logo_url;
	$card_type             = $default_type;

	// Let's start overriding!
	// All singles.
	if ( is_singular() ) {

		if ( has_post_thumbnail() ) {
			$card_image = get_the_post_thumbnail_url();
		}
	}

	// Single posts/pages that aren't the front page.
	if ( is_singular() && ! is_front_page() ) {

		$card_title            = get_the_title() . ' - ' . $default_title;
		$card_description      = ( $default_content ) ? wp_trim_words( $default_content, 53, '...' ) : $default_base_description;
		$card_long_description = ( $default_content ) ? wp_trim_words( $default_content, 140, '...' ) : $default_base_description;
	}

	// Categories, Tags, and Custom Taxonomies.
	if ( is_category() || is_tag() || is_tax() ) {

		$term_name      = single_term_title( '', false );
		$card_title     = $term_name . ' - ' . $default_title;
		$specify        = ( is_category() ) ? esc_html__( 'categorized in', 'debtcollective' ) : esc_html__( 'tagged with', 'debtcollective' );
		$queried_object = get_queried_object();
		$card_url       = get_term_link( $queried_object );
		$card_type      = 'website';

		// Translators: get the term name.
		$card_long_description = sprintf( esc_html__( 'Posts %1$s %2$s.', 'debtcollective' ), $specify, $term_name );
		$card_description      = $card_long_description;
	}

	// Search results.
	if ( is_search() ) {

		$search_term = get_search_query();
		$card_title  = $search_term . ' - ' . $default_title;
		$card_url    = get_search_link( $search_term );
		$card_type   = 'website';

		// Translators: get the search term.
		$card_long_description = sprintf( esc_html__( 'Search results for %s.', 'debtcollective' ), $search_term );
		$card_description      = $card_long_description;
	}

	if ( is_home() ) {

		$posts_page = get_option( 'page_for_posts' );
		$card_title = get_the_title( $posts_page ) . ' - ' . $default_title;
		$card_url   = get_permalink( $posts_page );
		$card_type  = 'website';
	}

	// Front page.
	if ( is_front_page() ) {

		$front_page = get_option( 'page_on_front' );
		$card_title = ( $front_page ) ? get_the_title( $front_page ) . ' - ' . $default_title : $default_title;
		$card_url   = get_home_url();
		$card_type  = 'website';
	}

	// Post type archives.
	if ( is_post_type_archive() ) {

		$post_type_name = get_post_type();
		$card_title     = $post_type_name . ' - ' . $default_title;
		$card_url       = get_post_type_archive_link( $post_type_name );
		$card_type      = 'website';
	}

	// Media page.
	if ( is_attachment() ) {
		$attachment_id = get_the_ID();
		$card_image    = ( wp_attachment_is_image( $attachment_id ) ) ? wp_get_attachment_image_url( $attachment_id, 'full' ) : $card_image;
	}

	?>
	<meta property="og:title" content="<?php echo esc_attr( $card_title ); ?>" />
	<meta property="og:description" content="<?php echo esc_attr( $card_description ); ?>" />
	<meta property="og:url" content="<?php echo esc_url( $card_url ); ?>" />
	<?php if ( $card_image ) : ?>
		<meta property="og:image" content="<?php echo esc_url( $card_image ); ?>" />
	<?php endif; ?>
	<meta property="og:site_name" content="<?php echo esc_attr( $default_title ); ?>" />
	<meta property="og:type" content="<?php echo esc_attr( $card_type ); ?>" />
	<meta name="description" content="<?php echo esc_attr( $card_long_description ); ?>" />
	<?php
}
\add_action( 'wp_head', __NAMESPACE__ . '\add_og_tags' );

/**
 * Removes or Adjusts the prefix on category archive page titles.
 *
 * @author Corey Collins
 *
 * @param string $title The default $title of the page.
 *
 * @return string The updated $title.
 */
function remove_archive_title_prefix( $title ) {

	if ( is_category() || is_tag() || is_tax() ) {
		$title = single_cat_title( '', false );
	}

	if ( is_post_type_archive( 'an_event' ) || is_post_type_archive( 'event' ) ) {
		$title = post_type_archive_title( '', false );
	}

	return $title;
}
\add_filter( 'get_the_archive_title', __NAMESPACE__ . '\remove_archive_title_prefix' );

/**
 * Disables wpautop to remove empty p tags in rendered Gutenberg blocks.
 *
 * @author Corey Collins
 */
function disable_wpautop_for_gutenberg() {
	// If we have blocks in place, don't add wpautop.
	if ( has_filter( 'the_content', 'wpautop' ) && has_blocks() ) {
		remove_filter( 'the_content', 'wpautop' );
	}
}
\add_filter( 'init', __NAMESPACE__ . '\disable_wpautop_for_gutenberg', 9 );

/**
 * Replace page title with display name
 *
 * @link https://developer.wordpress.org/reference/hooks/the_title/
 *
 * @param string $title   Post title
 * @param int    $post_id Post ID
 * @return string New post tilte
 */
function replace_page_title( $title, $post_id ) {
	$post_type = \get_post_type( $post_id );

	if ( $new_title = \get_post_meta( $post_id, 'display_name', true ) ) {
		$title = $new_title;
	}

	return $title;
}

/**
 * Modify events archive query
 *
 * @param object $query
 * @return void
 */
function pre_get_events( $query ) {
	if ( ! \is_admin() && $query->is_main_query() && \is_post_type_archive( 'event' ) ) {
	}
}
// \add_filter( 'pre_get_posts', __NAMESPACE__ . '\pre_get_events', 11 );

/**
 * Override event formats
 * Formats, which can be set in Events Manager > Settings > Formats control the way event content is rendered
 * Formats can be overridden when files are placed in `./debtcollective/plugins/events-manager/formats`
 *
 * Note: file name corresponds to the `wp_options` key in database, which holds the format, minus `dbem_` prefix
 * `dbem_event_list_item_format_header` -> event_list_item_format_header.php
 *
 * @param array $array
 * @return array $array
 */
function events_custom_formats( $array ) {
	$formats = array(
		'dbem_event_list_item_format_header',
		'dbem_event_list_item_format',
		'dbem_event_list_item_format_footer',
		'dbem_location_baloon_format',
		'dbem_map_text_format',
		'dbem_time_format',
	);
	return $array + $formats;
}
\add_filter( 'em_formats_filter', __NAMESPACE__ . '\events_custom_formats', 1, 1 );

/**
 * Modify the pagination
 *
 * @param string $pagination
 * @return string $pagination
 */
function events_pagination( string $pagination ) {
	$pagination = str_replace( 'em-pagination', 'container pagination-container', $pagination );
	return $pagination;
}
\add_filter( 'em_paginate', __NAMESPACE__ . '\events_pagination' );

/**
 * Add Event Args
 *
 * @param array $args
 * @return array $args
 */
function add_event_args( array $args ) {
	global $post;
	if( $scope = \get_post_meta( \get_the_ID(), 'event_scope_upcoming', true ) ) {
		$args['scope'] = $scope;
	}
	if( $sort = \get_post_meta( \get_the_ID(), 'event_sort_upcoming', true ) ) {
		$args['order'] = $sort;
	}
	return $args;
}

/**
 * custom event placeholder for all tag slugs
 * used to add classes to events in event_list format
 */
function event_tag_slugs( $replace, $EM_Event, $result ) {
	if ( $result == '#_ALLTAGSLUGS' ) {
		$replace = 'none';
		$tags = get_the_terms($EM_Event->post_id, EM_TAXONOMY_TAG);
		if ( is_array($tags) && count($tags) > 0 ) {
			$tags_list = array();
			foreach( $tags as $tag ) {
				$tags_list[] = $tag->slug;
			}
			$replace = implode(' ', $tags_list);
		}
	}
	return $replace;
}
\add_filter( 'em_event_output_placeholder', __NAMESPACE__ . '\event_tag_slugs', 1, 3 );

/**
 * conditional placeholder for custom fields
 * speaker_name and speaker_image for Jubilee School events
 */
function custom_field_condition_filter( $replace, $condition, $match, $EM_Event ){
	if ( is_object($EM_Event) &&
		preg_match('/^has_(speaker_name)$/', $condition, $matches) ||
		preg_match('/^has_(speaker_image)$/', $condition, $matches)
	) {
		if ( array_key_exists($matches[1], $EM_Event->event_attributes) && !empty($EM_Event->event_attributes[$matches[1]]) ) {
			$replace = preg_replace("/\{\/?$condition\}/", '', $match);
		} else {
			$replace = '';
		}
	}
	return $replace;
}
\add_filter( 'em_event_output_condition', __NAMESPACE__ . '\custom_field_condition_filter', 1, 4 );
