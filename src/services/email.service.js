"use strict";

const nodemailer = require("nodemailer");
const environment = require("../config/env");

async function sendEmailService(data) {
  try {
    const { to, name, lastName, state } = data;

    let smtpTransport = nodemailer.createTransport({
      service: environment.SERVICE,
      auth: {
        user: environment.AUTH_USER,
        pass: environment.AUTH_PASS
      }
    });

    let info = await smtpTransport.sendMail({
      from: '"BodaC&S" <no-replay@bodacys.cl>',
      to,
      subject: state === "confirmado" ? "Confirmación de asistencia" : "Denegación de asistencia",
      text: `¡${name} ${lastName} ${state === "confirmado" ? "Confirmo su asistencia" : "Denego su asistencia"}!`,
      html: `¡${name} ${lastName} ${state === "confirmado" ? "Confirmo su asistencia" : "Denego su asistencia"}!`,
      // `te esperamos en este día tan especial.<br><br>Ingrese al link para verificar la ubicación del Centro de eventos https://boda-syc.herokuapp.com/#when-where-section`
    });

    console.log("Message sent: %s", info.messageId);

    return info.messageId;
  } catch (error) {
    console.error(error);
    throw new Error(`[sendEmail]: Se produjo un error al enviar correo ${JSON.stringify(error)}`);
  }
}

module.exports = {
  sendEmailService
};
