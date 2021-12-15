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
        isDefault: true,
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
            url: 'https://wordpress-cdn-test.debtcollective.org/wp-content/uploads/2021/12/08161136/dummy-banner.png',
            id: 307,
            dimRatio: 0,
        },
        innerBlocks: [
            [ 'core/heading', { 
                className: 'hero__heading',
                level: 1,
                placeholder: __( 'Add Heading...', 'debtcollective' ),
                textColor: 'white'
            } ],
            [ 'core/heading', { 
                className: 'hero__content',
                level: 3,
                placeholder: __( 'Add content...', 'debtcollective' ),
                textColor: 'white'
            } ],
            [ 'core/buttons', { 
                className: 'buttons'
            }, [
                [ 'core/button', { 
                    className: 'hero__button btn',
                    placeholder: __( 'Add Button Text...', 'debtcollective' ),
                } ],
                [ 'core/button', { 
                    className: 'hero__button btn minor' ,
                    placeholder: __( 'Add Button Text...', 'debtcollective' ),
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
                        className: 'hero__heading',
                        level: 1,
                        textColor: 'white'
                    },
                },
                {
                    name: 'core/heading',
                    attributes: {
                        content: __( 'We are a debtors\' union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.', 'debtcollective' ),
                        className: 'hero__heading',
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
                                className: 'hero__button btn',
                            }
                        },
                        {
                            name: 'core/button',
                            attributes: {
                                content: __( 'Membership Benefits', 'debtcollective' ),
                                className: 'hero__button btn minor' ,
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
                className: 'hero__heading',
                level: 1,
                placeholder: __( 'Add Heading...', 'debtcollective' ),
            } ],
            [ 'core/heading', { 
                className: 'hero__content',
                level: 3,
                placeholder: __( 'Add content...', 'debtcollective' ),
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
                        className: 'hero__heading',
                        level: 1,
                    },
                },
                {
                    name: 'core/heading',
                    attributes: {
                        content: __( 'As of summer 2021, nearly 6 million US households were behind on rent payments, owing over $20 billion dollars. Those behind on rent debt are overwhelmingly low income and people of color. (Yup. Racial capitalism.) Sound like a lot of debt? Sounds like a lot of power over landlords to us!', 'debtcollective' ),
                        className: 'hero__heading',
                        level: 3,
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