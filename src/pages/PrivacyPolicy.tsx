import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const PrivacyPolicy = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-8">PRIVACY POLICY</h1>
          <p className="text-muted-foreground text-sm mb-4">Last updated: January 2025</p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-2xl text-foreground mb-3">Information We Collect</h2>
              <p>We collect personal information that you voluntarily provide when you express interest in our courses, participate in events, or contact us through our website. This includes your name, email address, phone number, city, and course preferences.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground mb-3">How We Use Your Information</h2>
              <p>We use the information to provide you with course counselling, send relevant program information, process admissions enquiries, and improve our services. We may also use your information to send you marketing communications about our programs and events.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground mb-3">Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share information with our franchise partners (MAAC centres) to facilitate your enquiry and provide localized support.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground mb-3">Data Security</h2>
              <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground mb-3">Cookies</h2>
              <p>Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground mb-3">Contact Us</h2>
              <p>For any privacy-related concerns, please contact us at privacy@maacindia.com or call our toll-free number 1800-233-6088.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;
