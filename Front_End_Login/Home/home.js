import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://cgpxlxygynpmsljqikcn.supabase.co'
const SUPABASE_KEY = 'sb_publishable_8_zytzaaPChBOb3ZCLerMA_-bH6ZoCx'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// Verifica se está logado
const { data: { session } } = await supabase.auth.getSession()

if (!session) {
  window.location.replace('./index.html')
} else {
  document.getElementById('userEmail').textContent = session.user.email
}

// Logout
window.logout = async function () {
  await supabase.auth.signOut()
  window.location.replace('../Cadastro/index.html')
}