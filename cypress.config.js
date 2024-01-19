const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 6000,
  //reporter: 'mochawesome',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  retries: {
      runMode: 1,
  },
    "env": {
      "url": "https://rahulshettyacademy.com"
    }
  },
});
