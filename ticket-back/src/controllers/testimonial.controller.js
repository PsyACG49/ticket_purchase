import Testimonial from "../models/Testimonial";

export const getTestimonials = async (req, res, next) => {
  try {
    const testimonials = await Testimonial.find();
    return res.status(200).json(testimonials);
  } catch (error) {
    next(error);
  }
};
