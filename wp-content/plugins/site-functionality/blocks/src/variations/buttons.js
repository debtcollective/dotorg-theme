import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockVariation(
    'core/buttons',
    [
        {
            name: 'large',
            title: __( 'Large Button', 'site-functionality' ),
            attributes: {
                className: 'is-large'
            },
        }
    ]
);