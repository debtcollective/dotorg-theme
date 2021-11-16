import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

const variations = [
    {
        name: 'inline-bullet-list',
        title: __( 'Inline Bullet List', 'debtcollective' ),
        description: __( 'Display stylized list.', 'debtcollective' ),
        category: 'components',
        attributes: {
            className: 'inline-bullet-list',
            placeholder: __( 'Add list items ...', 'debtcollective' )
        },
        example: {
            attributes: {
                className: 'inline-bullet-list',
            },
        },
        scope: [
            'block',
            'inserter',
            'transform'
        ],
        // isActive: ( blockAttributes, variationAttributes ) => {
        //     blockAttributes.className === variationAttributes.className 
        // }
    },
    {
        name: 'bullet-list',
        title: __( 'Bullet List', 'debtcollective' ),
        description: __( 'Display bullet list.', 'debtcollective' ),
        category: 'components',
        attributes: {
            className: 'bullet-list',
            placeholder: __( 'Add list items ...', 'debtcollective' )
        },
        example: {
            attributes: {
                className: 'bullet-list',
            },
        },
        scope: [
            'block',
            'inserter',
            'transform'
        ],
        // isActive: ( blockAttributes, variationAttributes ) => {
        //     blockAttributes.className === variationAttributes.className 
        // }
    }
];

variations.forEach( ( variation ) => {
    registerBlockVariation(
        'core/list',
        variation
    );
} );