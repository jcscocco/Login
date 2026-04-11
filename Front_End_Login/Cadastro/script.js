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

async function cadastro() {
  const email = document.getElementById("emailCadastro").value;
  const senha = document.getElementById("senhaCadastro").value;

  const resposta = await fetch("http://localhost:8080/cadastro", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha })
  });

  const resultado = await resposta.text();
  alert(resultado);
}

async function login() {
  const email = document.getElementById("emailLogin").value;
  const senha = document.getElementById("senhaLogin").value;

  const resposta = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha })
  });

  const resultado = await resposta.text();
  alert(resultado);
}