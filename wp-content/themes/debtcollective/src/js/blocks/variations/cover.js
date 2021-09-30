import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import image from '../assets/img/hero.png'

const variations = [
    {
        name: 'hero',
        title: __( 'Hero', 'site-functionality' ),
        description: __( 'Add a hero with background image.', 'site-functionality' ),
        category: 'components',
        keywords: [
            __( 'banner', 'site-functionality' ),
            __( 'hero', 'site-functionality' ),
            __( 'image', 'site-functionality' )
        ],
        icon: 'format-image',
        attributes: {
            className: 'hero',
            contentPosition: 'top left',
        },
        innerBlocks: [
            [ 'core/heading', { 
                className: 'hero__heading h1',
                level: 1,
                placeholder: __( 'Add Heading...', 'site-functionality' )
            } ],
            [ 'core/heading', { 
                className: 'hero__content h3',
                level: 3,
                placeholder: __( 'Add content...', 'site-functionality' )
            } ],
            [ 'core/buttons', { 
                className: 'buttons'
            }, [
                [ 'core/button', { 
                    className: 'hero__button button',
                    placeholder: __( 'Add Button Text...', 'site-functionality' ),
                    backgroundColor: 'emphasis',
                    textColor: 'white'
                } ],
                [ 'core/button', { 
                    className: 'hero__button button--minor' ,
                    placeholder: __( 'Add Button Text...', 'site-functionality' ),
                    backgroundColor: 'white',
                    textColor: 'grey-dark'
                } ]
            ] ],
        ],
        example: {
            attributes: {
                className: 'hero',
                contentPosition: 'top left',
                dimRatio: 0,
                url: image
            },
            innerBlocks: [
                {
                    name: 'core/heading',
                    attributes: {
                        content: __( 'Alone our debts are a burden.<br /> Together they make us <em>powerful</em>.', 'site-functionality' ),
                        className: 'hero__heading h1',
                        level: 1,
                    },
                },
                {
                    name: 'core/heading',
                    attributes: {
                        content: __( 'We are a debtors\' union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.', 'site-functionality' ),
                    },
                },
                {
                    name: 'core/buttons',
                    innerBlocks: [
                        {
                            name: 'core/button',
                            attributes: {
                                content: __( 'Join the Union', 'site-functionality' ),
                                className: 'hero__button button',
                                backgroundColor: 'emphasis',
                                textColor: 'white'
                            }
                        },
                        {
                            name: 'core/button',
                            attributes: {
                                content: __( 'Membership Benefits', 'site-functionality' ),
                                className: 'hero__button button--minor' ,
                                backgroundColor: 'white',
                                textColor: 'grey-dark'
                            }
                        }
                    ]
                },
            ],
        }
    }
];

registerBlockVariation(
    'core/cover',
    variations
);