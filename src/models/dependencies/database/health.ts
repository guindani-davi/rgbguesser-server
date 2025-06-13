import Health from "../dependency/health";
import {
  DatabaseHealthMetricFactory,
  DatabaseHealthMetricTypes,
} from "./health-metrics";

class DatabaseHealth extends Health {
  constructor() {
    super();
    const factory = new DatabaseHealthMetricFactory();
    this.addMetric(
      factory.createHealthMetric(DatabaseHealthMetricTypes.MAX_CONNECTIONS),
    );
    this.addMetric(
      factory.createHealthMetric(DatabaseHealthMetricTypes.ACTIVE_CONNECTIONS),
    );
    this.addMetric(
      factory.createHealthMetric(DatabaseHealthMetricTypes.VERSION),
    );
  }
}

export default DatabaseHealth;
