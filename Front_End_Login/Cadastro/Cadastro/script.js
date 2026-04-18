import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://cgpxlxygynpmsljqikcn.supabase.co'
const SUPABASE_KEY = 'sb_publishable_8_zytzaaPChBOb3ZCLerMA_-bH6ZoCx'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

window.addEventListener('load', () => {
  if (window.location.hash.includes('access_token')) {
    supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        alert('✅ Email confirmado! Faça seu login.')
        window.location.replace('https://login-theta-kohl.vercel.app')
      }
    })
  }
})

// =================== TOGGLE FORMS ===================

function mostrarLogin() {
  document.getElementById('loginForm').classList.add('active');
  document.getElementById('cadastroForm').classList.remove('active');
  document.getElementById('btnLogin').classList.add('active');
  document.getElementById('btnCadastro').classList.remove('active');
  document.getElementById('toggle').classList.remove('signup-active');
}

function mostrarCadastro() {
  document.getElementById('cadastroForm').classList.add('active');
  document.getElementById('loginForm').classList.remove('active');
  document.getElementById('btnCadastro').classList.add('active');
  document.getElementById('btnLogin').classList.remove('active');
  document.getElementById('toggle').classList.add('signup-active');
}

function toggleSenha(inputId, btn) {
  const input = document.getElementById(inputId);
  const svg = btn.querySelector('svg');
  const visivel = input.type === 'text';

  input.type = visivel ? 'password' : 'text';
  btn.classList.toggle('ativo', !visivel);

  if (visivel) {
    svg.innerHTML = `
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    `;
  } else {
    svg.innerHTML = `
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    `;
  }
}

// =================== VALIDAÇÕES ===================

function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function validarSenha(senha) {
  const erros = [];
  if (senha.length < 8) erros.push("mínimo 8 caracteres");
  if (!/[A-Z]/.test(senha)) erros.push("pelo menos 1 maiúscula");
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(senha)) erros.push("pelo menos 1 caractere especial");
  return erros;
}

function mostrarErro(inputId, mensagem) {
  const input = document.getElementById(inputId);
  const campo = input.closest('.campo');
  let erro = campo.querySelector('.msg-erro');
  if (!erro) {
    erro = document.createElement('span');
    erro.className = 'msg-erro';
    campo.appendChild(erro);
  }
  erro.textContent = mensagem;
  input.style.borderColor = 'rgba(200, 0, 0, 0.7)';
  input.style.boxShadow = '0 0 0 3px rgba(180, 0, 0, 0.2)';
}

function limparErro(inputId) {
  const input = document.getElementById(inputId);
  const campo = input.closest('.campo');
  const erro = campo.querySelector('.msg-erro');
  if (erro) erro.textContent = '';
  input.style.borderColor = '';
  input.style.boxShadow = '';
}

// =================== CADASTRO ===================

async function cadastro() {
  const email = document.getElementById("emailCadastro").value.trim();
  const senha = document.getElementById("senhaCadastro").value;

  let valido = true;

  if (!validarEmail(email)) {
    mostrarErro('emailCadastro', 'Insira um email válido (ex: nome@gmail.com)');
    valido = false;
  } else {
    limparErro('emailCadastro');
  }

  const errosSenha = validarSenha(senha);
  if (errosSenha.length > 0) {
    mostrarErro('senhaCadastro', 'Senha deve ter: ' + errosSenha.join(', '));
    valido = false;
  } else {
    limparErro('senhaCadastro');
  }

  if (!valido) return;

  const { data, error } = await supabase.auth.signUp({ email, password: senha })

  if (error) {
    alert('Erro: ' + error.message);
    return;
  }

  if (data.user && data.user.identities && data.user.identities.length === 0) {
    mostrarErro('emailCadastro', 'Este email já está cadastrado.');
    return;
  }

  alert('✅ Cadastro realizado! Verifique seu email para confirmar a conta.')
}

// =================== LOGIN ===================

async function login() {
  const email = document.getElementById("emailLogin").value.trim();
  const senha = document.getElementById("senhaLogin").value;

  let valido = true;

  if (!validarEmail(email)) {
    mostrarErro('emailLogin', 'Insira um email válido (ex: nome@gmail.com)');
    valido = false;
  } else {
    limparErro('emailLogin');
  }

  if (senha.length === 0) {
    mostrarErro('senhaLogin', 'Digite sua senha');
    valido = false;
  } else {
    limparErro('senhaLogin');
  }

  if (!valido) return;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password: senha })

  if (error) {
    if (error.message.includes('Email not confirmed')) {
      alert('⚠️ Email não confirmado! Verifique sua caixa de entrada.')
    } else if (error.message.includes('Invalid login credentials')) {
      alert('❌ Email ou senha incorretos.')
    } else {
      alert('Erro: ' + error.message)
    }
    return;
  }

  // 👇 Redireciona para a home após login
  window.location.replace('../Home/home.html')

window.mostrarLogin = mostrarLogin;
window.mostrarCadastro = mostrarCadastro;
window.toggleSenha = toggleSenha;
window.cadastro = cadastro;
window.login = login;
}