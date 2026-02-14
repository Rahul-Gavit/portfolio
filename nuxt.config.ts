import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  modules: ["@nuxt/ui", "@formkit/nuxt"],
  css: ["~/assets/css/main.css", "@formkit/themes/genesis"],
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
  },
  formkit: {
    autoImport: true,
    configFile: "./my-configs/formkit.config.ts",
  },
  devtools: { enabled: true },
});
