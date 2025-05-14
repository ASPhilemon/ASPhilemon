
export async function sendMail({
  recipientEmail,
  senderName,
  emailSubject,
  emailBody,
  MAILTRAP_API_TOKEN
}) {   
  
 const payload = {
    from: {
      email: "contact@growthspringers.com",
      name: senderName,
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
  
  console.log(res)
  console.log(await res.text())

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Mailtrap send failed: ${res.status} - ${errorText}`);
  }

  
}
