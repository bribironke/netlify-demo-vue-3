
import { Handler } from "@netlify/functions";
import { supabase } from "./supabase";

export const handler: Handler = async () => { 
  const { data } = await supabase.from('task').select('*')

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}