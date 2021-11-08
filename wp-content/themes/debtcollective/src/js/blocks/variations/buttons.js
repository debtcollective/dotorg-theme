import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';


const buttonVariations = [
    {
        name: 'btn',
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
            placeholder: __( 'Add Button Text...', 'debtcollective' ),
            className: 'btn',
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
            placeholder: __( 'Add Button Text...', 'debtcollective' ),
            className: 'btn minor',
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
            placeholder: __( 'Add Button Text...', 'debtcollective' ),
            className: 'btn jade',
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
        name: 'button-outlined',
        title: __( 'Outlined Button', 'debtcollective' ),
        description: __( 'Add a white button with outline.', 'debtcollective' ),
        keywords: [
            __( 'component', 'debtcollective' ),
            __( 'link', 'debtcollective' ),
            __( 'action', 'debtcollective' )
        ],
        attributes: {
            placeholder: __( 'Add Button Text...', 'debtcollective' ),
            className: 'btn outline',
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
        name: 'button-link',
        title: __( 'Link Button', 'debtcollective' ),
        description: __( 'Add a button that looks like a link.', 'debtcollective' ),
        keywords: [
            __( 'component', 'debtcollective' ),
            __( 'link', 'debtcollective' ),
            __( 'action', 'debtcollective' )
        ],
        attributes: {
            placeholder: __( 'Add Button Text...', 'debtcollective' ),
            className: 'btn link',
        },
        styles: [],
        scope: [
            'block',
            'inserter',
            'transform'
        ],
        isActive: ( blockAttributes, variationAttributes ) =>
            blockAttributes.className === variationAttributes.className,
    }
];

// buttonsVariations.forEach( ( variation ) => {
//     registerBlockVariation(
//         'core/buttons',
//         variation
//     );
// } );

buttonVariations.forEach( ( variation ) => {
    registerBlockVariation(
        'core/button',
        variation
    );
} );

