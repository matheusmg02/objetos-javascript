function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.abracar = function() {
        return `${this.nome} abraçou.`
    }
}

const matheus = new Pessoa('Matheus', 21);

// console.log(Pessoa.prototype); // retorna o objeto da função (o próprio prototype)
// console.log(matheus.prototype); //undefined

Pessoa.prototype.andar = function() {
    return `${this.nome} andou.`
}

console.log(matheus.andar());
console.log(matheus.abracar());

// Contrutores nativos. Exemplo: String

const pais = 'Brasil'
const cidade = new String('Rio');

const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true;
    }
}

console.log(Carro.preco); // Tipo do retorno: Number
console.log(Carro.marca); // Tipo do retorno: String
console.log(Carro.andar()) // Tipo do retorno: Boolean, porque retorna true.