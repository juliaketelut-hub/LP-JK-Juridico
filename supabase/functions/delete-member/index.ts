import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, content-type, apikey',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: CORS })
  if (req.method !== 'POST') return json({ error: 'POST only' }, 405)

  try {
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) return json({ error: 'Não autorizado.' }, 401)

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    )

    // Identifica quem chamou
    const { data: { user }, error: authError } = await supabase.auth.getUser(
      authHeader.replace('Bearer ', '')
    )
    if (authError || !user) return json({ error: 'Não autorizado.' }, 401)

    // Só admin exclui
    const { data: caller } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle()
    if (caller?.role !== 'admin') return json({ error: 'Apenas administradores podem excluir membros.' }, 403)

    const { member_id } = await req.json()
    if (!member_id) return json({ error: 'member_id é obrigatório.' }, 400)
    if (member_id === user.id) return json({ error: 'Você não pode excluir a própria conta.' }, 400)

    // Nunca excluir outro admin por esta rota
    const { data: target } = await supabase.from('profiles').select('role, name').eq('id', member_id).maybeSingle()
    if (!target) return json({ error: 'Membro não encontrado.' }, 404)
    if (target.role === 'admin') return json({ error: 'Contas de administrador não podem ser excluídas por aqui.' }, 403)

    // Exclui do Auth — cascateia para profiles, member_products, purchases e lesson_progress
    const { error: delError } = await supabase.auth.admin.deleteUser(member_id)
    if (delError) return json({ error: 'Falha ao excluir: ' + delError.message }, 500)

    return json({ ok: true })
  } catch (err) {
    return json({ error: String(err) }, 500)
  }
})

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS },
  })
}
