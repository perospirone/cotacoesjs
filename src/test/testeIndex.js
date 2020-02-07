getJson = require('./testeApiScript')

getJson()
    .then(data => {
    console.log(data[3])
    })
    .catch(e => console.error(e));