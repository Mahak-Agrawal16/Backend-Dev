import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: { type: String, enum: ["student", "instructor", "admin"] },
  mfaSecret: String
});
export default mongoose.model("User", userSchema);