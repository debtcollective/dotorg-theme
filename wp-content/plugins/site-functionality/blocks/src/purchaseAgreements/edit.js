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
import { useInstanceId, withState } from '@wordpress/compose';
import { useEntityProp, store as coreStore } from '@wordpress/core-data';
import { __experimentalGetSettings, dateI18n } from '@wordpress/date';
import { __, sprintf } from '@wordpress/i18n';

//  Import CSS.
import './editor.scss';
import './style.scss';

const MAX_ITEMS = 50;

const Edit = ( props ) => {
	const { attributes, className, setAttributes, isSelected } = props;

	const {
		queryId,
		taxonomy,
		postType,
		purchaseTypes,
		perPage,
		orderby,
		query,
		wrapperTagName,
		tagName,
		linkWrap,
		display,
	} = attributes;

	const {
		showTitle,
		showSummary,
		showDate,
		showTypes,
		showAmount,
		showNumber,
		showAverage,
		showPurchasePrice,
		showFile,
	} = display;

	const instanceId = useInstanceId( Edit );

	const settings = __experimentalGetSettings();
	const dateFormat = settings.formats.date;

	const { __unstableMarkNextChangeAsNotPersistent } = useDispatch(
		blockEditorStore
	);

	const posts = useSelect(
		( select ) => {
			return select( 'core' ).getEntityRecords(
				'postType',
				postType,
				query
			);
		},
		[ query ]
	);

	const setTypes = ( value ) => {
		setAttributes( {
			purchaseTypes: value,
		} );
	};

	const setPerPage = ( value ) => {
		setAttributes( {
			perPage: value,
		} );
	};

	const setOrderBy = ( value ) => {
		setAttributes( {
			orderby: value,
		} );
	};

	const TermSelector = () => {
		const terms = useSelect( ( select ) => {
			return select( 'core' ).getEntityRecords( 'taxonomy', taxonomy );
		}, [] );

		if ( ! terms || ! terms.length ) {
			return <Spinner />;
		}

		const options = terms.map( ( { id, name } ) => ( {
			value: id,
			label: name,
		} ) );

		return (
			<>
				<SelectControl
					label={ __( 'Type', 'site-functionality' ) }
					options={ [
						{
							value: '',
							label: __( 'Select a Type', 'site-functionality' ),
						},
						...options,
					] }
					onChange={ setTypes }
					value={ purchaseTypes }
				/>
			</>
		);
	};

	const PerPageSelector = () => {
		return (
			<RangeControl
				key="query-controls-range-control"
				label={ __( 'Number of Posts', 'site-functionality' ) }
				value={ perPage }
				onChange={ setPerPage }
				min={ 1 }
				max={ MAX_ITEMS }
			/>
		);
	};

	const OrderSelector = () => {
		const options = [
			{
				value: 'date/desc',
				label: __( 'Soonest to Latest', 'site-functionality' ),
			},
			{
				value: 'date/asc',
				label: __( 'Latest to Soonest', 'site-functionality' ),
			},
			{
				value: 'title/asc',
				label: __( 'A → Z', 'site-functionality' ),
			},
			{
				value: 'title/desc',
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
					onChange={ setOrderBy }
					value={ orderby }
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
					<PanelRow>
						<TermSelector />
					</PanelRow>
					<PanelRow>
						<OrderSelector />
					</PanelRow>
					<PanelRow>
						<PerPageSelector />
					</PanelRow>
				</PanelBody>
				{ /* <PanelBody title={ __( 'Content Options', 'site-functionality' ) } initialOpen={ true }>
					<ShowSelectors />
				</PanelBody> */ }
			</InspectorControls>
		);
	};

	const AdvancedControls = () => {
		return (
			<InspectorControls __experimentalGroup="advanced">
				<PanelBody
					title={ __( 'HTML Tag Options', 'site-functionality' ) }
					initialOpen={ true }
				>
					<PanelRow>
						<SelectControl
							label={ __(
								'Wrapper HTML Element',
								'site-functionality'
							) }
							options={ [
								{
									label: __(
										'Default (<div>)',
										'site-functionality'
									),
									value: 'div',
								},
								{ label: '<main>', value: 'main' },
								{ label: '<section>', value: 'section' },
								{ label: '<ul> (list)', value: 'ul' },
							] }
							value={ wrapperTagName }
							onChange={ ( value ) =>
								setAttributes( { wrapperTagName: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label={ __(
								'Item HTML Element',
								'site-functionality'
							) }
							options={ [
								{
									label: __(
										'Default (<article>)',
										'site-functionality'
									),
									value: 'article',
								},
								{ label: '<div>', value: 'div' },
								{ label: '<li>', value: 'li' },
							] }
							value={ tagName }
							onChange={ ( value ) =>
								setAttributes( { tagName: value } )
							}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		);
	};

	const blockProps = useBlockProps( {
		className: classNames(
			className,
			'purchase-agreements',
			'purchase-agreements__list'
		),
	} );

	const Posts = () => {
		if ( ! posts ) {
			return <Spinner />;
		}

		if ( ! posts.length ) {
			return <NoPosts />;
		}

		return (
			<>
				{ posts.map( ( post ) => {
					return <Post { ...post } key={ post.id } />;
				} ) }
			</>
		);
	};

	const Post = ( post ) => {
		const types = useSelect( ( select ) => {
			if ( ! purchaseTypes ) {
				return false;
			}
			return select( 'core' ).getEntityRecords( 'taxonomy', taxonomy, {
				include: post[ 'purchase-types' ],
				context: 'view',
			} );
		}, [] );
		const media = useSelect( ( select ) => {
			const file = post.meta?.[ 'file' ];
			if ( ! showFile || ! file ) {
				return false;
			}
			return select( 'core' ).getMedia( file, { context: 'view' } );
		}, [] );

		const format = {
			style: 'currency',
			currency: 'USD'
		}

		return (
			<article className="purchase-agreement">
				{ showDate && (
					<div className="purchase-agreement__date entry-meta">
						<time dateTime={ post.date }>
							{ dateI18n( dateFormat, post.date ) }
						</time>
					</div>
				) }
				{ showTitle && post.meta?.[ 'show_title' ] && post.title && (
					<h3
						className="purchase-agreement__title entry-title"
						dangerouslySetInnerHTML={ {
							__html: post?.title?.rendered,
						} }
					></h3>
				) }
				{ showSummary && post?.content?.rendered && (
					<div
						className="purchase-agreement__summary entry-content"
						dangerouslySetInnerHTML={ {
							__html: post?.content?.rendered,
						} }
					/>
				) }
				<div className="purchase-agreement__details">
					<dl>
						{ showAmount && post.meta?.[ 'amount' ] && (
							<>
								<dd className="purchase-agreement__amount entry-value">
									<span className="value">
										{ new Intl.NumberFormat(
											'us-EN',
											format
										).format(
											parseFloat( post.meta?.[ 'amount' ].replace( /,/g, '' ) )
										) }
									</span>
								</dd>
								<dt className="purchase-agreement__amount entry-label">
									{ __( 'Abolished', 'site-functionality' ) }
								</dt>
							</>
						) }
						{ showTypes && purchaseTypes && types && (
							<>
								<dt className="purchase-agreement__type entry-label">
									{ __( 'Type', 'site-functionality' ) }
								</dt>
								<dd className="purchase-agreement__type entry-value">

									{ types.map( ( type, index ) =>
										<>
											<a
												href={ type?.link }
												id={ type?.id }
												rel="tag"
												dangerouslySetInnerHTML={ {
													__html: type?.name,
												} }
											></a>
											{ ( types.length - 1 !== index ) && (
												<span className="separator">/</span>
											) }
										</>
									) }
								</dd>
							</>
						) }
						{ showNumber && post.meta?.[ 'number' ] && (
							<>
								<dt className="purchase-agreement__number entry-label">
									{ __(
										'Number of Debtors',
										'site-functionality'
									) }
								</dt>
								<dd className="purchase-agreement__number entry-value">
									<span className="value">
										{ new Intl.NumberFormat().format(
											parseInt( post.meta?.[ 'number' ].replace( /,/g, '' ) )
										) }
									</span>
								</dd>
							</>
						) }
						{ showAverage && post.meta?.[ 'average' ] && (
							<>
								<dt className="purchase-agreement__average entry-label">
									{ __( 'Average Debt/Debtor', 'site-functionality' ) }
								</dt>
								<dd className="purchase-agreement__average entry-value">
									<span className="value">
										{ new Intl.NumberFormat(
											'us-EN',
											format
										).format(
											parseFloat( post.meta?.[ 'average' ].replace( /,/g, '' ) )
										) }
									</span>
								</dd>
							</>
						) }
						{ showPurchasePrice && post.meta?.[ 'price' ] && (
							<>
								<dt className="purchase-agreement__purchase-price entry-label">
									{ __( 'Purchase Price', 'site-functionality' ) }
								</dt>
								<dd className="purchase-agreement__purchase-price entry-value">
									<span className="value">
										{ new Intl.NumberFormat(
											'us-EN',
											format
										).format(
											parseFloat( post.meta?.[ 'price' ].replace( /,/g, '' ) )
										) }
									</span>
								</dd>
							</>
						) }
					</dl>
				</div>
				{ media && (
					<a
						href={ media.source_url }
						aria-label={ __(
							'Download Purchase Agreement as PDF',
							'site-functionality'
						) }
						target="_blank"
					>
						{ __(
							'Download Purchase Agreement as PDF',
							'site-functionality'
						) }
					</a>
				) }
			</article>
		);
	};

	const NoPosts = () => {
		return (
			<div className="no-posts">
				{ __( 'No posts', 'site-functionality' ) }
			</div>
		);
	};

	const updateQuery = () => {
		let _query = query;

		const _ordering = orderby.split( '/' );
		_query = {
			..._query,
			per_page: parseInt( perPage ),
			order: _ordering[ 1 ],
			orderby: _ordering[ 0 ],
			'purchase-types': purchaseTypes
				? [ parseInt( purchaseTypes ) ]
				: [],
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
	}, [ purchaseTypes, perPage, orderby ] );

	useEffect( () => {
		if ( ! queryId ) {
			__unstableMarkNextChangeAsNotPersistent();
			setAttributes( {
				queryId: instanceId,
			} );
		}
	}, [ queryId, instanceId ] );

	return (
		<>
			<SettingsPanel />
			<AdvancedControls />

			<div { ...blockProps }>
				<Posts />
			</div>
		</>
	);
};

export default Edit;
