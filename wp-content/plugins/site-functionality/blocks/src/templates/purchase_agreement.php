<?php
/**
 * Template part for displaying purchase-agreement posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package site-functionality
 */
$post_id = get_the_ID();
$taxonomy = $data->args['taxonomy'];
?>

<article <?php \post_class( 'purchase-agreement-container purchase-agreement' ); ?>>
	<div class="purchase-agreement__date entry-meta">
		<?php \the_date(); ?>
	</div><!-- .entry-meta -->

	<?php if( \get_post_meta( $post_id, 'show_title', true ) ) : ?>
		<h3 class="purchase-agreement__title entry-title"><?php the_title(); ?></h3>
	<?php endif; ?>

	<div class="purchase-agreement__summary">
		<?php
		\the_content(
			sprintf(
				\wp_kses(
					/* translators: %s: Name of current post. */
					\esc_html__( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'site-functionality' ),
					[
						'span' => [
							'class' => [],
						],
					]
				),
				\the_title( '<span class="screen-reader-text">"', '"</span>', false )
			)
		);
		?>
	</div>

	<div class="purchase-agreement__details">
		<dl>
			<?php if( $amount = \get_post_meta( $post_id, 'amount', true ) ) : ?>
				<dt class="purchase-agreement__amount entry-label">
					<?php \esc_html_e( 'Abolished', 'site-functionality' ); ?>
				</dt>
				<dd class="purchase-agreement__amount entry-value">
					<?php \printf( '<span class="currency-symbol">%s</span><span class="value">%s</span>', __( '$', 'debtcollecollective' ), Site_Functionality\convert_string_to_number( $amount ) ); ?>
				</dd>
			<?php endif; ?>
			<?php if( \has_term( '', $taxonomy, $post_id ) ) : 
				$tags = \wp_get_post_terms( $post_id, $taxonomy, [ 'fields' => 'names' ] ); ?>
				<dt class="purchase-agreement__type entry-label">
					<?php \esc_html_e( 'Type', 'site-functionality' ); ?>
				</dt>
				<dd class="purchase-agreement__type entry-value">
					<?php echo implode( '<span class="separator">/</span>', $tags ); ?>
				</dd>
			<?php endif; ?>
			<?php if( $number = \get_post_meta( $post_id, 'number', true ) ) : ?>
				<dt class="purchase-agreement__number entry-label">
					<?php \esc_html_e( 'Number of Debtors', 'site-functionality' ); ?>
				</dt>
				<dd class="purchase-agreement__number entry-value">
					<?php printf( '<span class="value">%s</span>', Site_Functionality\convert_string_to_number( $number, false ) ); ?>
				</dd>
			<?php endif; ?>
			<?php if( $average = \get_post_meta( $post_id, 'average', true ) ) : ?>
				<dt class="purchase-agreement__average entry-label">
					<?php \esc_html_e( 'Average Debt/Debtor', 'site-functionality' ); ?>
				</dt>
				<dd class="purchase-agreement__average entry-value">
					<?php printf( '<span class="currency-symbol">%s</span><span class="value">%s</span>', __( '$', 'debtcollecollective' ), Site_Functionality\convert_string_to_number( $average ) ); ?>
				</dd>
			<?php endif; ?>
			<?php if( $purchase_price = \get_post_meta( $post_id, 'price', true ) ) : ?>
				<dt class="purchase-agreement__purchase-price entry-label">
					<?php \esc_html_e( 'Purchase Price', 'site-functionality' ); ?>
				</dt>
				<dd class="purchase-agreement__purchase-price entry-value">
					<?php printf( '<span class="currency-symbol">%s</span><span class="value">%s</span>', __( '$', 'debtcollecollective' ), Site_Functionality\convert_string_to_number( $purchase_price ) ); ?>
				</dd>
			<?php endif; ?>
		</dl>

		<?php if( $file_id = \get_post_meta( $post_id, 'file', true ) ) : 
			$file = \wp_get_attachment_url( $file_id );
			?>
			<?php printf( '<a href="%s" aria-label="%s" target="_blank">%s</a>', \esc_url( $file ), \esc_attr__( 'Download Purchase Agreement as PDF', 'site-functionality' ), \esc_html__( 'Download Purchase Agreement', 'site-functionality' ) ); ?>
		<?php endif; ?>
	</div>

</article><!-- #post-## -->
