import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Useable Studio",
  description:
    "Privacy policy for Useable Studio and its products. Learn how we collect, use, and protect your information.",
  alternates: {
    canonical: "https://useable.studio/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main id="main" className="px-6 md:px-16 max-w-[800px] mx-auto py-16 md:py-24">
        <h1 className="text-[2rem] md:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.2] text-[#1a1a1a] mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#999] mb-12">
          Last updated: April 14, 2026
        </p>

        <div className="space-y-10 text-[#555] leading-[1.8]">
          <section>
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
              Who We Are
            </h2>
            <p>
              Useable Studio builds software for local service businesses. This
              policy covers our website at useable.studio and the products we
              operate, including Grassr (grassr.app). Each product may have
              additional terms specific to its functionality.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
              Information We Collect
            </h2>
            <p className="mb-3">
              We collect information in a few ways, depending on how you
              interact with us:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Website analytics.</strong> We use Vercel Analytics to
                understand how visitors use our website. This collects
                anonymous, aggregated data such as page views and referral
                sources. It does not use cookies or track individual visitors.
              </li>
              <li>
                <strong>Account information.</strong> When you create an account
                on one of our products, we collect the information you provide
                — typically your name, email address, and business details.
              </li>
              <li>
                <strong>Usage data.</strong> When you use our products, we
                collect data about how you interact with the software to
                improve functionality and fix issues.
              </li>
              <li>
                <strong>Communications.</strong> If you email us or contact us
                through our products, we keep a record of that correspondence.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide and maintain our products</li>
              <li>To communicate with you about your account or our services</li>
              <li>To improve our website and products</li>
              <li>To detect and prevent fraud or abuse</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information. We do not use your data
              for advertising. We do not share your information with third
              parties except as described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
              Third-Party Services
            </h2>
            <p>
              We use a limited number of third-party services to operate our
              products. These services may process data on our behalf:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>
                <strong>Vercel</strong> — hosting and analytics
              </li>
              <li>
                <strong>Payment processors</strong> — to handle billing for
                paid products
              </li>
            </ul>
            <p className="mt-3">
              We choose providers that maintain reasonable security practices
              and limit data processing to what is necessary for the service
              they provide.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
              Data Retention
            </h2>
            <p>
              We retain your account data for as long as your account is active
              or as needed to provide you services. If you close your account,
              we will delete your data within 90 days, except where we are
              required to retain it for legal or regulatory reasons.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
              Your Rights
            </h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Export your data in a portable format</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at the address below.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
              Security
            </h2>
            <p>
              We take reasonable measures to protect your information from
              unauthorized access, loss, or misuse. All data is transmitted
              over encrypted connections (HTTPS), and we follow industry
              practices for securing stored data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this policy from time to time. When we make
              significant changes, we will update the date at the top of this
              page. Continued use of our products after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
              Contact
            </h2>
            <p>
              If you have questions about this privacy policy or how we handle
              your data, contact us at{" "}
              <a
                href="mailto:hello@useable.studio"
                className="text-[#1a1a1a] underline underline-offset-2 hover:text-[#555] transition-colors"
              >
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
