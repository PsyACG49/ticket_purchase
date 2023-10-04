import { Schema, model } from "mongoose";

const masterclassSchema = new Schema({
  id: String,
  location: String,
  date: String,
  price: Number,
  address: String,
  schedule: String,
});

export default model("Masterclass", masterclassSchema);
