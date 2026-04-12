import Appointment from "../models/appointment.js";

export const bookAppointment = async (req, res) => {
  const date = new Date(req.body.date);

  if (isNaN(date.getTime())) {
    return res.status(400).send("Invalid date");
  }

  const appointment = await Appointment.create({
    ...req.body,
    date
  });

  res.json(appointment);
};