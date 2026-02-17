import { Briefcase, TrendingUp, Users, Award, Building } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const hiringPartners = [
  "PIXEL TEK", "DNEG", "MEDIA STUDIO", "RED CHILLIES", "SOLD OUT", "LIMINAL STUDIO",
  "AMAZON", "VISTAPRINT", "ACCENTURE", "STRINGS INFINITY", "FOLKS VFX", "CIMPRESS INDIA",
  "Prime Focus", "Technicolor", "MPC", "Framestore", "Ubisoft",
  "Electronic Arts", "Tata Elxsi", "Reliance Animation",
  "Prana Studios", "Xentrix Studios", "Pixion Games",
  "Lakshya Digital",
];

const placementStories = [
  { name: "MANIT KUMAR", role: "3D Animation Artist", company: "Sundeep Groups", salary: "9.9 LPA", image: "/images/alumni/manit-kumar.jpg" },
  { name: "PREETHI S", role: "3D Animation Artist", company: "Light and Wonder", salary: "8.5 LPA", image: "/images/alumni/preethi-s.jpg" },
  { name: "SHIVAM GUJRAN", role: "3D Animation Artist", company: "OpenCV Org", salary: "6.6 LPA", image: "/images/alumni/shivam-gujran.jpg" },
  { name: "SHILPI GUPTA", role: "Interior Designer", company: "Livspace", salary: "4.92 LPA", image: "/images/alumni/shilpi-gupta.jpg" },
  { name: "RITIKA SINGH", role: "Motion Graphic Artist", company: "Junglee Games", salary: "4.56 LPA", image: "/images/alumni/ritika-singh.jpg" },
];

const stats = [
  { icon: Users, value: "50,000+", label: "Students Placed" },
  { icon: Briefcase, value: "85%", label: "Placement Rate" },
  { icon: Building, value: "500+", label: "Hiring Companies" },
  { icon: TrendingUp, value: "₹8 LPA", label: "Avg Starting Package" },
];

const Placements = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">MAAC Placements</p>
          <h1 className="font-display text-5xl md:text-8xl text-foreground mb-4">YOUR LAUNCHPAD TO THE INDUSTRY</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-8">You don't just train here — you get ready to lead. You get hired because you're ready from Day 1, with real skills and industry-driven training.</p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="relative rounded-xl overflow-hidden aspect-[21/9] mb-8">
            <img src="/images/about/young-learners.jpg" alt="Enthusiastic Students at MAAC" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Scrolling Company Marquee */}
    <section className="py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-6">
        {[...hiringPartners, ...hiringPartners].map((p, i) => (
          <span key={i} className="glass rounded-lg px-6 py-3 font-display text-base text-foreground tracking-wider shrink-0">{p}</span>
        ))}
      </div>
    </section>

    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="glass-strong rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1} className="text-center">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-display text-4xl text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <div className="divider-gradient max-w-4xl mx-auto" />

    {/* From MAAC to the Big Leagues */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">FROM MAAC TO THE BIG LEAGUES</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">MAAC alumni are making waves in top gaming studios, production houses, and VFX giants — and you could be next.</p>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {placementStories.map((story, i) => (
            <ScrollReveal key={story.name} delay={i * 0.1}>
              <div className="glass rounded-xl overflow-hidden hover-glow text-center">
                <div className="aspect-square overflow-hidden">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover hover-zoom" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-sm text-foreground tracking-wider">{story.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{story.role}</p>
                  <p className="text-xs text-primary font-semibold mt-1">{story.salary}</p>
                  <p className="text-xs text-muted-foreground">{story.company}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <div className="divider-gradient max-w-4xl mx-auto" />

    <section className="section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <Award className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-12">HIRING PARTNERS</h2>
        </ScrollReveal>
        <div className="flex flex-wrap justify-center gap-4">
          {hiringPartners.map((p, i) => (
            <ScrollReveal key={`${p}-${i}`} delay={(i % 12) * 0.04}>
              <div className="glass rounded-lg px-5 py-3 hover-glow">
                <span className="font-display text-base text-foreground tracking-wider">{p}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Placements;
