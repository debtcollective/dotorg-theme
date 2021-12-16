import lodash from 'lodash';

/**
 * Modify settings for core/social-links
 * @param {Object} settings
 * @param {String} name
 * @return {Object}
 */
  function modifySocialLinkSettings( settings, name ) {
      if ( name !== 'core/social-links' ) {
          return settings;
      }

      return lodash.assign( {}, settings, {
          style: lodash.assign( {}, settings.style, '' ),
      } );
  }
 
wp.hooks.addFilter(
    'blocks.registerBlockType',
    'debtcollective/social-links',
    modifySocialLinkSettings
);
