// @ts-check
import { defineConfig } from 'astro/config';

// The proposal is the first thing the Antova team sees. Deploys to its own subdomain
// (e.g. antova.accelmediaads.com) so it serves at the root — no `base` prefix.
// https://astro.build/config
export default defineConfig({
  site: 'https://antova.accelmediaads.com',
});
