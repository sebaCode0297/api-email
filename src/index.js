"use strict";

const express = require("express");
const cors = require('cors');

const router = require("./routes/index");
const environment = require('./config/env');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', router);

const port = environment.PORT || 3000;
app.listen(port, () => {
  console.log("Server listening on port: " + port);
});
