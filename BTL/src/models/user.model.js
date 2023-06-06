const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const { object } = require('joi');
const { Schema } = mongoose;

//Create user schema 


const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique:true
        
    },
    password: {
        type: String,
        //required: true,
        //trim: true,
        //minlength: 8,
        //validate(value) {
            //if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
                //throw new Error('Mật khẩu phải chứa ít nhất 1 chữ số, 1 chữ hoa, độ dài tối thiểu 8 kí tự');
            //}
         //}
    },
    role: {
        type: String,
        default: "user"
    }


    // cart: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Cart'
    // }]

}, {
    timeStamp: false
})

//Hash password user presave 
/*userSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next();
})

//Hash password before update and
userSchema.pre("findOneAndUpdate", function(next) {
    const update = {...this.getUpdate() };

    if (update.password) {
        const hashPassword = bcrypt.hashSync(update.password, 10);

        update.password = hashPassword;
        this.setUpdate(update);
    }
    next();
});

//Check if password is match 

/** 
 *@param {string} password 
 *@returns {Promise<boolean>}
 */
/*
userSchema.methods.isPasswodMatch = async function(password) {
    const user = this;
    return bcrypt.compare(password, user.password)
}
*/
/**
 * @typedef User
 */
const User = mongoose.model('User', userSchema)
module.exports = User;