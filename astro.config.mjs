import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://ktxt-tale.github.io',
  base: '/astro-blog',
  integrations: [react()],
});
