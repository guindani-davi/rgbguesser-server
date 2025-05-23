import express, { Request, Response } from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import Quiz from "./models/Quiz";
import Question from "./models/Question";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const question1 = new Question(
  "1",
  "Qual é a capital da França?",
  ["Paris", "Londres", "Berlim"],
  "Paris",
  "1",
  new Date(),
  new Date()
);
const question2 = new Question(
  "2",
  "Qual é a capital da Alemanha?",
  ["Paris", "Londres", "Berlim"],
  "Berlim",
  "1",
  new Date(),
  new Date()
);
const question3 = new Question(
  "3",
  "Qual é a capital do Brasil?",
  ["Brasília", "Santiago", "Bariloche"],
  "Brasília",
  "2",
  new Date(),
  new Date()
);
const question4 = new Question(
  "4",
  "Qual é a capital do Chile?",
  ["Brasília", "Santiago", "Bariloche"],
  "Santiago",
  "2",
  new Date(),
  new Date()
);

const quiz1 = new Quiz(
  "1",
  "Quiz Europa",
  "Teste seus conhecimentos de Europa",
  [question1, question2],
  new Date(),
  new Date()
);

const quiz2 = new Quiz(
  "2",
  "Quiz SA",
  "Teste seus conhecimentos de SA",
  [question3, question4],
  new Date(),
  new Date()
);

const quizzes: Quiz[] = [quiz1, quiz2];

app.post("/api/quiz/start", (req, res) => {
  const { quizId } = req.body;
  const quiz = quizzes.filter((quizz) => quizz.id === quizId)[0];
  console.log(process.env.JWT_SECRET);
  console.log(process.env.SECRET_KEY);
  res.send(quiz);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Servidor Express com TypeScript e ts-node!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
