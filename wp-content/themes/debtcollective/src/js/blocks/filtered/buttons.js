import lodash from 'lodash';

function removeButtonSupport( settings, name ) {
    if ( name !== 'core/button' ) {
        return settings;
    }
 
    return lodash.assign( {}, settings, {
        supports: lodash.assign( {}, settings.supports, {
            color: { 
                text: false,
                gradient: false
            },
            typography: {
                fontSize: false
            },
            spacing: {
                padding: false
            }
        } )
    } );
}

wp.hooks.addFilter(
    'blocks.registerBlockType',
    'debtcollective/buttons',
    removeButtonSupport
);