// Imports
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static("../client/dist"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/htmlRoutes")(app);

// Listen -> req, res
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
