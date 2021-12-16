import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

const variations = [
    {
        name: 'list',
        title: __( 'Basic List', 'debtcollective' ),
        description: __( 'Display a basic list.', 'debtcollective' ),
        isDefault: true,
        attributes: {
            className: 'basic',
            placeholder: __( 'Add list items ...', 'debtcollective' )
        },
        example: {
            attributes: {
                className: 'basic',
            },
        },
        scope: [
            'block',
            'inserter',
            'transform'
        ],
    },
    {
        name: 'inline-bullet-list',
        title: __( 'Columned Bullet List', 'debtcollective' ),
        description: __( 'A list with three item rows, side by side.', 'debtcollective' ),
        attributes: {
            className: 'inline-bullet-list',
            placeholder: __( 'Add list items ...', 'debtcollective' )
        },
        scope: [
            'transform'
        ],
    },
    {
        name: 'bullet-list',
        title: __( 'Bullet List', 'debtcollective' ),
        description: __( 'A regular list, with fancy Jade bullets.', 'debtcollective' ),
        attributes: {
            className: 'bullet-list',
            placeholder: __( 'Add list items ...', 'debtcollective' )
        },
        scope: [
            'transform'
        ]
    }
];

variations.forEach( ( variation ) => {
    registerBlockVariation(
        'core/list',
        variation
    );
} );
