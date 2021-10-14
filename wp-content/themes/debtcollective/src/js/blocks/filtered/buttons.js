import lodash from 'lodash';
const { addFilter } = wp.hooks;

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

// addFilter(
//     'blocks.registerBlockType',
//     'debtcollective/buttons',
//     removeButtonSupport
// );

function filterButtonSettings( settings, name ) {
    if ( name === 'core/button' || name === 'core/buttons' ) {
        console.log( { settings, name } );
    }
    return settings;
}
addFilter(
    'blocks.registerBlockType',
    'debtcollective/button/settings',
    filterButtonSettings,
);