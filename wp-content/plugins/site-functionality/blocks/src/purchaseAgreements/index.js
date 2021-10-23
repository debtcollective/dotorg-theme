/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import Edit from './edit';

const { name, category } = metadata;

const settings = {
	edit: Edit,
};

export { name, category, settings };
