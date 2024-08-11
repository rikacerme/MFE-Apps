import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    federation({
      name: 'VueApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Footer': './src/components/footer.vue',
      },
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
    },
    preprocessorOptions: {
      css:{
        inline:true
      },
    },
  },
})
