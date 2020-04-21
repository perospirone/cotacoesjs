const express = require('express')

getJson = require('./src/services/api.requests.js')
getData = require('./src/services/api.service.js')

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
