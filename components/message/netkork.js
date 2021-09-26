// component/message/network.js
const express = require('express')
const response = require('../../network/response')
const router = express.Router()
// GEt
router.get('/', (req, res) => {
    console.log(req.headers)
    res.header({
        "custom-header": "value custom"
    })
    response.success(req, res, 'Lista de mensajes:')
})
// POST
router.post('/', (req, res) => {
    if(req.query.error =='ok'){
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulacion de error')
    } else {
        response.success(req, res, 'Msg creado correctamente',201)
    }
})
// DELETE
router.delete('/', (req, res) => {
    console.log(req.body)
    console.log(req.query)
})

module.exports = router
