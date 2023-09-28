import { Schema, model } from "mongoose";

const testimonialSchema = new Schema({
  id: String,
  text: String,
  name: String,
  avatar: String,
  ranking: Number,
});

export default model("Testimonial", testimonialSchema);
