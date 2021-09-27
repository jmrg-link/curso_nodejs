const list = []

addMessage = (msg) => {
    list.push(msg)
}

getMessages = () => {
    return list
}


module.exports = {
    add: addMessage,
    list: getMessages,
    // get
    // update
    // delete
}
