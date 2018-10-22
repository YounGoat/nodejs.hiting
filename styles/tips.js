'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	, colors = require('colors')
	
	/* in-package */
	;

const RULES = [
	{
		pattern: /^\*/mg,
		replacer: pattern => {
			return colors.gray(pattern);
		},
	},
	{
		pattern: /^-- (.+) --$/mg,
		replacer: pattern => {
			return colors.bold(pattern);
		},
	},
	{
		pattern: /([^\s]+)=([^\s]+)/g,
		replacer: pattern => {
			let [ L, R ] = pattern.split('=');
			return colors.green(L) + '=' + colors.green(R);
		},
	},
];

function format(text) {
	RULES.forEach(rule => {
		text = text.replace(rule.pattern, rule.replacer);
	});
	console.log(text);
}

module.exports = format;