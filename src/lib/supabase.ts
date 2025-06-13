import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

import type { Database } from "../types/database.types";

dotenv.config();

const supabase = createClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export default supabase;
