import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  medicalHistory: String
});

export default mongoose.model("Patient", patientSchema);