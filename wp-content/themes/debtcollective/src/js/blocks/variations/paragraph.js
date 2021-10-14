import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

const variations = [
    {
        name: 'lede',
        title: __( 'Lede', 'debtcollective' ),
        description: __( 'Add opening sentence or paragraph.', 'debtcollective' ),
        category: 'components',
        keywords: [
            __( 'intro', 'debtcollective' ),
            __( 'paragraph', 'debtcollective' ),
            __( 'sentence', 'debtcollective' )
        ],
        icon: 'editor-justify',
        attributes: {
            className: 'lede',
            placeholder: __( 'Add content...', 'debtcollective' )
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
        // isActive: ( blockAttributes, variationAttributes ) => {
        //     blockAttributes.className === variationAttributes.className
        // }
    }
];

variations.forEach( ( variation ) => {
    registerBlockVariation(
        'core/paragraph',
        variation
    );
} );