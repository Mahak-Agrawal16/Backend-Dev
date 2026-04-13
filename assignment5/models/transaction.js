import mongoose from "mongoose";

const txSchema = new mongoose.Schema({
  from: String,
  to: String,
  amount: Number,
  description: String,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("Transaction", txSchema);