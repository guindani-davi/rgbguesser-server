export default class Question {
  id: string;
  question: string;
  options: Array<string>;
  answer: string;
  quizId: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: string,
    question: string,
    options: Array<string>,
    answer: string,
    quizId: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.question = question;
    this.options = options;
    this.answer = answer;
    this.quizId = quizId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
