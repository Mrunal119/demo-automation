const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    
      //"numTestsKeptInMemory": 0,
      //Set baseUrl
    baseUrl: 'http://www.amazon.in',
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },

    },
});
