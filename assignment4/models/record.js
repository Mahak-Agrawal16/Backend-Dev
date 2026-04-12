import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
  patient: String,
  file: String,
  description: String
});

export default mongoose.model("Record", recordSchema);