const express = require('express')
const response = require('./network/response')

const app = express()
const router = express.Router()

app.use(express.json());
app.use(router)

router.get('/message', (req, res) => {
    console.log(req.headers)
    res.header({
        "custom-header": "value custom"
    })
    response.success(req, res, 'Lista de mensajes:')
})

router.post('/message', (req, res) => {
    if(req.query.error =='ok'){
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulacion de error')
    } else {
        response.success(req, res, 'Msg creado correctamente',201)
    }


})

router.delete('/message', (req, res) => {
    console.log(req.body)
    console.log(req.query)
})

app.use('/app', express.static('public'))

app.listen(3000)
console.log('Server runninig port 3000')
