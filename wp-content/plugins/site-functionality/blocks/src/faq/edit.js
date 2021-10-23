import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import classNames from 'classnames';
import icon from './icon';

const ALLOWED_FORMATS = [ 'core/bold', 'core/link' ];

const Edit = ( props ) => {
	const {
		attributes: { question, answer },
		className,
		setAttributes,
		onSelect,
		isActive,
	} = props;

	const blockProps = useBlockProps( {
		className: 'faq',
	} );

	return (
		<article { ...blockProps }>
			<div className="faq__question question">
				<RichText
					tagName="h3"
					value={ question }
					onChange={ ( value ) => {
						setAttributes( { question: value } );
					} }
					isActive={ isActive }
					placeholder={ __(
						'Add Question...',
						'site-functionality'
					) }
				/>
				<a href="#" className="chevron">
					{ icon }
				</a>
			</div>
			<div className="faq__answer answer">
				<RichText
					tagName="div"
					className="answer-wrapper"
					value={ answer }
					onChange={ ( value ) => {
						setAttributes( { answer: value } );
					} }
					isActive={ isActive }
					placeholder={ __( 'Add Answer...', 'site-functionality' ) }
					multiline="p"
					allowedFormats={ ALLOWED_FORMATS }
				/>
			</div>
		</article>
	);
};

export default Edit;
