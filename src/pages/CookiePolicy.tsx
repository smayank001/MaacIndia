import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const CookiePolicy = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-8">COOKIE POLICY</h1>
          <p className="text-muted-foreground text-sm mb-4">Last updated: January 2025</p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-2xl text-foreground mb-3">What Are Cookies</h2>
              <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They help the website remember your preferences and improve your browsing experience.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground mb-3">How We Use Cookies</h2>
              <p>We use cookies to understand how visitors interact with our website, remember your preferences, and provide you with relevant content. We also use cookies for analytics to improve our website performance.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground mb-3">Types of Cookies We Use</h2>
              <p><strong className="text-foreground">Essential Cookies:</strong> Required for the website to function properly.</p>
              <p><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors use our website.</p>
              <p><strong className="text-foreground">Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign performance.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground mb-3">Managing Cookies</h2>
              <p>You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default CookiePolicy;
