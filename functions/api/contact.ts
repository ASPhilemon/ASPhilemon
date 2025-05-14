import { sendMail  } from "../../src/util/sendMail"

export async function onRequestPost(context) {
  const formData = await context.request.formData();

  const token = formData.get('cf-turnstile-response');
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  const MAILTRAP_API_TOKEN = context.env.MAILTRAP_API_TOKEN

  if (!token) {
    return new Response(JSON.stringify({ success: false, error: 'Missing turnstile token' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const ip = context.request.headers.get('CF-Connecting-IP') || '';

  // Verify Turnstile token
  const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({
      secret: context.env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip: ip,
    }),
  });

  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    return new Response(JSON.stringify({ success: false, error: 'Turnstile verification failed' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

//send email alert to me
  context.waitUntil(
    sendMail({
      recipientEmail:"philemonariko@gmail.com",
      senderName: name,
      emailSubject: "Let's Connect",
      emailBody: `Message from ${name} <${email}>:\n\n${message}`,
      MAILTRAP_API_TOKEN
    })
  )
//send conformation email to sender
  context.waitUntil(
    sendMail({
      recipientEmail:email,
      senderName: "contact",
      emailSubject: "Message Confirmation",
      emailBody: `Dear ${name.split(" ")[0]} <${email}>:\n\nI have received your message\n\nYour Message:\n ${message}\n\nThanks for reaching out. I will get back to you as soon as possible`,
      MAILTRAP_API_TOKEN
    })
  )

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
