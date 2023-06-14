const mongoose = require('mongoose');

//Create cart schema 
const cartSchema = new mongoose.schema({
    title: {
        type: String,
        trim: true,
        minLength: 5,
        required: true
    },
    timestart:{
        type:String, 
        trim:true,
        required: true
    },
    timeEnd:{
        type: String,
        requied: true
    },
    tickettype:{
        type: String,
        reqiued: true
    },
    price:{
        type:String, 
        required: true
    }
}, { timestamp: false, })

/**
 * @typedef Cart
 */

const Cart=mongoose.model('Cart',cartSchema)
module.exports = Cart; 