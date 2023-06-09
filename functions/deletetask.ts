
import { Handler, HandlerEvent } from "@netlify/functions";
import { createClient } from '@supabase/supabase-js'
import "dotenv/config"

export const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
)

export const handler: Handler = async (
  event: HandlerEvent
) => {
  const body = JSON.parse(event.body as string)
  await supabase .from('task').delete().eq('id', body.id)

  return {
    statusCode: 200,
  }
}