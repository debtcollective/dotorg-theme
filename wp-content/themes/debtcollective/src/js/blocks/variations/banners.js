import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import image from '../assets/img/student.png';

registerBlockVariation(
    'core/columns',
    [
        {
            name: 'banner-media',
            title: __( 'Media Banner', 'site-functionality' ),
            description: __( 'A banner that displays a media item on the left and text on the right.', 'site-functionality' ),
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
                        placeholder: __( 'Add Heading...', 'site-functionality' )
                    } ],
                    [ 'core/paragraph', {
                        className: 'banner__content',
                        placeholder: __( 'Add content...', 'site-functionality' )
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
                                    placeholder: __( 'Our Movement Has <em>Abolished</em> More Than <em>$2.8 Billion</em>', 'site-functionality' )
                                },
                            },
                            {
                                name: 'core/paragraph',
                                attributes: {
                                    className: 'banner__content',
                                    placeholder: __( 'in student debt, medical debt, payday loans, probation debt and credit card debt. Our student debt campaign put full student debt cancellation and free public college on the political map.', 'site-functionality' )
                                }
                            }
                        ]
                    },
                ],
            }

        }
    ]
);