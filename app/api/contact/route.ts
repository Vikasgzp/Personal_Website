import { NextResponse } from "next/server";
// Sends mail through Resend. Set RESEND_API_KEY and CONTACT_TO_EMAIL in .env.local (see .env.example).
export async function POST(req: Request) {
  const { name, email, subject, message, company } = await req.json();
  if (company) return NextResponse.json({ ok:true }); // honeypot: bots fill this
  if (!name || !/^\S+@\S+\.\S+$/.test(email || "") || !subject || (message || "").length < 10 || message.length > 5000)
    return NextResponse.json({ ok:false }, { status:400 });
  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) return NextResponse.json({ ok:false, error:"Email not configured" }, { status:503 });
  const r = await fetch("https://api.resend.com/emails", { method:"POST", headers:{ Authorization:`Bearer ${key}`, "Content-Type":"application/json" },
    body: JSON.stringify({ from:"Portfolio <onboarding@resend.dev>", to:[to], reply_to:email, subject:`[Portfolio] ${subject}`, text:`From: ${name} <${email}>\n\n${message}` }) });
  return NextResponse.json({ ok:r.ok }, { status: r.ok ? 200 : 502 });
}
