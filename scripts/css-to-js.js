// ==================
// Imports
// ==================

const fs = require('fs');
const path = require('path');
const beautify = require('js-beautify').js_beautify;

// ==================

// Build file paths
const cssPath = path.join(__dirname, '..', 'build', 'assets', 'style.css');
const jsPath = path.join(__dirname, '..', 'build', 'script.js');

// ==================

// Read CSS build file
fs.readFile(cssPath, 'utf8', (err, data) => {
	if (err) throw err;

	let cssFile = data.split('\n');

	cssFile = cssFile
		// Remove last line (source map)
		.slice(0, cssFile.length - 2)
		// Remove empty lines
		.filter(line => line !== '')
		// Trim whitespace, stringify, add array item comma
		.map(line => '\'' + line.replace(new RegExp('\'', 'g'), '\\\'') + '\',')
		.join('\n');

	// Read JS build file
	fs.readFile(jsPath, 'utf8', (err, data) => {
		if (err) throw err;

		// Read JS file, find upper/lower injection points
		let jsFile = data.split('\n');
		let upperBound = jsFile.findIndex((line) => {
			return line.indexOf('css-to-js upper-bound') > 0;
		});
		let lowerBound = jsFile.findIndex((line) => {
			return line.indexOf('css-to-js lower-bound') > 0;
		});

		// Assemble our new JS file, with our CSS file injected between the identified bounds
		jsFile = [
			jsFile.slice(0, upperBound).join('\n'),
			'\nvar CSS = [\n',
			cssFile,
			'\n].join(\'\\n\');\n',
			jsFile.slice(lowerBound + 1, jsFile.length).join('\n')
		].join('');

		// Write new version of JS file with injected CSS, prettify to fix indentation
		fs.writeFile(jsPath, beautify(jsFile), err => { if (err) throw err; });
	});
});

