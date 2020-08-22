const dao = require("../daos/alertsDao");
module.exports = {
    async getById(id){
    try {
        return await dao.getById(id)
        
        } catch (error) {
            console.log(error)
            return error
        }
    },

async receiveAlert(alert){
    try {
        return await dao.receiveAlert(alert)
        } catch (error) {
            console.log(error)
            return error
        }
    }
}