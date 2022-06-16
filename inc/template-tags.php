<?php
/**
 * Custom template tags for this theme.
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package DebtCollective
 */

 /**
  * Prints HTML with meta information for the current post-date/time and author.
  *
  * @author Debt Collective
  */
function debtcollective_post_date() {
	$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time>';

	$time_string = sprintf(
		$time_string,
		esc_attr( get_the_date( DATE_W3C ) ),
		esc_html( get_the_date() )
	);

	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- XSS OK.
	echo '<span class="posted-on">' . $time_string . '</span>';
}

/**
 * Prints HTML with meta information for the current post-date/time and author.
 *
 * @author Debt Collective
 */
function debtcollective_posted_on() {
	$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
	if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
		$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
	}

	$time_string = sprintf(
		$time_string,
		esc_attr( get_the_date( DATE_W3C ) ),
		esc_html( get_the_date() ),
		esc_attr( get_the_modified_date( DATE_W3C ) ),
		esc_html( get_the_modified_date() )
	);

	$posted_on = sprintf(
		/* translators: the date the post was published */
		esc_html_x( 'Posted on %s', 'post date', 'debtcollective' ),
		'<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a>'
	);

	$byline = sprintf(
		/* translators: the post author */
		esc_html_x( 'by %s', 'post author', 'debtcollective' ),
		'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
	);

	 // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- XSS OK.
	echo '<span class="posted-on">' . $posted_on . '</span><span class="byline"> ' . $byline . '</span>';
}

/**
 * Prints HTML with meta information for the categories, tags and comments.
 *
 * @author Debt Collective
 */
