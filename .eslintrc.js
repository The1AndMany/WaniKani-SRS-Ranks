'use strict';

module.exports = {
	root: true,
	parser: 'babel-eslint',
    extends: [
		'eslint-config-deloitte',
	],
	env: {
		jquery: true,
	},
	globals: {
		'unsafeWindow': true,
	},
	rules: {
		'new-cap': 0,
		'no-var': 0,
		'strict': 0,
	},
};
