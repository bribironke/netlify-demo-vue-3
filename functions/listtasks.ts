
import { Handler } from "@netlify/functions";
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
)

export const handler: Handler = async () => { 
  const { data } = await supabase.from('task').select('*')

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}