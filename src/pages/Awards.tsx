import { Award, Trophy, Star } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const awards = [
  { title: "Best Animation Institute in India", org: "FICCI", year: "2024", desc: "Recognized for excellence in animation education and industry placement." },
  { title: "Excellence in Creative Education", org: "NASSCOM", year: "2023", desc: "Awarded for innovative curriculum and outstanding student outcomes." },
  { title: "Top VFX Training Centre", org: "CII", year: "2024", desc: "Acknowledged for world-class VFX training and studio partnerships." },
  { title: "Innovation in Education Award", org: "ASSOCHAM", year: "2023", desc: "For pioneering hybrid learning and XR-based training methods." },
  { title: "Best Gaming Education Provider", org: "NASSCOM Gaming Forum", year: "2024", desc: "Recognized for comprehensive game development and design programs." },
  { title: "Digital India Award for Education", org: "Government of India", year: "2022", desc: "For contribution to digital literacy and creative skills development." },
  { title: "Asia's Best Animation Academy", org: "Asian Education Awards", year: "2023", desc: "Recognized as the leading animation education institute in Asia." },
  { title: "Franchise Excellence Award", org: "Franchise India", year: "2024", desc: "For exceptional franchise model and nationwide education delivery." },
];

const Awards = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">About MAAC</p>
          <h1 className="font-display text-5xl md:text-8xl text-foreground mb-4">AWARDS & RECOGNITION</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">Celebrating decades of excellence in creative education — recognized by India's top industry bodies.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((a, i) => (
            <ScrollReveal key={a.title} delay={(i % 8) * 0.08}>
              <div className="glass rounded-xl p-6 hover-glow h-full flex flex-col text-center">
                <Trophy className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2 tracking-wider flex-1">{a.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{a.desc}</p>
                <p className="text-xs text-primary font-semibold">{a.org} • {a.year}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Awards;
