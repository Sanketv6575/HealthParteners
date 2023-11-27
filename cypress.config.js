const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
       
       commitqualityUrl: "https://commitquality.com/",
       demoblazeUrl: "https://www.demoblaze.com/"
  },
  e2e: {
    experimentalSessionAndOrigin: true,
    watchForFileChanges:false,
    setupNodeEvents(on, config) {

    },
    specPattern: 'cypress/e2e/*/*.js',
    
  }
});
