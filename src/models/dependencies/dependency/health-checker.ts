import { Dependency } from "./dependency";
import HealthStatus from "./health-status";

class DependencyHealthChecker {
  public static async checkHealth(dependency: Dependency): Promise<void> {
    const health = dependency.getHealth();
    const metrics = health.getMetrics();

    await Promise.all(metrics.map((metric) => metric.updateStatus()));

    const unhealthyMetrics = metrics.filter(
      (metric) => metric.getStatus() === HealthStatus.UNHEALTHY,
    );
    if (unhealthyMetrics.length === 0) {
      health.setStatus(HealthStatus.HEALTHY);
    } else {
      health.setStatus(HealthStatus.UNHEALTHY);
    }
  }
}

export default DependencyHealthChecker;
