import mongoose from "mongoose";
const logSchema = new mongoose.Schema({
  user: String,
  action: String,
  timestamp: { type: Date, default: Date.now }
});
export default mongoose.model("AuditLog", logSchema);