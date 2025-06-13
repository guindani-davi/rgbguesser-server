import request from "supertest";
import { describe, it, expect } from "vitest";

import app from "../server";

describe("Status route (/api/status)", () => {
  it("should return 200", async () => {
    const response = await request(app).get("/api/status");
    expect(response.status).toBe(200);
  });
});
