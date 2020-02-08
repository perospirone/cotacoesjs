getJson = require('./api.requests.js')
getData = require('./api.service.js')

getJson()
    .then(data => {
        console.log(data)
    })
    .catch(e => console.error(e));

getData()
    .then(dados => {
        console.log(dados)
    })
    .catch(err => console.error(err))
