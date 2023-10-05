import { axiosPublic } from "./axios";

export const getTestimonials = () => {
  const url = "testimonials";
  return axiosPublic.get(url).then((res) => res.data);
};
