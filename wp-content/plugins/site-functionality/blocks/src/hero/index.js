/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import Edit from './edit';
import Save from './save';

// registerBlockType( metadata.name, {
//     edit: Edit,
//     save: Save,
// } );

const { name, category } = metadata;

const settings = {
	edit: Edit,
	save: Save,
};

export { name, category, settings };
