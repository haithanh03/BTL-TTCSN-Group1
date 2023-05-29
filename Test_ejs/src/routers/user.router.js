
const userController=require('../controllers/user.controller'); 

const router=require('express').Router(); 


//Login user
router
      .route('/login')
      .post(userController.userLogin)
      .get(userController.goLogin)
      
//Register user
router
      .route('/register')
      .post(userController.createUser)
      .get(userController.goRegister)

//HomeCart page 
router
      .route('/homeCart')
      .get(userController.goHomeCart)

//Verify gmail 
router
      .route('/homeCart')
      .post(userController.goHomeCart)

module.exports=router;