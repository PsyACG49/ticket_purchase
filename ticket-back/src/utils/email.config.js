import nodemailer from "nodemailer";
import {
  NODEMAILER_HOST,
  NODEMAILER_PORT,
  NODEMAILER_USER,
  NODEMAILER_PASS,
} from "../config";

let transporter = nodemailer.createTransport({
  host: NODEMAILER_HOST,
  port: NODEMAILER_PORT,
  secure: true,
  auth: {
    user: NODEMAILER_USER,
    pass: NODEMAILER_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendEmail = async (email, subject, html) => {
  try {
    await transporter.sendMail({
      from: `SALOLOYO ACADEMY <${NODEMAILER_HOST}>`,
      to: email,
      subject,
      html,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTemplate = (name, date, location) => {
  return `
          <div>
              <span>${name} tu registro a sido exitoso</span>
              <span>Masterclass</span>
              <span>${location}</span>
              <span>${date}</span>
          </div>
      `;
};
