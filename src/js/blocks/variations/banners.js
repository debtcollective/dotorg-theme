import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

const variations = [
  {
  name: 'banner-media',
  title: __( 'Media Banner', 'debtcollective' ),
  description: __( 'A banner that displays a media item on the left and text on the right.', 'debtcollective' ),
  keywords: [
    __( 'banner', 'debtcollective' ),
    __( 'tout', 'debtcollective' ),
    __( 'call to action', 'debtcollective' )
  ],
  category: 'components',
  icon: 'video-alt3',
  attributes: {
    className: 'video-banner banner',
    backgroundColor: 'canary',
    verticalAlignment: 'center'
  },
  innerBlocks: [
      [ 'core/embed', {
          type: "video",
          providerNameSlug: "youtube",
          responsive: true,
          className:"wp-embed-aspect-16-9 wp-has-aspect-ratio banner__media"
      } ],
      [ 'core/group', {
        className: "banner__content"
      },
      [
        [ 'core/heading', {
            level: 3,
            className: 'banner__heading',
            placeholder: __( 'Add Heading...', 'debtcollective' )
        } ],
        [ 'core/paragraph', {
            className: 'banner__content',
            placeholder: __( 'Add content...', 'debtcollective' )
        } ],
        [ 'core/buttons', {
            className: 'btn',
            placeholder: __( 'Button text...', 'debtcollective' )
        } ],
      ]],
    ],
  }
];

variations.forEach( ( variation ) => {
    registerBlockVariation(
        'core/group',
        variation
    );
} );
