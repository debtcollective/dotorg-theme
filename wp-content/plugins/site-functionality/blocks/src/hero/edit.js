import {
	BlockIcon,
	InnerBlocks,
	InspectorControls,
	useBlockProps,
	BlockControls,
	MediaPlaceholder,
	MediaReplaceFlow,
	withColors,
	URLInput,
	ColorPalette,
	MediaUpload,
} from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import classNames from 'classnames';

const BUTTON_ATTRS = '../attributes/buttons';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

const TEMPLATE = [
	[
		'core/heading',
		{
			placeholder: __( 'Add Heading...', 'site-functionality' ),
			level: 2,
			className: 'hero__title h1',
		},
		[],
	],
	[
		'core/paragraph',
		{
			placeholder: __( 'Add Content...', 'site-functionality' ),
			className: 'hero__content',
		},
		[],
	],
	[
		'core/buttons',
		{
			className: 'hero__buttons',
		},
		[ [ 'core/button', BUTTON_ATTRS, [] ] ],
	],
];

const ALLOWED_BLOCKS = [ 'core/heading', 'core/paragraph', 'core/buttons' ];

const Edit = ( props ) => {
	const {
		attributes: { url, id },
		className,
		setAttributes,
	} = props;

	const blockProps = useBlockProps( {
		className: classNames( className, 'hero' ),
	} );

	const hasImage = url !== undefined;

	const onSelectMedia = ( media ) => {
		setAttributes( {
			url: media.url,
			id: media.id,
		} );
	};

	const onClickButton = () => {
		setAttributes( {
			url: undefined,
			id: undefined,
		} );
	};

	let classes = classNames();

	return (
		<div
			{ ...blockProps }
			style={ {
				backgroundImage: hasImage ? `url( ${ url } );` : ``,
			} }
			data-url={ hasImage ? url : `` }
		>
			<InspectorControls>
				<PanelBody
					title={ __( 'Background Image', 'site-functionality' ) }
					initialOpen={ true }
				>
					{ hasImage && (
						<img
							className="wp-block-cover__image-background"
							alt=""
							src={ url }
						/>
					) }

					<MediaReplaceFlow
						mediaId={ id }
						mediaURL={ url }
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						accept="image/*"
						className="is-secondary"
						onSelect={ onSelectMedia }
						name={
							! url
								? __( 'Add Image', 'site-functionality' )
								: __( 'Replace Image', 'site-functionality' )
						}
					/>

					{ hasImage && (
						<Button
							variant="link"
							isDestructive
							className="block-library-cover__reset-button is-link"
							onClick={ onClickButton }
						>
							{ __( 'Remove Image', 'site-functionality' ) }
						</Button>
					) }
				</PanelBody>
			</InspectorControls>
			<BlockControls group="other">
				<MediaReplaceFlow
					mediaId={ id }
					mediaURL={ url }
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					accept="image/*"
					onSelect={ onSelectMedia }
					name={
						! url
							? __( 'Add Image', 'site-functionality' )
							: __( 'Replace Image', 'site-functionality' )
					}
				/>
			</BlockControls>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				template={ TEMPLATE }
				templateLock="all"
			/>
		</div>
	);
};

export default Edit;
