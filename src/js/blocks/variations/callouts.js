import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

const variation = [
  {
    name: 'impactful-callout-emphasis',
    title: __( 'Impactful Callout — Emphasis', 'debtcollective' ),
    category: 'components',
    isDefault: true,
    description: __( 'Add a bold, fullwidth callout.', 'debtcollective' ),
    keywords: [
      __( 'tout', 'debtcollective' ),
      __( 'call to action', 'debtcollective' ),
      __( 'callout', 'debtcollective' )
    ],
    attributes: {
      className: 'impactful-callout emphasis',
      contentPosition: 'top left',
    },
    innerBlocks: [
      [
        'core/heading',
        {
          className: 'callout__content',
          level: 3,
          placeholder: __( 'Add content...', 'debtcollective' )
        }
      ],
    ],
    example: {
        attributes: {
          className: 'impactful-callout emphasis',
          contentPosition: 'top left',
          dimRatio: 0,
          url: '',
        },
      innerBlocks: [{
          name: 'core/heading',
          attributes: {
            className: 'callout__content',
            level: 3,
            content: __( 'Use this block when you want to break up walls of text. Or emphasize a bit of content present inside the wall of text. It can also make for an improvised call to action.', 'debtcollective' ),
          },
        },
      ],
    },
    scope: [
      'block',
      'inserter',
      'transform'
    ]
  },
  {
    name: 'impactful-callout-jade',
    title: __( 'Impactful Callout - Jade', 'debtcollective' ),
    category: 'components',
    description: __( 'Jade background palette.', 'debtcollective' ),
    attributes: {
      className: 'impactful-callout jade',
    },
    scope: [
      'transform'
    ]
  },
  {
    name: 'impactful-callout-canary',
    title: __( 'Impactful Callout - Canary', 'debtcollective' ),
    description: __( 'Jade background palette.', 'debtcollective' ),
    attributes: {
      className: 'impactful-callout canary',
      contentPosition: 'top left',
    },
    scope: [
      'transform'
    ]
  },
  {
    name: 'impactful-callout-salmon',
    title: __( 'Impactful Callout - Salmon', 'debtcollective' ),
    description: __( 'Salmon background palette.', 'debtcollective' ),
    attributes: {
      className: 'impactful-callout salmon',
      contentPosition: 'top left',
    },
    scope: [
      'transform'
    ]
  },
  {
    name: 'callout-twocol',
    title: __( 'Callout two col', 'debtcollective' ),
    description: __( 'A two column callout for call to actions and value proposition', 'debtcollective' ),
    attributes: {
      className: 'impactful-callout two-col',
    },
    innerBlocks: [
      [
        'core/heading',
        {
          className: 'content-column-lede',
          level: 3,
          placeholder: __( 'Call to action...', 'debtcollective' )
        }
      ],
      [
        'core/paragraph',
        {
          className: 'content-column-follow',
          placeholder: __( 'Value proposition...', 'debtcollective' )
        }
      ]
    ],
    scope: [
      'transform'
    ]
  }

];

registerBlockVariation(
    'site-functionality/impactful-callout',
    variation
);
