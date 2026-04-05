import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jshodscxksblirkqiyee.supabase.co";
const supabaseKey = "sb_publishable_wMVbxKRIfqNr3un7lPpGEQ_pDWNF4WD";

export const supabase = createClient(supabaseUrl, supabaseKey);