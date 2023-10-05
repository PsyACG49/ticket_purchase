import { axiosPublic } from "./axios";

export const startPayment = (data) => {
  const url = "payment/create-checkout-session";
  return axiosPublic.post(url, data).then((res) => res.data);
};
