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

// wp.blocks.getBlockTypes().forEach( ( block ) => {
//     if ( Array.isArray( block['styles'] ) ) {
//         console.log( block.name, block['styles'].map( item => item['name'] ) );
//     }
// });
 
// wp.hooks.addFilter(
//     'blocks.registerBlockType',
//     'site-functionality/button',
//     removeButtonSupport
// );