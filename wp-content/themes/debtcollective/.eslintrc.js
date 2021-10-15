module.exports = {
	extends: [
		'plugin:@wordpress/eslint-plugin/recommended',
		'plugin:eslint-comments/recommended',
	],
	parserOptions: {
		ecmaVersion: 2021,
	},
	root: true,
	env: {
		browser: true,
		es6: true,
		jquery: true,
	},
	rules: {
		'@wordpress/no-global-event-listener': 0, // Disable. We don't use React-based components.
		camelcase: 1,
		'require-jsdoc': 0,
		'@wordpress/i18n-ellipsis': 0,
		'@wordpress/i18n-no-collapsible-whitespace': 0,
		'no-dupe-keys': 0,
		'jsdoc/newline-after-description': 0,
		'jsdoc/check-types': 0,
		'jsdoc/require-returns-description': 0,
		'no-unused-vars': 0,
		'no-console': 0,
	},
};
