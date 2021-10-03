import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { transform } from 'lodash';

const variations = [
    {
        name: 'inline-list',
        title: __( 'Inline Bullet List', 'debtcollective' ),
        description: __( 'Display stylised list.', 'debtcollective' ),
        category: 'components',
        attributes: {
            className: 'inline-bullet-list',
            placeholder: __( 'Add list items &hellip;', 'debtcollective' )
        },
        example: {
            attributes: {
                className: 'inline-list',
            },
        },
        scope: [
            block,
            inserter,
            transform
        ],
        isActive: ( blockAttributes, variationAttributes ) =>
            blockAttributes.className === variationAttributes.className,
    }
];

registerBlockVariation(
    'core/list',
    variations
);