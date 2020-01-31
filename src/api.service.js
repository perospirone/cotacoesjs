const axios = require("axios");

const API_KEY = "abb41708";
const urlApi = `https://api.hgbrasil.com/finance/stock_price?key=${API_KEY}&symbol=`;

async function getData() {
  const bidi  = await axios.get(urlApi + "bidi4");
  const petr4 = await axios.get(urlApi + "petr4");
  const qual3 = await axios.get(urlApi + "qual3");
  const ciel3 = await axios.get(urlApi + "ciel3");
  return [bidi, petr4 ,qual3, ciel3];
}

module.exports = getData;