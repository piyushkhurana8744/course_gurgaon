import crypto from "crypto";

const CAPTCHA_SECRET = process.env.CAPTCHA_SECRET || "default_gurgaon_course_didm_captcha_secret_key_9876";

/**
 * Generates a signed cryptographic signature for a CAPTCHA answer and timestamp.
 * Format: {hmac_hash}.{timestamp}
 */
export function generateCaptchaSignature(answer: string, timestamp: number): string {
  const data = `${timestamp}|${answer}`;
  const hmac = crypto.createHmac("sha256", CAPTCHA_SECRET).update(data).digest("hex");
  return `${hmac}.${timestamp}`;
}

/**
 * Cryptographically verifies a user's CAPTCHA answer against the signature.
 * Enforces a 10-minute expiration window to prevent replay attacks.
 */
export function verifyCaptchaSignature(userAnswer: string, signatureWithTimestamp: string): boolean {
  if (!userAnswer || !signatureWithTimestamp) {
    return false;
  }

  try {
    const [signature, timestampStr] = signatureWithTimestamp.split(".");
    if (!signature || !timestampStr) {
      return false;
    }

    const timestamp = parseInt(timestampStr, 10);
    if (isNaN(timestamp)) {
      return false;
    }

    // Enforce 10-minute maximum age
    const maxAge = 10 * 60 * 1000;
    if (Date.now() - timestamp > maxAge) {
      return false;
    }

    // Recalculate signature
    const cleanAnswer = userAnswer.trim();
    const data = `${timestamp}|${cleanAnswer}`;
    const expectedSignature = crypto.createHmac("sha256", CAPTCHA_SECRET).update(data).digest("hex");

    return signature === expectedSignature;
  } catch (error) {
    console.error("Custom CAPTCHA verification error:", error);
    return false;
  }
}
