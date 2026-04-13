import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
  question: String,
  answer: String,
  submitted: Boolean
});

export default mongoose.model("Quiz", quizSchema);