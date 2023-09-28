import Masterclass from "../models/Masterclass";

export const getMasterclasses = async (req, res) => {
  try {
    const masterclasess = await Masterclass.find();
    return res.status(200).json(masterclasess);
  } catch (error) {
    console.log(error);
  }
};
