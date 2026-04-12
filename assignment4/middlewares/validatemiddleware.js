import validator from "validator";

export const validatePatient = (req, res, next) => {
  if (!validator.isEmail(req.body.email)) {
    return res.status(400).send("Invalid email");
  }
  next();
};