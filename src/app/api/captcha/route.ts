import { NextResponse } from "next/server";
import { generateCaptchaSignature } from "@/utils/captcha";

export async function GET() {
  try {
    // Generate two random integers from 1 to 15
    const num1 = Math.floor(Math.random() * 15) + 1;
    const num2 = Math.floor(Math.random() * 15) + 1;
    
    const question = `What is ${num1} + ${num2}?`;
    const answer = (num1 + num2).toString();
    const timestamp = Date.now();
    
    const signature = generateCaptchaSignature(answer, timestamp);
    
    // Return the question and cryptographically signed answer signature
    // Ensure browsers and proxies never cache this request
    return NextResponse.json(
      { question, signature },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
          "Pragma": "no-cache",
          "Expires": "0",
        },
      }
    );
  } catch (error) {
    console.error("Failed to generate custom CAPTCHA:", error);
    return NextResponse.json(
      { error: "Failed to generate CAPTCHA" },
      { status: 500 }
    );
  }
}
export const dynamic = "force-dynamic";
export const revalidate = 0;
