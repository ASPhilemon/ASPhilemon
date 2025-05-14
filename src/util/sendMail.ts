import nodemailer from "nodemailer"
import ejs from "ejs"

export async function sendMail(
  {
    recipientEmail, 
    senderName,
    emailSubject,
    emailTemplate,
    context,
  }
)
{
  let emailBody;

  let transporter = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "api",
      pass: "2d97f505634eaa761005456acaad2c1f"
    }
  });

  emailBody = await ejs.renderFile(emailTemplate, context)
  
  var mailOptions = {
    from:`<${senderName}@asphilemon.com>`,
    to: recipientEmail,
    subject: emailSubject,
    html: emailBody,
    //replyTo: 'philemonariko@gmail.com'
  };
  
  try{
    await transporter.sendMail(mailOptions)
  } catch(err){
    console.log(err)
  }
}

