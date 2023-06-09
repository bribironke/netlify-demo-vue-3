
import { Handler, HandlerEvent } from "@netlify/functions";
import { supabase } from "./supabase";

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