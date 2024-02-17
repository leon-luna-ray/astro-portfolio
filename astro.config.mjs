import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";
import sitemap from "@astrojs/sitemap";
import sanity from "astro-sanity";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-portfolio-rldev.netlify.app/",
  integrations: [
    sitemap(),
    sanity({
      projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
      dataset: import.meta.env.VITE_SANITY_DATASET,
      apiVersion: "2023-04-16",
      useCdn: true,
    }),
    vue(),
    tailwind(),
  ],
  output: "server",
  adapter: netlify(),
  resolve: {
    alias: {
      "@": "./src",
    },
  },
});
