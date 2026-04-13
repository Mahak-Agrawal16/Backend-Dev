import Course from "../models/course.js";
import { cleanHTML } from "../utils/sanitizehtml.js";
export const createCourse = async (req, res) => {
  const description = cleanHTML(req.body.description);
  const course = await Course.create({
    ...req.body,
    description
  });
  res.json(course);
};