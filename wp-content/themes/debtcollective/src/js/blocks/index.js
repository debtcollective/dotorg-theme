/**
 * Gutenberg Block JS
 *
 * Import JS for Gutenberg blocks.
 */
import lodash from 'lodash';

/**
 * Modify settings for core/social-links
 * @param {object} settings 
 * @param {string} name 
 * @returns {object} settings 
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