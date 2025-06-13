import Health from "./health";

abstract class DependencyFactory {
  public abstract createDependency(): Dependency;
}

abstract class Dependency {
  private name: string;
  private health: Health;

  constructor(name: string, health: Health) {
    this.name = name;
    this.health = health;
  }

  public getName(): string {
    return this.name;
  }

  public getHealth(): Health {
    return this.health;
  }
}

export { Dependency, DependencyFactory };
