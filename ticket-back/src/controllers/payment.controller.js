import Stripe from "stripe";
import { STRIPE_KEY, STRIPE_WEBHOOK_KEY, NODEMAILER_USER } from "../config";
import Order from "../models/Order";
import { getTemplate, sendEmail } from "../utils/email.config";

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
      const session = event.data.object;
      const line_items = await stripe.checkout.sessions.listLineItems(
        event.data.object.id
      );

      const newOrder = new Order({
        name: session.customer_details.name,
        email: session.customer_email,
        location: "queretaro",
        phone: 5555555555,
        date: "12/12/12",
        amount: line_items.amount_total,
        count: line_items.quantity,
      });

      await newOrder.save();
      const template = getTemplate(
        newOrder.name,
        newOrder.date,
        newOrder.location
      );
      await sendEmail(newOrder.email, "Confirmacion de pago", template);
      // console.log(line_items);
      // console.log(session);
    }
  } catch (err) {
    console.log(err);
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  response.send();
};
