const express = require("express");
const dotenv = require("dotenv");
const indexRoute = require('./routes/indexRoute');
const { setCors } = require('./middleware/security');
const path = require("path");

// Setup
const server = express();
dotenv.config();

// Set port
const port = process.env.PORT || 4000;

// Set middleware
server.use(express.json());
server.use(setCors);
server.use(express.urlencoded({ extended: false }));

// Static folder
server.use("/public", express.static(path.join(__dirname, "public")));

// Routes
server.use("/", indexRoute);

server.listen(port, () => console.log("Server started in PORT:", port));

