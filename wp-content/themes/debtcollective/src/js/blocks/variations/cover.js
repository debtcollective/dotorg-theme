import { 
    registerBlockVariation, 
    registerBlockCollection
} from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockCollection( 'debtcollective', { 
    title: __( 'Debt Collective', 'debtcollective' )
} );

const variations = [
    {
        name: 'hero',
        title: __( 'Hero', 'debtcollective' ),
        description: __( 'Add a hero with background image.', 'debtcollective' ),
        keywords: [
            __( 'banner', 'debtcollective' ),
            __( 'tout', 'debtcollective' ),
            __( 'call to action', 'debtcollective' )
        ],
        category: 'components',
        keywords: [
            __( 'banner', 'debtcollective' ),
            __( 'hero', 'debtcollective' ),
            __( 'image', 'debtcollective' )
        ],
        icon: 'format-image',
        attributes: {
            className: 'hero',
            contentPosition: 'top left',
            overlayColor: 'jade',
            backgroundColor: 'jade',
        },
        innerBlocks: [
            [ 'core/heading', { 
                className: 'hero__heading h1',
                level: 1,
                placeholder: __( 'Add Heading ...', 'debtcollective' ),
                content: __( 'Alone Our Debts are a Burden.<br/>Together They Make Us <strong>Powerful</strong>', 'debtcollective' ),
                textColor: 'white'
            } ],
            [ 'core/heading', { 
                className: 'hero__content h3',
                level: 3,
                placeholder: __( 'Add content ...', 'debtcollective' ),
                content: __( 'We are a debtors’ union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.', 'debtcollective' ),
                textColor: 'white'
            } ],
            [ 'core/buttons', { 
                className: 'buttons'
            }, [
                [ 'core/button', { 
                    className: 'hero__button button',
                    placeholder: __( 'Add Button Text ...', 'debtcollective' ),
                    backgroundColor: 'emphasis',
                    textColor: 'white',
                    content: __( 'Join the Union', 'debtcollective' )
                } ],
                [ 'core/button', { 
                    className: 'hero__button button--minor' ,
                    placeholder: __( 'Add Button Text ...', 'debtcollective' ),
                    backgroundColor: 'white',
                    textColor: 'grey-dark',
                    content: __( 'Membership Benefits', 'debtcollective' )
                } ]
            ] ],
        ],
        example: {
            attributes: {
                className: 'hero',
                contentPosition: 'top left',
                dimRatio: 0,
                overlayColor: 'jade',
                url: 'https://cdn.pixabay.com/photo/2018/03/02/20/38/fantasy-3194227_960_720.jpg',
            },
            innerBlocks: [
                {
                    name: 'core/heading',
                    attributes: {
                        content: __( 'Alone our debts are a burden.<br /> Together they make us <em>powerful</em>.', 'debtcollective' ),
                        className: 'hero__heading h1',
                        level: 1,
                        textColor: 'white'
                    },
                },
                {
                    name: 'core/heading',
                    attributes: {
                        content: __( 'We are a debtors\' union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.', 'debtcollective' ),
                        className: 'hero__heading h3',
                        level: 3,
                        textColor: 'white'
                    },
                },
                {
                    name: 'core/buttons',
                    innerBlocks: [
                        {
                            name: 'core/button',
                            attributes: {
                                content: __( 'Join the Union', 'debtcollective' ),
                                className: 'hero__button button',
                                backgroundColor: 'emphasis',
                                textColor: 'white'
                            }
                        },
                        {
                            name: 'core/button',
                            attributes: {
                                content: __( 'Membership Benefits', 'debtcollective' ),
                                className: 'hero__button button--minor' ,
                                backgroundColor: 'white',
                                textColor: 'grey-dark'
                            }
                        }
                    ]
                },
            ],
        }
    },
    {
        name: 'hero-solid',
        title: __( 'Solid Hero', 'debtcollective' ),
        description: __( 'Add a hero with background color.', 'debtcollective' ),
        category: 'components',
        keywords: [
            __( 'banner', 'debtcollective' ),
            __( 'hero', 'debtcollective' ),
            __( 'image', 'debtcollective' )
        ],
        icon: 'format-image',
        attributes: {
            className: 'hero-solid',
            contentPosition: 'top left',
            overlayColor: 'canary',
            backgroundColor: 'canary',
        },
        innerBlocks: [
            [ 'core/heading', { 
                className: 'hero__heading h1',
                level: 1,
                placeholder: __( 'Add Heading ...', 'debtcollective' ),
                content: __( 'Alone Our Debts are a Burden.<br/>Together They Make Us <strong>Powerful</strong>', 'debtcollective' ),
                textColor: 'grey-darker'
            } ],
            [ 'core/heading', { 
                className: 'hero__content h3',
                level: 3,
                placeholder: __( 'Add content ...', 'debtcollective' ),
                content: __( 'We are a debtors’ union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.', 'debtcollective' ),
                textColor: 'grey-darker'
            } ]
        ],
        example: {
            attributes: {
                className: 'hero',
                contentPosition: 'top left',
                overlayColor: 'canary',
                backgroundColor: 'canary',
            },
            innerBlocks: [
                {
                    name: 'core/heading',
                    attributes: {
                        content: __( 'Housing Debt', 'debtcollective' ),
                        className: 'hero__heading h1',
                        level: 1,
                        textColor: 'grey-darker'
                    },
                },
                {
                    name: 'core/heading',
                    attributes: {
                        content: __( 'As of summer 2021, nearly 6 million US households were behind on rent payments, owing over $20 billion dollars. Those behind on rent debt are overwhelmingly low income and people of color. (Yup. Racial capitalism.) Sound like a lot of debt? Sounds like a lot of power over landlords to us!', 'debtcollective' ),
                        className: 'hero__heading h3',
                        level: 3,
                        textColor: 'grey-darker'
                    },
                }
            ],
        }
    }
];

variations.forEach( ( variation ) => {
    registerBlockVariation(
        'core/cover',
        variation
    );
} );