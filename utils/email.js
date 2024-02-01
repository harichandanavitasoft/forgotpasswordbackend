const nodemailer = require("nodemailer");

const sendEmail = async (req, res, next) => {
     const email=req.body.email

   
        const transporter = nodemailer.createTransport({
          
            service: "gmail",
          
            auth: {
                user: "srikanthyaswada.vita@gmail.com",
                pass: "txtz vsgp qjug oxxe",
            },

        });
       let emaildata={
        from: "srikanthyaswada.vita@gmail.com",
        to: email,
        subject: "password reset",
        text: "http://localhost:4200/reset",
       }
       transporter.sendMail(emaildata,async(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("email sent successfully");
         
         
        }
       })
    }  

       
module.exports = sendEmail;