import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  name: String,
  email: String,
  location: String,
  phone: Number,
  date: String,
  amount: Number,
  count: Number,
});

export default model("Order", orderSchema);
