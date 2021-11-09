const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const CopyPlugin = require( 'copy-webpack-plugin' );
const SVGSpritemapPlugin = require( 'svg-spritemap-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const ESLintPlugin = require( 'eslint-webpack-plugin' );
const StylelintPlugin = require( 'stylelint-webpack-plugin' );

/**
 * Webpack config (Development mode)
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-scripts/#provide-your-own-webpack-config
 */
module.exports = {
	...defaultConfig,
	entry: {
		index: [ './src/js/index.js', './src/scss/index.scss' ],
		editor: [ './src/js/editor.js', './src/scss/editor.scss' ]
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				exclude: '/node_modules',
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.svg$/,
				use: [ '@svgr/webpack', 'url-loader' ],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'fonts/[name].[hash:8].[ext]',
						},
					},
				],
			},
		],
	},
	plugins: [
		...defaultConfig.plugins,

		new MiniCssExtractPlugin(),

		/**
		 * Copy source files/directories to a build directory.
		 *
		 * @see https://www.npmjs.com/package/copy-webpack-plugin
		 */
		new CopyPlugin( {
			patterns: [
				{
					from: '**/*.{jpg,jpeg,png,gif,svg}',
					to: 'images/[path][name].[ext]',
					context: path.resolve( process.cwd(), 'src/images' ),
				},
				{
					from: '*.svg',
					to: 'images/icons/[name].[ext]',
					context: path.resolve( process.cwd(), 'src/images/icons' ),
				},
			],
		} ),

		/**
		 * Generate an SVG sprite.
		 *
		 * @see https://github.com/cascornelissen/svg-spritemap-webpack-plugin
		 */
		new SVGSpritemapPlugin( 'src/images/icons/*.svg', {
			output: {
				filename: 'images/icons/sprite.svg',
			},
			sprite: {
				prefix: false,
			},
		} ),

		/**
		 * Clean build directory.
		 *
		 * @see https://www.npmjs.com/package/clean-webpack-plugin
		 */
		new CleanWebpackPlugin( {
			cleanAfterEveryBuildPatterns: [ '!fonts/**', '!*.woff2' ],
		} ),

		/**
		 * Report JS warnings and errors to the command line.
		 *
		 * @see https://www.npmjs.com/package/eslint-webpack-plugin
		 */
		new ESLintPlugin( {
			failOnError: false
		} ),

		/**
		 * Report css warnings and errors to the command line.
		 *
		 * @see https://www.npmjs.com/package/stylelint-webpack-plugin
		 */
		new StylelintPlugin(),
	],
};
