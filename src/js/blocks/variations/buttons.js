import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';


const buttonVariations = [
    {
        name: 'btn',
        title: __( 'Button', 'debtcollective' ),
        description: __( 'Add a standard button.', 'debtcollective' ),
        isDefault: true,
        keywords: [
            __( 'component', 'debtcollective' ),
            __( 'link', 'debtcollective' ),
            __( 'action', 'debtcollective' )
        ],
        parent: false,
        isDefault: true,
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
        description: __( 'A button with a white background and text-colored outline.', 'debtcollective' ),
        scope: [
            'transform'
        ],
        isActive: ( blockAttributes, variationAttributes ) =>
            blockAttributes.className === variationAttributes.className,
    },
    {
        name: 'button-jade',
        title: __( 'Jade Button', 'debtcollective' ),
        description: __( 'Add a jade-colored button.', 'debtcollective' ),
        scope: [
            'transform'
        ],
        isActive: ( blockAttributes, variationAttributes ) =>
            blockAttributes.className === variationAttributes.className,
    },
    {
        name: 'button-outlined',
        title: __( 'Outlined Button', 'debtcollective' ),
        description: __( 'Add a white button with outline.', 'debtcollective' ),
        scope: [
            'transform'
        ],
        isActive: ( blockAttributes, variationAttributes ) =>
            blockAttributes.className === variationAttributes.className,
    },
	{
        name: 'button-link',
        title: __( 'Link Button', 'debtcollective' ),
        description: __( 'Add a button that looks like a link.', 'debtcollective' ),
        scope: [
            'transform'
        ],
        isActive: ( blockAttributes, variationAttributes ) =>
            blockAttributes.className === variationAttributes.className,
    }
];

buttonVariations.forEach( ( variation ) => {
    registerBlockVariation(
        'core/button',
        variation
    );
} );
