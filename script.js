/* Exercício 5 */
function reverterStr(texto) {
    let novoTexto = '';
    let i = texto.length - 1;
    while (i >= 0 ) {
        novoTexto += texto[i]
        i--;
    }
    return novoTexto;
}
let texto = prompt("Por favor escreva alguma palavra");
console.log(reverterStr(texto));
