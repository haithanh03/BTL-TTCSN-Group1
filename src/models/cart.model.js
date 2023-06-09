const mongoose = require('mongoose');

//Create cart schema 
const cartSchema = mongoose.schema({
    title: {
        type: String,
        trim: true,
        minLength: 5,
        required: true
    },
    url:{
        type:String, 
        trim:true,
        required: true
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