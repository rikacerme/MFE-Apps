// vite.config.js (React projesi)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import solid from 'vite-plugin-solid';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'reactApp',
      remotes: {
        solidApp: 'http://localhost:4173/assets/remoteEntry.js',
        VueApp: 'http://localhost:4174/assets/remoteEntry.js'
      },
      shared: {'react': { singleton: true, eager: true },
    'react-dom': { singleton: true, eager: true },
    'solid-js': { singleton: true, eager: true },}, 
    }),
  ],
  build: {
    target: 'esnext',
    minify: false, // (Opsiyonel) minifikasyonu kapatmak faydalı olabilir
  },
});
