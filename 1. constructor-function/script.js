// function Carro(marcaAtribuida, precoAtribuido) {
//     this.marca = marcaAtribuida;
//     this.preco = precoAtribuido;
// }

// const honda = new Carro('Honda', 3000);
// const fiat = new Carro('Fiat', 4000);

// function Carro2(marca, precoInicial) {
//     const taxa = 1.2;
//     const precoFinal = precoInicial * taxa;
//     this.marca = marca;
//     this.preco = precoFinal;
// } 
// o *this* se refere ao objeto. marca e preço são propriedades de carro2.

function Dom(seletor){
    const element = function() {
        return document.querySelector(seletor);
    }
    const ativar = function() {
        element().classList.add('ativar');
    }
}

const li = new Dom('li');