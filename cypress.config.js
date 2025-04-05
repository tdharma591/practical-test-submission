const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://amphora.net",
    specPattern: "cypress/e2e/ui/features/*.feature",
    supportFile: false,
    viewportWidth: 1280,
    viewportHeight: 800,
    video: true,
    screenshotOnRunFailure: true,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: "Cypress Test Report",
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    async setupNodeEvents(on, config) {
      // ✅ Mochawesome reporter setup
      mochawesome(on);

      // ✅ Cucumber plugin setup
      await addCucumberPreprocessorPlugin(on, config);

      // ✅ Esbuild bundler for feature files
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // ✅ Custom log task
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });

      return config;
    },
  },
});
