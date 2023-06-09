
import { Handler } from "@netlify/functions";
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  "https://tzhcdjavlubkbccsqcdf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6aGNkamF2bHVia2JjY3NxY2RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4NjQwMTMsImV4cCI6MTk5OTQ0MDAxM30.1t_wJDceRTi6JohruwDq9snJV_TN0YfCxWlsTLab1c8"
)

// export const supabase = createClient(
//   process.env.SUPABASE_URL as string,
//   process.env.SUPABASE_KEY as string
// )

export const handler: Handler = async () => { 
  // const { data } = await supabase.from('task').select('*')
  const data = [
    { id: 1, name: "Let's eat" },
    { id: 2, name: "Another" },
    { id: 3, name: "Yet another" },
  ]

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}