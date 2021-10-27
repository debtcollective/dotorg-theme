/**
 * External dependencies
 */
import startCase from 'lodash.startcase';
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import {
	CustomSelectControl,
	Panel,
	PanelBody,
	PanelRow,
	RangeControl,
	QueryControls,
	SelectControl,
	Spinner,
	ToggleControl,
} from '@wordpress/components';
import { useEffect, useState, useMemo } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { useInstanceId } from '@wordpress/compose';
import {
	useEntityProp,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
	store as coreStore,
} from '@wordpress/core-data';
import { __experimentalGetSettings, dateI18n } from '@wordpress/date';
import { __, sprintf } from '@wordpress/i18n';

// import '../data/user-roles';

//  Import CSS.
import './editor.scss';
import './style.scss';

const MAX_ITEMS = 24;

const Edit = ( props ) => {
	const { attributes, className, setAttributes, isSelected } = props;

	const {
		queryId,
		roles,
		per_page,
		order,
		orderby,
		query,
		display,
	} = attributes;

	const { showAvatar, showName, showTitle, showBio } = display;

	const instanceId = useInstanceId( Edit );

	const people = useSelect(
		( select ) => {
			const { getUsers } = select( coreStore );
			return getUsers( query );
		},
		[ query ]
	);

	const setRole = ( value ) => {
		setAttributes( {
			roles: value,
		} );
	};

	const setPerPage = ( value ) => {
		setAttributes( {
			per_page: value,
		} );
	};

	const setOrder = ( value ) => {
		setAttributes( {
			order: value,
		} );
	};

	// const RoleSelector = () => {
	// 	const roles = useSelect( ( select ) => {
	// 		return select( 'user-roles' ).getRoles();
	// 	}, [] );

	// 	if( !roles || !roles.length ) {
	// 		return <Spinner />;
	// 	}

	// 	const options = roles.map( ( { id, name } ) => ( { value: id, label: name } ) );

	// 	return (
	// 		<>
	// 			<SelectControl
	// 				label={ __( 'Role', 'site-functionality' ) }
	// 				options={ [ { value: "", label: __( 'Select a Role', 'site-functionality' ) }, ...options ] }
	// 				onChange={ setRole }
	// 				value={ role }
	// 			/>
	// 		</>
	// 	);
	// };

	const NumberSelector = () => {
		return (
			<RangeControl
				key="query-controls-range-control"
				label={ __( 'Number of People', 'site-functionality' ) }
				value={ per_page }
				onChange={ setPerPage }
				min={ 1 }
				max={ MAX_ITEMS }
			/>
		);
	};

	const OrderSelector = () => {
		const options = [
			{
				value: 'asc',
				label: __( 'A → Z', 'site-functionality' ),
			},
			{
				value: 'desc',
				label: __( 'Z → A', 'site-functionality' ),
			},
		];

		if ( ! options || ! options.length ) {
			return <Spinner />;
		}

		return (
			<>
				<SelectControl
					label={ __( 'Order By', 'site-functionality' ) }
					options={ options }
					onChange={ setOrder }
					value={ order }
				/>
			</>
		);
	};

	const ShowSelectors = () => {
		const fields = Object.keys( display );

		if ( ! fields || ! fields.length ) {
			return null;
		}

		return (
			<>
				{ fields.map( ( field, index ) => {
					const label = startCase( field.replace( 'show', '' ) );
					let checked = attributes.display[ field ];

					return (
						<PanelRow key={ index }>
							<ToggleControl
								label={ label }
								help={
									checked
										? __( 'Show', 'site-functionality' )
										: __( 'Hide', 'site-functionality' )
								}
								checked={ checked }
								onChange={ ( isChecked ) => {
									setAttributes( {
										display: {
											...display,
											[ field ]: isChecked,
										},
									} );
								} }
							/>
						</PanelRow>
					);
				} ) }
			</>
		);
	};

	const SettingsPanel = () => {
		return (
			<InspectorControls>
				<PanelBody
					title={ __( 'Query Options', 'site-functionality' ) }
					initialOpen={ true }
				>
					{ /* <PanelRow>
						<RoleSelector />
					</PanelRow> */ }
					<PanelRow>
						<OrderSelector />
					</PanelRow>
					<PanelRow>
						<NumberSelector />
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Content Options', 'site-functionality' ) }
					initialOpen={ true }
				>
					<ShowSelectors />
				</PanelBody>
			</InspectorControls>
		);
	};

	const blockProps = useBlockProps( {
		className: classNames( className, 'people people__list' ),
	} );

	const People = () => {
		if ( ! people ) {
			return (
				<div>
					<Spinner />
				</div>
			);
		}

		if ( ! people.length ) {
			return (
				<div>
					<NoPeople />
				</div>
			);
		}

		return (
			<div { ...blockProps }>
				{ people.map( ( person ) => {
					return <Person { ...person } key={ person.id } />;
				} ) }
			</div>
		);
	};

	const Person = ( person ) => {
		const avatar =
			person.avatar_urls[ Object.keys( person.avatar_urls ).pop() ];

		const personClasses = classNames( 'person', 'vcard', {} );

		return (
			<article className={ personClasses }>
				{ showAvatar && avatar && (
					<picture className="person__media">
						<img
							src={ avatar }
							alt={ `${ person.first_name } ${ person.last_name }` }
						/>
					</picture>
				) }
				<div className="person_details">
					{ showName && (
						<h3 className="person__name">
							{ person.first_name } { person.last_name }
						</h3>
					) }
					{ showTitle && person.meta.title && (
						<div className="person__title">
							{ person.meta.title }
						</div>
					) }
					{ showBio && person.description && (
						<div className="person__bio">
							{ person.description }
						</div>
					) }
				</div>
			</article>
		);
	};

	const NoPeople = () => {
		return (
			<div className="no-people">
				{ __( 'No people', 'site-functionality' ) }
			</div>
		);
	};

	const updateQuery = () => {
		let _query = query;

		// const _ordering = orderby.split( '/' );
		_query = {
			...query,
			per_page: parseInt( per_page ),
			order: order,
			roles: [],
		};

		setAttributes( {
			query: {
				...query,
				..._query,
			},
		} );
	};

	useEffect( () => {
		updateQuery();
	}, [ per_page, order, orderby, roles ] );

	return (
		<>
			<SettingsPanel />

			<People />
		</>
	);
};

export default Edit;
