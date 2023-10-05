import { axiosPublic } from "./axios";

export const getMasterclasses = () => {
  const url = "masterclasses";
  return axiosPublic.get(url).then((res) => res.data);
};
