// MOSTRAR O REGISTRO DO HTML NA TELA

function calcularCotacao() {


    let moedaSelecionada = document.getElementsByName('moedaEstrangeira')


    let inputValor = document.querySelectorAll('.valor')[0].value;

    let verificarCotacao = document.getElementById("verificarCotacao");


    // COTACOES DO DIA 21/09/2022

    let valorDolar = 5.16;
    let valorEuro = 5.16;
    let valorLibra = 5.89;
    let valorBitcoin = 98918.8;
    let valorKwanza = 0.01185;
    let valorReal = 0;

    let moedaEstrangeira = "";
    let moedaConvertida = 0.00;

    verificarCotacao.innerHTML = valorReal;

    console.log("Valor escolhido " + "R$" + inputValor)


    function mensagemFormatada(moedaConvertida) {
        isNaN(valorReal) ? valorReal = 0 : ""
        console.log("Moeda Convertida " + moedaConvertida)
        verificarCotacao.innerHTML = "O valor " + (valorReal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " convertido em " + moedaEstrangeira + " é " + moedaConvertida + "."
    }

   
   valorReal = parseFloat(inputValor)

   console.log('Escolha a moeda estrangeira')

    for(let i = 0; i < moedaSelecionada.length; i++) {

        if(moedaSelecionada[i].checked) {
            moedaEstrangeira = moedaSelecionada[i].value
            console.log(moedaEstrangeira)
        } 

    }


// CONVERSAO DE MOEDAS

// Operacao basica pegar moedaEstrangeira e dividir pelo valorEmReal

switch(moedaEstrangeira) {
        
    case 'Dólar':
        moedaConvertida = valorReal / valorDolar
        mensagemFormatada(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
    break

    case 'Euro':
        moedaConvertida = valorReal / valorEuro
        mensagemFormatada(moedaConvertida.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }))
    break

    case 'Libra':
        moedaConvertida = valorReal / valorLibra
        mensagemFormatada(moedaConvertida.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }))
    break

    case 'Bitcoin':
        moedaConvertida = valorReal / valorBitcoin
        mensagemFormatada(parseFloat(moedaConvertida).toFixed(5))
    break

    case 'Kwanza':
        moedaConvertida = valorReal / valorKwanza
        mensagemFormatada(parseFloat(moedaConvertida).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }))
    break

    default:
        verificarCotacao.innerHTML = "Escolha uma moeda estrangeira."

        console.log("O usuário não procedeu corretamente.")
}


    if (moedaSelecionada && inputValor == ""){
    verificarCotacao.innerHTML = "Digite um valor antes de escolher uma moeda estrangeira."
    console.log("O usuário não procedeu corretamente.")
    }

isNaN(moedaConvertida) ? moedaConvertida = 0 : "";


    console.log("Calculando...");
}
