import { Request, Response } from "express";

import { Dependency } from "../models/dependencies/dependency/dependency";
import { DependencyFactory } from "../models/dependencies/dependency/dependency";
import DatabaseDependencyFactory from "../models/dependencies/database/database";
import DependencyHealthChecker from "../models/dependencies/dependency/health-checker";

class DependenciesController {
  private dependenciesFactories: DependencyFactory[];
  private dependencies: Dependency[];

  constructor() {
    this.dependenciesFactories = [new DatabaseDependencyFactory()];
    this.dependencies = [];

    this.dependenciesFactories.forEach((factory) => {
      const dependency = factory.createDependency();
      this.dependencies.push(dependency);
    });
  }

  private async checkDependenciesHealth(): Promise<void> {
    await Promise.all(
      this.dependencies.map((dependency) =>
        DependencyHealthChecker.checkHealth(dependency),
      ),
    );
  }

  public async getDependencies(req: Request, res: Response): Promise<void> {
    await this.checkDependenciesHealth();
    res.status(200).json({ dependencies: this.dependencies });
  }
}

export default DependenciesController;
