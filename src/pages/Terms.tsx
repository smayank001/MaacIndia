import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const Terms = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-8">TERMS & CONDITIONS</h1>
          <p className="text-muted-foreground text-sm mb-4">Last updated: January 2025</p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-2xl text-foreground mb-3">Acceptance of Terms</h2>
              <p>By accessing and using this website, you accept and agree to be bound by these terms and conditions. If you do not agree, please discontinue use of the website.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground mb-3">Use of Website</h2>
              <p>This website is provided for informational purposes about MAAC's courses, centres, and services. All content is owned by MAAC and may not be reproduced without permission.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground mb-3">Enrollment & Admissions</h2>
              <p>Enrollment is subject to availability, eligibility criteria, and completion of the admission process at your chosen MAAC centre. Course fees, schedules, and availability may vary by location.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground mb-3">Intellectual Property</h2>
              <p>All content on this website including text, graphics, logos, images, and software is the property of MAAC and is protected by applicable intellectual property laws.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground mb-3">Limitation of Liability</h2>
              <p>MAAC makes no warranties about the accuracy or completeness of this website's content. MAAC shall not be liable for any damages arising from the use of this website.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground mb-3">Governing Law</h2>
              <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Mumbai.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Terms;
