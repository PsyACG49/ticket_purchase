import { Schema, model } from "mongoose";

const masterclassSchema = new Schema({
  id: String,
  location: String,
  date: String,
  price: Number,
  address: String,
  schedule: String,
  active: Boolean,
});

export default model("Masterclass", masterclassSchema);
