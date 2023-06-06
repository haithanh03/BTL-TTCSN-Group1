const cartModel = require('../models/cart.model');
const userModel = require('../models/user.model');
const httpStatus = require('http-status-codes')

//Get all list cart 
const getCarts = async(req, res, next) => {
    try {

        const listCart = await cartModel.aggregate([
            { $match: { '_id': "" } }
        ])
    } catch (err) {
         res.status(httpStatus.NOT_FOUND).json(
             {
                 message: err.message
             }
         )
    }
}

// Get cart by id
const getCart = async(req, res, next) => {
    try {
        const id = req.query.id;
        const newCart = await cartModel.aggregate(
            [
                { $match: { _id: id } }
            ]
        )

        if (!newCart) {
            res.status(httpStatus.NOT_FOUND)
        }
    } catch (err) {
        res.status(httpStatus.NOT_FOUND).json(
            {
                message: err.message
            }
        )
    }
}

// Create cart 
const createCart= async (req,res) => {
    try{
        const createCart=await cartModel.create(req.body,(err,data)=>{
            if(err){
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json(
                    {
                        message: err.message
                    }
                )
            }
            else{
                res.status(httpStatus.OK).json(
                    {
                        message: 'successfully created'
                    }
                )
            }
        })
    }
    catch (err) {
        res.status(httpStatus.NOT_FOUND).json(
            {
                message: err.message
            }
        )
    }
}


module.exports = {
    getCarts,
    getCart,
    createCart,
}