const userRouter=require('./user.router'); 
const router=(app)=>{
    app.use(userRouter); 
}

module.exports=router; 