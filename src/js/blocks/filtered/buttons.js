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
