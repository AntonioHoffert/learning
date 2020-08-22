const BO = require("../../business/alertBO")
module.exports = {
    receiveAlert(req,res){
        console.log(req.body)
        console.log(req.params)
        req.body.strategyId = req.params.strategyId
        new Promisse (function(resolve,reject){
            BO.receiveAlert(req.body)
        .then(function(answer){
            res.status(200).json(answer)
            resolve(answer)

        })
        .catch(function (error){
            res.status(422).json(error)
            rej(error)
        })
    })
    }
}