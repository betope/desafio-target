/* Exercício 3 */
// Gera um array com vendas aleatórias para cada dia do mês
const numDias = 30;
const faturamentoDiario = [];

for (let i = 0; i < numDias; i++) {
  const faturamento = Math.random() * 10000;
  faturamentoDiario.push(faturamento);
}

// Calcula a média de faturamento da mês
let media = 0;

for(let i = 0; i < faturamentoDiario.length; i++) {
    media += faturamentoDiario[i];
}
media /= faturamentoDiario.length;

//Mostra o menor valor diário
let menorValor = Math.min(...faturamentoDiario)
console.log(`O menor valor de faturamento no mês foi: ${menorValor.toFixed(2)}`);

//Mostra o maior valor diário
let maiorValor = Math.max(...faturamentoDiario);
console.log(`O maior valor de faturamento no mês foi: ${maiorValor.toFixed(2)}`);


// Retorna os quantos dias no mês tiveram vendas maiores que a média
let maiorqMedia = faturamentoDiario.filter(function(valor) {
    if(valor > media)
    return valor;
});
console.log(`A média é ${media.toFixed(2)} e houveram ${maiorqMedia.length} dias no mês em que as vendas foram maiores que a média`)
