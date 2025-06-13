import HealthStatus from "./health-status";

abstract class HealthMetricFactory {
  public abstract createHealthMetric(type: unknown): HealthMetric<unknown>;
}

abstract class HealthMetric<T> {
  private name: string;
  private value: T | null;
  private status: HealthStatus;

  constructor(name: string) {
    this.name = name;
    this.value = null;
    this.status = HealthStatus.UNCHECKED;
  }

  public getName(): string {
    return this.name;
  }

  public getValue(): T | null {
    return this.value;
  }

  public setValue(value: T): void {
    this.value = value;
  }

  public getStatus(): HealthStatus {
    return this.status;
  }

  public setStatus(status: HealthStatus): void {
    this.status = status;
  }

  public abstract updateStatus(): void;
}

export { HealthMetric, HealthMetricFactory };
