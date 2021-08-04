<?php
/**
 * The template used for displaying Buttons in the scaffolding library.
 *
 * @package DebtCollective
 */

?>

<section class="section-scaffolding">

	<h2 class="scaffolding-heading"><?php esc_html_e( 'Buttons', 'debtcollective' ); ?></h2>
	<?php
		// Button.
		debtcollective_display_scaffolding_section(
			[
				'title'       => 'Button',
				'description' => 'Display a button.',
				'usage'       => '<button class="button" href="#">Click Me</button>',
				'output'      => '<button class="button">Click Me</button>',
			]
		);
		?>
</section>
