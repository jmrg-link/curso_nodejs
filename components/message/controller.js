

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
            console.log(fullMsg)
            resolve(fullMsg)
        })
    }




module.exports = {
    addMesage
}
