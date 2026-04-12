import message from "../models/message.js";
import xss from "xss";

export const sendMessage = async (req, res) => {
  const text = xss(req.body.text);

  const msg = await Message.create({
    sender: req.session.user._id,
    receiver: req.body.receiver,
    text
  });

  res.json(msg);
};