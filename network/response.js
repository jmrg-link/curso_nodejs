function success(req, res, msg, status) {
    res.status(status || 200).send({
        error: '',
        body:msg

    })
}

function error(req, res, msg, status,datails) {
    console.error(datails)
    res.status(status || 500).send({
        error: msg,
        body: ''
    })
}


module.exports = {
    success,
    error
}
