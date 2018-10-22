'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	
	/* in-package */
	;

/**
 * 
 * @param {string|Buffer}  text 
 * @param {string}         style 
 */
function hiting(text, style) {
	if (text instanceof Buffer) text = text.toString();
	
	let format = null;
	try {
		format = require(`./styles/${style}.js`);
	} catch (error) {
		throw new Error(`hiting (highlight texting) style "${style}" not found`);
	}

	format(text);
}

module.exports = hiting;