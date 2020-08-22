const mongoose = require("mongoose")
const mongooseSchema = mongoose.Schema

let model = null;

module.exports = () => {
    const schema = mongooseSchema({
        message: {
          type: String,
          required: false,
          default: "Author: Antonio Hoffert"
        },
        price: {
          type: Number,
          required: true
        },
        position: {
          type: String,
          required: true
        },
        type: {
          type: String,
          required: false,
          default: "market"
        },
        exchange: {
          type: String,
          required: true
        },
        symbol: {
          type: String,
          required: true
        },
        percentage: {
          type: Number,
          required: true,
          default: 100
        },
        timestamp: {
          type: Number,
          required: true
        },
        strategyId: {
          type: String,
          required: true
        }
     })
     model = model ? model : mongoose.model('alerts', schema)

     return model;
    }

