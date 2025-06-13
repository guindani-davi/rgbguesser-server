import { Router } from "express";

import DependenciesController from "../controllers/dependencies";

const apiRouter = Router();

const dependenciesController = new DependenciesController();

apiRouter.get("/status", (req, res) =>
  dependenciesController.getDependencies(req, res),
);

export default apiRouter;
