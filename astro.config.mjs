// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://jcfreeman17.github.io',
  integrations: [tailwind(), icon()],
  vite: {
    server: {
      allowedHosts: ['freeman-portfolio.avios.studio'],
    },
  },
});
