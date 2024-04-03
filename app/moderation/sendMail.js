const nodemailer = require ('nodemailer');
//const handlebars = require ('handlebars');
const fs = require('fs');

//create transporter instance with app credentials
const transporter = nodemailer.createTransport({
    host:'smtp.gmail.email',
    secure:false,
    service:'gmail',
    auth:{
        user: "tigerlistmoderation@gmail.com",
        pass: 'SuperSecretPassword5'
    },
})

//define email content. Eventually ill want an html template file for nicer emails
const mailOptions = {
    from: 'tigerlistmoderation@gmail.com',
    to: 'jaymoran103@gmail.com',
    subject: 'Hello from app/moderation/sendMail.js!',
    text: 'default message text'
};

export default function sendMail(message) {

    if (message){
        mailOptions.text = message
    }

    return (
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent successfully: ' + info.response);
            }
        })
    );

}