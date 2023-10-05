import { axiosPublic } from "./axios";

export const sendEmail = (data) => {
  const url = "email/send-me";
  return axiosPublic.post(url, data).then((res) => res.data);
};
