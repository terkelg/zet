const fs = require('fs');
const mkdir = require('mkdirplz');
const imports = require('rewrite-imports');
const pkg = require('./package');

let data = fs.readFileSync('src/index.js', 'utf8');

mkdir('dist').then(_ => {
	// Copy as is for ESM
	fs.writeFileSync(pkg.module, data);
	// Rewrite ESM ~> CJS
	fs.writeFileSync(pkg.main, imports(data).replace('export default', 'module.exports ='));
});
