import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE;

// @ts-ignore
export const supabase = createClient(supabaseUrl, supabaseKey);
