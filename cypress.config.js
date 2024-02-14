const {defineConfig} = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
    // implement node event listeners here
    // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
    await preprocessor.addCucumberPreprocessorPlugin(on, config);

    on("file:preprocessor", browserify.default(config));
    return config;
}

module.exports = defineConfig({
    e2e: {
        specPattern: 'cypress/e2e/examples/*-spec.cy.js',
        chromeWebSecurity: false,
        defaultCommandTimeout: 6000,
        reporter: 'mochawesome',
        setupNodeEvents,
    },
    retries: {
        runMode: 1,
    },
    "env": {
        "url": "https://rahulshettyacademy.com"
    }
});
