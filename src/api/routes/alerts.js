const express = require("express")
const router = new express.Router()
const alertController = require("../controllers/alerts")


router.post("/alert/:strategyId",alertController.receiveAlert)
module.exports = router
