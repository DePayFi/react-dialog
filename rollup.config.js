import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import sucrase from '@rollup/plugin-sucrase';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.jsx',
  output: [
    {
      format: 'cjs',
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
      },
      file: 'dist/cjs/index.js'
    },
    {
      format: 'es',
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
      },
      file: 'dist/es/index.js'
    },
    {
      format: 'umd',
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
      },
      name: pkg.moduleName,
      file: 'dist/umd/index.js'
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['typescript', 'jsx']
    }),
    resolve({
      extensions: ['.js', '.ts', '.jsx']
    }),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' ),
      preventAssignment: true
    })
  ]
}
