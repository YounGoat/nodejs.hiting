#!/usr/bin/env node

'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	, fs = require('fs')
	
	/* NPM */
	, commandos = require('commandos')
	, noda = require('noda')
	
	/* in-package */
	, hiting = require('..')
	;

function help() {
	console.log(noda.nextRead('help.txt', 'utf8'));
}

function run(options) {
	let text = fs.readFileSync(options.file);
	hiting(text, options.style);
}

let cmd = commandos.parse({
	explicit: true,
	groups: [
		[ 
			'--help -h [*:=* help] REQUIRED', 
		], [
			'--file -f [*] NOT NULL REQUIRED',
			'--style NOT NULL',
		]
	],
	catcher: help
});

if (!cmd) {
	return;
}
else if (cmd.help) {
	return help();
}
else {
	run(cmd);
}