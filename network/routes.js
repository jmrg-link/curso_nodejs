const express = require('express')
const msg = require('../components/message/netkork')

const routes = function (server) {
    server.use('/message', msg)
}

module.exports = routes
