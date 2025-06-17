import { describe, expect, it } from "vitest";
import { SupabaseClient } from "@supabase/supabase-js";

import supabase from "../../../lib/supabase";

describe("Supabase module", () => {
  it("Should export the supabase client", () => {
    expect(supabase).toBeInstanceOf(SupabaseClient);
  });
});
