const dao = require("../daos/alertsDao");
module.exports = {
    async geById(id){
    try {
        await dao.getById(id)
        } catch (error) {
            console.log(error)
        }
    },

async receiveAlert(alert){
    try {
        await dao.receiveAlert(alert)
        } catch (error) {
            console.log(error)
        }
    }

}