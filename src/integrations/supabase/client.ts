// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kilghbrdrvfjxsvuvgza.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpbGdoYnJkcnZmanhzdnV2Z3phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNzA4NjEsImV4cCI6MjA1Njg0Njg2MX0.97goGJPGwx1e7-i0mrTd9Z3EPChzfXCfAZVm3j4e6Q4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);