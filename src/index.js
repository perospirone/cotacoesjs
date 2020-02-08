getJson = require('./testeApiScript')
getData = require('./testeApiAcoes')

getJson()
    .then(data => {
        //console.log(data)
    })
    .catch(e => console.error(e));

getData()
    .then(data2 => {
        console.log(data2)
    })
    .catch(e => console.error(e))
