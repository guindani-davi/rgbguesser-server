import { Dependency, DependencyFactory } from "../dependency/dependency";
import DatabaseHealth from "./health";

class DatabaseDependencyFactory extends DependencyFactory {
  public createDependency(): Dependency {
    return new DatabaseDependency();
  }
}

class DatabaseDependency extends Dependency {
  constructor() {
    super("database", new DatabaseHealth());
  }
}

export default DatabaseDependencyFactory;
