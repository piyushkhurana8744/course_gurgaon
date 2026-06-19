import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema, sanitizeInput } from "@/utils/validation";
import { verifyTurnstileToken } from "@/utils/captcha";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Server-side validation using the shared schema (omitting 'agree' check since it is client-side only)
    const validationResult = contactFormSchema.omit({ agree: true }).safeParse({
      name: body.name,
      email: body.email,
      phone: body.phone,
      center: body.center,
      captchaToken: body.captchaToken,
    });

    if (!validationResult.success) {
      const formattedErrors = validationResult.error.format();
      return NextResponse.json(
        {
          error: "Validation failed",
          details: {
            name: formattedErrors.name?._errors[0],
            email: formattedErrors.email?._errors[0],
            phone: formattedErrors.phone?._errors[0],
            center: formattedErrors.center?._errors[0],
            captchaToken: formattedErrors.captchaToken?._errors[0],
          },
        },
        { status: 400 }
      );
    }

    const { name, email, phone, center, captchaToken } = validationResult.data;
    const formType = body.formType || "Inquiry Form";

    // Retrieve client IP from request headers for Cloudflare verification
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || undefined;

    // Verify Turnstile token against Cloudflare Siteverify API
    const isCaptchaValid = await verifyTurnstileToken(captchaToken, ip);
    if (!isCaptchaValid) {
      return NextResponse.json(
        { error: "Security verification failed: Invalid, expired, or abused CAPTCHA token" },
        { status: 400 }
      );
    }

    // Input sanitization to prevent XSS / HTML injection in the email output
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPhone = sanitizeInput(phone);
    const sanitizedCenter = sanitizeInput(center);
    const sanitizedFormType = sanitizeInput(formType);

    // SMTP Configuration from environment variables
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || process.env.EMAIL_FROM || `"DIDM Gurgaon Leads" <leads@didm.in>`;
    const smtpTo = process.env.SMTP_TO || process.env.ADMIN_EMAIL || "info@didm.in"; // destination email
    const smtpCc = process.env.SMTP_CC || "didmleads@gmail.com";

    if (!smtpUser || !smtpPass) {
      console.warn("SMTP credentials (SMTP_USER or SMTP_PASS) not configured. Email NOT sent. Lead details:", {
        name: sanitizedName,
        email: sanitizedEmail,
        phone: sanitizedPhone,
        center: sanitizedCenter,
        formType: sanitizedFormType,
      });
      return NextResponse.json({
        success: true,
        message: "Request received successfully (simulated SMTP success)",
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: smtpFrom,
      to: smtpTo,
      cc: smtpCc,
      subject: `New Lead: ${sanitizedFormType} - ${sanitizedName}`,
      text: `
New Form Submission Details:
---------------------------------------------
Form Type: ${sanitizedFormType}
Full Name: ${sanitizedName}
Email Address: ${sanitizedEmail}
Mobile Phone: ${sanitizedPhone}
Training Center: ${sanitizedCenter}
Submission Date: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
---------------------------------------------
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e4e4e7; border-radius: 12px; padding: 24px; color: #18181b;">
          <h2 style="color: #dc2626; margin-top: 0; border-bottom: 2px solid #f4f4f5; padding-bottom: 12px;">New DIDM Gurgaon Lead</h2>
          <p style="font-size: 14px; color: #71717a;">A user has submitted an inquiry on the DIDM Gurgaon landing page.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4b5563; font-size: 14px; width: 140px;">Form Type:</td>
              <td style="padding: 8px 0; color: #18181b; font-size: 14px;">${sanitizedFormType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4b5563; font-size: 14px;">Full Name:</td>
              <td style="padding: 8px 0; color: #18181b; font-size: 14px;">${sanitizedName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4b5563; font-size: 14px;">Email:</td>
              <td style="padding: 8px 0; color: #18181b; font-size: 14px;"><a href="mailto:${sanitizedEmail}" style="color: #dc2626; text-decoration: none;">${sanitizedEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4b5563; font-size: 14px;">Mobile Phone:</td>
              <td style="padding: 8px 0; color: #18181b; font-size: 14px;"><a href="tel:${sanitizedPhone}" style="color: #dc2626; text-decoration: none;">${sanitizedPhone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4b5563; font-size: 14px;">Selected Center:</td>
              <td style="padding: 8px 0; color: #18181b; font-size: 14px;">${sanitizedCenter}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4b5563; font-size: 14px;">Submitted At:</td>
              <td style="padding: 8px 0; color: #18181b; font-size: 14px;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #f4f4f5; text-align: center; font-size: 11px; color: #a1a1aa;">
            DIDM Gurgaon Admissions Desk Lead Management System.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 500 });
  }
}
