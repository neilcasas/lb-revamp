import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  countryDialCode: string;
  leadershipRole: string;
  areaOfInquiry: string[];
  source: string;
}

export async function POST(req: Request) {
  try {
    const formData: ContactFormData = await req.json();

    const {
      firstName,
      lastName,
      company,
      email,
      phone,
      countryDialCode,
      leadershipRole,
      areaOfInquiry,
      source,
    } = formData;

    const fullName = `${firstName} ${lastName}`;
    const fullPhone = phone ? `${countryDialCode} ${phone}` : "Not provided";
    const areasOfInterest =
      areaOfInquiry.length > 0 ? areaOfInquiry.join(", ") : "Not specified";
    const sourceInfo = source || "Not specified";

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #0891b2; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">
          New Lead from Louvre Blanc Website
        </h1>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #333; margin-top: 0;">Contact Information</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${fullPhone}</p>
          <p><strong>Company:</strong> ${company}</p>
        </div>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #333; margin-top: 0;">Inquiry Details</h2>
          <p><strong>Leadership Role:</strong> ${leadershipRole}</p>
          <p><strong>Areas of Interest:</strong> ${areasOfInterest}</p>
          <p><strong>How They Found Us:</strong> ${sourceInfo}</p>
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
          <p>This email was sent from the Louvre Blanc Consulting website contact form.</p>
        </div>
      </div>
    `;

    const data = await resend.emails.send({
      from: "Louvre Blanc Website <onboarding@resend.dev>",
      to: process.env.RESEND_EMAIL_RECEIVER!,
      subject: `New Lead: ${fullName} from ${company}`,
      html: emailHtml,
      replyTo: email,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
