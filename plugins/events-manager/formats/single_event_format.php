<article id="id-#_EVENTPOSTID" class="event-container event">

	{has_image}
	<div class="event__image wp-block-cover">
		#_EVENTIMAGE{full}
	</div>
	{/has_image}
	
	<header class="event_header">
		<h2 class="event__title">#_EVENTNAME</h2>
	</header>

	<div class="event__meta post-meta">
		<div class="event__ical">
			#_EVENTADDTOCALENDAR
		</div>
		<div class="event__date">
			<time datetime="#_{Y-m-d H:i:s}">#_EVENTDATES</time>
		</div>

		<div class="event__time event__time-start">
			<time datetime="#_{Y-m-d H:i:s}">#_EVENTTIMES <span class="timezone">#_{T}</span></time>
		</div>
	</div>

	<div class="event__content">
		#_EVENTNOTES

		<div class="event__location">
			{has_location_venue}
			<div class="event__location-address">
				<div class="event__location-name">#_LOCATIONNAME</div>
				<div class="event__address">
					<div class="event__location-street">#_LOCATIONADDRESS</div>
					<div class="event__location-city">#_LOCATIONTOWN</div>
					<div class="event__location-state">#_LOCATIONSTATE</div>
					<div class="event__location-zip">#_LOCATIONPOSTCODE</div>
				</div>
			</div>
			{/has_location_venue}

			{has_event_location}
				{has_event_location_url}
				<div class="wp-block-buttons">
					<div class="wp-block-button url">
						<a class="wp-block-button__link" href="#_EVENTLOCATION{url}" target="_blank">#_EVENTLOCATION{text}</a>
					</div>
				</div>
				{/has_event_location_url}

				{has_event_location_zoom_meeting}
					{is_future}
					<div class="wp-block-buttons">
						<div class="wp-block-button url">
							<a class="wp-block-button__link" href="#_EVENTLOCATION{registration_url}" target="_blank"><?php esc_html_e( 'Register', 'debtcollective' ); ?></a>
						</div>
					</div>
					{/is_future}
					{is_current}
					<div class="wp-block-buttons">
						<div class="wp-block-button url">
							<a class="wp-block-button__link" href="#_EVENTLOCATION{join_url}" target="_blank"><?php esc_html_e( 'Join', 'debtcollective' ); ?></a>
						</div>
					</div>
					{/is_current}
					{is_past}<p><?php esc_html_e( 'Event has ended.', 'debtcollective' ); ?></p>{/is_past}
				{/has_event_location_zoom_meeting}

				{has_event_location_zoom_webinar}
				{is_future}
					<div class="wp-block-buttons">
						<div class="wp-block-button url">
							<a class="wp-block-button__link" href="#_EVENTLOCATION{registration_url}" target="_blank"><?php esc_html_e( 'Register', 'debtcollective' ); ?></a>
						</div>
					</div>
					{/is_future}
					{is_current}
					<div class="wp-block-buttons">
						<div class="wp-block-button url">
							<a class="wp-block-button__link" href="#_EVENTLOCATION{join_url}" target="_blank"><?php esc_html_e( 'Join', 'debtcollective' ); ?></a>
						</div>
					</div>
					{/is_current}
					{is_past}
					<p><?php esc_html_e( 'Event has ended.', 'debtcollective' ); ?></p>{/is_past}
				{/has_event_location_zoom_webinar}
			
			{/has_event_location}
		</div>
		{has_location_venue}
		<div class="event__map">
			#_LOCATIONMAP
		</div>
		{/has_location_venue}
	</div>

	<footer class="event__footer">
		<div class="post-meta categories">#_EVENTCATEGORIES</div>
		<div class="post-meta tags">#_EVENTTAGS</div>
	</footer>

</article><!-- #post-## -->