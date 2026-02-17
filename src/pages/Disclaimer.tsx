import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const Disclaimer = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-8">DISCLAIMER</h1>
        </ScrollReveal>
        <ScrollReveal>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up to date, MAAC makes no representations or warranties of any kind about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.</p>
            <p>Course details, duration, fees, and availability may vary by centre and are subject to change without notice. Please contact your nearest MAAC centre for the most current information.</p>
            <p>Placement statistics and salary figures are based on historical data and are provided as indicative references. Actual placements and compensation may vary based on individual performance, market conditions, and other factors.</p>
            <p>Through this website, you may be able to link to other websites which are not under the control of MAAC. We have no control over the nature, content, and availability of those sites.</p>
            <p>Every effort is made to keep the website running smoothly. However, MAAC takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Disclaimer;
