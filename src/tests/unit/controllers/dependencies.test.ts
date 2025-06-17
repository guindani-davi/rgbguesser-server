import { describe, expect, it } from "vitest";

import DependenciesController from "../../../controllers/dependencies";

describe("DependenciesController", () => {
  const controller = new DependenciesController();

  it("should create an instance of DependenciesController", () => {
    expect(controller).toBeInstanceOf(DependenciesController);
  });

  it("should have a method to get dependencies", () => {
    expect(controller).toHaveProperty("getDependencies");
    expect(typeof controller.getDependencies).toBe("function");
  });

  it("should have a method to check dependencies health", () => {
    expect(controller).toHaveProperty("checkDependenciesHealth");
    expect(typeof controller.getDependencies).toBe("function");
  });
});
