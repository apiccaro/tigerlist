import nodemailer from 'nodemailer';


async function sendMail(emailTitle,emailBody) {

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
        subject: emailTitle || 'default email title', // Use custom message or default
        text: emailBody || 'default message text' // Use custom message or default

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

async function emailNotifyFlag(listingData){

    //Determine email title and content based on post data
    var emailTitle = "Flagged Listing: "+(listingData.title||"couldn't get title")

    var emailBody =
    "User email: " + listingData.email
    + "\n\nTitle: " + listingData.title
    + "\nprice: " + listingData.price 
    + "\ndescription: " + listingData.description

    //Try sending the email
    //Maybe makes sense to log failures in a db table or text file, since errors wont neccesarrily happen when youre sitting at the computer
    try {
        await sendMail(emailTitle,emailBody); 
        console.log("Email sent");
        //return NextResponse.json("Email sent");
    } catch (error) {
        console.error("Error sending email:", error);
        //return NextResponse.error(error.message, { status: 500 });
    }
}

module.exports = {sendMail, emailNotifyFlag} 

