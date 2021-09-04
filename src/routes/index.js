"use strict";

const { Router } = require("express");
const sendEmailController = require('../controllers/send-email.controller');
const healthcheckController = require('../controllers/healthcheck.controller');

const { validateApiKey } = require('../middleware/validate-apikey.middleware');

const router = Router()

router.get('/healtcheck', healthcheckController);
router.post('/email', validateApiKey, sendEmailController);

module.exports = router;
