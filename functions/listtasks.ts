
import { Handler } from "@netlify/functions";
// import { createClient } from '@supabase/supabase-js'
import "dotenv/config"

export const handler: Handler = async () => {

  // const supabase = createClient(
  //   process.env.SUPABASE_URL as string,
  //   process.env.SUPABASE_KEY as string
  // )
  // const { data } = await supabase.from('task').select('*')

  const data = [
    { name: `Gabriel ${process.env.SUPABASE_URL}`, id: 1 },
    { name: `Lanre ${process.env.SUPABASE_KEY}`, id: 2 },
    { name: 'Ibironke', id: 3 },
  ]

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}