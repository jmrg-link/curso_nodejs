// component/message/network.js
const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

// GET
router.get('/', (req, res) => {

    res.header({
        "custom-header": "value custom"
    })
    response.success(req, res, 'Lista de mensajes:')
})

// POST
router.post('/', (req, res) => {
    controller.addMesage(req.body.user,req.body.msg)
        .then((fullMsg)=>{
        response.success(req, res, fullMsg , 201)
    }).catch(e => {
        response.error(req, res, 'Informacion invalida', 400, 'Error en el controller')
    })
})

// DELETE
router.delete('/', (req, res) => {
    console.log(req.body)
    console.log(req.query)
})

module.exports = router
