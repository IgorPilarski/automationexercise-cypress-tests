import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://demo.prestashop.com/",
    supportFile: "cypress/support/e2e.ts",
    setupNodeEvents(on, config) {
    },
  },
});