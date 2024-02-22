//Colher os dados de total dos três tipos de lugar
let totalPista = document.getElementById('qtd-pista');
let totalCadeiraSuperior = document.getElementById('qtd-superior');
let totalCadeiraInferior = document.getElementById('qtd-inferior');

function comprar() {
    //Colher dados da quantidade e do tipo de lugar
    let tipoLugar = document.getElementById('tipo-ingresso').value;
    let quantidadePrompt = parseInt(document.getElementById('qtd').value);

    //Tratar esses dados e diminuir do total
    if (tipoLugar == 'inferior') {
        if (totalCadeiraInferior.textContent < quantidadePrompt) {
            alert('Quantidade de ingressos indisponivel para Cadeira Inferior!');
        } else {
            totalCadeiraInferior.textContent = totalCadeiraInferior.textContent - quantidadePrompt;
            alert('Compra realizada com sucesso!');
        }

    } else if (tipoLugar == 'superior') {
        if (totalCadeiraSuperior.textContent < quantidadePrompt) {
            alert('Quantidade de ingressos indisponivel para Cadeira Superior!');
        } else {
            totalCadeiraSuperior.textContent = totalCadeiraSuperior.textContent - quantidadePrompt;
            alert('Compra realizada com sucesso!');
        }

    } else {
        if (totalPista.textContent < quantidadePrompt) {
            alert('Quantidade de ingressos indisponivel para Pista!');
        } else {
            totalPista.textContent = totalPista.textContent - quantidadePrompt;
            alert('Compra realizada com sucesso!');
        }

    }

    //limpar campo de quantidade
    quantidadePrompt = document.getElementById('qtd');
    quantidadePrompt.value = '';

}
