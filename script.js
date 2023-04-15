/* Exercício 2 */
function fibo(termo) {
    let t1 = 0, t2 = 1;

    while (t2 < termo) {
        let cont = t1;
        t1 = t2;
        t2 = t2 + cont;
    }

    if (t2 == termo) {
        console.log(`O número ${termo} pertence a sequência de Fibonacci`)
    } else {
        console.log(`O número ${termo} não pertence a sequência de Fibonacci`)
    }
}

let termo = Number(prompt("Por favor informe um número"));
console.log(fibo(termo));
