"use strict";

const { sendEmailService } = require("../services/email.service");

async function sendEmailModule(data) {
  try {
    await sendEmailService(data);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

module.exports = {
  sendEmailModule
};
