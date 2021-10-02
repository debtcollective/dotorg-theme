import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

const variations = [
    {
        name: 'lede',
        title: __( 'Lede', 'debtcollective' ),
        category: 'components',
        attributes: {
            className: 'lede',
            placeholder: __( 'Add content&hellip;', 'debtcollective' )
        },
        example: {
            attributes: {
                className: 'lede',
                content: __( 'We are a membership-powered movement. Some supporting copy reenforcing the message and sentiment we’re looking to convey.', 'debtcollective' )
            },
        }
    }
];

registerBlockVariation(
    'core/paragraph',
    variations
);