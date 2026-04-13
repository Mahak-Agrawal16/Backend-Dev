import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

export const transferMoney = async (req, res) => {
  const { to, amount, description } = req.body;

  if (amount <= 0 || amount > 100000) {
    return res.status(400).send("Invalid amount");
  }

  const sender = await User.findById(req.session.user._id);
  const receiver = await User.findOne({ accountNumber: to });

  if (!receiver) return res.status(400).send("Invalid account");

  if (sender.balance < amount) {
    return res.status(400).send("Insufficient balance");
  }

  sender.balance -= amount;
  receiver.balance += amount;

  await sender.save();
  await receiver.save();

  const tx = await Transaction.create({
    from: sender.accountNumber,
    to,
    amount,
    description
  });

  res.json(tx);
};