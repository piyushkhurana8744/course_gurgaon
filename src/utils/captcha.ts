/**
 * Verifies a Cloudflare Turnstile token on the server using the Siteverify API.
 * Ref: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
 */
export async function verifyTurnstileToken(token: string, ip?: string): Promise<boolean> {
  if (!token) {
    return false;
  }

  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.warn("Cloudflare Turnstile secret key (TURNSTILE_SECRET_KEY) is not configured.");
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: secret || "",
        response: token,
        remoteip: ip || "",
      }),
    });

    if (!response.ok) {
      console.error(`Turnstile verification API request failed with status: ${response.status}`);
      return false;
    }

    const data = await response.json();
    if (!data.success) {
      console.warn("Turnstile validation failed:", data["error-codes"]);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error occurred while verifying Cloudflare Turnstile token:", error);
    return false;
  }
}
