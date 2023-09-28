import Order from "../models/Order";

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    return res.status(200).json(orders);
  } catch (error) {
    console.log(error);
  }
};
