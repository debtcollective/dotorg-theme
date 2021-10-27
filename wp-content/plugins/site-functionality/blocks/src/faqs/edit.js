import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import classNames from 'classnames';

//  Import CSS.
import './editor.scss';
import './style.scss';

const TEMPLATE = [
	[
		'site-functionality/faq',
		{
			placeholder: __( 'Add FAQ...', 'site-functionality' ),
			className: 'faq',
		},
		[],
	],
];

const ALLOWED_BLOCKS = [ 'site-functionality/faq' ];

const Edit = ( props ) => {
	const { className, setAttributes } = props;

	const blockProps = useBlockProps( {
		className: classNames( className, 'faq-list' ),
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				template={ TEMPLATE }
			/>
		</div>
	);
};

export default Edit;
