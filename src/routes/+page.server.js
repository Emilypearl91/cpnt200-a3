import { supabase } from "$lib/supabaseClient";

export async function load() {
  let { data, error } = await supabase
  .from('blog')
  .select('*')
  return {
    blog: data ??[]
  }
}