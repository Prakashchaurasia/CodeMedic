import { createClient } from "@supabase/supabase-js";

const supabaseUrl = (typeof import.meta !== "undefined" && import.meta?.env?.VITE_SUPABASE_URL) || "https://zrsnyumhwjsxnkugcukg.supabase.co";
const supabasePublishableKey = (typeof import.meta !== "undefined" && import.meta?.env?.VITE_SUPABASE_PUBLISHABLE_KEY) || "sb_publishable_ZLSOwBM0FCEHLtU74eOJmQ_2yvayR0Y";

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);