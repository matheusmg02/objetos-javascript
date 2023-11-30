// const comida = 'Pizza';
// const agua = new String('Agua');

const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';
// console.log(frase[frase.length - 1]);
// console.log(frase.charAt(frase.length - 1))

const fraseFinal = frase.concat(linguagem, '!!'); // Concatena a frase junto com os parâmetros
console.log(fraseFinal); 

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes('Banana')); // True

console.log(fruta.endsWith('na')); // True

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósif

// console.log(transação.slice(-5));
console.log(fruta.indexOf('na'));

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10, '.'));
});

const frase2 = 'Ta'
console.log(frase2.repeat(5));

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';

listaItens = listaItens.replace(/[ ]+/g, ', ');

console.log(listaItens);

let preco = 'R$ 1200,43';
console.log(preco)
preco = preco.replace(',', '.');
console.log(preco)