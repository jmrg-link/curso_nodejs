// component/message/network.js
const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

// GET
router.get('/', (req, res) => {
    controller.getMessages()
        .then((messageList)=>{
            response.success(req,res,messageList,200)
        })
        .catch(e => {
            response.error(req , res ,'Unexpected Error',500 , e)
        })
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
