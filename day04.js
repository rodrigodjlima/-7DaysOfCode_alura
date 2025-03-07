//Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

//Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

//No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

function startScript() {
const numeroPreDefinodo = 7;
let chute = "";
let acerto = false;

for(let contador = 0; contador < 3; contador++) {    
    chute = prompt("Digite aqui um número entre 0 a 10:");
    let chance = (2-contador);
    if(chute == numeroPreDefinodo){
        alert(`Parabéns, acertou! O número pré-definido é ${numeroPreDefinodo}.`);
        resultado ('h2', `Parabéns, acertou! O número pré-definido é ${numeroPreDefinodo}.`)
        acerto = true;
        break;}
        alert (`Errou!.Não se preocupe, você tem mais ${chance} tentativa(s).`);
     }

    if(!acerto) {
        alert (`Não acertou, errou todas. O número pré-definido é ${numeroPreDefinodo}!`);
        resultado ('h2', `Não acertou, errou todas. O número pré-definido é ${numeroPreDefinodo}!`);
    }
    };

function resultado (tag, texto) {// mostrar resultado na pagina
    let textoResultado = document.querySelector(tag);
    textoResultado.innerHTML = texto;};


//Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.

function startScriptRandomico() {

        const numeroRandomico = Math.floor(Math.random() * (10 - 0 + 1) + 0);
        let chute = "";
        let acertou = false;
        
        for(let contador = 0; contador < 3; contador++){   
            let chance = (2-contador); 
            chute = prompt("Digite aqui um número entre 0 a 10:");
            if(chute == numeroRandomico){
                alert(`Parabéns, acertou! O número randômico é ${numeroRandomico}.`);
                resultado ('h2', `Parabéns, acertou! O número randômico é ${numeroRandomico}.`)
                acertou = true;
                break;
        }

        alert(`Errou!.Não se preocupe, você tem mais ${chance} tentativa(s).`);
        
        }

        if(!acertou){
            alert(`Não acertou, errou todas. O número randômico é ${numeroRandomico}!`);
            resultado ('h2', `Não acertou, errou todas. O número randômico é ${numeroRandomico}!`);

        }
    }