import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

const buttonsVariations = [
    {
        name: 'buttons',
        title: __( 'Buttons', 'site-functionality' ),
        isDefault: true,
        parent: false,
        attributes: {
            className: 'buttons'
        },
        innerBlocks: [
            [ 'core/button', {
                placeholder: __( 'Add Button Text...', 'site-functionality' ),
                className: 'button',
                backgroundColor: 'emphasis',
                textColor: 'white'
            } ]
        ],
        styles: []
    },
    {
        name: 'buttons-minor',
        title: __( 'Minor Buttons', 'site-functionality' ),
        attributes: {
            className: 'buttons--minor'
        },
        innerBlocks: [
            [ 'core/button', {
                placeholder: __( 'Add Button Text...', 'site-functionality' ),
                className: 'button--minor',
                backgroundColor: 'white',
                textColor: 'grey-dark'
            } ]
        ],
        styles: []
    },
    {
        name: 'buttons-jade',
        title: __( 'Jade Buttons', 'site-functionality' ),
        attributes: {
            className: 'buttons--jade'
        },
        innerBlocks: [
            [ 'core/button', {
                placeholder: __( 'Add Button Text...', 'site-functionality' ),
                className: 'button--jade',
                backgroundColor: 'jade',
                textColor: 'white'
            } ]
        ],
        styles: []
    },
];

registerBlockVariation(
    'core/buttons',
    buttonsVariations
);

const buttonVariations = [
    {
        name: 'button',
        title: __( 'Button', 'site-functionality' ),
        isDefault: true,
        parent: false,
        attributes: {
            placeholder: __( 'Add Button Text...', 'site-functionality' ),
            className: 'button',
            backgroundColor: 'emphasis',
            textColor: 'white'
        },
        styles: []
    },
    {
        name: 'button-minor',
        title: __( 'Minor Button', 'site-functionality' ),
        attributes: {
            placeholder: __( 'Add Button Text...', 'site-functionality' ),
            className: 'button--minor',
            backgroundColor: 'white',
            textColor: 'grey-dark'
        },
        styles: []
    },
    {
        name: 'button-jade',
        title: __( 'Jade Button', 'site-functionality' ),
        attributes: {
            placeholder: __( 'Add Button Text...', 'site-functionality' ),
            className: 'button--jade',
            backgroundColor: 'jade',
            textColor: 'white'
        },
        styles: []
    },
];

registerBlockVariation(
    'core/button',
    buttonVariations
);