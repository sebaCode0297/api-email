const environment = require("../config/env");

const validateApiKey = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization === environment.APIKEY) next();
  else res.status(401).json({ message: "No estas autorizado." });
};

module.exports = {
  validateApiKey
};
