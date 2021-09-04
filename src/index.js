"use strict";

const express = require("express");
const cors = require("cors");
const router = require("./routes/index");

const app = express();

app.use(express.json());

app.use('/api/v1', router);

const port = 3000;
app.listen(port, () => {
  console.log("Server listening on port: " + port);
});
