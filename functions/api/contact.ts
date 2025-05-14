import { sendMail  } from "../../src/util/sendMail"

export async function onRequestPost(context) {
  const formData = await context.request.formData();

  
  const token = formData.get('cf-turnstile-response');
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

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

  context.waitUntil(
    sendMail({
      recipientEmail:"philemonariko@gmail.com",
      senderName: "contact",
      emailSubject: "Let's Connect",
      context : {name, email, message}
    })
  )

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
