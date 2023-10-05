import { axiosPublic } from "./axios";

export const getCourses = () => {
  const url = "courses";
  return axiosPublic.get(url).then((res) => res.data);
};
