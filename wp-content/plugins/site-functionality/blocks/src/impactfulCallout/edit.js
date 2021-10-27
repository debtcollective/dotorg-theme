import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

import classNames from 'classnames';

const TEMPLATE = [
	[
		'core/heading',
		{
			placeholder: __( 'Add Heading...', 'site-functionality' ),
			level: 3,
			className: 'impactful-callout__content',
		},
		[],
	]
];

const ALLOWED_BLOCKS = [ 'core/heading' ];

const Edit = ( props ) => {
	const { attributes, className } = props;

	const blockProps = useBlockProps( {
		className: classNames( className, 'impactful-callout' ),
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				template={ TEMPLATE }
				templateLock="insert"
			/>
		</div>
	);
};

export default Edit;
