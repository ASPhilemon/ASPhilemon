import { MailtrapClient } from "mailtrap"

export async function sendMail({
  recipientEmail,
  senderName,
  emailSubject,
  context
}) {
  
  const { name, email, message } = context;

  const TOKEN = "2d97f505634eaa761005456acaad2c1f";

  const client = new MailtrapClient({
    token: TOKEN,
  });

  const sender = {
    email: "contact@growthspringers.com",
    name: name || senderName,
  };
  const recipients = [
    {
      email: recipientEmail,
    }
  ];

client
  .send({
    from: sender,
    to: recipients,
    subject: emailSubject,
    text: `Message from ${name} <${email}>:\n\n${message}`,
  })
  .then(console.log, console.error);
  
}
