
import { Handler, HandlerEvent } from "@netlify/functions"; 
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
)

export const handler: Handler = async(
  event: HandlerEvent
) => {

  const task = JSON.parse(event.body as string)
  const { data } = await supabase.from('task').insert([task]).select()

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}