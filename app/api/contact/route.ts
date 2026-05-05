function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Body = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

function validate(body: Body): { ok: false; error: string } | { ok: true; name: string; email: string; message: string } {
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return { ok: false, error: "Invalid request." };
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (name.length < 1 || name.length > 120) {
    return { ok: false, error: "Please enter your name (max 120 characters)." };
  }
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (message.length < 10 || message.length > 5000) {
    return { ok: false, error: "Message must be between 10 and 5000 characters." };
  }

  return { ok: true, name, email, message };
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = process.env.RESEND_FROM?.trim() ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return Response.json(
      { error: "Contact form is not configured. Set RESEND_API_KEY and CONTACT_TO_EMAIL on the server." },
      { status: 503 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return Response.json({ error: "Expected JSON body." }, { status: 400 });
  }

  if (!json || typeof json !== "object") {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = validate(json as Body);
  if (!parsed.ok) {
    return Response.json({ error: parsed.error }, { status: 400 });
  }

  const { name, email, message } = parsed;
  const subject = `Portfolio message from ${name}`.slice(0, 200);

  const text = [`From: ${name} <${email}>`, "", message].join("\n");
  const html = `<p><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt;</p><p>${escapeHtml(message).replaceAll("\n", "<br/>")}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject,
      text,
      html,
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    console.error("Resend error:", res.status, errText);
    return Response.json({ error: "Could not send message. Try again later." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
