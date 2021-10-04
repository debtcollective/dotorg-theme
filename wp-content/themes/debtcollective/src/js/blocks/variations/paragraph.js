import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { transform } from 'lodash';

const variations = [
    {
        name: 'lede',
        title: __( 'Lede', 'debtcollective' ),
        category: 'components',
        icon: 'editor-justify',
        attributes: {
            className: 'lede',
            placeholder: __( 'Add content&hellip;', 'debtcollective' )
        },
        example: {
            attributes: {
                className: 'lede',
                content: __( 'We are a membership-powered movement. Some supporting copy reenforcing the message and sentiment we’re looking to convey.', 'debtcollective' )
            },
        },
        scope: [
            'block',
            'inserter',
            'transform'
        ],
        isActive: ( blockAttributes, variationAttributes ) =>
            blockAttributes.className === variationAttributes.className,
    }
];

registerBlockVariation(
    'core/paragraph',
    variations
);