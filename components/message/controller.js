const store = require('./store')

function addMesage(user,msg){
    return new Promise((resolve,reject)=>{
            if(!user || !msg){
                console.error('[msgController] No hay usuario o mensaje')
                return reject('Datos incorrectos')
                return false
            }
            const fullMsg = {
                user:user,
                msg:msg,
                date:new Date()
            }
            store.add(fullMsg)
            console.log(fullMsg)
            resolve(fullMsg)
        })
    }

function getMessages(){
    return new Promise((resolve,reject) => {
        resolve(store.list())
    })

}


module.exports = {
    addMesage,
    getMessages
}
