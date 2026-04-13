import Quiz from "../models/quiz.js";
export const submitQuiz = async (req, res) => {
  const quiz = await Quiz.findById(req.body.id);
  if (quiz.submitted) {
    return res.status(400).send("Already submitted");
  }
  quiz.answer = req.body.answer;
  quiz.submitted = true;
  await quiz.save();
  res.send("Submitted");
};