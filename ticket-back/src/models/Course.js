import { Schema, model } from "mongoose";

const courseSchema = new Schema({
  id: String,
  name: String,
  description: String,
  link: String,
});

export default model("Course", courseSchema);
