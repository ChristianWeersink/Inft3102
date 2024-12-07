import mailgun from "mailgun-js";

export default async (request, context) => {
  try {
    const { name, email, message } = await request.json();

    const mg = mailgun({ apiKey: process.env.MAILGUN, domain: process.env.MAILGUN_DOMAIN });
    const data = {
      from: `${name} <${email}>`,
      to: "christian.weersink@dcmail.ca",
      subject: `Contact Form Submission from ${name}`,
      text: "This is an Automated email.\n"+message,
    };

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
