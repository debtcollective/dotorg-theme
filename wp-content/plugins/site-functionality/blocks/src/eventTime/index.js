/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { postDate as icon } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './style.scss';
import './editor.scss';

import metadata from './block.json';
import Edit from './edit';

registerBlockType( metadata.name, {
    edit: Edit,
    icon
} );