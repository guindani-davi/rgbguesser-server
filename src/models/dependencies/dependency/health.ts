import HealthStatus from "./health-status";
import { HealthMetric } from "./health-metric";

abstract class Health {
  private status: HealthStatus;
  private metrics: HealthMetric<unknown>[];

  constructor() {
    this.status = HealthStatus.UNCHECKED;
    this.metrics = [];
  }

  public getStatus(): HealthStatus {
    return this.status;
  }

  public setStatus(status: HealthStatus): void {
    this.status = status;
  }

  public getMetrics(): HealthMetric<unknown>[] {
    return this.metrics;
  }

  public getMetricByName(metricName: string) {
    return this.getMetrics().find((metric) => metric.getName() === metricName);
  }

  public addMetric(metric: HealthMetric<unknown>): void {
    this.metrics.push(metric);
  }
}

export default Health;
