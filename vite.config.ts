import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cjs from 'rollup-plugin-strict-cjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), 
    cjs({
      
    })
  ],
  build: {
    sourcemap: true,
    commonjsOptions: {
      include: [
        'node_modules/**'
      ],
      namedExports: {
        'node_modules/nanoid/non-secure/index.js': ['nanoid', 'customAlphabet'],
      }
    }
  }
})
