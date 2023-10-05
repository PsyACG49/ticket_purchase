import Stripe from "stripe";
import Order from "../models/Order";
import { STRIPE_KEY, STRIPE_WEBHOOK_KEY } from "../config";
import { getTemplate, sendEmail } from "../utils/email.config";

const stripe = new Stripe(STRIPE_KEY);

export const createSession = async (req, res, next) => {
  const {
    nombres,
    apellido,
    locacion,
    dia,
    cantidad,
    price,
    correo,
    telefono,
    address,
    horario,
  } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      customer_email: `${correo}`,
      line_items: [
        {
          price_data: {
            product_data: {
              name: "Masterclass",
              description: `Super clase teclados a nombre de ${nombres} ${apellido} en ${locacion} el ${dia}`,
            },
            currency: "mxn",
            unit_amount: price * 100,
          },
          quantity: cantidad,
        },
      ],
      metadata: {
        name: `${nombres} ${apellido}`,
        location: locacion,
        phone: telefono,
        date: dia,
        address,
        schedule: horario,
      },
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/checkout",
    });

    return res.json({
      url: session.url,
    });
  } catch (error) {
    next(error);
  }
};

//webhook
export const createWebhook = async (req, res) => {
  let event;
  let sig = req.headers["stripe-signature"];

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, STRIPE_WEBHOOK_KEY);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const line_items = await stripe.checkout.sessions.listLineItems(
        event.data.object.id
      );

      const newOrder = new Order({
        name: session.metadata.name,
        email: session.customer_email,
        location: session.metadata.location,
        phone: session.metadata.phone,
        date: session.metadata.date,
        amount: line_items.amount_total,
        count: line_items.quantity,
        schedule: session.metadata.schedule,
      });

      await newOrder.save();
      const template = getTemplate(
        newOrder.name,
        newOrder.date,
        newOrder.location,
        session.metadata.address,
        session.metadata.schedule
      );
      await sendEmail(newOrder.email, "Confirmacion de pago", template);
    }
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  res.send();
};
