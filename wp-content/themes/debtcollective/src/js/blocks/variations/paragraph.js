import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import image from '../assets/img/hero.png'

const variations = [
    {
        name: 'lede',
        title: __( 'Lede', 'site-functionality' ),
        attributes: {
            className: 'lede',
            placeholder: __( 'Add content...', 'site-functionality' )
        },
        example: {
            attributes: {
                content: __( 'We are a membership-powered movement. Some supporting copy reenforcing the message and sentiment we’re looking to convey.', 'site-functionality' )
            },
        }
    }
];

registerBlockVariation(
    'core/paragraph',
    variations
);