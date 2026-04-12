import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  patient: String,
  doctor: String,
  date: Date,
  reason: String
});

export default mongoose.model("Appointment", appointmentSchema);