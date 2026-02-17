import { Building, TrendingUp, Users, Shield, HelpCircle } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const benefits = [
  { icon: Building, title: "Established Brand", desc: "Leverage 25+ years of brand equity and nationwide recognition." },
  { icon: TrendingUp, title: "High ROI", desc: "Proven business model with strong returns on investment." },
  { icon: Users, title: "Training & Support", desc: "Complete operational training and ongoing business support." },
  { icon: Shield, title: "Proven Curriculum", desc: "Industry-recognized courses with high employability outcomes." },
];

const faqs = [
  { q: "What is the investment required?", a: "The investment varies based on location and centre size. Contact us for a detailed breakdown tailored to your city." },
  { q: "What kind of support does MAAC provide?", a: "We provide comprehensive support including training, marketing, curriculum, software licenses, placement assistance, and operational guidance." },
  { q: "Do I need a background in education?", a: "No prior education background is required. We provide complete training on all operational and academic aspects." },
  { q: "How long does it take to set up a centre?", a: "A typical MAAC centre can be set up within 60-90 days from agreement signing." },
  { q: "What is the franchise territory?", a: "Each franchise partner gets an exclusive territory to operate, ensuring no competition from other MAAC centres." },
];

const PartnerWithUs = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">Partnership</p>
          <h1 className="font-display text-5xl md:text-8xl text-foreground mb-4">PARTNER WITH US</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">Join India's largest creative education network. Own a MAAC franchise and empower the next generation of creative professionals.</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Benefits */}
    <section className="section-padding pt-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.1}>
              <div className="glass rounded-xl p-6 hover-glow h-full text-center">
                <b.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl text-foreground mb-2 tracking-wider">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <div className="divider-gradient max-w-4xl mx-auto" />

    {/* Contact + FAQ */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">ENQUIRE NOW</h2>
          <div className="glass-strong rounded-xl p-6 glow-red-sm">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
              <input type="text" placeholder="City / Location" className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
              <textarea rows={3} placeholder="Tell us about your interest" className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
              <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg glow-red-sm hover:brightness-110 transition-all text-sm uppercase tracking-wider">
                Submit Enquiry
              </button>
            </form>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">FAQs</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass rounded-xl border-border/30 px-6">
                <AccordionTrigger className="text-foreground text-sm font-medium hover:text-primary">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default PartnerWithUs;
