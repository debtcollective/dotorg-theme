<?php
/**
 * Template part for displaying posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package DebtCollective
 */

?>

	<article <?php post_class( 'post-container' ); ?>>

		<header class="entry-header">
			<?php
			if ( is_single() ) :
				the_title( '<h1 class="entry-title">', '</h1>' );
			else :
				the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
			endif;

			if ( 'post' === get_post_type() ) :
				?>
				<div class="entry-meta">
					<?php debtcollective_posted_on(); ?>
				</div><!-- .entry-meta -->
			<?php endif; ?>
		</header><!-- .entry-header -->

		<div class="entry-content">
			<?php
				the_content(
					sprintf(
						wp_kses(
							/* translators: %s: Name of current post. */
							esc_html__( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'debtcollective' ),
							[
								'span' => [
									'class' => [],
								],
							]
						),
						the_title( '<span class="screen-reader-text">"', '"</span>', false )
					)
				);

				wp_link_pages(
					[
						'before' => '<div class="page-links">' . esc_attr__( 'Pages:', 'debtcollective' ),
						'after'  => '</div>',
					]
				);
				?>
		</div><!-- .entry-content -->

		<footer class="entry-footer">
			<?php debtcollective_entry_footer(); ?>
		</footer><!-- .entry-footer -->

	</article><!-- #post-## -->
