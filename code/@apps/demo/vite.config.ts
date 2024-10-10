import { fileURLToPath, URL } from 'node:url'

import { NodePackageImporter } from 'sass-embedded';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // Setting the api to modern-compiler removes the deprecation warning
        // about the JS API.
        api: 'modern-compiler',

        // We need to add the NodePackageImporter so we can resolve the imports
        // from the node_modules directory which are prefixed by "pkg:".
        importers: [ new NodePackageImporter()]
      }
    }
  },

  plugins: [
    vue(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
