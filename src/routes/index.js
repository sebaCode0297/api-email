"use strict";

const { Router } = require("express");
const sendEmailController = require('../controllers/send-email.controller');
const healthcheckController = require('../controllers/healthcheck.controller');

const router = Router()

router.get('/healtcheck', healthcheckController);
router.post('/email', sendEmailController);

module.exports = router;
