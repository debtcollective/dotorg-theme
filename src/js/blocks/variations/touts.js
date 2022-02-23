import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

const variations = [
    {
        name: 'tout-jade',
        title: __( 'Jade Tout', 'debtcollective' ),
        category: 'touts',
        isDefault: true,
        description: __( 'A tout with a jade background color.', 'debtcollective' ),
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
        description: __( 'A tout with a canary yellow color.', 'debtcollective' ),
        attributes: {
            className: 'canary',
        },
        scope: [
            'transform'
        ]
    },
    {
        name: 'tout-salmon',
        title: __( 'Salmon Tout', 'debtcollective' ),
        description: __( 'A tout with a salmon background color.', 'debtcollective' ),
        attributes: {
            className: 'salmon',
        },
        scope: [
            'transform'
        ]
    },
    {
        name: 'tout-dcorange',
        title: __( 'DC Orange Tout', 'debtcollective' ),
        description: __( 'A tout with the DebtCollective brand orange background color.', 'debtcollective' ),
        attributes: {
            className: 'emphasis',
        },
        scope: [
            'transform'
        ]
    },
    {
        name: 'tout-canary-minor',
        title: __( 'DC Canary Minor Tout', 'debtcollective' ),
        description: __( 'A minor tout with the canary background color.', 'debtcollective' ),
        attributes: {
            className: 'tout canary minor',
        },
        scope: [
            'transform'
        ]
    },
    {
        name: 'tout-jade-minor',
        title: __( 'DC Jade Minor Tout', 'debtcollective' ),
        description: __( 'A minor tout with the DebtCollective brand orange background color.', 'debtcollective' ),
        attributes: {
            className: 'tout jade minor',
        },
        scope: [
            'transform'
        ]
    },
    {
        name: 'tout-dcorange-minor',
        title: __( 'DC Orange Minor Tout', 'debtcollective' ),
        description: __( 'A minor tout with the DebtCollective brand orange background color.', 'debtcollective' ),
        attributes: {
            className: 'tout emphasis minor',
        },
        scope: [
            'transform'
        ]
    },
];

variations.forEach( ( variation ) => {
    registerBlockVariation(
        'site-functionality/tout',
        variation
    );
} );
