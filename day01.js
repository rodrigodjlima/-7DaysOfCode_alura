function startScript() {

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm) { //COMPARAR O numeroUm e a stringUm

  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');// é usado == para verificar se o valor é o mesmo e tipos diferentes.
  resultado ('h2', 'As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');

} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor');
  resultado ('h3', 'As variáveis numeroUm e stringUm não tem o mesmo valor');

}

if (numeroTrinta === stringTrinta) { //COMPARAR O numeroTrinta e a stringTrinta

  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo');// é usado === para verificar se o valor é o mesmo e o mesmo tipo.
  resultado ('h4', 'As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo');

} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo');
  resultado ('h5', 'As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo');
}

if (numeroDez == stringDez) { //COMPARAR O numeroDez e a stringDez

  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')// é usado == para verificar se o valor é o mesmo e tipos diferentes.
  resultado ('h6', 'As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')

} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor');
  resultado ('h7', 'As variáveis numeroDez e stringDez não tem o mesmo valor');
};

};

function resultado (tag, texto) {// mostrar resultado na pagina
  let textoResultado = document.querySelector(tag);
  textoResultado.innerHTML = texto;
}