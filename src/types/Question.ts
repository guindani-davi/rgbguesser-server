import { JwtPayload } from "jsonwebtoken";

export default interface AnswerCheckCustomJwtPayload extends JwtPayload {
  quizId: string;
  answersHash: Array<string>;
  iat: number;
  exp: number;
}
