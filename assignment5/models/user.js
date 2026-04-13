import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  balance: { type: Number, default: 10000 },
  accountNumber: String,
  resetToken: String,
  resetTokenExpiry: Date,
  twoFASecret: String
});

export default mongoose.model("User", userSchema);