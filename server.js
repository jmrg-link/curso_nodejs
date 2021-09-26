const express = require('express')

//const router = require('./components/message/netkork')
const router = require('./network/routes')
const app = express()

app.use(express.json());
//app.use(router)

router(app)

app.use('/app', express.static('public'))


app.listen(3000)
console.log('Server runninig port 3000')
