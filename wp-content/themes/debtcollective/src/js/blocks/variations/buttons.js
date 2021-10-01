import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

const buttonsVariations = [
    {
        name: 'buttons',
        title: __( 'Buttons', 'debtcollective' ),
        category: 'components',
        isDefault: true,
        parent: false,
        attributes: {
            className: 'buttons'
        },
        innerBlocks: [
            [ 'core/button', {
                placeholder: __( 'Add Button Text&hellip;', 'debtcollective' ),
                className: 'button',
                backgroundColor: 'emphasis',
                textColor: 'white'
            } ]
        ],
        styles: []
    },
    {
        name: 'buttons-minor',
        title: __( 'Minor Buttons', 'debtcollective' ),
        category: 'components',
        attributes: {
            className: 'buttons--minor'
        },
        innerBlocks: [
            [ 'core/button', {
                placeholder: __( 'Add Button Text&hellip;', 'debtcollective' ),
                className: 'button--minor',
                backgroundColor: 'white',
                textColor: 'grey-dark'
            } ]
        ],
        styles: []
    },
    {
        name: 'buttons-jade',
        title: __( 'Jade Buttons', 'debtcollective' ),
        attributes: {
            className: 'buttons--jade'
        },
        innerBlocks: [
            [ 'core/button', {
                placeholder: __( 'Add Button Text&hellip;', 'debtcollective' ),
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
        title: __( 'Button', 'debtcollective' ),
        isDefault: true,
        parent: false,
        attributes: {
            placeholder: __( 'Add Button Text&hellip;', 'debtcollective' ),
            className: 'button',
            backgroundColor: 'emphasis',
            textColor: 'white'
        },
        styles: []
    },
    {
        name: 'button-minor',
        title: __( 'Minor Button', 'debtcollective' ),
        attributes: {
            placeholder: __( 'Add Button Text&hellip;', 'debtcollective' ),
            className: 'button--minor',
            backgroundColor: 'white',
            textColor: 'grey-dark'
        },
        styles: []
    },
    {
        name: 'button-jade',
        title: __( 'Jade Button', 'debtcollective' ),
        attributes: {
            placeholder: __( 'Add Button Text&hellip;', 'debtcollective' ),
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