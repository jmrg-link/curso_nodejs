const express = require ('express')

const app = express()
const router = express.Router()

app.use(express.json());
app.use(router)

app.get('/message',(req,res)=>{
    res.send('Lista de msg')
})

app.post('/message',(req,res)=>{
    console.log(req.body)
    res.send('msg añadido correctamente')

})

app.delete('/message',(req,res)=>{
    console.log(req.body)
    console.log(req.query)
    res.send(`Mensaje ${req.body.text} añadido correctamente` )

})

app.listen(3000)
console.log('Server runninig port 3000')
