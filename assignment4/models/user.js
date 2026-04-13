import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["patient", "doctor", "nurse", "admin", "insurance"]
  }
});
export default mongoose.model("User", userSchema);