async function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
        const resposta = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                senha: senha
            })
        });

        const resultado = await resposta.text();

        alert(resultado);
    } catch (erro) {
        alert("Erro ao conectar com o servidor");
        console.error(erro);
    }
}