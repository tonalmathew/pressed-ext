const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/content.js'],
  bundle: true,
  outfile: 'dist/content.js',
}).catch(() => process.exit(1));
