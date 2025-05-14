
export async function sendMail({
  recipientEmail,
  senderName,
  emailSubject,
  context,
  emailBody
}) {
  
  const { name, email, message } = context;

  const MAILTRAP_API_TOKEN = "2d97f505634eaa761005456acaad2c1f";


 const payload = {
    from: {
      email: "contact@growthspringers.com",
      name: name || senderName,
    },
    to: [
      {
        email: recipientEmail,
      },
    ],
    subject: emailSubject,
    text: emailBody
  };

  const res = await fetch("https://send.api.mailtrap.io/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${MAILTRAP_API_TOKEN}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Mailtrap send failed: ${res.status} - ${errorText}`);
  }

  
}
