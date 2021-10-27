const buttonAttributes = {
	supports: {
		anchor: true,
		align: true,
		alignWide: false,
		color: {
			gradients: false,
		},
		typography: {
			fontSize: false,
			__experimentalFontFamily: false,
		},
		reusable: true,
		spacing: {
			padding: false,
		},
		__experimentalBorder: {
			radius: false,
		},
	},
	styles: [
		{
			name: 'standard',
			label: 'Standard',
			isDefault: true,
		},
		{
			name: 'large',
			label: 'Large',
		},
	],
};

export default buttonAttributes;
