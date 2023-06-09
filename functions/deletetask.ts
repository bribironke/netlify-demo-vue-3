
import { Handler, HandlerEvent } from "@netlify/functions";
import { supabase } from "./supabase";

export const handler: Handler = async (
  event: HandlerEvent
) => {
  const body = JSON.parse(event.body as string)
  await supabase .from('task').delete().eq('id', body.id)

  return {
    statusCode: 200,
  }
}