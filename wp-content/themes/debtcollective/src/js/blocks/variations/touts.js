import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

const variations = [
    {
        name: 'tout',
        title: __( 'Standard Tout', 'debtcollective' ),
        category: 'components',
        description: __( 'Add a standard tout component.', 'debtcollective' ),
        keywords: [
            __( 'tout', 'debtcollective' ),
            __( 'call to action', 'debtcollective' ),
            __( 'callout', 'debtcollective' )
        ],
        attributes: {
            className: 'tout',
            contentPosition: 'top left',
        },
        innerBlocks: [
            [ 'core/heading', { 
                className: 'tout__heading',
                placeholder: __( 'Add Heading...', 'debtcollective' )
            } ],
            [ 'core/paragraph', { 
                className: 'tout__content',
                placeholder: __( 'Add content...', 'debtcollective' )
            } ],
            [ 'core/buttons', { className: 'buttons' }, [
                [ 'core/button', { 
                    className: 'tout__button button',
                    placeholder: __( 'Add Button Text...', 'debtcollective' )
                } ]
            ] ],
        ],
        example: {
            attributes: {
                className: 'tout',
                contentPosition: 'top left',
                overlayColor: 'jade',
                url: 'images/student.png'
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
                    name: 'core/buttons',
                    attributes: {
                        className: 'tout__buttons',
                    },
                    innerBlocks: [
                        {
                            name: 'core/button',
                            attributes: {
                                className: 'tout__button',
                                content: __( 'Join the Union', 'debtcollective' ),
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