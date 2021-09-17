import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import image from '../assets/img/hero.png'

registerBlockVariation(
    'core/cover',
    [
        {
            name: 'hero',
            title: __( 'Hero', 'site-functionality' ),
            attributes: {
                className: 'hero',
                contentPosition: 'top left',
                url: image
            },
            innerBlocks: [
                [ 'core/heading', { 
                    className: 'hero__heading h1',
                    placeholder: __( 'Add Heading...', 'site-functionality' )
                } ],
                [ 'core/paragraph', { 
                    className: 'hero__content',
                    placeholder: __( 'Add content...', 'site-functionality' )
                } ],
                [ 'core/buttons', { style: 'large' }, [
                    [ 'core/button', { className: 'hero__button' } ]
                ] ],
            ],
            example: {
                attributes: {
                    contentPosition: 'top left',
                    url: image,
                },
                innerBlocks: [
                    {
                        name: 'core/heading',
                        attributes: {
                            level: 2,
                            className: 'hero__heading',
                            content: __( 'Alone our debts are a burden.<br /> Together they make us <em>powerful</em>.', 'site-functionality' ),
                        },
                    },
                    {
                        name: 'core/paragraph',
                        attributes: {
                            className: 'hero__content',
                            content: __( 'We are a debtors\' union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.', 'site-functionality' ),
                        },
                    },
                    {
                        name: 'core/buttons',
                        attributes: {
                            className: 'hero__buttons',
                        },
                        innerBlocks: [
                            {
                                name: 'core/button',
                                attributes: {
                                    className: 'hero__button',
                                    style: 'large',
                                    content: __( 'Join the Union', 'site-functionality' ),
                                }
                            }
                        ]
                    },
                ],
            }

        }
    ]
);