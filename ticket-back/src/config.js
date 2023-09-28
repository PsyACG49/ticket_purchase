import { config } from "dotenv";

config();

export const PORT = process.env.PORT;
export const STRIPE_KEY = process.env.STRIPE_KEY;
export const STRIPE_WEBHOOK_KEY = process.env.STRIPE_WEBHOOK_KEY;
export const MONGODB_URL = process.env.MONGODB_URL;
export const NODEMAILER_HOST = process.env.NODEMAILER_HOST;
export const NODEMAILER_PORT = process.env.NODEMAILER_PORT;
export const NODEMAILER_USER = process.env.NODEMAILER_USER;
export const NODEMAILER_PASS = process.env.NODEMAILER_PASS;
