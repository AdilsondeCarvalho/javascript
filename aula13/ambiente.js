
// Estrutura de repetição com texte lógico no início: testa depois executa ou pode executar depois testar 
/*console.log('Tudo bem?')*/

/* Testa primeiro e executa o teste depois
var c = 1
while (c < 6) {
    c++ 
}*/

var c = 1
do {
    console.log(`Passo ${c}`)
    c++
} while (c >= 6)