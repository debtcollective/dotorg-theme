import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';


const buttonVariations = [
    {
        name: 'button-default',
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
        name: 'button-outlined--reverse',
        title: __( 'Outlined Button Reversed', 'debtcollective' ),
        description: __( 'Add button with white outline for dark backgrounds.', 'debtcollective' ),
        attributes: {
          className: 'btn outline--reverse',
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
      name: 'button-inverse',
      title: __( 'Dark grey on Orange Button', 'debtcollective' ),
      description: __( 'Mostly just for the footer. But other dark backgrounds.', 'debtcollective' ),
      attributes: {
        className: 'btn inverse',
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
