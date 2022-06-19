<?php
/*
 * Default Events List Template
 * This page displays a list of events, called during the em_content() if this is an events list page.
 * You can override the default display settings pages by copying this file to yourthemefolder/plugins/events-manager/templates/ and modifying it however you need.
 * You can display events however you wish, there are a few variables made available to you:
 *
 * $args - the args passed onto EM_Events::output()
 *
 */
$upcoming_defaults = apply_filters( 'em_content_events_args', $args );

$scope = 'future';
$sort  = 'ASC';

$outcoming_args = array(
	'scope'   => $scope,
	'order'   => $sort,
	'groupby' => 'scope',
	'limit'   => 0,
);

$outcoming_args = wp_parse_args( $outcoming_args, $upcoming_defaults ); ?>

<section class="events upcoming">

	<header class="events__header">
		<h2 class="events__title"><?php esc_html_e( 'Upcoming', 'debtcollective' ); ?></h2>
	</header>

	<?php
	echo EM_Events::output( $outcoming_args );
	?>
	
</section><!-- .events.past -->

<?php
$past_defaults = apply_filters( 'em_content_events_args', $args );

$scope = 'past';
$sort  = 'DESC';

$past_args = array(
	'scope'      => $scope,
	'order'      => $sort,
	'groupby'    => 'scope',
	'limit'      => 0,
	'pagination' => 1,
);

$past_args = wp_parse_args( $past_args, $past_defaults );
?>

<section class="events past">

	<header class="events__header">
		<h2 class="events__title"><?php esc_html_e( 'Past', 'debtcollective' ); ?></h2>
	</header>

	<?php
	echo EM_Events::output( $past_args );
	?>
	
</section><!-- .events.upcoming -->
