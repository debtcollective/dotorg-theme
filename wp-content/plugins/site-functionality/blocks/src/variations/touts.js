import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import image from '../assets/img/student.png';

registerBlockVariation(
    'core/cover',
    [
        {
            name: 'tout',
            title: __( 'Tout', 'site-functionality' ),
            attributes: {
                className: 'tout',
                url: image,
                backgroundColor: 'mint'
            },
            innerBlocks: [
                [ 'core/group', {}, [
                    [ 'core/heading', { 
                        level: 3,
                        className: 'tout__heading h2',
                        placeholder: __( 'Add Heading...', 'site-functionality' )
                    } ],
                    [ 'core/paragraph', { 
                        className: 'tout__content',
                        placeholder: __( 'Add content...', 'site-functionality' )
                    } ]
                ] ],
            ],
            example: {
                attributes: {
                    className: 'tout',
                    url: image,
                    backgroundColor: 'canary'
                },
                innerBlocks: [
                    {
                        name: 'core/heading',
                        attributes: {
                            level: 3,
                            className: 'tout__heading',
                            content: __( 'Cancel Student Debt Today!', 'site-functionality' ),
                        },
                    },
                    {
                        name: 'core/paragraph',
                        attributes: {
                            className: 'tout__content',
                            content: __( 'The President can cancel all federal student loans through executive order. It\'s not a magic trick; with the flick of his pen he can legally make all federal student loan debt disappear!', 'site-functionality' ),
                        },
                    },
                ],
            }

        }
    ]
);