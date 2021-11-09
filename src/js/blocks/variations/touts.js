import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

const variations = [
    {
        name: 'tout-jade',
        title: __( 'Jade Tout', 'debtcollective' ),
        category: 'components',
        description: __( 'Display a jade tout on page.', 'debtcollective' ),
        keywords: [
            __( 'tout', 'debtcollective' ),
            __( 'call to action', 'debtcollective' ),
            __( 'callout', 'debtcollective' )
        ],
        attributes: {
            className: 'jade',
        },
        example: {
            attributes: {
                className: 'jade',
            },
            innerBlocks: [
                {
                    name: 'core/heading',
                    attributes: {
                        level: 2,
                        className: 'tout__heading',
                        content: __( 'Alone our debts are a burden.<br /> Together they make us <em>powerful</em>.', 'debtcollective' ),
                    },
                },
                {
                    name: 'core/paragraph',
                    attributes: {
                        className: 'tout__content',
                        content: __( 'We are a debtors\' union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.', 'debtcollective' ),
                    },
                },
                {
                    name: 'core/image',
                    attributes: {
                        className: 'tout__image',
                        id: 134, 
                        sizeSlug: 'full',
                        linkDestination: 'none',
                    }
                },
            ],
        },
        scope: [
            'block',
            'inserter',
            'transform'
        ]
    },
    {
        name: 'tout-canary',
        title: __( 'Canary Tout', 'debtcollective' ),
        category: 'components',
        description: __( 'Display a canary tout on page.', 'debtcollective' ),
        keywords: [
            __( 'tout', 'debtcollective' ),
            __( 'call to action', 'debtcollective' ),
            __( 'callout', 'debtcollective' )
        ],
        attributes: {
            className: 'canary',
        },
        example: {
            attributes: {
                className: 'canary',
            },
            innerBlocks: [
                {
                    name: 'core/heading',
                    attributes: {
                        level: 2,
                        className: 'tout__heading',
                        content: __( 'Alone our debts are a burden.<br /> Together they make us <em>powerful</em>.', 'debtcollective' ),
                    },
                },
                {
                    name: 'core/paragraph',
                    attributes: {
                        className: 'tout__content',
                        content: __( 'We are a debtors\' union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.', 'debtcollective' ),
                    },
                },
                {
                    name: 'core/image',
                    attributes: {
                        className: 'tout__image',
                        id: 134, 
                        sizeSlug: 'full',
                        linkDestination: 'none',
                    }
                },
            ],
        },
        scope: [
            'block',
            'inserter',
            'transform'
        ]
    },
    {
        name: 'tout-salmon',
        title: __( 'Salmon Tout', 'debtcollective' ),
        category: 'components',
        description: __( 'Display a salmon tout on page.', 'debtcollective' ),
        keywords: [
            __( 'tout', 'debtcollective' ),
            __( 'call to action', 'debtcollective' ),
            __( 'callout', 'debtcollective' )
        ],
        attributes: {
            className: 'salmon',
        },
        example: {
            attributes: {
                className: 'salmon',
            },
            innerBlocks: [
                {
                    name: 'core/heading',
                    attributes: {
                        level: 2,
                        className: 'tout__heading',
                        content: __( 'Alone our debts are a burden.<br /> Together they make us <em>powerful</em>.', 'debtcollective' ),
                    },
                },
                {
                    name: 'core/paragraph',
                    attributes: {
                        className: 'tout__content',
                        content: __( 'We are a debtors\' union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.', 'debtcollective' ),
                    },
                },
                {
                    name: 'core/image',
                    attributes: {
                        className: 'tout__image',
                        id: 134, 
                        sizeSlug: 'full',
                        linkDestination: 'none',
                    }
                },
            ],
        },
        scope: [
            'block',
            'inserter',
            'transform'
        ]
    }
];

variations.forEach( ( variation ) => {
    registerBlockVariation(
        'site-functionality/tout',
        variation
    );
} );