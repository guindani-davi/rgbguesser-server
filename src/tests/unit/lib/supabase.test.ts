import { describe, expect, it } from "vitest";
import { SupabaseClient } from "@supabase/supabase-js";

import supabase from "../../../lib/supabase";

describe("Supabase module", () => {
  it("Should export the supabase client", () => {
    console.log(supabase);
    expect(supabase).toBeInstanceOf(SupabaseClient);
  });
});
