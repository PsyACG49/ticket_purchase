import { sendEmail, getTemplateForm } from "../utils/email.config";
import { NODEMAILER_USER } from "../config";

export const sendMeEmail = async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    const template = getTemplateForm(name, phone, email, message);
    await sendEmail(NODEMAILER_USER, "Un usuario quiere contactarse", template);
    res.status(200).json({
      success: true,
      message: "email sended",
    });
  } catch (error) {
    console.log(error);
  }
};
