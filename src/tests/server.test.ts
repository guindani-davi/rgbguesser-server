import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../server";

describe("Root route (/)", () => {
  it("should return status code 200", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});
