import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import classNames from 'classnames';

const Save = ( props ) => {
	const { className } = props;
	const blockProps = useBlockProps.save( {
		className: classNames( className, 'faq-list' ),
	} );
	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
};

export default Save;
