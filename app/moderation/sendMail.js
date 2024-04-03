import nodemailer from 'nodemailer';


export default async function sendMail(message) {

    // Create transporter instance with app credentials
    const transporter = nodemailer.createTransport({
        host:'smtp.gmail.email',
        secure:false,
        service:'gmail',
        auth:{
            user: "tigerlistmoderation@gmail.com",
            pass: 'bblhwktoofuqwdjl'
        },
    });

    //define email content. Eventually ill want an html template file for nicer emails
    const mailOptions = {
        from: 'tigerlistmoderation@gmail.com',
        to: 'jaymoran103@gmail.com',
        subject: 'Tigerlist Moderation Message',
        text: message || 'default message text' // Use custom message or default
    };

    // Try to send the email
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully: ' + info.response);
        return info; // Return information about the sent email
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}
