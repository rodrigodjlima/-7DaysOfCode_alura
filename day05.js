function startScript() {

let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";

let adicionarMais = "sim";  // valor inicial como "sim", porque a primeira vez sempre vai entrar no while
while(adicionarMais != "não"){
    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    while (adicionarMais != "sim" && adicionarMais != "não") {  //enquanto o texto lido for diferente de "sim" e de "não", exibir que não foi reconhecido e perguntar novamente
	alert(`Operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }
	
    if (adicionarMais === "não"){  //se o texto lido for "não", sair do while
        break;
    }
	
    comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
    if(categoria === 'frutas'){
        frutas.push(comida);
    } else if (categoria === 'laticínios'){
        laticinios.push(comida);
    } else if (categoria === 'doces'){
        doces.push(comida);
    } else if (categoria === 'congelados'){
        congelados.push(comida);
    } else {
        alert("Essa categoria não foi pré-definida.")
    }
}
alert(`Sua Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
resultado('h2',"Sua Lista de compras:\n");
resultado('h3', `Frutas: ${frutas}\n`);
resultado('h4', `Laticínios: ${laticinios}\n`);  
resultado('h5', `Doces: ${doces}\n`);
resultado('h6', `Congelados: ${congelados}`);
}
function resultado (tag, texto) {// mostrar resultado na pagina
    let textoResultado = document.querySelector(tag);
    textoResultado.innerHTML = texto;};