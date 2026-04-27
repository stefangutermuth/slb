// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Base-Path nur setzen, wenn explizit gewünscht (GitHub Pages Project-Repo).
// Auf eigener Domain (slb-logistik.de) leer lassen → "/".
const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || 'https://www.slb-logistik.de';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
