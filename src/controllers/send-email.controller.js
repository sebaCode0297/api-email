"use strict";

const { sendEmailModule } = require("../modules/send-email.module");

async function sendEmail(req, res) {
  try {
    const data = {
      to: req.body.to,
      name: req.body.name,
      lastName: req.body.lastName
    };
    console.log('data:', data);
    await sendEmailModule(data);
    return res.status(200).json({ message: "OK" });
  } catch (error) {
    return res.status(500).json({ error: JSON.stringify(error) });
  }
}

module.exports = sendEmail;
