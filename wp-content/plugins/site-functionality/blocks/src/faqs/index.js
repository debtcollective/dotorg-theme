/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import Edit from './edit';
import Save from './save';

const { name, category } = metadata;

const settings = {
	edit: Edit,
	save: Save,
};

export { name, category, settings };
