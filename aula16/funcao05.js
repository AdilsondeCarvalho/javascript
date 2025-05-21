// RECURSIVIDADE
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/*

Cinco Fatorial
5! 5 * 4 * 3 * 2 * 1
5! = 5 * 4!
O fatorial de um número pode ser calculado no fatorial de outro
n! = n x (n-1)!

Exceto fatorial de 1
1! = 1
*/