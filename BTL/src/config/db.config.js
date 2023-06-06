const mongoose = require('mongoose')

async function connect() {
    try {
         await mongoose.connect('mongodb://localhost:27017/Data')
        console.log('connect successfully')
    } catch (err) {
        console.log(err.message)
    }
}
module.exports = { connect }