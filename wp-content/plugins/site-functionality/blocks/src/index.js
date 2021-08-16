import { registerBlockCollection } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockCollection( 'site-functionality', { 
    title: __( 'Debt Collective', 'site-functionality' )
} );


import './variations';

import './patterns';

import './eventDate';
import './eventTime';
import './eventLocation';
import './hero';