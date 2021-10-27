import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

import classNames from 'classnames';

//  Import CSS.
import './editor.scss';
import './style.scss';

const TEMPLATE = [
	[
		'core/heading',
		{
			placeholder: __( 'Add Heading...', 'site-functionality' ),
			level: 2,
			className: 'tout__title',
		},
		[],
	],
	[
		'core/paragraph',
		{
			placeholder: __( 'Add content...', 'site-functionality' ),
			className: 'tout__content',
		},
		[],
	],
	[
		'core/image',
		{
			placeholder: __( 'Add image...', 'site-functionality' ),
			className: 'tout__image',
		},
		[],
	],
];

const ALLOWED_BLOCKS = [ 'core/heading', 'core/paragraph', 'core/image' ];

const Edit = ( props ) => {
	const { attributes, className } = props;

	const blockProps = useBlockProps( {
		className: classNames( className, 'tout' ),
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
