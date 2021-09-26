const express = require ('express')

const app = express()
const router = express.Router()
app.use(router)

app.get('/',(req,res)=>{
    res.send('hola desde get')
})
app.post('/',(req,res)=>{
    res.send('msg added')
})
//app.use ('/' , (req,res) =>{
//    res.send('hi')
//})

app.listen(3000)
console.log('Server runninig port 3000')
