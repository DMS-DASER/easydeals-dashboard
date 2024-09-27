import { createClient } from "@supabase/supabase-js";
const REACT_APP_SUPABASE_URL = "https://mtbscjslfmhebsizwcbx.supabase.co"
const REACT_APP_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10YnNjanNsZm1oZWJzaXp3Y2J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwMDU1MzYsImV4cCI6MjAzODU4MTUzNn0.lHhdyAUUndKRr-kta0M8qsADr28pLqJoE7pXuEPPo-g"

const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY);
export default supabase;