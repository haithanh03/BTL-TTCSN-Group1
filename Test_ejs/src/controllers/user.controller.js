const httpStatus = require('http-status-codes')
const userModel = require('../models/user.model');
const nodemailer = require('nodemailer'); // to send email 

//Go Login 
const goLogin = (req, res, next) => {
    return res.render('login')
}

//[POST] login user
const userLogin = async (req, res, next) => {
    try {
        console.log(req.body)
        const checkUser = await userModel.findOne({ email: req.body.email }); //
        console.log(checkUser)
        if (!checkUser) {
            return res.status(httpStatus.NOT_FOUND).json(
                {
                    message: "can not create user"
                }
            )
        }
        else {
            //req.session.email = req.body.email;
            req.isAdmin = true;
            if(checkUser.role == 'user')
            return res.redirect('homeCart')
        }
    }
    catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(
            {
                message: "error"
            }
        )
    }
}

//Go register 
const goRegister = (req, res, next) => {
    return res.render('register')
}

//[Post] create account
const createUser = async (req, res, next) => {
    try {
        console.log(req.body)
        const checkUser = await userModel.create(req.body); //
        console.log(checkUser)
        if (!checkUser) {
            return res.status(httpStatus.NOT_FOUND).json(
                {
                    message: "can not create user"
                }
            )
        }
        else {
            //req.session.email = req.body.email;
            req.isAdmin = true;
            return res.redirect('login')
        }
    }
    catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(
            {
                message: "error"
            }
        )
    }
}

//Go homeCart 
const goHomeCart = (req, res, next) => {
    res.render('homeCart')
}

//Send message to gmail to verify email 
// const sendEamil=(req,res,next)=>{
// //     const transporter =  nodemailer.createTransport({ // config mail server
// //         service: 'Gmail',
// //         auth: {
// //             user: 'nguyenxuanquy1106002123123@gmail.com',
// //             pass: 'zxcvbnm11062002@'

// //         }
// //     });
//     const transporter=nodemailer.createTransport('smtps://nguyenxuanquy1106002123123%40gmail.com:zxcvbnm11062002@@smtp.gmail.com')
//     const mainOptions = { // thiết lập đối tượng, nội dung gửi mail
//         from: 'Thanh Batmon',
//         to: 'nguyenxuanquy1106@gmail.com',
//         subject: 'Test Nodemailer',
//         text: 'You recieved message from ' + req.body.email,
//         html: '<p>You have got a new message</b><ul><li>Username:' + req.body.name + '</li><li>Email:' + req.body.email + '</li><li>Username:' + req.body.message + '</li></ul>'
//     }

//     transporter.sendMail(mainOptions, function(err, info){
//         if (err) {
//             console.log(err);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
//             console.log('bi loi o day ') 
//             console.log(req.body)
//             res.redirect("homeCart")    
//         } 

//         else 
//         {
//             console.log('Message sent: ' +  info.response);
//             res.redirect('homeCart')
//         }                
//     });                           
// }


//Other version sendEmail 

// const otherSendEmail= async function(req, res) {
//     //Tiến hành gửi mail, nếu có gì đó bạn có thể xử lý trước khi gửi mail
//     var transporter =  nodemailer.createTransport({ // config mail server
//         host: 'smtp.gmail.com',
//         port: 465,
//         secure: true,
//         auth: {
//             user: 'nguyenxuanquy11062002123123@gmail.com', //Tài khoản gmail vừa tạo
//             pass: 'zxcvbnm11062002' //Mật khẩu tài khoản gmail vừa tạo
//         },
//         tls: {
//             // do not fail on invalid certs
//             rejectUnauthorized: false
//         }
//     });
//     var content = '';
//     content += `
//         <div style="padding: 10px; background-color: #003375">
//             <div style="padding: 10px; background-color: white;">
//                 <h4 style="color: #0085ff">Gửi mail với nodemailer và express</h4>
//                 <span style="color: black">Đây là mail test</span>
//             </div>
//         </div> 
//     `;
//     var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
//         from: 'NQH-Test nodemailer',
//         to: req.body.email,
//         subject: 'Test Nodemailer',
//         text: 'Your text is here',//Thường thi mình không dùng cái này thay vào đó mình sử dụng html để dễ edit hơn
//         html: content //Nội dung html mình đã tạo trên kia :))
//     }
//      transporter.sendMail(mainOptions, function(err, info){
//         if (err) {
//             console.log(err);
//             console.log('loi o day')
//             res.render('homeCart')
//         } else {
//             console.log('Message sent: ' +  info.response);
//             res.render('homeCart')
//         }
//     });
// }

//Other email

// async function main(req,res,next) {
//     // Generate test SMTP service account from ethereal.email
//     // Only needed if you don't have a real mail account for testing
//     let testAccount = await nodemailer.createTestAccount();

//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({

//       host: "smtp.ethereal.email",
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: "crawford.deckow41@ethereal.email", // generated ethereal user
//         pass: "hxVGcwcPW41vMzGSWe", // generated ethereal password
//       },
//     });

//     // send mail with defined transport object
//     let info = await transporter.sendMail({
//       from: '"Fred Foo 👻" <foo@example.com>', // sender address
//       to: "nguyenxuanquy11062002123123@gmail.com", // list of receivers
//       subject: "Hello ✔", // Subject line
//       text: "Hello world?", // plain text body
//       html: "<b>Hello world?</b>", // html body
//     });

//     console.log("Message sent: %s", info.messageId);
//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//     // Preview only available when sending through an Ethereal account
//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//   }




module.exports = {
    userLogin,
    createUser,
    goLogin,
    goRegister,
    goHomeCart,
    // sendEamil,
    // otherSendEmail,
    // main
}