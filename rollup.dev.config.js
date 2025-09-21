import globals from './rollup.globals.js'
import livereload from 'rollup-plugin-livereload'
import rollup from './rollup.module.config.js'
import serve from 'rollup-plugin-serve'
import { readFileSync } from 'node:fs'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)))

export default Object.assign({}, rollup, {
  output: {
    format: 'es',
    globals: globals,
    file: 'tmp/index.dev.js'
  },
  plugins: [...rollup.plugins,
    serve({
      open: 'true',
      openPage: '/dev.html'
    }),
    livereload({
      watch: ['dist']
    })
  ]
})
