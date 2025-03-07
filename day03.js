//1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

//2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

//3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir 
// se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. 
// Você deve exibir na tela uma mensagem específica para cada escolha.

//4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. 
// Aqui, a pessoa pode responder N tecnologias, uma de cada vez. 
// Então, enquanto ela continuar respondendo ok para a pergunta: 
// “Tem mais alguma tecnologia que você gostaria de aprender?”, 
// continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. 
// E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

//O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

// Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.
function startScript() {

const area = prompt("Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite o nome da área:");
let linguagem = "";

if (area === "Front-End"){
    linguagem = prompt("Você quer aprender React ou Vue?");
}
else if (area === "Back-End"){
    linguagem = prompt("Você quer aprender C# ou Java?");
}
else {
    alert("Você não inseriu uma área correta!");
}

const caminho = prompt ("Você quer continuar se especializando na área escolhida? Digite 1, ou digite 2 para seguir se desenvolvendo para se tornar Fullstack");

if (caminho == 1){
    alert(`Continue estudando em ${linguagem} para dominar a área de ${area}!`);    
}
else if (caminho == 2){
    alert(`Para se tornar Fullstack o ideal é aprender outras linguagens além de ${linguagem}!`);
    resultado ('h2',`Continue estudando em ${linguagem} para dominar a área de ${area}!`);
    
}

else {
    alert("Você não inseriu uma área correta!");
}

resultado ('h3', `Para se tornar Fullstack o ideal é aprender outras linguagens além de ${linguagem}!`)

let tecnologias = prompt("Gostaria de se especializar ou de conhecer outra tecnologia ? Digite sim ou não.");
while (tecnologias === "sim") {
    let outraTecnologia = prompt("Qual tecnologia?");
    console.log (outraTecnologia);
    alert(`Perfeito, aprender ${outraTecnologia} é essencial para se desenvolver na área de programação!`);
    resultado ('h4', `Perfeito, aprender ${outraTecnologia} é essencial para se desenvolver na área de programação!`);
    tecnologias = prompt("Gostaria de se especializar ou de conhecer outra tecnologia ? Digite sim ou não.");
}

if (tecnologias === "não") {
    alert (`"Obrigado por informar seus objetivos na área de programação, espero que aprenda bem ${linguagem}. Boa sorte, na sua jornada."`);
    resultado ('h5',`"Obrigado por informar, seus objetivos na área de programação espero que aprenda bem ${linguagem}. Boa sorte, na sua jornada."`)   
    }
else {
        alert("Você não inseriu uma resposta correta!");
    };

    function resultado (tag, texto) {// mostrar resultado na pagina
        let textoResultado = document.querySelector(tag);
        textoResultado.innerHTML = texto;
      }    
}
