import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

const variations = [
    {
        name: 'list',
        title: __( 'A basic list', 'debtcollective' ),
        description: __( 'Display stylized list.', 'debtcollective' ),
        category: 'components',
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
        title: __( 'Inline Bullet List', 'debtcollective' ),
        description: __( 'A list with three item rows, side by side.', 'debtcollective' ),
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
            'transform'
        ],
    },
    {
        name: 'bullet-list',
        title: __( 'Bullet List', 'debtcollective' ),
        description: __( 'A regular list, with fancy bullets.', 'debtcollective' ),
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
