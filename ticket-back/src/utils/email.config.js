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
      from: `SALOLOYO ACADEMY <${NODEMAILER_USER}>`,
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
  <section
  style="width:100%; height: 900px;"
>
  <div style="width: 100%; max-width: 600px; height: 900px; background: #000; padding: 30px; color: #fff; text-align: center; margin: auto;"
  >
    <img style="width: 300px; margin-buttom: 20px;"
      src="https://i.ibb.co/fSSXgk6/salo-logo-full.png"
      alt="logotipo complreto saloloyo"
    />
    <h2 style="font-size: 35px; margin-buttom: 20px;">
      ${name} tu registro a sido exitoso
    </h2>
    <p
      style="font-size: 30px; color: #ce4b30; font-weight: 700; font-style: italic; margin-buttom: 20px;"
    >
      MASTERCLASS
    </p>
    <p style="font-size: 20px; margin-buttom: 20px; color: #fff;">${date}</p>
    <p style="font-size: 20px; margin-buttom: 20px; color: #fff;">${location.toUpperCase()}</p>
    <p style="font-size: 18px; margin-buttom: 20px; color: #fff;">
      Favor de presentarse de 10 a 15 min antes en direccion #22 col. tal
      CCDMX la entrada sera apartir de las 12:20pm
    </p>
    <img
      style="width: 300px; height: 300px; border-radius: 50%"
      src="https://i.ibb.co/LJjBLKt/img6.jpg"
      alt="tecladista en escenario"
    />
  </div>
</section>
      `;
};
