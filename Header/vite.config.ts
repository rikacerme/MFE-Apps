// vite.config.js (Solid.js projesi)
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    solid(),
    federation({
      name: 'solidApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button.tsx',
          './Header': './src/Header.tsx'	,
          './SolidComponent': './src/SolidComponent.tsx'
      },
      shared: ['solid-js'], // Paylaşılan bağımlılıkları kontrol edin
    }),
  ],
  build: {
    target: 'esnext', // ESNext hedefleyin
    minify: false, // (Opsiyonel) minifikasyonu kapatmak faydalı olabilir
  },
});

