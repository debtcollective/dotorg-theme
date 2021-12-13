import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

const variation = [
    {
        name: 'impactful-callout',
        title: __( 'Impactful Callout', 'debtcollective' ),
        category: 'components',
        description: __( 'Add a fullwidth callout.', 'debtcollective' ),
        keywords: [
            __( 'tout', 'debtcollective' ),
            __( 'call to action', 'debtcollective' ),
            __( 'callout', 'debtcollective' )
        ],
        attributes: {
            className: 'callout impactful-callout is-style-callout',
            overlayColor: 'emphasis',
            contentPosition: 'top left',
        },
        innerBlocks: [
            [ 'core/heading', {
                className: 'callout__content',
                level: 3,
                placeholder: __( 'Add content...', 'debtcollective' )
            } ],
            [ 'core/heading', {
                className: 'callout__heading',
                level: 2,
                placeholder: __( 'Add Heading...', 'debtcollective' )
            } ],
            [ 'core/heading', {
                className: 'callout__content',
                level: 3,
                placeholder: __( 'Add content...', 'debtcollective' )
            } ],
        ],
        example: {
            attributes: {
                className: 'callout impactful-callout is-style-callout',
                contentPosition: 'top left',
                overlayColor: 'emphasis',
                dimRatio: 0,
                url: '',
            },
            innerBlocks: [
                {
                    name: 'core/heading',
                    attributes: {
                        className: 'callout__content',
                        level: 3,
                        content: __( 'Through Our Debt Abolition Debt Buying Process We\’ve abolished', 'debtcollective' ),
                        textColor: 'white'
                    },
                },
                {
                    name: 'core/heading',
                    attributes: {
                        level: 2,
                        className: 'callout__heading has-canary-text-color',
                        content: __( '$31,982,455.76', 'debtcollective' ),
                        textColor: 'canary',
                    },
                },
                {
                    name: 'core/heading',
                    attributes: {
                        className: 'callout__content',
                        level: 3,
                        content: __( 'In Assorted medical / BLAH BLAH.', 'debtcollective' ),
                        textColor: 'white'
                    },
                },
            ],
        }
    }
];

// registerBlockVariation(
//     'core/cover',
//     variation
// );
