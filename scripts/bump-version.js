// ==================
// Imports
// ==================

const fs = require('fs');
const path = require('path');
const latestVersion = require('../version');

// ==================

// Build file paths
const jsPath = path.join(__dirname, '..', 'source', 'script.js');

// ==================

// Read JS build file
fs.readFile(jsPath, 'utf8', (err, data) => {
	if (err) throw err;

	let jsFile = data.split('\n');
	let versionIndex = jsFile.findIndex((line) => {
		return line.indexOf('// @version') >= 0;
	});
	let oldVersionString = jsFile[versionIndex];
	let newVersionString = oldVersionString.replace(/(\d+.){2}\d+/, latestVersion);

	jsFile[versionIndex] = newVersionString;

	fs.writeFile(jsPath, jsFile.join('\n'), err => {
		if (err) throw err;
	});
});
