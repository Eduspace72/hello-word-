let nome_usuário = prompt("Qual o seu nome?");
let elemento = 
document.querySelector("#nome-usuário");

if(nome_usuário === null || nome_usuário 
=== "") {
    elemento.textContent = "Seja muito bem vindo.";
} else{
    elemento.textContent = nome_usuário;
}

