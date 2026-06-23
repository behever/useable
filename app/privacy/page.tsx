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

const headingStyle = {
  fontFamily: "var(--font-headline)",
  fontWeight: 400,
  fontSize: 24,
  letterSpacing: "-0.01em",
  color: "var(--ink)",
  marginBottom: 12,
} as const;

const bodyStyle = {
  fontFamily: "var(--font-body)",
  fontSize: 17,
  lineHeight: 1.8,
  color: "var(--ink-soft)",
} as const;

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main id="main" className="px-6 md:px-12 max-w-[800px] mx-auto py-16 md:py-20">
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--vermillion-deep)",
            marginBottom: 16,
          }}
        >
          Useable Studio
        </div>
        <h1
          style={{
            fontFamily: "var(--font-headline)",
            fontWeight: 400,
            fontSize: "clamp(36px, 6vw, 48px)",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            color: "var(--ink)",
            margin: 0,
          }}
        >
          Privacy Policy
        </h1>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--ink-mute)",
            margin: "16px 0 0",
            paddingBottom: 28,
            borderBottom: "2px solid var(--ink)",
          }}
        >
          Last updated · April 14, 2026
        </p>

        <div className="flex flex-col gap-10" style={{ marginTop: 40 }}>
          <section>
            <h2 style={headingStyle}>Who We Are</h2>
            <p style={bodyStyle}>
              Useable Studio builds software for local service businesses. This
              policy covers our website at useable.studio and the products we
              operate, including Grassr (grassr.app). Each product may have
              additional terms specific to its functionality.
            </p>
          </section>

          <section>
            <h2 style={headingStyle}>Information We Collect</h2>
            <p style={{ ...bodyStyle, marginBottom: 12 }}>
              We collect information in a few ways, depending on how you interact
              with us:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2" style={bodyStyle}>
              <li>
                <strong style={{ color: "var(--ink)" }}>Website analytics.</strong> We use Vercel
                Analytics to understand how visitors use our website. This
                collects anonymous, aggregated data such as page views and
                referral sources. It does not use cookies or track individual
                visitors.
              </li>
              <li>
                <strong style={{ color: "var(--ink)" }}>Account information.</strong> When you create
                an account on one of our products, we collect the information you
                provide — typically your name, email address, and business
                details.
              </li>
              <li>
                <strong style={{ color: "var(--ink)" }}>Usage data.</strong> When you use our
                products, we collect data about how you interact with the
                software to improve functionality and fix issues.
              </li>
              <li>
                <strong style={{ color: "var(--ink)" }}>Communications.</strong> If you email us or
                contact us through our products, we keep a record of that
                correspondence.
              </li>
            </ul>
          </section>

          <section>
            <h2 style={headingStyle}>How We Use Your Information</h2>
            <ul className="list-disc pl-5 flex flex-col gap-2" style={bodyStyle}>
              <li>To provide and maintain our products</li>
              <li>To communicate with you about your account or our services</li>
              <li>To improve our website and products</li>
              <li>To detect and prevent fraud or abuse</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: 12 }}>
              We do not sell your personal information. We do not use your data
              for advertising. We do not share your information with third
              parties except as described in this policy.
            </p>
          </section>

          <section>
            <h2 style={headingStyle}>Third-Party Services</h2>
            <p style={bodyStyle}>
              We use a limited number of third-party services to operate our
              products. These services may process data on our behalf:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2" style={{ ...bodyStyle, marginTop: 12 }}>
              <li>
                <strong style={{ color: "var(--ink)" }}>Vercel</strong> — hosting and analytics
              </li>
              <li>
                <strong style={{ color: "var(--ink)" }}>Payment processors</strong> — to handle
                billing for paid products
              </li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: 12 }}>
              We choose providers that maintain reasonable security practices and
              limit data processing to what is necessary for the service they
              provide.
            </p>
          </section>

          <section>
            <h2 style={headingStyle}>Data Retention</h2>
            <p style={bodyStyle}>
              We retain your account data for as long as your account is active
              or as needed to provide you services. If you close your account, we
              will delete your data within 90 days, except where we are required
              to retain it for legal or regulatory reasons.
            </p>
          </section>

          <section>
            <h2 style={headingStyle}>Your Rights</h2>
            <p style={{ ...bodyStyle, marginBottom: 12 }}>You have the right to:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2" style={bodyStyle}>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Export your data in a portable format</li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: 12 }}>
              To exercise any of these rights, contact us at the address below.
            </p>
          </section>

          <section>
            <h2 style={headingStyle}>Security</h2>
            <p style={bodyStyle}>
              We take reasonable measures to protect your information from
              unauthorized access, loss, or misuse. All data is transmitted over
              encrypted connections (HTTPS), and we follow industry practices for
              securing stored data.
            </p>
          </section>

          <section>
            <h2 style={headingStyle}>Changes to This Policy</h2>
            <p style={bodyStyle}>
              We may update this policy from time to time. When we make
              significant changes, we will update the date at the top of this
              page. Continued use of our products after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 style={headingStyle}>Contact</h2>
            <p style={bodyStyle}>
              If you have questions about this privacy policy or how we handle
              your data, contact us at{" "}
              <a
                href="mailto:hello@useable.studio"
                style={{ color: "var(--vermillion-deep)", textDecoration: "underline", textUnderlineOffset: 2 }}
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
