import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).end();
});

app.get("/status", async (req: Request, res: Response) => {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  const dbVersionResponse = await supabase.rpc("get_db_version");
  const dbVersion: string = dbVersionResponse.data;

  const maxConnectionsResponse = await supabase.rpc("get_max_connections");
  const maxConnections = maxConnectionsResponse.data;

  const activeConnectionsResponse = await supabase.rpc(
    "get_active_connections",
  );
  const activeConnections = activeConnectionsResponse.data;

  res.json({
    updated_at: new Date().toISOString(),
    dependencies: {
      database: {
        status: "healthy",
        max_connections: maxConnections,
        activeConnections: activeConnections,
        version: dbVersion.split(" ")[1].split(" ")[0],
      },
    },
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening to http://localhost:${process.env.PORT}`);
});

export default app;
