let valorTotalCompra = 0;
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").textContent = "R$ 0";

function adicionar() {

    let selecao = document.getElementById('produto').value;
    let produto = selecao.split("-")[0];
    let valorUnitario = selecao.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;
    let valorConjunto = valorUnitario * quantidade;
    
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${valorConjunto}</span></section>`;

    valorTotalCompra = valorTotalCompra + valorConjunto;
    
    let campoCompraTotal = document.getElementById("valor-total");
    campoCompraTotal.innerHTML = `R$${valorTotalCompra}`;
    document.getElementById("quantidade").value = 0;
}

function limpar() {
    valorTotalCompra = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$";
    let carrinhoLimpo = document.getElementById("lista-produtos");
    carrinhoLimpo.innerHTML = "";
    let campoCompraTotal = document.getElementById("valor-total");
    campoCompraTotal.textContent = "R$ 0";
}