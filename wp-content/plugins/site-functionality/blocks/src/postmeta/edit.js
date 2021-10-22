import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	Panel,
	PanelBody,
	PanelRow,
	SelectControl,
	Spinner,
	TextControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp, store as coreStore } from '@wordpress/core-data';
import { __experimentalGetSettings, dateI18n } from '@wordpress/date';
import { __ } from '@wordpress/i18n';

import classNames from 'classnames';
import getSymbolFromCurrency from 'currency-symbol-map';

const Edit = ( props ) => {
	const {
		context: { postId, postType, queryId },
		attributes: { field, hasTarget, label, type },
		className,
		setAttributes,
		onSelect,
		isActive,
	} = props;

	const [ meta ] = useEntityProp(
		'postType',
		postType,
		'meta',
		postId,
		true
	);
	const settings = __experimentalGetSettings();

	const capitalize = ( string ) => {
		return string[ 0 ].toUpperCase() + string.slice( 1 );
	};

	const dateFormat = settings?.formats?.date ?? 'F j, Y';
	const timeFormat = settings?.formats?.time ?? 'g:ia T';
	const locale = settings?.l10n?.locale ?? 'en_US';
	const currencySymbol = getSymbolFromCurrency( locale );

	// const types = [
	//     'currency',
	//     'date',
	//     'email',
	//     'file',
	//     'image',
	//     'number',
	//     'post',
	//     'text',
	//     'time',
	//     'url'
	// ];

	/**
	 * For now, only use field types registered by plugin
	 */
	const types = [
		'boolean',
		'currency',
		'date',
		'file',
		'number',
		'text',
		'time',
		'url',
	];

	// const fields = Object.keys( meta ).filter( item => {
	//     return item.indexOf( '_' ) !== 0;
	// } );

	/**
	 * For now, only use fields registered by plugin
	 */
	const fields = [
		'amount',
		'number',
		'average',
		'price',
		'file',
		'show_title',
	];

	const setField = ( value ) => {
		setAttributes( {
			field: value,
		} );
	};

	const setType = ( value ) => {
		setAttributes( {
			type: value,
		} );
	};

	const setLabel = ( value ) => {
		setAttributes( {
			label: value,
		} );
	};

	const fieldOptions = fields.map( ( field ) => {
		return {
			value: field,
			label: field,
		};
	} );

	const typeOptions = types.map( ( type ) => {
		return {
			value: type,
			label: capitalize( type ),
		};
	} );

	const FieldSelector = () => {
		const options = [
			{
				value: '',
				label: __( 'Select Field', 'site-functionality' ),
			},
			...fieldOptions,
		];

		return (
			<>
				<SelectControl
					label={ __( 'Field Name', 'site-functionality' ) }
					options={ options }
					onChange={ setField }
					value={ field }
				/>
			</>
		);
	};

	const TypeSelector = () => {
		const options = [
			{
				value: '',
				label: __( 'Default Type', 'site-functionality' ),
			},
			...typeOptions,
		];

		return (
			<>
				<SelectControl
					label={ __( 'Field Type', 'site-functionality' ) }
					options={ options }
					onChange={ setType }
					value={ type }
				/>
			</>
		);
	};

	const LabelSelector = () => {
		if ( type !== 'file' ) {
			return false;
		}
		return (
			<>
				<TextControl
					label={ __( 'File Label', 'site-functionality' ) }
					value={ label }
					onChange={ setLabel }
				/>
			</>
		);
	};

	const SettingsPanel = () => {
		return (
			<InspectorControls>
				<PanelBody
					title={ __( 'Field Options', 'site-functionality' ) }
				>
					<PanelRow>
						<FieldSelector />
					</PanelRow>
					<PanelRow>
						<TypeSelector />
					</PanelRow>
					<PanelRow>
						<LabelSelector />
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		);
	};

	const blockProps = useBlockProps( {
		className: classNames( className, `post-field-${ field }` ),
	} );

	const RenderField = () => {
		const value = meta[ field ];
		let formattedValue = value;
		const localeString = locale.replaceAll( '_', '-' );

		if ( ! field || ! field.length ) {
			return (
				<div className="loading">
					{ __( 'Loading...', 'site-functionality' ) }
				</div>
			);
		}

		switch ( type ) {
			case 'boolean':
				const bool = new Boolean( value );
				return bool.toString();
			case 'currency':
				return new Intl.NumberFormat( localeString, {
					style: 'currency',
					currency: 'USD',
				} ).format( value );
			case 'date':
				return dateI18n( dateFormat, value );
			case 'file':
				const file = useSelect( ( select ) => {
					if ( ! meta[ field ] ) {
						return false;
					}
					return select( coreStore ).getMedia( meta[ field ] );
				} );
				return (
					<a href={ file?.source_url || value }>
						{ label || file?.source_url }
					</a>
				);
			case 'number':
				return value.toLocaleString( localeString );
			case 'time':
				return dateI18n( timeFormat, value );
			case 'url':
				return <a href={ value }>{ value }</a>;
			default:
				return formattedValue;
		}
	};

	return (
		<>
			<SettingsPanel />
			<div { ...blockProps } datatype={ type }>
				<RenderField />
			</div>
		</>
	);
};

export default Edit;
