// Imports
const path = require("path");

// Exports
module.exports = (app) =>
  app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../client/dist/index.html"))
  );
