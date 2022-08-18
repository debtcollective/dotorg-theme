<?php
global $EM_Event, $post;
$post_id = get_the_ID();
$EM_Event = em_get_event( $post_id, 'post_id' );
?>
<article id="post-<?php echo intval( $post_id ); ?>" class="event-container event{is_past} past{/is_past}{is_future} future{/is_future}{is_recurrence} is-recurring{/is_recurrence}">

    {has_image}
		<picture class="event__image">#_EVENTIMAGE</picture>
    {/has_image}

	<header class="event_header">
		<h2 class="event__title{has_tag_welcome-call} sr-only{/has_tag_welcome-call}">#_EVENTNAME</h2>
		<div class="event__ical post-meta">
            #_EVENTWEBCALLINK
		</div>
	</header>

	<div class="event__date">
        <time datetime="#_{Y-m-d H:i:s}">#_EVENTDATES</time>
    </div>

    <div class="event__time event__time-start">
        <time datetime="#_{Y-m-d H:i:s}">#_EVENTTIMES</time>
    </div>

	<div class="event__content">
        #_EVENTNOTES

        {has_event_location}
            <?php
            $text = 'Join on Zoom';
            ?>
            <div class="wp-block-button">
				<a class="wp-block-button__link" href="#_EVENTLOCATION{join_url}" title="<?php echo esc_attr( $text ); ?>" target="_blank"><?php echo esc_html( $text ); ?></a>
			</div>
        {/has_event_location}
	</div>

	<div class="event__location">
        {has_location}
            <div class="event__location-address">
                <div class="event__location-name">#_LOCATIONNAME</div>
                <div class="event__address">
                    <div class="event__location-street">#_LOCATIONADDRESS</div>
                    <div class="event__location-city">#_LOCATIONTOWN</div>
                    <div class="event__location-state">#_LOCATIONSTATE</div>
                    <div class="event__location-zip">#_LOCATIONPOSTCODE</div>
                </div>
            </div>
        #_LOCATIONMAP
        {/has_location}
	</div>

	<footer class="event__footer">
        {is_recurrence}
            <?php
            $recurrence_id = $EM_Event->output( '#_RECURRINGID' );
            $args = array(
                'recurrence' => (int) $recurrence_id,
                'scope'      => 'all',
            );

            // debtcollective_event_recurrences_placeholders( (int) $recurrence_id, $args );
            ?>
            #_RECURRENCES
        {/is_recurrence}

        {has_bookings}
        <div class="event__rsvp">
            <h4 class="event__rsvp-title"><?php esc_html_e( 'RSVP', 'debt-collective' ); ?></h4>
            #_BOOKINGFORM
        </div>
        {/has_bookings}

	</footer>

</article><!-- .event -->