import mailgun from "mailgun-js";

export default async (request, context) => {
  try {
    // Get form info from request
    const { name, email, message, phone, subject } = await request.json();

    const mg = mailgun({ apiKey: process.env.MAILGUN, domain: process.env.MAILGUN_DOMAIN });
    const data = {
      from: `${name} + ${phone} <${email}>`,
      to: "christian.weersink+webdev@gmail.com, christian.weersink@dcmail.ca",
      subject: `Contact Form Submission. Subject: ${subject}`,
      text: message,
    };
    // Send the email
    await mg.messages().send(data);

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
