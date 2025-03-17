import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com/",
    supportFile: "cypress/support/e2e.ts",
    setupNodeEvents(on, config) {
    },
  },
});