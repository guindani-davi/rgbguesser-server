import HealthStatus from "../dependency/health-status";
import { HealthMetric, HealthMetricFactory } from "../dependency/health-metric";
import DatabaseConnection from "../../database";
import DatabaseDependencyFactory from "./database";

class DatabaseHealthMetricFactory extends HealthMetricFactory {
  public createHealthMetric(
    type: DatabaseHealthMetricTypes,
  ): HealthMetric<unknown> {
    switch (type) {
      case DatabaseHealthMetricTypes.MAX_CONNECTIONS:
        return new MaxConnections("max_connections");
      case DatabaseHealthMetricTypes.ACTIVE_CONNECTIONS:
        return new ActiveConnections("active_connections");
      case DatabaseHealthMetricTypes.VERSION:
        return new Version("version");
      default:
        throw new Error(`Unknown health metric type: ${type}`);
    }
  }
}

enum DatabaseHealthMetricTypes {
  MAX_CONNECTIONS = "max_connections",
  ACTIVE_CONNECTIONS = "active_connections",
  VERSION = "version",
}

class MaxConnections extends HealthMetric<number> {
  constructor(name: string) {
    super(name);
  }

  public async updateStatus(): Promise<void> {
    const database = DatabaseConnection.getInstance();
    const { data, error } = await database.rpc("get_max_connections");
    if (!error) {
      if (data >= 100) {
        this.setStatus(HealthStatus.HEALTHY);
      } else {
        this.setStatus(HealthStatus.UNHEALTHY);
      }
      this.setValue(data);
    } else {
      throw new Error(`Error fetching max connections: ${error.message}`);
    }
  }
}

class ActiveConnections extends HealthMetric<number> {
  constructor(name: string) {
    super(name);
  }

  public async updateStatus(): Promise<void> {
    const database = DatabaseConnection.getInstance();
    const { data, error } = await database.rpc("get_active_connections");
    if (!error) {
      const maxConnections = this.getMaxConnections();
      if (data <= maxConnections * 0.7) {
        this.setStatus(HealthStatus.HEALTHY);
      } else {
        this.setStatus(HealthStatus.UNHEALTHY);
      }
      this.setValue(data);
    } else {
      throw new Error(`Error fetching active connections: ${error.message}`);
    }
  }

  private getMaxConnections(): number {
    const databaseDependencyFactory = new DatabaseDependencyFactory();
    const databaseDependency = databaseDependencyFactory.createDependency();
    return databaseDependency
      .getHealth()
      .getMetricByName("max_connections")
      ?.getValue() as number;
  }
}

class Version extends HealthMetric<string> {
  constructor(name: string) {
    super(name);
  }
  public async updateStatus(): Promise<void> {
    const database = DatabaseConnection.getInstance();
    const { data, error } = await database.rpc("get_db_version");
    if (!error) {
      const parsedData = this.parseVersion(data);
      this.setValue(parsedData);
      this.setStatus(HealthStatus.HEALTHY);
    } else {
      this.setStatus(HealthStatus.UNHEALTHY);
      throw new Error(`Error fetching database version: ${error.message}`);
    }
  }

  private parseVersion(version: string): string {
    return version.split(" ")[1].split(" ")[0];
  }
}

export { DatabaseHealthMetricFactory, DatabaseHealthMetricTypes };
