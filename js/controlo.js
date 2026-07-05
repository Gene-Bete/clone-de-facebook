const formulario = document.getElementById("login");

formulario.addEventListener("submit", function (event) {

    // Impede que a página recarregue
    event.preventDefault();

    const email = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (email === "admin@gmail.com" && senha === "1234") {
        alert("Login realizado com sucesso!");

        // Redireciona para outra página
        window.location.href = "home.html";

    } else {
        alert("Email ou senha incorretos.");
    }

});
 