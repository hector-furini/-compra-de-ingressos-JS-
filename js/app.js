let totalPista = document.getElementById('qtd-pista');
let totalCadeiraSuperior = document.getElementById('qtd-superior');
let totalCadeiraInferior = document.getElementById('qtd-inferior');

function comprar() {
    let tipoLugar = document.getElementById('tipo-ingresso').value;
    let quantidadePrompt = parseInt(document.getElementById('qtd').value);

    if (isNaN(quantidadePrompt)) {
        return;
    }
    
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

    quantidadePrompt = document.getElementById('qtd');
    quantidadePrompt.value = '';

}
