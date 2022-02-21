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
        attributes: {
          className: 'btn default',
        },
        scope: [
            'block',
            'inserter',
            'transform'
        ]
        // isActive: ( blockAttributes, variationAttributes ) =>
        //     blockAttributes.className === variationAttributes.className,
    },
    {
        name: 'button-minor',
        title: __( 'Minor Button', 'debtcollective' ),
        description: __( 'A button with a white background and text-colored outline.', 'debtcollective' ),
        attributes: {
          className: 'btn minor',
        },
        scope: [
            'transform'
        ]
    },
    {
        name: 'button-jade',
        title: __( 'Jade Button', 'debtcollective' ),
        description: __( 'Add a jade-colored button.', 'debtcollective' ),
        attributes: {
          className: 'btn jade',
        },
        scope: [
            'transform'
        ]
    },
    {
        name: 'button-outlined',
        title: __( 'Outlined Button', 'debtcollective' ),
        description: __( 'Add a white button with outline.', 'debtcollective' ),
        attributes: {
          className: 'btn outline',
        },
        scope: [
            'transform'
        ]
    },
    {
        name: 'big',
        title: __( 'Big Button', 'debtcollective' ),
        description: __( 'Add a big ol button.', 'debtcollective' ),
        attributes: {
          className: 'btn big',
        },
        scope: [
            'transform'
        ]
  	},
    {
      name: 'button-link',
      title: __( 'Link Button', 'debtcollective' ),
      description: __( 'Add a button that looks like a link.', 'debtcollective' ),
      attributes: {
        className: 'btn link',
      },
      scope: [
          'transform'
      ]
    }
];

buttonVariations.forEach( ( variation ) => {
    registerBlockVariation(
        'core/button',
        variation
    );
} );
