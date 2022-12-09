<article class="event-container event{is_past} past{/is_past}{is_future} future{/is_future}{is_recurrence} is-recurring{/is_recurrence}">

    <a href="#_EVENTURL" title="#_EVENTNAME">

        <h3 class="event__title ">#_EVENTNAME</h3>

        <div class="event__date">
            <time datetime="#_{Y-m-d H:i:s}">#_EVENTDATES</time>
        </div>

        <div class="event__time event__time-start">
            <time datetime="#_{Y-m-d H:i:s}">#_EVENTTIMES</time>
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
            {/has_location}
            {has_event_location}
                <?php esc_html_e( 'Virtual', 'debt-collective' ); ?>
            {/has_event_location}
        </div>
    </a>

</article><!-- #post-## -->