const axios = require("axios");

const API_KEY = "abb41708";
const urlApi = `https://api.hgbrasil.com/finance/stock_price?key=${API_KEY}&symbol=`;

async function getData() {
    const bidi = await axios.get(urlApi + "bidi4");
    const petr = await axios.get(urlApi + "petr4");
    const qual = await axios.get(urlApi + "qual3");
    const ciel = await axios.get(urlApi + "ciel3");
    
    //Resolve isso quando voltar
    let bidi4 = bidi.data.results;
    let petr4 = petr.data.results;
    let qual3 = qual.data.results;
    let ciel3 = ciel.data.results;

    let acoes = {bidi4:bidi4, petr4:petr4, qual3:qual3, ciel3:ciel3}


    return acoes;
}

module.exports = getData;