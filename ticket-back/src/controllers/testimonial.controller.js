import Testimonial from "../models/Testimonial";

export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    return res.status(200).json(testimonials);
  } catch (error) {
    console.log(error);
  }
};
