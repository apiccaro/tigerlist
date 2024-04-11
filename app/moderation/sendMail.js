import nodemailer from 'nodemailer';

/** Given an email and body, use SMTP to send an email
 * 
 * @param {string} emailTitle 
 * @param {string} emailBody 
 * @returns a bit of info about email
 */
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

    //Define email content. Eventually ill want an html template file for nicer emails
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

/**For use in api/flagListing
 * Notifies moderator of a flagged post
 * 
 * @param {object} listingData - object with data for a listing
 */
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


/**For use in api/flagListing
 * Notifies moderator of a flagged post
 * 
 * @param {object} listingData - object with data for a listing
 */
async function emailNotifyPost(listingData){

    //Determine email title and content based on post data
    var emailTitle = 
    "New Listing from " + listingData.email.split('@')[0] 
    + ": " + listingData.title

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
    } catch (error) {
        console.error("Error sending email:", error);
    }
}


module.exports = {sendMail, emailNotifyFlag, emailNotifyPost} 

