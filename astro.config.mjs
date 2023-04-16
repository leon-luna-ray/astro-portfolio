import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import sanity from "astro-sanity";
import vue from "@astrojs/vue";
import netlify from "@astrojs/netlify/functions";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), sanity({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    apiVersion: "2023-04-16",
    useCdn: true
  }), vue(), tailwind()],
  output: "server",
  adapter: netlify()
});