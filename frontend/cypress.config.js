const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173", // URL del frontend
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
