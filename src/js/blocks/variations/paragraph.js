import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

const variations = [
    {
        name: 'paragraph',
        title: __( 'Paragraph', 'debtcollective' ),
        description: __( 'A standard paragraph.', 'debtcollective' ),
        isDefault: true,
        category: 'text',
        keywords: [
            __( 'intro', 'debtcollective' ),
            __( 'paragraph', 'debtcollective' ),
            __( 'sentence', 'debtcollective' )
        ],
        icon: 'editor-alignleft',
        attributes: {
            className: 'ptag',
            placeholder: __( 'Add content...', 'debtcollective' )
        },
        example: {
            attributes: {
                content: __( 'This is a bock for displaying the opening paragraph, the big idea, the tl;dr.', 'debtcollective' )
            },
        },
        scope: [
            'block',
            'inserter',
            'transform'
        ],
    },
    {
        name: 'lede',
        title: __( 'Lede', 'debtcollective' ),
        description: __( 'Add opening sentence or paragraph.', 'debtcollective' ),
        icon: 'editor-justify',
        attributes: {
            className: 'lede',
            placeholder: __( 'Add content...', 'debtcollective' )
        },
        scope: [
            'transform'
        ],
    }
];

variations.forEach( ( variation ) => {
    registerBlockVariation(
        'core/paragraph',
        variation
    );
} );
