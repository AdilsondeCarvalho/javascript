let n = 1543.5
let formatado = n.toLocaleString('pt-BR',{style:'currency',currency: 'BRL'})
console.log(formatado);