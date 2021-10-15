<?php
/**
 * Customizer settings.
 *
 * @package DebtCollective
 */
namespace DebtCollective\Inc\Customizer;

use DebtCollective\Inc\Customizer\Text_Editor_Custom_Control;

/**
 * Register additional scripts.
 *
 * @author Debt Collective
 *
 * @param WP_Customize_Manager $wp_customize Instance of WP_Customize_Manager.
 */
function customize_additional_scripts( $wp_customize ) {
	// Register a setting.
	// $wp_customize->add_setting(
	// 	'header_scripts',
	// 	[
	// 		'default'           => '',
	// 		'sanitize_callback' => 'force_balance_tags',
	// 	]
	// );

	// Create the setting field.
	// $wp_customize->add_control(
	// 	'header_scripts',
	// 	[
	// 		'label'       => esc_attr__( 'Header Scripts', 'debtcollective' ),
	// 		'description' => esc_attr__( 'Additional scripts to add to the header. Basic HTML tags are allowed.', 'debtcollective' ),
	// 		'section'     => 'additional_scripts_section',
	// 		'type'        => 'textarea',
	// 	]
	// );

	// Register a setting.
	// $wp_customize->add_setting(
	// 	'footer_scripts',
	// 	[
	// 		'default'           => '',
	// 		'sanitize_callback' => 'force_balance_tags',
	// 	]
	// );

	// Create the setting field.
	// $wp_customize->add_control(
	// 	'footer_scripts',
	// 	[
	// 		'label'       => esc_attr__( 'Footer Scripts', 'debtcollective' ),
	// 		'description' => esc_attr__( 'Additional scripts to add to the footer. Basic HTML tags are allowed.', 'debtcollective' ),
	// 		'section'     => 'additional_scripts_section',
	// 		'type'        => 'textarea',
	// 	]
	// );

	$wp_customize->add_setting( 
		'display_global_header', 
		[
			'default'	=> 'true'
		] 
	);

	$wp_customize->add_setting( 
		'display_site_branding', 
		[
			'default'	=> 'false'
		] 
	);

	$wp_customize->add_control( 
		'global_header_control', 
		[
			'label'      	=> esc_attr__( 'Display Global Header', 'debtcollective' ),
			'section'    	=> 'title_tagline',
			'settings'   	=> 'display_global_header',
			'type'       	=> 'checkbox',
			'choices'   => [
				'true' 	=> esc_attr__( 'Display', 'debtcollective' )
			]
			
		] 
	);

	$wp_customize->add_control( 
		'site_branding_control', 
		[
			'label'      	=> esc_attr__( 'Display Site Branding', 'debtcollective' ),
			'section'    	=> 'title_tagline',
			'settings'   	=> 'display_site_branding',
			'type'       	=> 'checkbox',
			'choices'   => [
				'true' 	=> esc_attr__( 'Display', 'debtcollective' )
			]
			
		] 
	);
}

add_action( 'customize_register', __NAMESPACE__ . '\customize_additional_scripts' );

/**
 * Register a social icons setting.
 *
 * @author Debt Collective
 *
 * @param WP_Customize_Manager $wp_customize Instance of WP_Customize_Manager.
 */
function customize_social_icons( $wp_customize ) {
	// Create an array of our social links for ease of setup.
	$social_networks = [
		'facebook',
		'instagram',
		'twitter',
		'linkedin',
		'youtube',
		'actionnetwork',
		'github',
	];

	// Loop through our networks to setup our fields.
	foreach ( $social_networks as $network ) {

		// Register a setting.
		$wp_customize->add_setting(
			$network . '_link',
			[
				'default'           => '',
				'sanitize_callback' => 'esc_url',
			]
		);

		// Create the setting field.
		$wp_customize->add_control(
			$network . '_link',
			[
				'label'   => /* translators: the social network name. */ sprintf( esc_attr__( '%s URL', 'debtcollective' ), ucwords( $network ) ),
				'section' => 'social_links_section',
				'type'    => 'url',
			]
		);
	}
}

// add_action( 'customize_register', __NAMESPACE__ . '\customize_social_icons' );

/**
 * Register copyright text setting.
 *
 * @author Debt Collective
 *
 * @param WP_Customize_Manager $wp_customize Instance of WP_Customize_Manager.
 */
function customize_copyright_text( $wp_customize ) {
	// Register a setting.
	$wp_customize->add_setting(
		'copyright_text',
		[
			'default'           => '',
			'sanitize_callback' => 'wp_kses_post',
		]
	);

	// Create the setting field.
	$wp_customize->add_control(
		new Text_Editor_Custom_Control(
			$wp_customize,
			'copyright_text',
			[
				'label'       	=> esc_attr__( 'Copyright Text', 'debtcollective' ),
				'description' 	=> esc_attr__( 'The copyright text will be displayed in the footer. Basic HTML tags allowed.', 'debtcollective' ),
				'section'     	=> 'title_tagline',
				'type'        	=> 'textarea',
				'priority' 		=> 100,
			]
		)
	);
}
add_action( 'customize_register', __NAMESPACE__ . '\customize_copyright_text', 12 );
