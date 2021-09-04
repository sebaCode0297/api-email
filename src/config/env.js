require("dotenv").config();

const environment = {
  PORT: process.env.PORT,
  SERVICE: process.env.SERVICE,
  AUTH_USER: process.env.AUTH_USER,
  AUTH_PASS: process.env.AUTH_PASS,
  APIKEY: process.env.APIKEY
};

module.exports = environment;
