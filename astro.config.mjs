import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rhyxeee.github.io',
  base: '/rhyxeee-astro-test/',
  vite: {
    plugins: [tailwindcss()],
  },
});
