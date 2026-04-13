import Patient from "../models/patient.js";
export const createPatient = async (req, res) => {
  const patient = await Patient.create(req.body);
  res.json(patient);
};