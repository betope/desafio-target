/* Exercício 2 */
// function fibo(termo) {
//     let t1 = 0, t2 = 1;

//     while (t2 < termo) {
//         let cont = t1;
//         t1 = t2;
//         t2 = t2 + cont;
//     }

//     if (t2 == termo) {
//         console.log(`O número ${termo} pertence a sequência de Fibonacci`)
//     } else {
//         console.log(`O número ${termo} não pertence a sequência de Fibonacci`)
//     }
// }

// let termo = Number(prompt("Por favor informe um número"));
// console.log(fibo(termo));

/* Exercício 3 */
// Gera um array com vendas aleatórias para cada dia do mês
// const numDias = 30;
// const faturamentoDiario = [];

// for (let i = 0; i < numDias; i++) {
//   const faturamento = Math.random() * 10000;
//   faturamentoDiario.push(faturamento);
// }

// // Calcula a média de faturamento da mês
// let media = 0;

// for(let i = 0; i < faturamentoDiario.length; i++) {
//     media += faturamentoDiario[i];
// }
// media /= faturamentoDiario.length;

// //Mostra o menor valor diário
// let menorValor = Math.min(...faturamentoDiario)
// console.log(`O menor valor de faturamento no mês foi: ${menorValor.toFixed(2)}`);

// //Mostra o maior valor diário
// let maiorValor = Math.max(...faturamentoDiario);
// console.log(`O maior valor de faturamento no mês foi: ${maiorValor.toFixed(2)}`);


// // Retorna os quantos dias no mês tiveram vendas maiores que a média
// let maiorqMedia = faturamentoDiario.filter(function(valor) {
//     if(valor > media)
//     return valor;
// });
// console.log(`A média é ${media.toFixed(2)} e houveram ${maiorqMedia.length} dias no mês em que as vendas foram maiores que a média`)


/* Exercício 4 */

// let filiais = [
//     {filial: "SP", vendas: 67836.43},
//     {filial: "RJ", vendas: 36678.66},
//     {filial: "MG", vendas: 29229.88},
//     {filial: "ES", vendas: 27165.48},
//     {filial: "OS", vendas: 19849.53},
// ]

// let total = 0;

// for (let totFilial of filiais) {
//     total += totFilial.vendas;
// }

// for(let totFilial of filiais) {
//     const porcentagem = totFilial.vendas / total * 100;
//     console.log(`${totFilial.filial}: ${porcentagem.toFixed(2)}%`)
// }

// total = sp + rj + mg + es + os;

// let perSP = sp / total * 100;
// let perRJ = rj / total * 100;
// let perMG = mg / total * 100;
// let perES = es / total * 100;
// let perOS = os / total * 100;

// console.log(`O total mensal da distribuidora é ${total} 
// SP representa ${perSP.toFixed(2)}%. 
// RJ representa ${perRJ.toFixed(2)}%
// MG representa ${perMG.toFixed(2)}%
// ES representa ${perES.toFixed(2)}%
// OS representa ${perOS.toFixed(2)}%`);





/* Exercício 5 */
// function reverterStr(texto) {
//     let novoTexto = '';
//     let i = texto.length - 1;
//     while (i >= 0 ) {
//         novoTexto += texto[i]
//         i--;
//     }
//     return novoTexto;
// }
// let texto = prompt("Por favor escreva alguma palavra");
// console.log(reverterStr(texto));
