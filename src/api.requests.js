const axios = require("axios");

async function getJson() {
    const url = 'https://api.hgbrasil.com/finance?key=abb41708';
    const JsonData = await axios.get(url);
    const data = JsonData.data
    let dados = []

    //console.log(data.results);
    //Pega o preco do dolar, euro, bitcoin, peso argentino e libra britanica
    let preco_dolar = data.results.currencies.USD.buy;
    let preco_euro = data.results.currencies.EUR.buy;
    let preco_bitcoin = data.results.currencies.BTC.buy;
    let preco_peso_argentino = data.results.currencies.ARS.buy;
    let preco_libra_britanica = data.results.currencies.GBP.buy;

    //Taca as moedas dentro de um objeto q vai ser colocado dentro de de um e depois retornado
    let moedas = {dolar: preco_dolar, euro: preco_euro, bitcoin: preco_bitcoin, peso: preco_peso_argentino, libra: preco_libra_britanica}
    dados.push(moedas)

    //Pega informações das bolsas de valores
    let ibovespa = data.results.stocks.IBOVESPA;
    let nasdaq = data.results.stocks.NASDAQ;
    let cac = data.results.stocks.CAC;
    let nikkei = data.results.stocks.NIKKEI;
    
    let bolsas_de_valores = {ibovespa:ibovespa, nasdaq:nasdaq, cac:cac, nikkei:nikkei}
    dados.push(bolsas_de_valores)

    //Pega as taxas
    let cdi = data.results.taxes[0].cdi;
    let selic = data.results.taxes[0].selic;
    let date = data.results.taxes[0].date;
    let fator_diario = data.results.taxes[0].daily_factor;

    let taxas = {taxa_cdi:cdi, taxa_selic:selic, taxa_date:date, taxa_fator_diario:fator_diario}
    dados.push(taxas)


    //Pega informações das corretoras de bitcoin
    let blockchain = data.results.bitcoin.blockchain_info;
    let coinbase = data.results.bitcoin.coinbase;
    let bistamp = data.results.bitcoin.bitstamp;
    let foxbit = data.results.bitcoin.foxbit;
    let mercado_bitcoin = data.results.bitcoin.mercadobitcoin;
    let omnitrade = data.results.bitcoin.omnitrade;
    let xdex = data.results.bitcoin.xdex;

    let corretoras_de_bitcoin = {block:blockchain, coin:coinbase, bis:bistamp, foxbit:foxbit, mercado:mercado_bitcoin, omnitrade:omnitrade,xdex:xdex}
    dados.push(corretoras_de_bitcoin)
    
    return dados
}

module.exports = getJson