function debtcollective_entry_footer() {
	// Hide category and tag text for pages.
	if ( 'post' === get_post_type() ) {
		/* translators: used between list items, there is a space after the comma */
		$categories_list = get_the_category_list( esc_attr__( ', ', 'debtcollective' ) );
		if ( $categories_list && DebtCollective\Inc\categorized_blog() ) {

			/* translators: the post category */
			printf( '<span class="cat-links">' . esc_attr__( 'Posted in %1$s', 'debtcollective' ) . '</span>', $categories_list ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- XSS OK.
		}

		/* translators: used between list items, there is a space after the comma */
		$tags_list = get_the_tag_list( '', esc_attr__( ', ', 'debtcollective' ) );
		if ( $tags_list ) {

			/* translators: the post tags */
			printf( '<span class="tags-links">' . esc_attr__( 'Tagged %1$s', 'debtcollective' ) . '</span>', $tags_list ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- XSS OK.
		}
	}

	if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
		echo '<span class="comments-link">';
		comments_popup_link( esc_attr__( 'Leave a comment', 'debtcollective' ), esc_attr__( '1 Comment', 'debtcollective' ), esc_attr__( '% Comments', 'debtcollective' ) );
		echo '</span>';
	}

	edit_post_link(
		sprintf(
			/* translators: %s: Name of current post */
			esc_html__( 'Edit %s', 'debtcollective' ),
			wp_kses_post( get_the_title( '<span class="screen-reader-text">"', '"</span>', false ) )
		),
		'<span class="edit-link">',
		'</span>'
	);
}

/**
 * Display SVG Markup.
 *
 * @author Debt Collective
 *
 * @param array $args The parameters needed to get the SVG.
 */
function debtcollective_display_svg( $args = array() ) {
	$kses_defaults = wp_kses_allowed_html( 'post' );

	$svg_args = array(
		'svg'   => array(
			'class'           => true,
			'aria-hidden'     => true,
			'aria-labelledby' => true,
			'role'            => true,
			'xmlns'           => true,
			'width'           => true,
			'height'          => true,
			'viewbox'         => true, // <= Must be lower case!
			'color'           => true,
			'stroke-width'    => true,
		),
		'g'     => array( 'color' => true ),
		'title' => array(
			'title' => true,
			'id'    => true,
		),
		'path'  => array(
			'd'     => true,
			'color' => true,
		),
		'use'   => array(
			'xlink:href' => true,
		),
	);

	$allowed_tags = array_merge(
		$kses_defaults,
		$svg_args
	);

	echo wp_kses(
		debtcollective_get_svg( $args ),
		$allowed_tags
	);
}

/**
 * Return SVG markup.
 *
 * @author Debt Collective
 *
 * @param array $args The parameters needed to display the SVG.
 *
 * @return string Error string or SVG markup.
 */
function debtcollective_get_svg( $args = array() ) {
	// Make sure $args are an array.
	if ( empty( $args ) ) {
		return esc_attr__( 'Please define default parameters in the form of an array.', 'debtcollective' );
	}

	// Define an icon.
	if ( false === array_key_exists( 'icon', $args ) ) {
		return esc_attr__( 'Please define an SVG icon filename.', 'debtcollective' );
	}

	// Set defaults.
	$defaults = array(
		'color'        => '',
		'icon'         => '',
		'title'        => '',
		'desc'         => '',
		'stroke-width' => '',
		'height'       => '',
		'width'        => '',
	);

	// Parse args.
	$args = wp_parse_args( $args, $defaults );

	// Figure out which title to use.
	$block_title = ( $args['title'] ) ? $args['title'] : $args['icon'];

	// Generate random IDs for the title and description.
	$random_number  = wp_rand( 0, 99999 );
	$block_title_id = 'title-' . sanitize_title( $block_title ) . '-' . $random_number;
	$desc_id        = 'desc-' . sanitize_title( $block_title ) . '-' . $random_number;

	// Set ARIA.
	$aria_hidden     = ' aria-hidden="true"';
	$aria_labelledby = '';

	if ( $args['title'] && $args['desc'] ) {
		$aria_labelledby = ' aria-labelledby="' . $block_title_id . ' ' . $desc_id . '"';
		$aria_hidden     = '';
	}

	// Set SVG parameters.
	$color        = ( $args['color'] ) ? ' color="' . $args['color'] . '"' : '';
	$stroke_width = ( $args['stroke-width'] ) ? ' stroke-width="' . $args['stroke-width'] . '"' : '';
	$height       = ( $args['height'] ) ? ' height="' . $args['height'] . '"' : '';
	$width        = ( $args['width'] ) ? ' width="' . $args['width'] . '"' : '';

	// Start a buffer...
	ob_start();
	?>

	<svg
	<?php
		echo DebtCollective\Inc\get_the_content( $height ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- XSS OK.
		echo DebtCollective\Inc\get_the_content( $width ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- XSS OK.
		echo DebtCollective\Inc\get_the_content( $color ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- XSS OK.
		echo DebtCollective\Inc\get_the_content( $stroke_width ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- XSS OK.
	?>
		class="icon <?php echo esc_attr( $args['icon'] ); ?>"
	<?php
		echo DebtCollective\Inc\get_the_content( $aria_hidden ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- XSS OK.
		echo DebtCollective\Inc\get_the_content( $aria_labelledby ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- XSS OK.
	?>
		role="img">
		<title id="<?php echo esc_attr( $block_title_id ); ?>">
			<?php echo esc_html( $block_title ); ?>
		</title>

		<?php
		// Display description if available.
		if ( $args['desc'] ) :
			?>
			<desc id="<?php echo esc_attr( $desc_id ); ?>">
				<?php echo esc_html( $args['desc'] ); ?>
			</desc>
		<?php endif; ?>

		<?php
		// Use absolute path in the Customizer so that icons show up in there.
		if ( is_customize_preview() ) :
			?>
			<use xlink:href="<?php echo esc_url( get_parent_theme_file_uri( '/build/images/icons/sprite.svg#' . esc_html( $args['icon'] ) ) ); ?>"></use>
		<?php else : ?>
			<use xlink:href="#<?php echo esc_html( $args['icon'] ); ?>"></use>
		<?php endif; ?>

	</svg>

	<?php
	// Get the buffer and return.
	return ob_get_clean();
}

/**
 * Trim the title length.
 *
 * @author Debt Collective
 *
 * @param array $args Parameters include length and more.
 *
 * @return string The title.
 */
function debtcollective_get_the_title( $args = array() ) {
	// Set defaults.
	$defaults = array(
		'length' => 12,
		'more'   => '...',
	);

	// Parse args.
	$args = wp_parse_args( $args, $defaults );

	// Trim the title.
	return wp_kses_post( wp_trim_words( get_the_title( get_the_ID() ), $args['length'], $args['more'] ) );
}

/**
 * Limit the excerpt length.
 *
 * @author Debt Collective
 *
 * @param array $args Parameters include length and more.
 *
 * @return string The excerpt.
 */
function debtcollective_get_the_excerpt( $args = array() ) {

	// Set defaults.
	$defaults = array(
		'length' => 20,
		'more'   => '...',
		'post'   => '',
	);

	// Parse args.
	$args = wp_parse_args( $args, $defaults );

	// Trim the excerpt.
	return wp_trim_words( get_the_excerpt( $args['post'] ), absint( $args['length'] ), esc_html( $args['more'] ) );
}

/**
 * Echo the copyright text saved in the Customizer.
 *
 * @author Debt Collective
 */
function debtcollective_display_copyright_text() {
	// Grab our customizer settings.
	$copyright_text = get_theme_mod( 'copyright_text' );

	if ( $copyright_text ) {
		echo DebtCollective\Inc\get_the_content( do_shortcode( $copyright_text ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- XSS OK.
	}
}

/**
 * Display the social links saved in the customizer.
 *
 * @author Debt Collective
 */
function debtcollective_display_social_network_links() {
	// Create an array of our social links for ease of setup.
	// Change the order of the networks in this array to change the output order.
	$social_networks = array(
		'facebook',
		'instagram',
		'linkedin',
		'twitter',
	);

	?>
	<ul class="flex social-icons menu">
		<?php
		// Loop through our network array.
		foreach ( $social_networks as $network ) :

			// Look for the social network's URL.
			$network_url = get_theme_mod( 'debtcollective_' . $network . '_link' );

			// Only display the list item if a URL is set.
			if ( ! empty( $network_url ) ) :
				?>
				<li class="social-icon <?php echo esc_attr( $network ); ?> mr-2">
					<a href="<?php echo esc_url( $network_url ); ?>">
						<?php
						debtcollective_display_svg(
							array(
								'icon'   => $network . '-square',
								'width'  => '24',
								'height' => '24',
							)
						);
						?>
						<span class="screen-reader-text">
						<?php
						/* translators: the social network name */
						printf( esc_attr__( 'Link to %s', 'debtcollective' ), ucwords( esc_html( $network ) ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- XSS OK.
						?>
						</span>
					</a>
				</li><!-- .social-icon -->
				<?php
			endif;
		endforeach;
		?>
	</ul><!-- .social-icons -->
	<?php
}

/**
 * Displays numeric pagination on archive pages.
 *
 * @author Debt Collective
 *
 * @param array    $args  Array of params to customize output.
 * @param WP_Query $query The Query object; only passed if a custom WP_Query is used.
 */
function debtcollective_display_numeric_pagination( $args = array(), $query = null ) {
	if ( ! $query ) {
		global $wp_query;
		$query = $wp_query;
	}

	$total_pages = isset( $query->max_num_pages ) ? $query->max_num_pages : 1;

	$defaults = array(
		'prev_text' => '&laquo;',
		'next_text' => '&raquo;',
		'mid_size'  => 4,
		'total'     => $total_pages,
	);

	$args = wp_parse_args( $args, $defaults );

	if ( null === paginate_links( $args ) ) {
		return;
	}
	?>

	<nav class="container pagination-container" aria-label="<?php esc_attr_e( 'numeric pagination', 'debtcollective' ); ?>">
		<?php echo paginate_links( $args ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- XSS OK. ?>
	</nav>

	<?php
}

/**
 * Display Sibling Pages
 *
 * @param object $post
 * @return void
 */
function debtcollective_render_section_navigation( $post = null ) {
	if ( ! $post->post_parent ) {
		return;
	}
	$parent = $post->post_parent;
	add_filter( 'the_title', 'DebtCollective\Inc\replace_page_title', 10, 2 );
	?>

		<nav class="pagenav">
			<h3 class="widget-title"><?php echo esc_attr( get_the_title( $parent ) ); ?></h3>

			<ul>
				<?php
				$args = array(
					'child_of'    => $parent,
					'sort_column' => 'menu_order', // sort by menu order to enable custom sorting
					'depth'       => 1,
					'title_li'    => false,
					'link_before' => '<span class="hangover">',
					'link_after'  => '</span>',
				);
				wp_list_pages( $args );
				remove_filter( 'the_title', 'DebtCollective\Inc\replace_page_title', 10, 2 );
				?>
			</ul>
		</nav>

	<?php
}

/**
 * Display Subpages
 *
 * @param object $post
 * @return void
 */
function debtcollective_render_subpage_navigation( $post = null ) {
	if ( ! DebtCollective\Inc\has_parent( $post ) ) {
		return;
	}
	add_filter( 'the_title', 'DebtCollective\Inc\replace_page_title', 10, 2 );
	?>

	<nav class="pagenav">
		<h3 class="widget-title"><?php echo esc_attr( get_the_title( $post ) ); ?></h3>

		<ul>
			<?php
			$args = array(
				'child_of'    => $post->ID,
				'sort_column' => 'menu_order', // sort by menu order to enable custom sorting
				'depth'       => 1,
				'title_li'    => false,
				'link_before' => '<span class="hangover">',
				'link_after'  => '</span>',
			);
			wp_list_pages( $args );
			remove_filter( 'the_title', 'DebtCollective\Inc\replace_page_title', 10, 2 );
			?>
		</ul>
	</nav>

	<?php
}

/**
 * Get an attachment ID from it's URL.
 *
 * @author Debt Collective
 *
 * @param string $attachment_url The URL of the attachment.
 *
 * @return int    The attachment ID.
 */
function debtcollective_get_attachment_id_from_url( $attachment_url = '' ) {
	global $wpdb;

	$attachment_id = false;

	// If there is no url, return.
	if ( '' === $attachment_url ) {
		return false;
	}

	// Get the upload directory paths.
	$upload_dir_paths = wp_upload_dir();

	// Make sure the upload path base directory exists in the attachment URL, to verify that we're working with a media library image.
	if ( false !== strpos( $attachment_url, $upload_dir_paths['baseurl'] ) ) {

		// If this is the URL of an auto-generated thumbnail, get the URL of the original image.
		$attachment_url = preg_replace( '/-\d+x\d+(?=\.(jpg|jpeg|png|gif)$)/i', '', $attachment_url );

		// Remove the upload path base directory from the attachment URL.
		$attachment_url = str_replace( $upload_dir_paths['baseurl'] . '/', '', $attachment_url );

		// Do something with $result.
		// phpcs:ignore phpcs:ignore WordPress.DB -- db call ok, cache ok, placeholder ok.
		$attachment_id = $wpdb->get_var( $wpdb->prepare( "SELECT wposts.ID FROM {$wpdb->posts} wposts, {$wpdb->postmeta} wpostmeta WHERE wposts.ID = wpostmeta.post_id AND wpostmeta.meta_key = '_wp_attached_file' AND wpostmeta.meta_value = %s AND wposts.post_type = 'attachment'", $attachment_url ) );
	}

	return $attachment_id;
}

/**
 * Display the comments if the count is more than 0.
 *
 * @author Debt Collective
 */
function debtcollective_display_comments() {
	if ( comments_open() || get_comments_number() ) {
		comments_template();
	}
}

/**
 * Displays the mobile menu with off-canvas background layer.
 *
 * @author Debt Collective
 *
 * @return string An empty string if no menus are found at all.
 */
function debtcollective_display_mobile_menu() {
	// Bail if no mobile or primary menus are set.
	if ( ! has_nav_menu( 'mobile' ) && ! has_nav_menu( 'primary' ) ) {
		return '';
	}

	// Set a default menu location.
	$menu_location = 'primary';

	// If we have a mobile menu explicitly set, use it.
	if ( has_nav_menu( 'mobile' ) ) {
		$menu_location = 'mobile';
	}
	?>
	<div class="off-canvas-screen"></div>
	<nav class="off-canvas-container" aria-label="<?php esc_attr_e( 'Mobile Menu', 'debtcollective' ); ?>" aria-hidden="true" tabindex="-1">
		<?php
		// Mobile menu args.
		$mobile_args = array(
			'theme_location'  => $menu_location,
			'container'       => 'div',
			'container_class' => 'off-canvas-content',
			'container_id'    => '',
			'menu_id'         => 'site-mobile-menu',
			'menu_class'      => 'mobile-menu',
			'fallback_cb'     => false,
			'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
		);

		// Display the mobile menu.
		wp_nav_menu( $mobile_args );
		?>
	</nav>
	<?php
}

/**
 * Render Recurrences
 *
 * @param int   $recurrence_id
 * @param array $args
 * @param int   $current_post_id
 * @return void
 */
function debtcollective_event_recurrences( $recurrence_id, $args = array(), int $current_post_id = null ) {
	$defaults = array(
		'recurrence' => (int) $recurrence_id,
		'scope'      => 'all',
	);

	$args = wp_parse_args( $args, $defaults );

	$date_format = 'l F j, Y';
	$time_format = 'g:ia';

	if ( $recurrences = DebtCollective\Inc\get_event_recurrences( (int) $recurrence_id, $args ) ) {
		?>
		<section class="recurrences">
			<h4 class="recurrences__title"><?php esc_html_e( 'Events in Series', 'debt-collective' ); ?></h4>
			<ul class="recurrences__list">
			<?php
			foreach ( $recurrences as $recurrence ) {
				$scope_class = 'upcoming';
				if ( date( 'Y-m-d' ) > $recurrence->event_end_date ) {
					$scope_class = 'past';
				}
				$classes  = implode( ' ', get_post_class( "recurrences__event {$scope_class}", $recurrence->post_id ) );
				$datetime = new \DateTime( $recurrence->event_start_date . ' ' . $recurrence->event_start_time );

				if ( $current_post_id && $recurrence->post_id === $current_post_id ) {
					printf(
						'<li class="%s"><span class="recurrences__event-title">%s</span> <span class="separator">-</span> %s</li>',
						$classes,
						esc_attr( $recurrence->event_name ),
						$datetime->format( $date_format . ' ' . $time_format )
					);
				} else {
					printf(
						'<li class="%s"><a href="%s" title="%s" class="recurrences__event-title">%s</a> <span class="separator">-</span> %s</li>',
						$classes,
						get_the_permalink( $recurrence->post_id ),
						esc_attr( $recurrence->event_name ),
						esc_html( $recurrence->event_name ),
						$datetime->format( $date_format . ' ' . $time_format )
					);
				}
			}
			?>
			</ul>
		</section>
		<?php
	}
}

function debtcollective_event_location( $EM_Event, $args = array() ) {
	if ( ! is_object( $EM_Event ) ) {
		return;
	}

	$location_type = DebtCollective\Inc\get_event_location_type( $EM_Event );

	if ( 'physical' === $location_type ) {
		$EM_Location = $EM_Event->get_location();

		em_locate_template(
			'placeholders/locationmap.php',
			true,
			array(
				'args'        => $args,
				'EM_Location' => $EM_Location,
			)
		);

	}

	if ( $EM_Event->has_location() ) {
		$args = array(
			'width'  => '100%',
			'height' => '400px',
		);

	} elseif ( $EM_Event->has_event_location() ) {
		$location = $EM_Event->get_event_location();

		switch ( $EM_Event->location_type ) {
			case 'url':
				break;
			case 'zoom_meeting':
			case 'zoom_room':
			case 'zoom_webinar':
				break;
		}
	}
}

/**
 * Render Event Address
 *
 * @param obj   $EM_Event
 * @param array $args
 * @return void
 */
function debtcollective_event_address( $EM_Event, $args = array() ) {
	if ( ! is_object( $EM_Event ) ) {
		return;
	}

	if ( $EM_Event->has_location() ) {
		$EM_Location     = $EM_Event->get_location();
		$default_country = get_option( 'dbem_location_default_country', 'US' );
		?>

		<div class="event__location">
			<?php if ( $location_name = $EM_Location->location_name ) : ?>
				<div class="event__location-name"><?php echo esc_html( $location_name ); ?></div>
			<?php endif; ?>
			<div class="event__address">
				<?php if ( $address = $EM_Location->location_address ) : ?>
					<div class="event__location-street"><?php echo esc_html( $address ); ?></div>
				<?php endif; ?>
				<?php if ( $city = $EM_Location->location_town ) : ?>
					<div class="event__location-city"><?php echo esc_html( $city ); ?></div>
				<?php endif; ?>
				<?php if ( $state = $EM_Location->location_state ) : ?>
					<div class="event__location-state"><?php echo esc_html( $state ); ?></div>
				<?php endif; ?>
				<?php if ( $zip = $EM_Location->location_postcode ) : ?>
					<div class="event__location-zip"><?php echo esc_html( $zip ); ?></div>
				<?php endif; ?>
				<?php if ( ( $country = $EM_Location->location_country ) && $default_country !== $EM_Location->location_country ) : ?>
					<div class="event__location-country"><?php echo esc_html( $country ); ?></div>
				<?php endif; ?>
			</div>
		</div>

		<?php
	}
}

/**
 * Render Event Map
 *
 * @param obj   $EM_Event
 * @param array $args
 * @return void
 */
function debtcollective_event_map( $EM_Event, $args = array() ) {
	if ( ! is_object( $EM_Event ) ) {
		return;
	}

	$defaults = array(
		'width' => '100%',
	);

	$args = wp_parse_args( $args, $defaults );

	if ( $EM_Event->has_location() ) {
		$EM_Location = $EM_Event->get_location();
		?>
			<?php
			em_locate_template(
				'placeholders/locationmap.php',
				true,
				array(
					'args'        => $args,
					'EM_Location' => $EM_Location,
				)
			);
			?>
		<?php
	}
}

/**
 * Render Physical Event Location
 *
 * @param obj   $EM_Event
 * @param array $args
 * @return void
 */
function debtcollective_physical_location( $EM_Event, $args = array() ) {
	if ( ! is_object( $EM_Event ) ) {
		return;
	}

	$defaults = array(
		'target' => '_blank',
	);

	$args = wp_parse_args( $args, $defaults );

	// debtcollective_event_address( $EM_Event, $args );

	debtcollective_event_map( $EM_Event, $args );
}

/**
 * Render Virtual Event Location
 *
 * @param obj   $EM_Event
 * @param array $args
 * @return void
 */
function debtcollective_virtual_location( $EM_Event, $args = array() ) {
	if ( ! is_object( $EM_Event ) ) {
		return;
	}

	$defaults = array(
		'target' => '_blank',
	);

	$args = wp_parse_args( $args, $defaults );

	$link_text = array(
		'url'          => __( 'Event Link', 'debt-collective' ),
		'zoom_meeting' => __( 'Join Meeting', 'debt-collective' ),
		'zoom_room'    => __( 'Go To Zoom', 'debt-collective' ),
		'zoom_webinar' => __( 'Go To Webinar', 'debt-collective' ),
	);

	if ( $EM_Event->has_event_location() ) {
		$EM_Location   = $EM_Event->get_event_location();
		$location_type = $EM_Event->event_location_type;

		if ( 'url' === $location_type ) :
			$url  = $EM_Location->data['url'];
			$text = array_key_exists( 'text', $EM_Location->data ) ? $EM_Location->data['text'] : $link_text['url'];
			?>

			<div class="wp-block-button">
				<a class="wp-block-button__link" href="<?php echo esc_url( $url ); ?>" title="<?php echo esc_attr( $text ); ?>" target="<?php echo esc_attr( $args['target'] ); ?>"><?php echo esc_html( $text ); ?></a>
			</div>

			<?php
		elseif ( array_key_exists( $location_type, $link_text ) ) :
			/** Zoom */
			if ( array_key_exists( 'join_url', $EM_Location->data ) && ( $join_url = $EM_Location->data['join_url'] ) ) :
				$text = __( 'Join', 'debt-collective' );
				?>
				<div class="wp-block-button">
					<a class="wp-block-button__link" href="<?php echo esc_url( $join_url ); ?>" title="<?php echo esc_attr( $link_text[$location_type] ); ?>" target="<?php echo esc_attr( $args['target'] ); ?>"><?php echo esc_html( $link_text[$location_type] ); ?></a>
				</div>
				<?php
			endif;
			?>

			<?php
			if ( ! get_option( 'dbem_rsvp_enabled' ) && array_key_exists( 'registration_url', $EM_Location->data ) && ( $registration_url = $EM_Location->data['registration_url'] ) ) :
				?>
				<div class="wp-block-button">
					<a class="wp-block-button__link" href="<?php echo esc_url( $registration_url ); ?>" title="<?php echo esc_attr( $link_text[$location_type] ); ?>" target="<?php echo esc_attr( $args['target'] ); ?>"><?php echo esc_html( $link_text[$location_type] ); ?></a>
				</div>
				<?php
			endif;
			?>

			<?php
		endif;
	}
}
