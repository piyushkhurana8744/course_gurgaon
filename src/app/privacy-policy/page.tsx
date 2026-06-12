import { Metadata } from "next";
import { PrivacyPolicyClient } from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | ZICA Digital Academy Gurgaon",
  description: "Read the Privacy Policy of Delhi Institute of Digital Marketing (DIDM) and ZICA Digital Academy Gurgaon Campus.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
