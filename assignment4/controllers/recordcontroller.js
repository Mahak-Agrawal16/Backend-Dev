import Record from "../models/record.js";

export const uploadRecord = async (req, res) => {
  const record = await Record.create({
    patient: req.body.patient,
    file: req.file.path
  });

  res.json(record);
};