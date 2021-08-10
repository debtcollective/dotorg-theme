import { 
    InnerBlocks, 
    useBlockProps
} from '@wordpress/block-editor';

const Save = ( props ) => {
	const {
		attributes: {
			url,
			id
		},
		setAttributes,
	} = props;

	const hasImage = ( url !== undefined );

	return (
		<div { ...useBlockProps.save( {
			style: { backgroundImage: `url( ${url} )` },
			className: 'hero',
			"data-url": url
		} ) }
			data-url={ hasImage ? url: `` }
			
		>
			<InnerBlocks.Content />
		</div>
	);
};

export default Save;
