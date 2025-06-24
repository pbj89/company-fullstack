import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://soorljabileodhixsqxf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvb3JsamFiaWxlb2RoaXhzcXhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4NTA0NDUsImV4cCI6MjA2NDQyNjQ0NX0.yWlwDh0v5x4eZ8OsVxA1_PW3nLIhT7K6-x3uChRjmRw";
const supabase = createClient(supabaseUrl, supabaseKey);

export const loginUser = async (email: string, password: string) => {
  return await supabase.auth.signInWithPassword({ email, password });
};

export const registerUser = async (email: string, password: string) => {
  return await supabase.auth.signUp({ email, password });
};