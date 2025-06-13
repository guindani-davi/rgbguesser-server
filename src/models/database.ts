import { SupabaseClient } from "@supabase/supabase-js";

import { Database as SupabaseSchema } from "../types/database.types";
import supabase from "../lib/supabase";

class DatabaseConnection {
  private static instance: SupabaseClient<SupabaseSchema>;

  private constructor() {}

  public static getInstance(): SupabaseClient<SupabaseSchema> {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = supabase;
    }
    return DatabaseConnection.instance;
  }
}

export default DatabaseConnection;
