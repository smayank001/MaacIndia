import { Trophy, Monitor, GraduationCap, Users, Zap, Sparkles, Globe, Building } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const reasons = [
  { icon: Trophy, title: "25+ Years of Excellence", desc: "India's most established and trusted creative education brand since 1999." },
  { icon: Monitor, title: "State-of-the-Art Labs", desc: "High-performance workstations with the latest creative software and hardware." },
  { icon: GraduationCap, title: "Expert Faculty", desc: "Learn from industry professionals with 10+ years of production experience." },
  { icon: Users, title: "85%+ Placement Rate", desc: "Strong placement support with 500+ hiring partner companies globally." },
  { icon: Zap, title: "Hands-On Learning", desc: "Real-world projects from day one — build your portfolio while you learn." },
  { icon: Sparkles, title: "Global Certifications", desc: "Internationally recognized certifications from Autodesk, Adobe, Unity and more." },
  { icon: Globe, title: "150+ Centres", desc: "India's largest network of creative education centres across all major cities." },
  { icon: Building, title: "Industry Connections", desc: "Direct partnerships with top studios, regular workshops and studio visits." },
];

const WhyMaac = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">About MAAC</p>
          <h1 className="font-display text-5xl md:text-8xl text-foreground mb-4">WHY MAAC</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">What makes MAAC India's most trusted and preferred creative education institute.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={(i % 8) * 0.08}>
              <div className="glass rounded-xl p-6 hover-glow h-full">
                <r.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl text-foreground mb-2 tracking-wider">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="divider-gradient max-w-4xl mx-auto my-16" />

        <ScrollReveal>
          <div className="glass-strong rounded-2xl p-8 md:p-12 text-center glow-red-sm">
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">THE MAAC DIFFERENCE</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
              MAAC is not just an institute — it's a creative ecosystem. From world-class infrastructure and industry-experienced faculty to national-level competitions and 500+ hiring partners, MAAC provides everything you need to build a successful career in the creative industry.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default WhyMaac;
