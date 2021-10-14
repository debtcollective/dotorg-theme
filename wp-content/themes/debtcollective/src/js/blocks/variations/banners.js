import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

const variations = [
    {
        name: 'banner-media',
        title: __( 'Media Banner', 'debtcollective' ),
        description: __( 'A banner that displays a media item on the left and text on the right.', 'debtcollective' ),
        keywords: [
            __( 'banner', 'debtcollective' ),
            __( 'tout', 'debtcollective' ),
            __( 'call to action', 'debtcollective' )
        ],
        category: 'components',
        attributes: {
            className: 'banner',
            backgroundColor: 'canary',
            verticalAlignment: 'center'
        },
        innerBlocks: [
            [ 'core/column', {
                width: '33.33%',
                verticalAlignment: 'top'
            }, [
                [ 'core/embed', {
                    type: "video",
                    providerNameSlug: "youtube",
                    responsive: true,
                    className:"wp-embed-aspect-16-9 wp-has-aspect-ratio banner__media"
                } ]
            ] ],
            [ 'core/column', {
                width: '66.66%',
                verticalAlignment: 'top'
            }, [
                [ 'core/heading', {
                    level: 2,
                    className: 'banner__heading',
                    placeholder: __( 'Add Heading...', 'debtcollective' )
                } ],
                [ 'core/paragraph', {
                    className: 'banner__content',
                    placeholder: __( 'Add content...', 'debtcollective' )
                } ]
            ] ],
        ],
        example: {
            attributes: {
                className: 'banner',
                backgroundColor: 'canary'
            },
            innerBlocks: [
                {
                    name: 'core/column',
                    attributes: {
                        width: '33.33%',
                        verticalAlignment: 'top'
                    },
                    innerBlocks: [
                        {
                            name: 'core/embed',
                            attributes: {
                                type: "video",
                                providerNameSlug: "youtube",
                                responsive: true,
                                className:"wp-embed-aspect-16-9 wp-has-aspect-ratio banner__media",
                                url: 'https://youtu.be/PyLDFT2GW-A'
                            }
                        }
                    ]
                },
                {
                    name: 'core/column',
                    attributes: {
                        width: '66.66%',
                        verticalAlignment: 'top'
                    },
                    innerBlocks: [
                        {
                            name: 'core/heading',
                            attributes: {
                                level: 2,
                                className: 'banner__heading',
                                placeholder: __( 'Our Movement Has <em>Abolished</em> More Than <em>$2.8 Billion</em>', 'debtcollective' )
                            },
                        },
                        {
                            name: 'core/paragraph',
                            attributes: {
                                className: 'banner__content',
                                placeholder: __( 'in student debt, medical debt, payday loans, probation debt and credit card debt. Our student debt campaign put full student debt cancellation and free public college on the political map.', 'debtcollective' )
                            }
                        }
                    ]
                },
            ],
        }
    }
];

variations.forEach( ( variation ) => {
    registerBlockVariation(
        'core/columns',
        variation
    );
} );