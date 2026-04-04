function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if(email === "juliococco2801@gmail.com" && senha === "Juliocesar280108") {
    alert("Login realizado com sucesso!");
  } else {
    alert("Email ou senha incorretos");
  }
}