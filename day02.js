//- Qual o seu nome?
//- Quantos anos você tem?
//- Qual linguagem de programação você está estudando?

// exibir mensagem "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

//Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

//E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

//1 > Muito bom! Continue estudando e você terá muito sucesso.
//2 > Ahh que pena... Já tentou aprender outras linguagens?

function startScript() {

let nome = prompt("Qual o seu nome?");
let idade = prompt("Quantos anos você tem?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");
let mensagem  = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"!`;
alert(mensagem);

let preferencia = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 - SIM ou 2 - NÃO`);
if (preferencia == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
if (preferencia == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
    //Você pode adicionar quantas perguntas quiser, e pode aproveitar as respostas dos usuários na mensagem que será exibida.
    let preferenciaDeLinguagem = prompt ("Qual linguagem você gostaria de aprender?");
    let mensagemMotivacional = `"Certo ${nome}, embora você ainda não goste de estudar ${linguagem}, continue se dedicando e logo ira aprender também ${preferenciaDeLinguagem}!"`;
    alert (mensagemMotivacional);
    resultado ('h4', mensagemMotivacional);

}

else { 

    alert ("Responda somente 1 para SIM ou 2 para NÃO")}

    resultado ('h2', mensagem);
    resultado ('h3', 'Muito bom! Continue estudando e você terá muito sucesso');

function resultado (tag, texto) {// mostrar resultado na pagina
        let textoResultado = document.querySelector(tag);
        textoResultado.innerHTML = texto;
      }

}




