var http = require("http");
const getData = require("./api.service");
const getJson = require("./api.requests");

http.createServer(function(req, res) {}).listen(3001); //the server object listens on port 8080

getData()
  .then(data => {
      let bidi4 = data[0].data.results;
      let petr4 = data[1].data.results;
      let qual3 = data[2].data.results;
      let ciel3 = data[3].data.results;
    })
  .catch(e => console.error(e));

getJson()
    //Quando for continuar o codigo faça o q pede abaixo
    //Nesse .then vc vai pegar todos dados qvc precisa, ENTÃO FAZ ISSO LOGO 
    .then(data => {
      //console.log(data.results);
      //Pega o preco do dolar, euro, bitcoin, peso argentino e libra britanica
      let preco_dolar = data.results.currencies.USD.buy;
      let preco_euro = data.results.currencies.EUR.buy;
      let preco_bitcoin = data.results.currencies.BTC.buy;
      let preco_peso_argentino = data.results.currencies.ARS.buy;
      let preco_libra_britanica = data.results.currencies.GBP.buy;

      //Pega informações das bolsas de valores
      let ibovespa = data.results.stocks.IBOVESPA;
      let nasdaq = data.results.stocks.NASDAQ;
      let cac =  data.results.stocks.CAC;
      let nikkei =  data.results.stocks.NIKKEI;

      //Pega as taxas
      let cdi =  data.results.taxes[0].cdi;
      let selic =  data.results.taxes[0].selic;
      let date =  data.results.taxes[0].date;
      let fator_diario =  data.results.taxes[0].daily_factor;

      //Pega informações das corretoras de bitcoin
      let blockchain =  data.results.bitcoin.blockchain_info;
      let coinbase =  data.results.bitcoin.coinbase;
      let bistamp =  data.results.bitcoin.bitstamp;
      let foxbit =  data.results.bitcoin.foxbit;
      let mercado_bitcoin =  data.results.bitcoin.mercadobitcoin;
      let omnitrade =  data.results.bitcoin.omnitrade;
      let xdex =  data.results.bitcoin.xdex;
    })
    .catch(e => console.error(e));