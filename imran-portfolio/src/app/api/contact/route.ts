import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(
  req: Request
) {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = await req.json();

    const data =
      await resend.emails.send({
        from:
          "Portfolio Contact <onboarding@resend.dev>",

        to:
          process.env.CONTACT_EMAIL!,

        subject: subject,

        html: `
          <h2>New Portfolio Message</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        `,
      });

    return NextResponse.json(
      data
    );
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Failed to send email",
      },
      {
        status: 500,
      }
    );
  }
}