/**
 * WordPress dependencies
 */
import { useEntityProp } from '@wordpress/core-data';
import {
	useBlockProps,
} from '@wordpress/block-editor';
import { __, sprintf } from '@wordpress/i18n';

const Edit = ( { 
	context: {
		postId,
		postType,
		queryId
	},
	attributes
 } ) => {
	const [ meta ] = useEntityProp( 'postType', postType, 'meta', postId, true );
	const location = meta[ '_location_venue' ];
	
	let eventLocation = location ? (
		<span className='event-location'>
			{ location }
		</span>
	) : (
		<span className='event-location no-location'>
			{ __( 'Virtual', 'site-functionality' ) }
		</span>
	);

	const blockProps = useBlockProps();

	return (
		<>
			<div { ...blockProps }>{ eventLocation }</div>
		</>
	);
};

export default Edit;
