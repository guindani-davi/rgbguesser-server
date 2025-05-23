import Question from "./Question";

export default class Quiz {
  id: string;
  title: string;
  description: string;
  questions: Array<Question>;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: string,
    title: string,
    description: string,
    questions: Array<Question>,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.questions = questions;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
