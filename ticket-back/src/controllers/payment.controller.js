import Stripe from "stripe";
import { STRIPE_KEY } from "../config";

const stripe = new Stripe(STRIPE_KEY);

export const createSession = async (req, res) => {
  const { nombres, apellido, locacion, dia, cantidad, price } = req.body;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          product_data: {
            name: "Masterclass",
            description: `Super clase teclados a nombre de ${nombres} ${apellido} en ${locacion} el ${dia} `,
          },
          currency: "mxn",
          unit_amount: price * 100,
        },
        quantity: cantidad,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/checkout",
  });

  return res.json({
    url: session.url,
  });
};
