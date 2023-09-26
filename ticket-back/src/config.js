import { config } from "dotenv";

config();

export const PORT = process.env.PORT;
export const STRIPE_KEY = process.env.STRIPE_KEY;
export const STRIPE_WEBHOOK_KEY = process.env.STRIPE_WEBHOOK_KEY;
