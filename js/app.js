let carrinho = [];
let precoTotal = 0;

const database_produtos = [
    {name: 'Fone de Ouvido', price: 100},
    {name: 'Celular', price: 1400},
    {name: 'Oculos VR', price: 5000},
]

function adicionar() {

    let quantidade = parseInt(document.getElementById('quantidade').value);
    let select = document.getElementById('produto');
    let indexProduto = select.selectedIndex;
    let nomeProduto = database_produtos[indexProduto].name;
    let precoProduto = database_produtos[indexProduto].price;


    if(isNaN(quantidade)) {
        alert('Informe uma quantidade por favor!');
        return;
    }

    let indexCarrinho = carrinho.findIndex(item => item.name === nomeProduto);

    if(indexCarrinho === -1) {

        carrinho.push({
            name: nomeProduto,
            price: precoProduto,
            unit: quantidade,
        });

        precoTotal += precoProduto * quantidade;

    } else {
        precoTotal += precoProduto * quantidade;
        carrinho[indexCarrinho].unit += quantidade;
    }

    let lista = document.getElementById('lista-produtos');
    let selectList = lista.querySelector('.carrinho__produtos__produto');

    selectList.innerHTML = '';

    selectList.innerHTML = carrinho.map(item => 
        `<div><span class="texto-azul">${item.unit}x</span> ${item.name} <span class="texto-azul">R$${item.price}</span></div>`
    ).join('');

    let total = document.getElementById('valor-total');

    total.innerHTML = `R$${precoTotal}`;

}

function limpar() {

    carrinho = [];
    precoTotal = 0;

    let lista = document.getElementById('lista-produtos');
    let selectList = lista.querySelector('.carrinho__produtos__produto');
    let total = document.getElementById('valor-total');

    total.innerHTML = 'R$0';
    selectList.innerHTML = '';
    document.getElementById('quantidade').value = '';

}