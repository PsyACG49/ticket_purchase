import Stripe from "stripe";
import { STRIPE_KEY, STRIPE_WEBHOOK_KEY } from "../config";

const stripe = new Stripe(STRIPE_KEY);

export const createSession = async (req, res) => {
  const { nombres, apellido, locacion, dia, cantidad, price, correo } =
    req.body;

  const session = await stripe.checkout.sessions.create({
    customer_email: `${correo}`,
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

//webhook

const endpointSecret = STRIPE_WEBHOOK_KEY;

export const createWebhook = async (request, response) => {
  let event;
  let sig = request.headers["stripe-signature"];

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);

    if (event.type === "checkout.session.completed") {
      // const session = event.data.object;
      const line_items = await stripe.checkout.sessions.listLineItems(
        event.data.object.id
      );

      console.log(line_items);
    }
  } catch (err) {
    console.log(err);
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  response.send();
};
