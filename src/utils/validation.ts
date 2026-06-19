import * as z from "zod";

/**
 * Validates names:
 * - Only alphabetic characters and spaces (no numbers, symbols, special chars, or emojis).
 * - Min length: 2 (after trimming/space normalization).
 * - Max length: 50.
 * - Trims extra spaces and normalizes multiple spaces to a single space.
 */
export const nameSchema = z
  .string()
  .min(1, "Name is required")
  .transform((val) => val.trim().replace(/\s+/g, " "))
  .refine(
    (val) => val.length >= 2,
    { message: "Name must be at least 2 characters" }
  )
  .refine(
    (val) => val.length <= 50,
    { message: "Name cannot exceed 50 characters" }
  )
  .refine(
    (val) => /^[a-zA-Z\s]+$/.test(val),
    { message: "Name must only contain alphabetic characters and spaces" }
  );

/**
 * Validates phone numbers:
 * - Only numeric digits.
 * - Exactly 10 digits.
 */
export const phoneSchema = z
  .string()
  .min(1, "Phone number is required")
  .regex(/^\d{10}$/, "Phone number must be exactly 10 digits containing only numbers");

/**
 * Validates email addresses:
 * - Strict regex pattern.
 * - Rejects formatting errors like abc@, @gmail.com, test@gmail, test@@gmail.com.
 */
export const emailSchema = z
  .string()
  .min(1, "Email address is required")
  .transform((val) => val.trim())
  .refine(
    (val) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val),
    { message: "Please enter a valid email address (e.g., name@domain.com)" }
  );

/**
 * Validates training center selection.
 */
export const centerSchema = z
  .string()
  .min(1, "Please select a training center near you");

/**
 * Validates Cloudflare Turnstile token.
 */
export const captchaTokenSchema = z
  .string()
  .min(1, "Please complete the security check to prove you are not a bot");

/**
 * Reusable base schema for frontend and backend validation.
 */
export const contactFormSchema = z.object({
  name: nameSchema,
  phone: phoneSchema,
  email: emailSchema,
  center: centerSchema,
  agree: z.boolean().refine((val) => val === true, "You must agree to the DIDM Terms of Use and Privacy Policy"),
  captchaToken: captchaTokenSchema,
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

/**
 * Sanitizes input strings to prevent basic HTML/XSS injection.
 */
export function sanitizeInput(val: string): string {
  if (typeof val !== "string") return "";
  return val
    .trim()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}
