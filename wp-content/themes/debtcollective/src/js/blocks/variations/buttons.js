import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

const buttonsVariations = [
    {
        name: 'buttons',
        title: __( 'Buttons', 'debtcollective' ),
        description: __( 'Add one or more standard buttons.', 'debtcollective' ),
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
        styles: [],
        scope: [
            'block',
            'inserter',
            'transform'
        ],
        isActive: ( blockAttributes, variationAttributes ) =>
            blockAttributes.className === variationAttributes.className,
    },
    {
        name: 'buttons-minor',
        title: __( 'Minor Buttons', 'debtcollective' ),
        description: __( 'Add one or more secondary buttons.', 'debtcollective' ),
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
        styles: [],
        scope: [
            'block',
            'inserter',
            'transform'
        ],
        isActive: ( blockAttributes, variationAttributes ) =>
            blockAttributes.className === variationAttributes.className,
    },
    {
        name: 'buttons-jade',
        title: __( 'Jade Buttons', 'debtcollective' ),
        description: __( 'Add one or more jade-colored buttons.', 'debtcollective' ),
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
        styles: [],
        scope: [
            'block',
            'inserter',
            'transform'
        ],
        isActive: ( blockAttributes, variationAttributes ) =>
            blockAttributes.className === variationAttributes.className,
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
        description: __( 'Add a standard button.', 'debtcollective' ),
        keywords: [
            __( 'component', 'debtcollective' ),
            __( 'link', 'debtcollective' ),
            __( 'action', 'debtcollective' )
        ],
        parent: false,
        isDefault: true,
        attributes: {
            placeholder: __( 'Add Button Text&hellip;', 'debtcollective' ),
            className: 'button',
            backgroundColor: 'emphasis',
            textColor: 'white'
        },
        styles: [],
        scope: [
            'block',
            'inserter',
            'transform'
        ],
        isActive: ( blockAttributes, variationAttributes ) =>
            blockAttributes.className === variationAttributes.className,
    },
    {
        name: 'button-minor',
        title: __( 'Minor Button', 'debtcollective' ),
        description: __( 'Add a secondary button.', 'debtcollective' ),
        keywords: [
            __( 'component', 'debtcollective' ),
            __( 'link', 'debtcollective' ),
            __( 'action', 'debtcollective' )
        ],
        attributes: {
            placeholder: __( 'Add Button Text&hellip;', 'debtcollective' ),
            className: 'button--minor',
            backgroundColor: 'white',
            textColor: 'grey-dark'
        },
        styles: [],
        scope: [
            'block',
            'inserter',
            'transform'
        ],
        isActive: ( blockAttributes, variationAttributes ) =>
            blockAttributes.className === variationAttributes.className,
    },
    {
        name: 'button-jade',
        title: __( 'Jade Button', 'debtcollective' ),
        description: __( 'Add a jade-colored button.', 'debtcollective' ),
        keywords: [
            __( 'component', 'debtcollective' ),
            __( 'link', 'debtcollective' ),
            __( 'action', 'debtcollective' )
        ],
        attributes: {
            placeholder: __( 'Add Button Text&hellip;', 'debtcollective' ),
            className: 'button--jade',
            backgroundColor: 'jade',
            textColor: 'white'
        },
        styles: [],
        scope: [
            'block',
            'inserter',
            'transform'
        ],
        isActive: ( blockAttributes, variationAttributes ) =>
            blockAttributes.className === variationAttributes.className,
    },
];

registerBlockVariation(
    'core/button',
    buttonVariations
);