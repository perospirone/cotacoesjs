const axios = require("axios");

async function getJson() {
    const url = 'https://api.hgbrasil.com/finance?key=abb41708';
    const JsonData = await axios.get(url);
    const data = JsonData.data
    return data;
}

module.exports = getJson;