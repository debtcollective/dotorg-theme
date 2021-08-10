import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import metadata from './block.json';
import Edit from './edit';
import Save from './save';

registerBlockType( metadata.name,
    {
        apiVersion: metadata.apiVersion,
        title: __( metadata.title, 'site-functionality' ),
        description: __( metadata.description, 'site-functionality' ),
        icon: metadata.icon,
        category: metadata.category,
        keywords: metadata.keywords,
        attributes: metadata.attributes,
        collection: metadata.collection,
        styles: metadata.styles,
        supports: metadata.supports,
        example: metadata.example,
        edit: Edit,
        save: Save
    }

);