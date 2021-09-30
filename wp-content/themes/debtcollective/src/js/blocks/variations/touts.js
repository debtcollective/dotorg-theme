import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import image from '../assets/img/student.png';

const variations = [
    {
        name: 'tout',
        title: __( 'Standard Tout', 'site-functionality' ),
        attributes: {
            className: 'tout',
            contentPosition: 'top left',
            url: image
        },
        innerBlocks: [
            [ 'core/heading', { 
                className: 'tout__heading h1',
                placeholder: __( 'Add Heading...', 'site-functionality' )
            } ],
            [ 'core/paragraph', { 
                className: 'tout__content',
                placeholder: __( 'Add content...', 'site-functionality' )
            } ],
            [ 'core/buttons', { className: 'buttons' }, [
                [ 'core/button', { 
                    className: 'tout__button button',
                    placeholder: __( 'Add Button Text...', 'site-functionality' )
                } ]
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
                        className: 'tout__heading',
                        content: __( 'Alone our debts are a burden.<br /> Together they make us <em>powerful</em>.', 'site-functionality' ),
                    },
                },
                {
                    name: 'core/paragraph',
                    attributes: {
                        className: 'tout__content',
                        content: __( 'We are a debtors\' union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.', 'site-functionality' ),
                    },
                },
                {
                    name: 'core/buttons',
                    attributes: {
                        className: 'tout__buttons',
                    },
                    innerBlocks: [
                        {
                            name: 'core/button',
                            attributes: {
                                className: 'tout__button',
                                content: __( 'Join the Union', 'site-functionality' ),
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