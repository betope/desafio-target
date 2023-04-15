/* Exercício 4 */

// Arrays de objetos com as filias e cada valor de vendas
let filiais = [
    {filial: "SP", vendas: 67836.43},
    {filial: "RJ", vendas: 36678.66},
    {filial: "MG", vendas: 29229.88},
    {filial: "ES", vendas: 27165.48},
    {filial: "OS", vendas: 19849.53},
]

// Soma todos os valores na variável total
let total = 0;
for (let totFilial of filiais) {
    total += totFilial.vendas;
}

// Adiciona o valor que cada filial representa em porcentagem do valor total
for(let totFilial of filiais) {
    const porcentagem = totFilial.vendas / total * 100;
    console.log(`${totFilial.filial}: ${porcentagem.toFixed(2)}%`)
}

total = sp + rj + mg + es + os;

let perSP = sp / total * 100;
let perRJ = rj / total * 100;
let perMG = mg / total * 100;
let perES = es / total * 100;
let perOS = os / total * 100;

console.log(`O total mensal da distribuidora é ${total} 
SP representa ${perSP.toFixed(2)}%. 
RJ representa ${perRJ.toFixed(2)}%
MG representa ${perMG.toFixed(2)}%
ES representa ${perES.toFixed(2)}%
OS representa ${perOS.toFixed(2)}%`);