import express from "express";
import dotenv from "dotenv";

import apiRouter from "./routes/api";

const app = express();

dotenv.config();

app.use(express.json());
app.use("/api", apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening to http://localhost:${process.env.PORT}`);
});

export default app;
