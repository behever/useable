import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Useable Studio",
  description:
    "Privacy policy for the Useable Studio marketing website at useable.studio.",
  alternates: {
    canonical: "https://useable.studio/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main
        id="main"
        className="privacy-main px-6 md:px-16 max-w-[800px] mx-auto py-16 md:py-24"
      >
        <h1 className="text-[2rem] md:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.2] text-[#1a1a1a] mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#777] mb-12">
          Last updated: August 9, 2026
        </p>

        <div className="space-y-10 text-[#4a4a4a] leading-[1.8]">
          <section>
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
              Scope of This Policy
            </h2>
            <p>
              Useable Studio builds software for local service businesses. This
              policy covers the marketing website at useable.studio. It does
              not govern information handled inside Grassr or Cleanr.
            </p>
            <p className="mt-3">
              Product-specific practices are described in the{" "}
              <a href="https://grassr.io/privacy" className="privacy-link">
                Grassr Privacy Policy
              </a>{" "}
              and the{" "}
              <a href="https://trycleanr.com/privacy" className="privacy-link">
                Cleanr Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
              Information This Website Receives
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Website usage information.</strong> We use Vercel
                Analytics to understand aggregate page visits, referral sources,
                and basic device or browser information.
              </li>
              <li>
                <strong>Technical request information.</strong> Like other
                hosted websites, the infrastructure serving useable.studio
                receives information needed to deliver and secure each request,
                such as an IP address, requested page, and browser details.
              </li>
              <li>
                <strong>Communications.</strong> If you email us, we receive the
                address, message, and other information you choose to send.
              </li>
            </ul>
            <p className="mt-3">
              The Useable Studio marketing website does not create product
              accounts and does not include a waitlist or contact form.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
              How We Use Information
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To deliver, maintain, and secure useable.studio</li>
              <li>To understand aggregate website performance and usage</li>
              <li>To respond when you contact us</li>
              <li>To comply with applicable legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
              Service Providers and Retention
            </h2>
            <p>
              Vercel hosts useable.studio and provides website analytics. An
              email provider processes messages sent to our contact address.
              These providers may process limited information as needed to
              provide their services.
            </p>
            <p className="mt-3">
              We keep correspondence for as long as reasonably necessary to
              respond and maintain business records. Analytics information is
              retained according to our provider settings. Product data is
              covered by the separate product policies linked above.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
              Your Choices
            </h2>
            <p>
              You can use browser controls to limit information shared with
              websites. Depending on where you live, you may also have legal
              rights regarding personal information. Contact us to ask a
              question or make a request related to useable.studio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
              Security
            </h2>
            <p>
              We use reasonable administrative and technical measures to
              protect information handled through this website. No method of
              transmission or storage is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this policy as the website or our practices change.
              The date above shows when this version was last updated.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
              Contact
            </h2>
            <p>
              For privacy questions about useable.studio, email{" "}
              <a href="mailto:hello@useable.studio" className="privacy-link">
                hello@useable.studio
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
