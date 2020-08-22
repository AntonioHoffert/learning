const express = require("express")
const router = new Express.Router()
const alertController = ("../controllers/alerts")

router.post("alert/:strategyId",alertController.receiveAlert)