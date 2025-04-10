import { defineConfig } from 'rolldown'
import { dependencies } from './package.json'
import { dts } from './src/index'

const config = defineConfig({
  input: ['./src/index.ts', './src/generate.ts'],
  plugins: [dts()],
  external: Object.keys(dependencies),
  platform: 'node',
  output: [
    {
      dir: 'temp/esm',
      format: 'es',
      entryFileNames: '[name].mjs',
      chunkFileNames: '[name]-[hash].mjs',
    },
    // {
    //   dir: 'temp/cjs',
    //   format: 'cjs',
    //   entryFileNames: '[name].cjs',
    //   chunkFileNames: '[name]-[hash].cjs',
    // },
  ],
})

export default config
