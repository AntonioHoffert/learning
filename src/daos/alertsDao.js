const model = require("../models/alerts")
const alertsDao = model();
module.exports = {

receiveAlert(alert){
    return new Promise(function(resolve,reject){
        alertsDao.create(alert)
    .then(function(answer){
        resolve(answer)

    })
    .catch(function(error){
        reject(error)
    })  
})
},
getById(id){
    return new Promise(function(resolve,reject){
        alertsDao.find({
            _id : id
        })
        .lean()
        .exec()
    .then(function(answer){
        resolve(answer)

    })
    .catch(function(error){
        reject(error)
    })  
})
}
}