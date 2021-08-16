/**
 * WordPress dependencies
 */
import { useEntityProp } from '@wordpress/core-data';
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { __experimentalGetSettings, dateI18n } from '@wordpress/date';
import {
	AlignmentControl,
	BlockControls,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	CustomSelectControl,
} from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';

const Edit = ( { 
	attributes: { 
		format
	},
	context: {
		postId,
		postType,
		queryId
	},
	setAttributes
 } ) => {
	const isDescendentOfQueryLoop = !! queryId;
	const [ siteFormat ] = useEntityProp( 'root', 'site', 'date_format' );
	const [ meta ] = useEntityProp( 'postType', postType, 'meta', postId, true );
	const date = meta[ '_start_date' ];
	
	// const [ isPickerOpen, setIsPickerOpen ] = useState( false );
	const settings = __experimentalGetSettings();

	// To know if the current time format is a 12 hour time, look for "a".
	// Also make sure this "a" is not escaped by a "/".
	const is12Hour = /a(?!\\)/i.test(
		settings.formats.time
			.toLowerCase() // Test only for the lower case "a".
			.replace( /\\\\/g, '' ) // Replace "//" with empty strings.
			.split( '' )
			.reverse()
			.join( '' ) // Reverse the string and test for "a" not followed by a slash.
	);
	const formatOptions = Object.values( settings.formats ).map(
		( formatOption ) => ( {
			key: formatOption,
			name: dateI18n( formatOption, date ),
		} )
	);
	const resolvedFormat = format || siteFormat || settings.formats.date;
	
	let eventTime = date ? (
		<time dateTime={ dateI18n( 'c', date ) }>
			{ dateI18n( resolvedFormat, date ) }
		</time>
	) : (
		__( 'No Event Time', 'site-functionality' )
	);

	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Format Settings', 'site-functionality' ) }>
					<CustomSelectControl
						hideLabelFromVision
						label={ __( 'Time Format', 'site-functionality' ) }
						options={ formatOptions }
						onChange={ ( { selectedItem } ) =>
							setAttributes( {
								format: selectedItem.key,
							} )
						}
						value={ formatOptions.find(
							( option ) => option.key === resolvedFormat
						) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>{ eventTime }</div>
		</>
	);
};

export default Edit;
