import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../server";

describe("Root route (/)", () => {
  it("should return status code 200", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});

describe("Status route (/status)", () => {
  it("should return status code 200", async () => {
    const response = await request(app).get("/status");
    expect(response.status).toBe(200);
  });

  it("should return correct database status structure", async () => {
    const response = await request(app).get("/status");

    expect(response.body.dependencies.database).toEqual({
      status: expect.any(String),
      max_connections: expect.any(Number),
      activeConnections: expect.any(Number),
      version: expect.any(String),
    });
  });

  it("should return 'healthy' database status", async () => {
    const response = await request(app).get("/status");
    expect(response.body.dependencies.database.status).toBe("healthy");
  });

  it("should return positive connection counts", async () => {
    const response = await request(app).get("/status");
    expect(response.body.dependencies.database.max_connections).toBeGreaterThan(
      0,
    );
    expect(
      response.body.dependencies.database.activeConnections,
    ).toBeGreaterThanOrEqual(0);
  });

  it("should have correct content-type header", async () => {
    const response = await request(app).get("/status");
    expect(response.headers["content-type"]).toMatch(/application\/json/);
  });
});
